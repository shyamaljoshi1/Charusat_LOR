const express = require("express");
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./routes/auth");
const passportSetup = require("./passport");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/get", async (req, res) => {
  try {
    const name = await prisma.tblPersonalInfo.findMany({});
    res.send({ name });
  } catch (error) {
    console.log(error);
  }
});

const lastEntryOfResult = async ()=>{
  const lastEntryResult = await prisma.tblResult.findMany({
    take: 1,
    orderBy: {
      id: 'desc'
    }
  })

  return lastEntryResult;
}

const lastEntryOAttendance = async ()=>{
  const lastEntrAttendance = await prisma.tblAttendance.findMany({
    take: 1,
    orderBy: {
      id: 'desc'
    }
  })

  return lastEntrAttendance;
}

app.post("/abc", async (req, res) => {
  // const {studentId,studentName,emailId,studentMobile,parentMobile} = req.body;
  const {
    studentId,
    studentName,
    emailId,
    studentMobile,
    parentMobile,
    dateOfGraduation,
    place,
    cname,
    bond,
    noh,
    s1,
    s2,
    a1,
    a2,
  } = req.body;

  // console.log(req.body)
  const originalDate = dateOfGraduation;
  const parts = originalDate.split("-");
  const rearrangedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

  const format = "T00:00:00.000Z";
  const newdateOfGraduation = rearrangedDate + format;
  // console.log(newdateOfGraduation)

  // const date = new Date(newdateOfGraduation);
  const datetimeStr = new Date(newdateOfGraduation).toISOString();

  console.log(datetimeStr);
  try {
    const studentResultInfo = await prisma.tblResult.create({
      data: {
        studentId: studentId,
        rsem1: s1,
        rsem2: s2,
      },
    });
    const studentAttInfo = await prisma.tblAttendance.create({
      data: {
        studentId: studentId,
        asem1: a1,
        asem2: a2,
      },
    });

    let rid = await lastEntryOfResult();
    let aid = await lastEntryOAttendance();

    rid = rid[0].id;
    aid = aid[0].id;
  
    const studentInfo = await prisma.tblPersonalInfo.create({
      // data: req.body,
      data: {
        studentId: studentId,
        studentName: studentName,
        emailId: emailId,
        studentMobile: studentMobile,
        parentMobile: parentMobile,
        dateOfGraduation: datetimeStr,
        studentPlace: place,
        companyName: cname,
        bond: bond,
        noOfLetterHead: noh,
        rid:rid,
        aid:aid,
      },
    });
    res.status(201).send({
      success: true,
      studentInfo,
      studentAttInfo,
      studentResultInfo
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Data insertion fail!",
    });
    // console.log(error);
  }
});

app.use(
  cookieSession({ name: "session", keys: ["lor"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);

app.listen("3001", () => {
  console.log("Server is listening 3001!");
});