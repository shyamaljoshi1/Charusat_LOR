import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import "./UploadAdmissionLetter.css";
import PersonalInfo from "../lor_request/personalInfo";
import CompiExamDetail from "./CompiExam";
import UniversityPrefList from "./UniversityPrefList";
import TermCondition from "../lor_request/TermCondition";

const UploadAdmissionLetter = () => {
  const [personalInfo, setPersonalinfo] = useState({
    studentId: "",
    studentName: "",
    emailId: "",
    studentMobile: "",
    parentMobile: "",
    passoutDate: "",
  });
  const [compiExamDetails, setCompiExamDetails] = useState({
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
  const [university, setUniversity] = useState({
    universityName: "",
    courseName: "",
    countryName: "",
    intakeDate: "",
    admissionCard: null,
  });

  //functions for change and update
  const onChange = (e) => {
    setPersonalinfo({ ...personalInfo, [e.target.name]: e.target.value });
    setCompiExamDetails({
      ...compiExamDetails,
      [e.target.name]: e.target.value,
    });
    setUniversity({ ...university, [e.target.name]: e.target.value });
  };

  const changeTerm = (e) => {
    setTermAndCondition(!termAndCondition);
  };

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

  const onUploadAdmissionCard = (e) => {
    if (!e.target.files[0]) {
    } else {
      const ext = e.target.files[0].name.split(".").pop();
      if (ext === "pdf" || ext === "doc" || ext === "docx") {
        const size = e.target.files[0].size;
        if (size > 1048576) {
          // const error = [...universityErrors];
          // error["admissionCard"] = "You can only upload file upto 1MB";
          setUniversityErrors({
            ...universityErrors,
            [e.target.name]: "You can only upload file upto 1MB",
          });
          e.target.value = "";
        } else {
          setUniversity({ ...university, [e.target.name]: e.target.files[0] });
          // const error = [...universityErrors];
          // error["admissionCard"] = "";
          setUniversityErrors({ ...universityErrors, [e.target.name]: "" });
        }
      } else {
        // const error = [...universityErrors];
        // error["admissionCard"] = "You can only upload .pdf/.doc/.docx files";
        setUniversityErrors({
          ...universityErrors,
          [e.target.name]: "You can only upload .pdf/.doc/.docx files",
        });
        e.target.value = "";
      }
    }
  };

  //validation
  const [personalDetailsErrors, setPersonalDetailsErrors] = useState({});
  const personalDetailsValidation = (personalInfo) => {
    const errors = {};

    //student id
    if (!personalInfo.studentId.trim()) {
      errors.studentId = "Student ID is required";
    } else if (
      !(
        7 <= personalInfo.studentId.length && personalInfo.studentId.length <= 8
      )
    ) {
      errors.studentId = "Student ID should be of 7 or 8 characters";
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
          }
        } else {
          errors.studentId = "ID is Invalid";
        }
      } else {
        errors.studentId = "ID is Invalid";
      }
    } else if (!isNaN(personalInfo.studentId.slice(0, 2))) {
      const branch = personalInfo.studentId.slice(2, 4).toLowerCase();
      if (branch === "ce" || branch === "it" || branch === "cs") {
        const fNum = personalInfo.studentId.slice(4);
        if (!isNaN(fNum)) {
          errors.studentId = "";
        } else {
          errors.studentId = "ID is Invalid";
        }
      } else {
        errors.studentId = "ID is Invalid";
      }
    } else {
      errors.studentId = "ID is Invalid";
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
      personalInfo.studentMobile.length > 10
    ) {
      errors.studentMobile = "Phone number must be of 10 digit";
    } else if (
      personalInfo.studentMobile[0] === "1" ||
      personalInfo.studentMobile[0] === "2" ||
      personalInfo.studentMobile[0] === "3" ||
      personalInfo.studentMobile[0] === "4" ||
      personalInfo.studentMobile[0] === "0"
    ) {
      errors.studentMobile = "Your number should start with 5, 6, 7, 8 or 9";
    } else if (
      personalInfo.studentMobile === "9999999999" ||
      personalInfo.studentMobile === "8888888888" ||
      personalInfo.studentMobile === "7777777777" ||
      personalInfo.studentMobile === "6666666666" ||
      personalInfo.studentMobile === "5555555555"
    ) {
      errors.studentMobile = "All digits should not be same";
    } else {
      errors.studentMobile = "";
    }

    //parent mobile
    if (!personalInfo.parentMobile.trim()) {
      errors.parentMobile = "Parent's mobile number is required";
    } else if (
      personalInfo.parentMobile.length < 10 ||
      personalInfo.parentMobile.length > 10
    ) {
      errors.parentMobile = "Phone number must be of 10 digit";
    } else if (
      personalInfo.parentMobile[0] === "1" ||
      personalInfo.parentMobile[0] === "2" ||
      personalInfo.parentMobile[0] === "3" ||
      personalInfo.parentMobile[0] === "4" ||
      personalInfo.parentMobile[0] === "0"
    ) {
      errors.parentMobile = "Your number should start with 5, 6, 7, 8 or 9";
    } else if (
      personalInfo.parentMobile === "9999999999" ||
      personalInfo.parentMobile === "8888888888" ||
      personalInfo.parentMobile === "7777777777" ||
      personalInfo.parentMobile === "6666666666" ||
      personalInfo.parentMobile === "5555555555"
    ) {
      errors.parentMobile = "All digits should not be same";
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
    if (
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

  const [universityErrors, setUniversityErrors] = useState({
    universityName: "",
    courseName: "",
    countryName: "",
    intakeDate: "",
    admissionCard: "",
  });

  const universityValidation = (university) => {
    const errors = { ...universityErrors };
    //for university name
    if (!university.universityName.trim()) {
      errors["universityName"] = "required field";
      setUniversityErrors(errors);
    } else if (/^[a-zA-Z ]+$/i.test(university.universityName)) {
      errors["universityName"] = "";
      setUniversityErrors(errors);
    } else {
      errors["universityName"] = "Only Alphabets are allowed";
      setUniversityErrors(errors);
    }

    //for course validatoin
    if (!university.courseName.trim()) {
      errors["courseName"] = "required field";
      setUniversityErrors(errors);
    } else if (/^[a-zA-Z ]+$/i.test(university.courseName)) {
      errors["courseName"] = "";
      setUniversityErrors(errors);
    } else {
      errors["courseName"] = "Only Aphabets are allowed";
      setUniversityErrors(errors);
    }

    //for country name validatiop
    if (!university.countryName.trim()) {
      errors["countryName"] = "required field";
    } else if (/^[a-zA-Z ]+$/i.test(university.countryName)) {
      errors["countryName"] = "";
    } else {
      errors["countryName"] = "Only Alphabets are allowed";
    }

    //for inteake date validation
    if (!university.intakeDate) {
      errors["intakeDate"] = "required field";
    } else {
      errors["intakeDate"] = "";
    }
    if (!university.admissionCard) {
      errors["admissionCard"] = "Admission Card must be uploaded";
    } else {
      errors["admissionCard"] = "";
    }
    return errors;
  };

  //render

  const [termAndCondition, setTermAndCondition] = useState(false);

  //onConfirm
  const onConfirm = () => {
    setPersonalDetailsErrors(personalDetailsValidation(personalInfo));
    setcompiExamDetailsErrors(compiExamDetailsValidation(compiExamDetails));
    universityValidation(university);
  };

  return (
    <div className="form_container">
      <form action="POST">
        <PersonalInfo onChange={onChange} error={personalDetailsErrors} />
        <CompiExamDetail
          onChange={onChange}
          onUpload={onUpload}
          error={compiExamDetailsErrors}
        />
        <UniversityPrefList
          onUpload={onUploadAdmissionCard}
          onChange={onChange}
          uniPref={university}
          error={universityErrors}
        />
        <TermCondition onChange={changeTerm} />
        {termAndCondition ? (
          <Button className="lor-request__confirm-btn" onClick={onConfirm}>
            Conifrm
          </Button>
        ) : (
          <Button
            disabled
            className="lor-request__confirm-btn"
            // onClick={onConfirm}
          >
            Conifrm
          </Button>
        )}
      </form>
    </div>
  );
};
export default UploadAdmissionLetter;
