// const axios = require("axios");
import axios from "axios";

export const personalInformation =
  async (studentId, studentName, emailId, studentMobile, parentMobile, passoutDate, placeThroughCdpc,bondCompleted,companyName,firstSAtt,secondSAtt,firstSCG,secondSCG,noOfLetterhead,  greSc,ieltsSc,toeflSc,gmatSc,gateSc,otherSc,gre,ielts,toefl,gmat,gate,other) => {
    console.log("hello "+ noOfLetterhead);

    // const formData = new FormData();
    // formData.append('studentId', studentId);
    // formData.append('studentName', studentName);
    // formData.append('emailId', emailId);
    // formData.append('studentMobile', studentMobile);
    // formData.append('parentMobile', parentMobile);
    // formData.append('passoutDate', passoutDate);
    // formData.append('placeThroughCdpc', placeThroughCdpc);
    // formData.append('bondCompleted', bondCompleted);
    // formData.append('companyName', companyName);
    // formData.append('firstSAtt', firstSAtt);
    // formData.append('secondSAtt', secondSAtt);
    // formData.append('firstSCG', firstSCG);
    // formData.append('secondSCG', secondSCG);
    // formData.append('greSc,',greSc);
    // formData.append('ieltsSc,',ieltsSc);
    // formData.append('toeflSc,',toeflSc);
    // formData.append('gmatSc,',gmatSc);
    // formData.append('gateSc,',gateSc);
    // formData.append('otherSc,',otherSc);
    // formData.append('gre', gre);
    // formData.append('ielts', ielts);
    // formData.append('toefl', toefl);
    // formData.append('gmat', gmat);
    // formData.append('gate', gate);
    // formData.append('other', other);
    // console.log(gre)
    // console.log(ielts)
    // console.log(toefl)
    // console.log(gmat)
    // console.log(gate)
    // console.log(other)


    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const { data } = await axios.post(
        `http://localhost:3001/api/v1/personalinfo`,
        {
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
          gre,
          ielts,
          toefl,
          gmat,
          gate,
          other,
        },
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

export const sendEmail = async ()=>{
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const {data} = await axios.post('http://localhost:3001/api/v1/sendemail',config);
    console.log(data);
  } catch (error) {
    console.log(error)
  }
}


// {
//   studentId,
//   studentName,
//   emailId,
//   studentMobile,
//   parentMobile,
//   passoutDate,
//   placeThroughCdpc,
//   bondCompleted,
//   companyName,
//   firstSAtt,
//   secondSAtt,
//   firstSCG,
//   secondSCG,
//   greSc,
//   ieltsSc,
//   toeflSc,
//   gmatSc,
//   gateSc,
//   otherSc,
//   gre,
//   ielts,
//   toefl,
//   gmat,
//   gate,
//   other,
// }