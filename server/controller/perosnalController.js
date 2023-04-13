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

exports.uniPreference = async (req,res) => {
  const {studentId,universityName,courseName,countryName,intakeDate} = req.body
  // console.log(req.body)
  try {
    const result = await prisma.tblAllUniversity.create({
      data: {
        studentId,
        unName:universityName,
        courseName,  
        countryName,
        intake:intakeDate,
      },
    })
    // res.status(200).send(result);
    console.log(result);
  } catch (error) {
    // res.status(500).send(error) 
    console.log(error) 
  }
}

exports.facultyPreference = async (req,res)=>{
  console.log(req.body)
  console.log(req.files)

  const uploadDoc = async(studentId,facultyName)=>{
    if(req.files){
      const files = req.files;
      if(files.facultyPrefLor !=null){
        var file = req.files.facultyPrefLor;
        file.mv(`./facultyUploads/${studentId}_${facultyName}.pdf`,(err)=>{
          if(err)
            console.log(err);
        })
      }
    }
  }

  const {studentId,facultyName,facultyEmail} = req.body;
  try {
    const result = await prisma.tblFacultyPref.create({
      data:{
        studentId,
        fcName:facultyName,
        fcEmail:facultyEmail
      }
    })
    uploadDoc(studentId,facultyName);
  } catch (error) {
    console.log(error)
  }
}

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
      if(files.gre !=null){
        var file = req.files.gre;
        file.mv(`./uploads/${studentId}_gre.pdf`,(err)=>{
          if(err)
            res.send(err);
        })
      }
      if(files.ielts!=null){
        var file = req.files.ielts;
        file.mv(`./uploads/${studentId}_ielts.pdf`,(err)=>{
          if(err)
            res.send(err);
        })
      }
      if(files.toefl!=null){
        var file = req.files.toefl;
        file.mv(`./uploads/${studentId}_toefl.pdf`,(err)=>{
          if(err)
            res.send(err);
        })
      }
      if(files.gmat!=null){
        var file = req.files.gmat;
        file.mv(`./uploads/${studentId}_gmat.pdf`,(err)=>{
          if(err)
            res.send(err);
        })
      }
      if(files.gate!=null){
        var file = req.files.gate;
        file.mv(`./uploads/${studentId}_gate.pdf`,(err)=>{
          if(err)
            res.send(err);
        })
      }
      if(files.other!=null){
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
    bondCompleted,
    companyName,
    firstSAtt,
    secondSAtt,
    firstSCG,
    secondSCG,
    noOfLetterhead,
    greSc,
    ieltsSc,
    toeflSc,
    gmatSc,
    gateSc,
    otherSc,
  } = req.body;

  console.log(req.body)
  console.log(req.files)
  
  await fileUploadOfCompExam(studentId);

  // const originalDate = dateOfGraduation;
  // const parts = originalDate.split("-");
  // const rearrangedDate = `${parts[0]}-${parts[1]}-${parts[2]}`;

  const format = "T00:00:00.000Z";
  const newdateOfGraduation = passoutDate + format;
  
  // console.log(newdateOfGraduation)
  // const date = new Date(newdateOfGraduation);
  // const datetimeStr = new Date(newdateOfGraduation).toISOString();

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
        greS : greSc || "0",
        ieltsS : ieltsSc || "0",
        toeflS : toeflSc || "0",
        gmatS : gmatSc || "0",
        gateS : gateSc || "0",
        otherS : otherSc || "0",
      }
    })

    let rid = await lastEntryOfResult();
    let aid = await lastEntryOAttendance();
    let ceid = await lastEntryOfCompExam();

    rid = rid[0].id;
    aid = aid[0].id;
    ceid = ceid[0].id;

    // console.log(rid);
    // console.log(aid);
    
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
        noOfLetterHead : noOfLetterhead,
        rid: rid,
        aid: aid,
        ceid: ceid,
      },
    });
    console.log("Data inserted successfully")
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