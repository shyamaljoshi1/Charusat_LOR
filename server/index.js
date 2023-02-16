const express = require("express");
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./routes/auth");
const passportSetup = require("./passport");
const cookieSession = require("cookie-session");
const app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
app.use(express.json());

app.get("/get", async (req, res) => {
  try {
    const name = await prisma.tblPersonalInfo.findMany({});
    res.send({ name });
  } catch (error) {
    console.log(error);
  }
});

app.post("/abc", async (req, res) => {
  // const {studentId,studentName,emailId,studentMobile,parentMobile} = req.body;
  const {studentId,studentName,emailId,studentMobile,parentMobile,dateOfGraduation} = req.body;

  const originalDate = dateOfGraduation;
  const parts = originalDate.split('-')
  const rearrangedDate = `${parts[2]}-${parts[1]}-${parts[0]}`
  
  const format = "T00:00:00.000Z";
  const newdateOfGraduation = rearrangedDate + format;
  // console.log(newdateOfGraduation)
  
  const date = new Date(newdateOfGraduation)
  const datetimeStr = date.toISOString()

  try {
    const studentInfo = await prisma.tblPersonalInfo.create({
      // data: req.body,
      data: {
        studentId:studentId,
        studentName:studentName,
        emailId:emailId,
        studentMobile:studentMobile,
        parentMobile:parentMobile,
        dateOfGraduation:datetimeStr
      }
    });
    res.status(201).send({
      success:true,
      studentInfo
    })
  } catch (error) {
    res.status(400).send({
      success:false,
      message:"Data insertion fail!"
    })
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
