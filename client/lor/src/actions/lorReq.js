// const axios = require("axios");
import axios from "axios";

export const personalInformation =
  async (studentId, studentName, emailId, studentMobile, parentMobile, passoutDate, placeThroughCdpc,bondCompleted,companyName,firstSAtt,secondSAtt,firstSCG,secondSCG,noh) => {
    console.log("hello");
    try {
      const config = { headers: { "Content-Type": "application/json" } };
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
        },
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
