import { Button } from "@chakra-ui/react";
import { useState, useEffect, useRef, useContext } from "react";
import CompiExamDetail from "./compiExamDetail";
import LorLetter from "./lor_letter";
import "./lor_request.css";
import PersonalInfo from "./personalInfo";
import PlacementInfo from "./placementInfo";
import ResultDetails from "./resultDetails";
import UniversityPrefList from "./universityPrefList";
import FacultyPrefList from "./facultyPrefList";
import { AlertContext } from "../../app";
// import axios from "axios";
import {
  personalInformation,
  uniPref,
  fcPref,
  sendEmail,
} from "../../actions/lorReq";
import TermCondition from "./TermCondition";
import { getAllData } from "../lor_format/helper";
import LorFormat from "../lor_format/lorFormat";

const LorRequest = () => {
  const Alert = useContext(AlertContext);
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
    // thirdSAtt: "",
    // forthSAtt: "",
    // fifthSAtt: "",
    // sixthSAtt: "",
    // seventhSAtt: "",
    // eightthSAtt: "",
    firstSCG: "",
    secondSCG: "",
    // thirdSCG: "",
    // forthSCG: "",
    // fifthSCG: "",
    // sixthSCG: "",
    // seventhSCG: "",
    // eightthSCG: "",
  });
  const [placementInfo, setPlacementinfo] = useState({
    placeThroughCdpc: "",
    bondCompleted: "",
    companyName: "",
  });
  const [noOfLetterhead, setNoOfLetterhead] = useState({ noOfLetterhead: "" });

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
    {
      id: 1,
      universityName: "",
      courseName: "",
      countryName: "",
      intakeDate: "",
    },
  ]);
  const [facultyPrefList, setFacultyPrefList] = useState([
    { id: 1, facultyName: "", facultyEmail: "", facultyPrefLor: null },
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
    setNoOfLetterhead({
      ...noOfLetterhead,
      [e.target.name]: e.target.value.toString(),
    });
    // setNoOfLetterhead({ ...noOfLetterhead, [e.target.name]: e.target.value });
  };
  const changeTerm = (e) => {
    setTermAndCondition(!termAndCondition);
  };
  //for upload files
  const onUpload = (e) => {
    if (!e.target.files[0]) {
    } else {
      const ext = e.target.files[0].name.split(".").pop();
      if (ext === "pdf") {
        const size = e.target.files[0].size;
        if (size > 1048576) {
          setcompiExamDetailsErrors({
            ...compiExamDetailsErrors,
            [e.target.name]: "You can only upload file upto 1MB",
          });
          e.target.value = "";
        } else {
          setCompiExamDetails({
            ...compiExamDetails,
            [e.target.name]: e.target.files[0],
          });
          setcompiExamDetailsErrors({
            ...compiExamDetailsErrors,
            [e.target.name]: "",
          });
        }
      } else {
        setcompiExamDetailsErrors({
          ...compiExamDetailsErrors,
          [e.target.name]: "You can only upload .pdf format files",
        });
        e.target.value = "";
      }
    }
  };

  //to change usniversity preference details
  const onChangeUni = (i, e) => {
    const { name, value } = e.target;
    const list = [...universityPrefList];
    list[i][name] = value;
    setUniversityPrefList(list);
  };

  //to add university row
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
        id: universityPrefList[universityPrefList.length - 1].id + 1,
        universityName: "",
        courseName: "",
        countryName: "",
        intakeDate: "",
      },
    ]);
  };

  //to remove university row
  const removeUni = (i) => {
    const rows = [...universityPrefList];
    const error = [...universityPrefListErrors];
    rows.splice(i, 1);
    error.splice(i, 1);
    setUniversityPrefList(rows);
    setUniversityPrefListErrors(error);
  };

  //to chnage faculy preference list
  const onChangeFaculty = (i, e) => {
    const { name, value } = e.target;
    const list = [...facultyPrefList];
    list[i][name] = value;
    setFacultyPrefList(list);
  };

  //to upload faculty preference lor
  const onUploadFac = (i, e) => {
    if (!e.target.files[0]) {
    } else {
      let _e = e;
      const ext = _e.target.files[0].name.split(".").pop();
      if (ext === "pdf" || ext === "doc" || ext === "docx") {
        const size = e.target.files[0].size;
        if (size > 1048576) {
          const error = [...facultyPrefListErrors];
          error[i]["facultyPrefLor"] = "You can only upload file upto 1MB;";
          setFacultyPrefListErrors(error);
          e.target.value = "";
        } else {
          const list = [...facultyPrefList];
          list[i][e.target.name] = e.target.files[0];
          setFacultyPrefList(list);
          const error = [...facultyPrefListErrors];
          error[i]["facultyPrefLor"] = "";
          setFacultyPrefListErrors(error);
        }
      } else {
        const error = [...facultyPrefListErrors];
        error[i]["facultyPrefLor"] =
          "You can only upload .pdf/.doc/.docx files";
        setFacultyPrefListErrors(error);
        e.target.value = "";
      }
    }
  };
  //to add facultypreference list row
  const addFac = () => {
    setFacultyPrefList([
      ...facultyPrefList,
      {
        id: facultyPrefList[facultyPrefList.length - 1].id + 1,
        facultyName: "",
        facultyEmail: "",
        facultyPrefLor: null,
      },
    ]);
    setFacultyPrefListErrors([
      ...facultyPrefListErrors,
      {
        facultyName: "",
        facultyEmail: "",
        facultyPrefLor: "",
      },
    ]);
  };

  //to remove faculty preference row
  const removeFac = (i) => {
    const rows = [...facultyPrefList];
    const error = [...facultyPrefListErrors];
    rows.splice(i, 1);
    // let _rows = facultyPrefList.filter((v, ind) => ind !== i);
    // setFacultyPrefList(_rows);
    error.splice(i, 1);
    setFacultyPrefList(rows);
    setFacultyPrefListErrors(error);
  };

  const isValid = useRef(true);
  //validation
  const [personalDetailsErrors, setPersonalDetailsErrors] = useState({});

  const personalDetailsValidation = (personalInfo) => {
    const errors = {};

    //student id
    if (!personalInfo.studentId.trim()) {
      errors.studentId = "Student ID is required";
      isValid.current = false;
    } else if (
      !(
        7 <= personalInfo.studentId.length && personalInfo.studentId.length <= 8
      )
    ) {
      errors.studentId = "Student ID should be of 7 or 8 characters";
      isValid.current = false;
    } else if (personalInfo.studentId[0].toLowerCase() === "d") {
      const year = personalInfo.studentId.slice(1, 3);
      if (!isNaN(year)) {
        const branch = personalInfo.studentId.slice(3, 5).toLowerCase();
        if (branch === "ce" || branch === "it" || branch === "cs") {
          const fNum = personalInfo.studentId.slice(5);
          if (!isNaN(fNum)) {
            errors.studentId = "";
          } else {
            errors.studentId = "ID is invalid";
            isValid.current = false;
          }
        } else {
          errors.studentId = "ID is Invalid";
          isValid.current = false;
        }
      } else {
        errors.studentId = "ID is Invalid";
        isValid.current = false;
      }
    } else if (!isNaN(personalInfo.studentId.slice(0, 2))) {
      const branch = personalInfo.studentId.slice(2, 4).toLowerCase();
      if (branch === "ce" || branch === "it" || branch === "cs") {
        const fNum = personalInfo.studentId.slice(4);
        if (!isNaN(fNum)) {
          errors.studentId = "";
        } else {
          errors.studentId = "";
        }
      } else {
        errors.studentId = "";
      }
    } else {
      errors.studentId = "";
    }

    //student name
    if (!personalInfo.studentName.trim()) {
      errors.studentName = "Student Name is required";
      isValid.current = false;
    } else if (/^[a-zA-Z ]+$/i.test(personalInfo.studentName)) {
      errors.studentName = "";
    } else {
      errors.studentName = "Only alphabet are allowed";
      isValid.current = false;
    }

    //email
    if (!personalInfo.emailId.trim()) {
      errors.emailId = "Email ID is required";
      isValid.current = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(personalInfo.emailId)
    ) {
      errors.emailId = "Invalid Email address";
      isValid.current = false;
    } else {
      errors.emailId = "";
    }

    //mobile
    if (!personalInfo.studentMobile.trim()) {
      errors.studentMobile = "Student's mobile number is required";
      isValid.current = false;
    } else if (
      personalInfo.studentMobile.length < 10 ||
      personalInfo.studentMobile.length > 10
    ) {
      errors.studentMobile = "Phone number must be of 10 digit";
      isValid.current = false;
    } else if (
      personalInfo.studentMobile[0] === "1" ||
      personalInfo.studentMobile[0] === "2" ||
      personalInfo.studentMobile[0] === "3" ||
      personalInfo.studentMobile[0] === "4" ||
      personalInfo.studentMobile[0] === "0"
    ) {
      errors.studentMobile = "Your number should start with 5, 6, 7, 8 or 9";
      isValid.current = false;
    } else if (
      personalInfo.studentMobile === "9999999999" ||
      personalInfo.studentMobile === "8888888888" ||
      personalInfo.studentMobile === "7777777777" ||
      personalInfo.studentMobile === "6666666666" ||
      personalInfo.studentMobile === "5555555555"
    ) {
      errors.studentMobile = "All digits should not be same";
      isValid.current = false;
    } else {
      errors.studentMobile = "";
    }

    //parent mobile
    if (!personalInfo.parentMobile.trim()) {
      errors.parentMobile = "Parent's mobile number is required";
      isValid.current = false;
    } else if (
      personalInfo.parentMobile.length < 10 ||
      personalInfo.parentMobile.length > 10
    ) {
      errors.parentMobile = "Phone number must be of 10 digit";
      isValid.current = false;
    } else if (
      personalInfo.parentMobile[0] === "1" ||
      personalInfo.parentMobile[0] === "2" ||
      personalInfo.parentMobile[0] === "3" ||
      personalInfo.parentMobile[0] === "4" ||
      personalInfo.parentMobile[0] === "0"
    ) {
      errors.parentMobile = "Your number should start with 5, 6, 7, 8 or 9";
      isValid.current = false;
    } else if (
      personalInfo.parentMobile === "9999999999" ||
      personalInfo.parentMobile === "8888888888" ||
      personalInfo.parentMobile === "7777777777" ||
      personalInfo.parentMobile === "6666666666" ||
      personalInfo.parentMobile === "5555555555"
    ) {
      errors.parentMobile = "All digits should not be same";
      isValid.current = false;
    } else {
      errors.parentMobile = "";
    }

    //passout date
    if (!personalInfo.passoutDate.trim()) {
      errors.passoutDate = "Passout date is required";
      isValid.current = false;
    } else {
      errors.passoutDate = "";
    }
    setPersonalDetailsErrors(errors);
    return;
  };

  const [placementDetailsErrors, setPlacementDetailsErrors] = useState({
    placeThroughCdpc: "",
    bondCompleted: "",
    companyName: "",
  });

  const placementDetailsValidation = (placementInfo) => {
    const errors = {};

    //place through cdpc
    if (!placementInfo.placeThroughCdpc) {
      errors.placeThroughCdpc = "required field";
      isValid.current = false;
    } else {
      errors.placeThroughCdpc = "";
    }

    //company name
    if (
      placementInfo.placeThroughCdpc === "true" &&
      !placementInfo.companyName.trim()
    ) {
      errors.companyName = "required field";
      isValid.current = false;
    } else if (/^[a-zA-Z ]+$/i.test(placementInfo.companyName)) {
      errors.companyName = "";
    } else {
      errors.companyName = "Only alphabet are allowed";
      isValid.current = false;
    }

    //bond period
    if (!placementInfo.bondCompleted) {
      errors.bondCompleted = "required field";
      isValid.current = false;
    } else {
      errors.bondCompleted = "";
    }
    setPlacementDetailsErrors(errors);
    return;
  };

  const [compiExamDetailsErrors, setcompiExamDetailsErrors] = useState({
    gre: "",
    ielts: "",
    toefl: "",
    gmat: "",
    gate: "",
    other: "",
  });

  const compiExamDetailsValidation = (compiExamDetails) => {
    const errors = {};

    //have given compi exam or not
    console.log(compiExamDetails);
    if (!compiExamDetails.compiExam) {
      errors.compiExam = "reqired field";
      isValid.current = false;
    } else if (
      compiExamDetails.compiExam === true &&
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
      isValid.current = false;
    } else {
      errors.compiExam = "";
    }

    //for simple validation if score is entered than file must be uploaded and vice versa
    if (compiExamDetails.greSc && !compiExamDetails.gre) {
      errors.gre = "file must be uploaded";
      isValid.current = false;
    } else if (!compiExamDetails.greSc && compiExamDetails.gre) {
      errors.gre = "marks must be entered";
      isValid.current = false;
    } else {
      errors.gre = "";
    }

    if (compiExamDetails.ieltsSc && !compiExamDetails.ielts) {
      errors.ielts = "file must be uploaded";
      isValid.current = false;
    } else if (!compiExamDetails.ieltsSc && compiExamDetails.ielts) {
      errors.ielts = "marks must be entered";
      isValid.current = false;
    } else {
      errors.ielts = "";
    }

    if (compiExamDetails.toeflSc && !compiExamDetails.toefl) {
      errors.toefl = "file must be uploaded";
      isValid.current = false;
    } else if (!compiExamDetails.toeflSc && compiExamDetails.toefl) {
      errors.toefl = "marks must be entered";
      isValid.current = false;
    } else {
      errors.toefl = "";
    }

    if (compiExamDetails.gmatSc && !compiExamDetails.gmat) {
      errors.gmat = "file must be uploaded";
      isValid.current = false;
    } else if (!compiExamDetails.gmatSc && compiExamDetails.gmat) {
      errors.gmat = "marks must be entered";
      isValid.current = false;
    } else {
      errors.gmat = "";
    }

    if (compiExamDetails.gateSc && !compiExamDetails.gate) {
      errors.gate = "file must be uploaded";
      isValid.current = false;
    } else if (!compiExamDetails.gateSc && compiExamDetails.gate) {
      errors.gate = "marks must be entered";
      isValid.current = false;
    } else {
      errors.gate = "";
    }

    if (compiExamDetails.otherSc && !compiExamDetails.other) {
      errors.other = "file must be uploaded";
      isValid.current = false;
    } else if (!compiExamDetails.otherSc && compiExamDetails.otherSc) {
      errors.other = "marks must be entered";
      isValid.current = false;
    } else {
      errors.other = "";
    }
    setcompiExamDetailsErrors(errors);
    return;
  };

  const [noOfLetterHeadErrors, setNoOfLetterHeadErrors] = useState({});

  const noOfLetterheadValidation = (noOfLetterhead) => {
    const errors = {};
    // console.log(noOfLetterhead, errors);
    if (noOfLetterhead.noOfLetterhead === "") {
      errors.noOfletterHead = "required field";
      isValid.current = false;
    } else {
      errors.noOfletterHead = "";
    }
    setNoOfLetterHeadErrors({ ...errors });
    // return;
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
      isValid.current = false;
    } else {
      errors.res = "";
    }
    setResultDetailsErrors(errors);
    return;
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
        isValid.current = false;
        setUniversityPrefListErrors(errors);
      } else if (/^[a-zA-Z ]+$/i.test(universityPrefList[i].universityName)) {
        errors[i]["universityName"] = "";
        setUniversityPrefListErrors(errors);
      } else {
        errors[i]["universityName"] = "Only Alphabets are allowed";
        isValid.current = false;
        setUniversityPrefListErrors(errors);
      }

      //for course validatoin
      if (!universityPrefList[i].courseName.trim()) {
        errors[i]["courseName"] = "required field";
        isValid.current = false;
        setUniversityPrefListErrors(errors);
      } else if (/^[a-zA-Z ]+$/i.test(universityPrefList[i].courseName)) {
        errors[i]["courseName"] = "";
        setUniversityPrefListErrors(errors);
      } else {
        errors[i]["courseName"] = "Only Aphabets are allowed";
        isValid.current = false;
        setUniversityPrefListErrors(errors);
      }

      //for country name validatiop
      if (!universityPrefList[i].countryName.trim()) {
        errors[i]["countryName"] = "required field";
        isValid.current = false;
      } else if (/^[a-zA-Z ]+$/i.test(universityPrefList[i].countryName)) {
        errors[i]["countryName"] = "";
      } else {
        errors[i]["countryName"] = "Only Alphabets are allowed";
        isValid.current = false;
      }

      //for inteake date validation
      if (!universityPrefList[i].intakeDate) {
        errors[i]["intakeDate"] = "required field";
        isValid.current = false;
      } else {
        errors[i]["intakeDate"] = "";
      }
    }
    return;
  };

  const [facultyPrefListErrors, setFacultyPrefListErrors] = useState([
    {
      facultyName: "",
      facultyEmail: "",
      facultyPrefLor: "",
    },
  ]);

  const facutlPrefListValidation = (facultyPrefList) => {
    const errors = [...facultyPrefListErrors];

    for (let i = 0; i < facultyPrefList.length; i++) {
      //for faculty name validation
      if (!facultyPrefList[i].facultyName.trim()) {
        errors[i]["facultyName"] = "required field";
        isValid.current = false;
        setFacultyPrefListErrors(errors);
      } else if (/^[a-zA-Z ]+$/i.test(facultyPrefList[i].facultyName)) {
        errors[i]["facultyName"] = "";
        setFacultyPrefListErrors(errors);
      } else {
        errors[i]["facultyName"] = "Only Alphabets are allowed";
        isValid.current = false;
        setFacultyPrefListErrors(errors);
      }

      //fpr faculty email validation
      if (!facultyPrefList[i].facultyEmail.trim()) {
        errors[i]["facultyEmail"] = "reqired field";
        isValid.current = false;
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          facultyPrefList[i].facultyEmail
        )
      ) {
        errors[i]["facultyEmail"] = "Invalid Email Address";
        isValid.current = false;
      } else {
        errors[i]["facultyEmail"] = "";
      }

      //for faculty preference lor validation
      if (!facultyPrefList[i].facultyPrefLor) {
        errors[i]["facultyPrefLor"] = "LOR must be uploaded";
        isValid.current = false;
      } else {
        errors[i]["facultyPrefLor"] = "";
      }
    }
    return;
  };

  //cdpc render
  const [cdpc, checkCdpc] = useState(false);

  useEffect(() => {
    if (placementInfo.placeThroughCdpc === "true") checkCdpc(true);
    else {
      checkCdpc(false);
      placementInfo.companyName = "";
      placementDetailsErrors.companyName = "";
    }
  }, [placementInfo, placementDetailsErrors]);

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
      compiExamDetailsErrors.gre = "";
      compiExamDetailsErrors.ielts = "";
      compiExamDetailsErrors.toefl = "";
      compiExamDetailsErrors.gmat = "";
      compiExamDetailsErrors.gate = "";
      compiExamDetailsErrors.other = "";
    }
  }, [compiExamDetails, compiExamDetailsErrors]);

  const [termAndCondition, setTermAndCondition] = useState(false);

  const mergedObj = {
    ...personalInfo,
    ...placementInfo,
    ...resultDetails,
    ...noOfLetterhead,
    ...compiExamDetails,
  };
  const mergedObjF = {
    ...personalInfo,
    ...placementInfo,
    ...resultDetails,
    ...noOfLetterhead,
    ...compiExamDetails,
    ...universityPrefList,
  };
  const mergedObjFrontend = {
    ...mergedObjF,
    ...facultyPrefList,
  };

  // const mergedObj1= [
  //   // universityPrefList
  // ]

  // console.log(mergedObj1);
  //on click confirm
  const [confirmState, setConfirmState] = useState(false);

  const onConfirm = () => {
    isValid.current = true;
    personalDetailsValidation(personalInfo);
    placementDetailsValidation(placementInfo);
    compiExamDetailsValidation(compiExamDetails);
    noOfLetterheadValidation(noOfLetterhead);
    resultDetailsValidation(resultDetails);
    universityPrefListValidation(universityPrefList);
    facutlPrefListValidation(facultyPrefList);
    console.log(isValid.current);

    if (isValid.current) {
      for (let i = 0; i < universityPrefList.length; i++) {
        uniPref(
          mergedObj.studentId,
          universityPrefList[i].universityName,
          universityPrefList[i].courseName,
          universityPrefList[i].countryName,
          universityPrefList[i].intakeDate
        );
      }

      for (let i = 0; i < facultyPrefList.length; i++) {
        fcPref(
          mergedObj.studentId,
          facultyPrefList[i].facultyName,
          facultyPrefList[i].facultyEmail,
          facultyPrefList[i].facultyPrefLor
        );
      }
      // console.log(mergedObj);
      // getAllData(mergedObj);

      setConfirmState(true);
      personalInformation(
        mergedObj.studentId,
        mergedObj.studentName,
        mergedObj.emailId,
        mergedObj.studentMobile,
        mergedObj.parentMobile,
        mergedObj.passoutDate,

        mergedObj.placeThroughCdpc,
        mergedObj.bondCompleted,
        mergedObj.companyName,

        mergedObj.firstSAtt,
        mergedObj.secondSAtt,

        mergedObj.firstSCG,
        mergedObj.secondSCG,

        mergedObj.noOfLetterhead,

        // mergedObj.compiExam
        mergedObj.greSc,
        mergedObj.ieltsSc,
        mergedObj.toeflSc,
        mergedObj.gmatSc,
        mergedObj.gateSc,
        mergedObj.otherSc,

        mergedObj.gre,
        mergedObj.ielts,
        mergedObj.toefl,
        mergedObj.gmat,
        mergedObj.gate,
        mergedObj.other
        // mergedObj.
      );
      // sendEmail();
    } else {
      Alert.setOpen(true);
      Alert.setDesc("Error submitting form");
      Alert.setType("error");
    }
  };
  // console.log(termAndCondition);

  return (
    <div className="form__container">
      {/* <h1
        style={{
          marginTop: "2rem",
          fontSize: "2.5rem",
          color: "#1b65a7",
          fontWeight: "900",
        }}
      >
        LOR Request
      </h1> */}
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
          error={facultyPrefListErrors}
        />
        <TermCondition onChange={changeTerm} />
        {termAndCondition ? (
          <Button className="lor-request__confirm-btn" onClick={onConfirm}>
            Confirm
          </Button>
        ) : (
          <Button
            isDisabled={true}
            className="lor-request__confirm-btn"
            // onClick={onConfirm}
          >
            Conifrm
          </Button>
        )}
        {confirmState && <LorFormat allData={mergedObjFrontend} />}
        {/* <Button className="lor-request__confirm-btn" onClick={onConfirm}>
          Conifrm
        </Button> */}
      </form>

      {/* testing purpose */}
      {/* <img src={URL.createObjectURL(compiExamDetails.gre)} /> */}
    </div>
  );
};

export default LorRequest;
