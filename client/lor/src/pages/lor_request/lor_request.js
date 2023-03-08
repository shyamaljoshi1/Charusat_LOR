import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CompiExamDetail from "./compiExamDetail";
import LorLetter from "./lor_letter";
import "./lor_request.css";
import PersonalInfo from "./personalInfo";
import PlacementInfo from "./placementInfo";
import ResultDetails from "./resultDetails";
import UniversityPrefList from "./universityPrefList";
import FacultyPrefList from "./facultyPrefList";

const LorRequest = () => {
  const [personalInfo, setPersonalinfo] = useState({
    studentId: "",
    studentName: "",
    emailId: "",
    studentMobile: "",
    parentMobile: "",
    passoutDate: "",
  });
  const [resultDetails, setResultDetails] = useState({
    firstSAtt: "",
    secondSAtt: "",
    thirdSAtt: "",
    forthSAtt: "",
    fifthSAtt: "",
    sixthSAtt: "",
    seventhSAtt: "",
    eightthSAtt: "",
    firstSCG: "",
    secondSCG: "",
    thirdSCG: "",
    forthSCG: "",
    fifthSCG: "",
    sixthSCG: "",
    seventhSCG: "",
    eightthSCG: "",
  });
  const [placementInfo, setPlacementinfo] = useState({
    placeThroughCdpc: "",
    bondCompleted: "",
    companyName: "",
  });
  const [noOfLetterhead, setNoOfLetterhead] = useState();

  const [compiExamDetails, setCompiExamDetails] = useState({
    compiExam: "",
    greSc: "",
    ieltsSc: "",
    toeflSc: "",
    gmatSc: "",
    gateSc: "",
    otherSc: "",
    gre: null,
    ielts: null,
    toefl: null,
    gmat: null,
    gate: null,
    other: null,
  });

  const [universityPrefList, setUniversityPrefList] = useState([
    { universityName: "", courseName: "", countryName: "", intakeDate: "" },
  ]);

  const [facultyPrefList, setFacultyPrefList] = useState([
    { facultyName: "", facultyEmail: "", facultyPrefLor: null },
  ]);

  //for changing object data
  const onChange = (e) => {
    setPersonalinfo({ ...personalInfo, [e.target.name]: e.target.value });
    setResultDetails({ ...resultDetails, [e.target.name]: e.target.value });
    setPlacementinfo({ ...placementInfo, [e.target.name]: e.target.value });
    setCompiExamDetails({
      ...compiExamDetails,
      [e.target.name]: e.target.value,
    });
    setNoOfLetterhead(e.target.value);
  };

  //for upload files
  const onUpload = (e) => {
    setCompiExamDetails({
      ...compiExamDetails,
      [e.target.name]: e.target.files[0],
    });
  };

  const onChangeUni = (i, e) => {
    const { name, value } = e.target;
    const list = [...universityPrefList];
    list[i][name] = value;
    setUniversityPrefList(list);
  };
  const addUni = () => {
    setUniversityPrefList([
      ...universityPrefList,
      {
        universityName: "",
        courseName: "",
        countryName: "",
        intakeDate: "",
      },
    ]);
    setUniversityPrefListErrors([
      ...universityPrefListErrors,
      {
        universityName: "",
        courseName: "",
        countryName: "",
        intakeDate: "",
      },
    ]);
  };

  const removeUni = (i) => {
    const rows = [...universityPrefList];
    const error = [...universityPrefListErrors];
    rows.splice(i, 1);
    error.splice(i, 1);
    setUniversityPrefList(rows);
    setUniversityPrefListErrors(error);
  };

  const onChangeFaculty = (i, e) => {
    const { name, value } = e.target;
    const list = [...facultyPrefList];
    list[i][name] = value;
    setFacultyPrefList(list);
  };

  const onUploadFac = (i, e) => {
    const list = [...facultyPrefList];
    list[i][e.target.name] = e.target.files[0];
    setFacultyPrefList(list);
  };

  const addFac = () => {
    setFacultyPrefList([
      ...facultyPrefList,
      { facultyName: "", facultyEmail: "", facultyPrefLor: null },
    ]);
  };

  const removeFac = (i) => {
    const rows = [...facultyPrefList];
    console.log(JSON.stringify(rows));
    rows.splice(i, 1);
    setFacultyPrefList(rows);
  };

  console.log(JSON.stringify(facultyPrefList));

  const [cdpc, checkCdpc] = useState(false);

  useEffect(() => {
    if (placementInfo.placeThroughCdpc === "true") checkCdpc(true);
    else {
      checkCdpc(false);
      placementInfo.companyName = "";
    }
  }, [placementInfo]);

  //compi div render
  const [compiExam, checkCompiExam] = useState(false);

  useEffect(() => {
    if (compiExamDetails.compiExam === "true") checkCompiExam(true);
    else {
      checkCompiExam(false);
      compiExamDetails.greSc = "";
      compiExamDetails.ieltsSc = "";
      compiExamDetails.toeflSc = "";
      compiExamDetails.gmatSc = "";
      compiExamDetails.gateSc = "";
      compiExamDetails.otherSc = "";
    }
  }, [compiExamDetails]);

  //validation
  const [personalDetailsErrors, setPersonalDetailsErrors] = useState({});

  const personalDetailsValidation = (personalInfo) => {
    const errors = {};

    //student id
    if (!personalInfo.studentId.trim()) {
      errors.studentId = "Student ID is required";
    } else if (personalInfo.studentId.lenght > 8) {
      errors.studentId = "Student ID contain 8 characters";
    }

    //student name
    if (!personalInfo.studentName.trim()) {
      errors.studentName = "Student Name is required";
    } else if (/^[a-zA-Z ]+$/i.test(personalInfo.studentName)) {
      errors.studentName = "";
    } else {
      errors.studentName = "Only alphabet are allowed";
    }

    //email
    if (!personalInfo.emailId.trim()) {
      errors.emailId = "Email ID is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(personalInfo.emailId)
    ) {
      errors.emailId = "Invalid Email address";
    } else {
      errors.emailId = "";
    }

    //mobile
    if (!personalInfo.studentMobile.trim()) {
      errors.studentMobile = "Student's mobile number is required";
    } else if (
      personalInfo.studentMobile.length < 10 ||
      personalInfo.studentMobile.lenght > 10
    ) {
      errors.studentMobile = "Phone number must be of 10 digit";
    } else {
      errors.studentMobile = "";
    }

    //parent mobile
    if (!personalInfo.parentMobile.trim()) {
      errors.parentMobile = "Parent's mobile number is required";
    } else if (
      personalInfo.parentMobile.length < 10 ||
      personalInfo.parentMobile.lenght > 10
    ) {
      errors.parentMobile = "Phone number must be of 10 digit";
    } else {
      errors.parentMobile = "";
    }

    //passout date
    if (!personalInfo.passoutDate.trim()) {
      errors.passoutDate = "Passout date is required";
    } else {
      errors.passoutDate = "";
    }
    return errors;
  };

  const [placementDetailsErrors, setPlacementDetailsErrors] = useState({});

  const placementDetailsValidation = (placementInfo) => {
    const errors = {};

    //place through cdpc
    if (!placementInfo.placeThroughCdpc) {
      errors.placeThroughCdpc = "required field";
    } else {
      errors.placeThroughCdpc = "";
    }

    //company name
    if (
      placementInfo.placeThroughCdpc === "true" &&
      !placementInfo.companyName.trim()
    ) {
      errors.companyName = "required field";
    } else if (/^[a-zA-Z ]+$/i.test(placementInfo.companyName)) {
      errors.companyName = "";
    } else {
      errors.companyName = "Only alphabet are allowed";
    }

    //bond period
    if (!placementInfo.bondCompleted) {
      errors.bondCompleted = "required field";
    } else {
      errors.bondCompleted = "";
    }
    return errors;
  };

  const [compiExamDetailsErrors, setcompiExamDetailsErrors] = useState({});

  const compiExamDetailsValidation = (compiExamDetails) => {
    const errors = {};

    //have given compi exam or not
    if (!compiExamDetails.compiExam) {
      errors.compiExam = "reqired field";
    } else if (
      !compiExamDetails.greSc &&
      !compiExamDetails.gre &&
      !compiExamDetails.ieltsSc &&
      !compiExamDetails.ielts &&
      !compiExamDetails.toeflSc &&
      !compiExamDetails.toefl &&
      !compiExamDetails.gmatSc &&
      !compiExamDetails.gmat &&
      !compiExamDetails.gateSc &&
      !compiExamDetails.gate &&
      !compiExamDetails.otherSc &&
      !compiExamDetails.other
    ) {
      errors.compiExam =
        "You must have to enter least one Exam marks and upload marksheet";
    } else {
      errors.compiExam = "";
    }

    //for simple validation if score is entered than file must be uploaded and vice versa
    if (compiExamDetails.greSc && !compiExamDetails.gre) {
      errors.gre = "file must be uploaded";
    } else if (!compiExamDetails.greSc && compiExamDetails.gre) {
      errors.gre = "marks must be entered";
    } else {
      errors.gre = "";
    }

    if (compiExamDetails.ieltsSc && !compiExamDetails.ielts) {
      errors.ielts = "file must be uploaded";
    } else if (!compiExamDetails.ieltsSc && compiExamDetails.ielts) {
      errors.ielts = "marks must be entered";
    } else {
      errors.ielts = "";
    }

    if (compiExamDetails.toeflSc && !compiExamDetails.toefl) {
      errors.toefl = "file must be uploaded";
    } else if (!compiExamDetails.toeflSc && compiExamDetails.toefl) {
      errors.toefl = "marks must be entered";
    } else {
      errors.toefl = "";
    }

    if (compiExamDetails.gmatSc && !compiExamDetails.gmat) {
      errors.gmat = "file must be uploaded";
    } else if (!compiExamDetails.gmatSc && compiExamDetails.gmat) {
      errors.gmat = "marks must be entered";
    } else {
      errors.gmat = "";
    }

    if (compiExamDetails.gateSc && !compiExamDetails.gate) {
      errors.gate = "file must be uploaded";
    } else if (!compiExamDetails.gateSc && compiExamDetails.gate) {
      errors.gate = "marks must be entered";
    } else {
      errors.gate = "";
    }

    if (compiExamDetails.otherSc && !compiExamDetails.other) {
      errors.other = "file must be uploaded";
    } else if (!compiExamDetails.otherSc && compiExamDetails.otherSc) {
      errors.other = "marks must be entered";
    } else {
      errors.other = "";
    }

    return errors;
  };

  const [universityPrefListErrors, setUniversityPrefListErrors] = useState([
    { universityName: "", courseName: "", countryName: "", intakeDate: "" },
  ]);

  const universityPrefListValidation = (universityPrefList) => {
    const errors = [...universityPrefListErrors];
    for (let i = 0; i < universityPrefList.length; i++) {
      //for university name
      if (!universityPrefList[i].universityName.trim()) {
        errors[i]["universityName"] = "required field";
        setUniversityPrefListErrors(errors);
      } else if (/^[a-zA-Z ]+$/i.test(universityPrefList[i].universityName)) {
        errors[i]["universityName"] = "";
        setUniversityPrefListErrors(errors);
      } else {
        errors[i]["universityName"] = "Only Alphabets are allowed";
        setUniversityPrefListErrors(errors);
      }

      if (!universityPrefList[i].courseName.trim()) {
        errors[i]["courseName"] = "required field";
        setUniversityPrefListErrors(errors);
      } else if (/^[a-zA-Z ]+$/i.test(universityPrefList[i].courseName)) {
        errors[i]["courseName"] = "";
        setUniversityPrefListErrors(errors);
      } else {
        errors[i]["courseName"] = "Only Aphabets are allowed";
        setUniversityPrefListErrors(errors);
      }

      if (!universityPrefList[i].countryName.trim()) {
        errors[i]["countryName"] = "required field";
      } else if (/^[a-zA-Z ]+$/i.test(universityPrefList[i].countryName)) {
        errors[i]["countryName"] = "";
      } else {
        errors[i]["countryName"] = "Only Alphabets are allowed";
      }

      if (!universityPrefList[i].intakeDate) {
        errors[i]["intakeDate"] = "required field";
      } else {
        errors[i]["intakeDate"] = "";
      }
    }
    return errors;
  };

  const [noOfLetterHeadErrors, setNoOfLetterheadErrors] = useState({});

  const noOfLetterheadValidation = (noOfLetterhead) => {
    const errors = {};
    if (!noOfLetterhead) {
      errors.noOfletterHead = "required field";
    } else {
      errors.noOfletterHead = "";
    }
    return errors;
  };

  const [resultDetailsErrors, setResultDetailsErrors] = useState({});
  const resultDetailsValidation = (resultDetails) => {
    const errors = {};
    if (
      !resultDetails.firstSAtt &&
      !resultDetails.firstSCG &&
      !resultDetails.secondSAtt &&
      !resultDetails.secondSCG &&
      !resultDetails.thirdSAtt &&
      !resultDetails.thirdSCG &&
      !resultDetails.forthSAtt &&
      !resultDetails.forthSCG &&
      !resultDetails.fifthSAtt &&
      !resultDetails.fifthSCG &&
      !resultDetails.sixthSAtt &&
      !resultDetails.sixthSCG &&
      !resultDetails.seventhSAtt &&
      !resultDetails.seventhSCG &&
      !resultDetails.eightthSAtt &&
      !resultDetails.eightthSCG
    ) {
      errors.res = "Attendence and CGPA for every semester must be entered";
    } else {
      errors.res = "";
    }
    return errors;
  };
  //on click confirm
  const onConfirm = () => {
    setPersonalDetailsErrors(personalDetailsValidation(personalInfo));
    setPlacementDetailsErrors(placementDetailsValidation(placementInfo));
    setcompiExamDetailsErrors(compiExamDetailsValidation(compiExamDetails));
    setResultDetailsErrors(resultDetailsValidation(resultDetails));
    setNoOfLetterheadErrors(noOfLetterheadValidation(noOfLetterhead));
    universityPrefListValidation(universityPrefList);
  };

  return (
    <div className="form__container">
      <form action="POST">
        <PersonalInfo error={personalDetailsErrors} onChange={onChange} />
        <PlacementInfo
          error={placementDetailsErrors}
          onChange={onChange}
          cdpc={cdpc}
        />
        <ResultDetails onChange={onChange} error={resultDetailsErrors} />
        <LorLetter onChange={onChange} error={noOfLetterHeadErrors} />
        <CompiExamDetail
          onChange={onChange}
          compiExam={compiExam}
          onUpload={onUpload}
          error={compiExamDetailsErrors}
        />
        <UniversityPrefList
          onChange={onChangeUni}
          uniPref={universityPrefList}
          addUniversity={addUni}
          removeUniversity={removeUni}
          error={universityPrefListErrors}
        />
        <FacultyPrefList
          onChange={onChangeFaculty}
          facPref={facultyPrefList}
          onUpload={onUploadFac}
          addFaculty={addFac}
          removeFaculty={removeFac}
        />
        <Button className="lor-request__confirm-btn" onClick={onConfirm}>
          Conifrm
        </Button>
      </form>

      {/* testing purpose */}
      {/* <img src={URL.createObjectURL(compiExamDetails.gre)} /> */}
    </div>
  );
};

export default LorRequest;
