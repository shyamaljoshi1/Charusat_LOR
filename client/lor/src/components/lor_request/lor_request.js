import { useState , useEffect} from "react";
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
  const [placementInfo,setPlacementinfo]=useState({
    placeThroughCdpc:"",
    bondCompleted:"",
    companyName:"",
  })
  const [noOfLetterhead,setNoOfLetterhead]=useState()


  const onChange = (e) => {
    setPersonalinfo({ ...personalInfo, [e.target.name]: e.target.value });
    setResultDetails({ ...resultDetails, [e.target.name]: e.target.value });
    setPlacementinfo({ ...placementInfo, [e.target.name]: e.target.value });
    setNoOfLetterhead(e.target.value)
  };

  const[cdpc,checkCdpc]=useState(false);

  useEffect(() => {
      if(placementInfo.placeThroughCdpc==="true") checkCdpc(true)
      else{
        checkCdpc(false)
        placementInfo.companyName=""
      } 
  },[placementInfo]);

  console.log(noOfLetterhead);

  return (
    <div className="form__container">
      <form action="POST">
        <PersonalInfo onChange={onChange} />
        <PlacementInfo onChange={onChange} cdpc={cdpc} />
        <ResultDetails onChange={onChange}/>
        <LorLetter onChange={onChange}/>
      </form>
    </div>
  );
};

export default LorRequest;
