const { PrismaClient } = require("@prisma/client");
const sendEmail = require("../utils/sendEmail");

const prisma = new PrismaClient();



exports.getAllStudents = async (req,res)=>{
  try {
    const student = await prisma.tblPersonalInfo.findMany({
      include : {attendances : true ,results : true}
    })
    res.send(student);

  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Data is not found!",
    });
  }
}

exports.getStudentInfo = async (req,res)=>{
  try {
    const student = await prisma.tblPersonalInfo.findUnique({
      where:{
        studentId : (req.params.id)
      }
    })
    if(student)
      res.send(student);
    else{
      res.status(404).send({
        success: false,
        message: "Data is not found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
}

exports.getResult = async (req,res)=>{
  try {
    const result = await prisma.tblResult.findMany({
      include : {studentInfo : true},
      where:{
        studentId : (req.params.id),
      }
    });
    
    // for testing purpose there are many studentId
    // while prodution convert findmany --> findUnique  && result[0] --> result
    if(result[0])
      res.send(result);
    else{
      res.status(404).send({
        success: false,
        message: "Data is not found!",
      });
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
}

exports.getAttendance = async (req,res)=>{
  try {
    const attendance = await prisma.tblAttendance.findMany({
      include : {studentInfo : true},
      where:{
        studentId : (req.params.id),
      },
    });
    
    // for testing purpose there are many studentId
    // while prodution convert findmany --> findUnique  && attendance[0] --> attendance
    if(attendance[0])
      res.send(attendance);
    else{
      res.status(404).send({
        success: false,
        message: "Data is not found!",
      });
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
}

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

  const lastEntryOfCompExam = async () => {
    const lastEntryCompExam = await prisma.tblcompetitive.findMany({
      take: 1,
      orderBy: {
        id: "desc",
      },
    });
    return lastEntryCompExam;
  };

  const fileUploadOfCompExam = async (studentId) => {
    if(req.files){

      const files = req.files;
      if(files.gre){
        var file = req.files.gre;
        file.mv(`./uploads/${studentId}_gre.pdf`,(err)=>{
          if(err)
            res.send(err);
        })
      }
      if(files.ielts){
        var file = req.files.ielts;
        file.mv(`./uploads/${studentId}_ielts.pdf`,(err)=>{
          if(err)
            res.send(err);
        })
      }
      if(files.toefl){
        var file = req.files.toefl;
        file.mv(`./uploads/${studentId}_toefl.pdf`,(err)=>{
          if(err)
            res.send(err);
        })
      }
      if(files.gmat){
        var file = req.files.gmat;
        file.mv(`./uploads/${studentId}_gmat.pdf`,(err)=>{
          if(err)
            res.send(err);
        })
      }
      if(files.gate){
        var file = req.files.gate;
        file.mv(`./uploads/${studentId}_gate.pdf`,(err)=>{
          if(err)
            res.send(err);
        })
      }
      if(files.other){
        var file = req.files.other;
        file.mv(`./uploads/${studentId}_other.pdf`,(err)=>{
          if(err)
            res.send(err);
        })
      }
    }
  }
  const {
    studentId,
    studentName,
    emailId,
    studentMobile,
    parentMobile,
    passoutDate,
    placeThroughCdpc,
    companyName,
    bondCompleted,
    // noh,
    firstSCG,
    secondSCG,
    firstSAtt,
    secondSAtt,
    greS,
    ieltsS,
    toeflS,
    gmatS,
    gateS,
    otherS,
  } = req.body;

  console.log(req.body)
  fileUploadOfCompExam(studentId);
  // const originalDate = dateOfGraduation;
  // const parts = originalDate.split("-");
  // const rearrangedDate = `${parts[0]}-${parts[1]}-${parts[2]}`;

  const format = "T00:00:00.000Z";
  const newdateOfGraduation = passoutDate + format;
  // console.log(newdateOfGraduation)

  // const date = new Date(newdateOfGraduation);
  // const datetimeStr = new Date(newdateOfGraduation).toISOString();

  // console.log(datetimeStr);
  try {
    const studentResultInfo = await prisma.tblResult.create({
      data: {
        studentId: studentId,
        rsem1: firstSCG,
        rsem2: secondSCG,
      },
    });
    const studentAttInfo = await prisma.tblAttendance.create({
      data: {
        studentId: studentId,
        asem1: firstSAtt,
        asem2: secondSAtt,
      },
    });

    const competitiveExam = await prisma.tblcompetitive.create({
      data:{
        studentId : studentId,
        greS : greS || "0",
        ieltsS : ieltsS || "0",
        toeflS : toeflS || "0",
        gmatS : gmatS || "0",
        gateS : gateS || "0",
        otherS : otherS || "0",
      }
    })

    let rid = await lastEntryOfResult();
    let aid = await lastEntryOAttendance();
    let ceid = await lastEntryOfCompExam();

    rid = rid[0].id;
    aid = aid[0].id;
    ceid = ceid[0].id;

    console.log(rid);
    console.log(aid);
    
    if(placeThroughCdpc=="false"){
      studentPlace = false;
    }
    else{
      studentPlace = true;
    }  

    if(bondCompleted=="false"){
      bond = false;
    }
    else{
      bond = true;
    }  
    
    const studentInfo = await prisma.tblPersonalInfo.create({
      // data: req.body,
      data: {
        studentId: studentId,
        studentName: studentName,
        emailId: emailId,
        studentMobile: studentMobile,
        parentMobile: parentMobile,
        dateOfGraduation: newdateOfGraduation,
        studentPlace,
        companyName: companyName,
        bond,
        rid: rid,
        aid: aid,
        ceid: ceid,
      },
    });
    res.status(201).send({
      success: true,
      studentInfo,
      studentAttInfo,
      studentResultInfo,
      competitiveExam,
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
