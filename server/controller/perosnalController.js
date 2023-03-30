const { PrismaClient } = require("@prisma/client");
const sendEmail = require("../utils/sendEmail");

const prisma = new PrismaClient();

exports.sendEmail = async (req, res) => {
  try {
    await sendEmail();

    res.status(200).json({
      success: true,
      message: `Email sent successfully`,
    });
  } catch (error) {
    console.log(err);
  }
};
exports.personalInfo = async (req, res) => {
  const lastEntryOfResult = async () => {
    const lastEntryResult = await prisma.tblResult.findMany({
      take: 1,
      orderBy: {
        id: "desc",
      },
    });

    return lastEntryResult;
  };

  const lastEntryOAttendance = async () => {
    const lastEntrAttendance = await prisma.tblAttendance.findMany({
      take: 1,
      orderBy: {
        id: "desc",
      },
    });

    return lastEntrAttendance;
  };
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
        rid: rid,
        aid: aid,
      },
    });
    res.status(201).send({
      success: true,
      studentInfo,
      studentAttInfo,
      studentResultInfo,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Data insertion fail!",
    });
    // console.log(error);
  }
};
