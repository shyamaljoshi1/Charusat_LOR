// const axios = require("axios");
import axios from "axios";

export const personalInformation =
  async (studentId, studentName, emailId, studentMobile, parentMobile, passoutDate) => {
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
        },
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
