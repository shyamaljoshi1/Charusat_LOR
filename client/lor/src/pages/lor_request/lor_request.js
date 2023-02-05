import { useState } from "react";
import "./lor_request.css";
import { Input } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import PersonalInfo from "./personalInfo";

const LorRequest = () => {
  // const [cdpc, setCdpc] = useState(false);
  // const onchange = (e) => {
  //   setCdpc(e.target.value);
  // };
  const [personalInfo,setPersonalinfo]=useState({
    studentId:"",
    studentName:"",
    emailId:"",
    studentMobile:"",
    parentMobile:"",
    passoutDate:"",
  })

  const onChange = (e) => {
    setPersonalinfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  console.log(personalInfo);

  return (
      <div className="form__container">
        <form action="POST">
          <PersonalInfo onChange={onChange}/>
        </form>
      </div>
  );
};

export default LorRequest;
