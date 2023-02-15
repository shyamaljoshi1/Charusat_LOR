import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import LorLetter from "./lor_letter";
import "./lor_request.css";
import PersonalInfo from "./personalInfo";
import PlacementInfo from "./placementInfo";
import ResultDetails from "./resultDetails";

const LorRequest = () => {
  const [personalInfo, setPersonalinfo] = useState({
    studentId: "",
    studentName: "",
    emailId: "",
    studentMobile: "",
    parentMobile: "",
    passoutDate: "",
  })
  const [resultDetails, setResultDetails] = useState({
    firstSAtt: "",
    secondSAtt: "",
    thirdSAtt: "",
    fifthSAtt: "",
    sixthSAtt: "",
    seventhSAtt: "",
    eightthSAtt: "",
    firstSCG: "",
    secondSCG: "",
    thirdSACG: "",
    forthSCG: "",
    fifthSCG: "",
    sixthSCG: "",
    seventhSCG: "",
    eightthSCG: "",
  })
  const [placementInfo, setPlacementinfo] = useState({
    placeThroughCdpc: "",
    bondCompleted: "",
    companyName: "",
  })
  const [noOfLetterhead, setNoOfLetterhead] = useState()


  const onChange = (e) => {
    setPersonalinfo({ ...personalInfo, [e.target.name]: e.target.value });
    setResultDetails({ ...resultDetails, [e.target.name]: e.target.value });
    setPlacementinfo({ ...placementInfo, [e.target.name]: e.target.value });
    setNoOfLetterhead(e.target.value)
  };

  const [cdpc, checkCdpc] = useState(false);

  useEffect(() => {
    if (placementInfo.placeThroughCdpc === "true") checkCdpc(true)
    else {
      checkCdpc(false)
      placementInfo.companyName = ""
    }
  }, [placementInfo]);


  //validation
  const [personalDetailsErrors, setPersonalDetailsErrors] = useState({});

  const personalDetailsValidation = (personalInfo) => {
    const errors = {};

    //student id
    if (!personalInfo.studentId.trim()) {
      errors.studentId = 'Student ID is required';
    }

    //student name
    if (!personalInfo.studentName.trim()) {
      errors.studentName = 'Student Name is required';
    } else if (/^[A-Z]+$/i.test(personalInfo.studentName)) {
      errors.studentName = '';
    } else {
      errors.studentName = 'Only alphabet are allowed';
    }

    //email 
    if (!personalInfo.emailId.trim()) {
      errors.emailId = 'Email ID is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(personalInfo.emailId)) {
      errors.emailId = 'Invalid Email address';
    } else {
      errors.emailId = '';
    }

    //mobile
    if (!personalInfo.studentMobile.trim()) {
      errors.studentMobile = 'Student\'s mobile number is required';
    } else if (personalInfo.studentMobile.length < 10) {
      errors.studentMobile = 'Phone number must be of 10 digit';
    } else {
      errors.studentMobile = '';
    }

    //parent mobile
    if (!personalInfo.parentMobile.trim()) {
      errors.parentMobile = 'Parent\'s mobile number is required';
    } else if (personalInfo.parentMobile.length < 10) {
      errors.parentMobile = 'Phone number must be of 10 digit';
    } else {
      errors.parentMobile = '';
    }

    //passout date
    if (!personalInfo.passoutDate.trim()) {
      errors.passoutDate = 'Passout date is required';
    } else {
      errors.passoutDate = '';
    }
    return errors;
  }



  //on click confirm
  const onConfirm = () => {
    setPersonalDetailsErrors(personalDetailsValidation(personalInfo));
  }
  return (
    <div className="form__container">
      <form action="POST">
        <PersonalInfo error={personalDetailsErrors} onChange={onChange} />
        <PlacementInfo onChange={onChange} cdpc={cdpc} />
        <ResultDetails onChange={onChange} />
        <LorLetter onChange={onChange} />
        <Button onClick={onConfirm}>Conifrm</Button>
      </form>
    </div>
  );
};

export default LorRequest;
