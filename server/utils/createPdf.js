const html_to_pdf = require("html-pdf");
const generateHTML = (body) => {
  const {
    studentId,
    studentName,
    passoutDate,
    universityPrefList,
    compiExamDetails,
    facultyPrefList,
    attendance,
    cgpa,
  } = body;
  console.log(
    studentId,
    studentName,
    passoutDate,
    universityPrefList,
    compiExamDetails,
    facultyPrefList,
    attendance,
    cgpa
  );
  let html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div
      style="
        font-family: Times;
        width: 100%;
        margin: 30px 0px;
        display: flex;
        justify-content: center;
      "
    >
      <div style="padding: 15px">
        <div style="width: 100%; border-top: 1px solid black">
          <div
            style="
              margin: 10px 0px 0px;
              display: -webkit-box;
              display: flex;
              justify-content: space-between;
              -webkit-box-pack: space-between;
            "
          >`;
  const date = new Date();
  let headerHTML = `
  <div
    style="
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      font-size: 12px;
      font-family: Times;
      font-weight: bold;
    "
  >
    CSPIT/CE/04122022/${studentId.toUpperCase()}
  </div>
  <div
    style="
      font-family: Times;
      font-size: 12px;
      width: 180px;
      font-weight: bold;
    "
  >
    Date:<span
      style="
        font-weight: bold;
        display: inline-block;
        font-family: Times;
        margin-left: 2px;
        text-align: center;
        width: 80%;
        border-bottom: 1px solid black;
      "
      >${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}</span
    >
  </div>
</div>
<div style="text-align: center; margin: 15px 0px; font-size: 17px">
  <p
    style="margin: 0px 0px 5px; font-family: Times; font-weight: bold"
  >
    CHAROTAR UNIVERSITY OF SCIENCE AD TECHNOLOGY
  </p>
  <p
    style="margin: 0px 0px 5px; font-family: Times; font-weight: bold"
  >
    CHANDUBHAI S. PATEL INTITUTE OF TECHNOLOGY
  </p>
  <p
    style="margin: 0px 0px 5px; font-family: Times; font-weight: bold"
  >
    U &amp; PU. Patel Department of Computer Engineering
  </p>
  <p
    style="margin: 0px 0px 5px; font-family: Times; font-weight: bold"
  >
    Request for Letter of Recommendation/Further Study
  </p>
</div>
</div>
<div>
<div style="font-size: 12px">
  <p style="margin: 0px 0px 2px; font-family: Times">To,</p>
  <p style="margin: 0px 0px 2px; font-family: Times">The HOD,</p>
  <p style="margin: 0px 0px 2px; font-family: Times">
    U &amp; PU. Patel Department of Computer Engineering
  </p>
  <p style="margin: 0px 0px 2px; font-family: Times">
    CSPIT, CHARUSAT
  </p>
</div>`;
  html += headerHTML;
  let universityHTML = `
  <div style="width: 100%">
    <table
      style="
        border: 1px solid black;
        border-collapse: collapse;
        font-family: times;
        margin-top: 10px;
        font-size: 13px;
        width: 100%;
      "
    >
      <tr>
        <th
          style="
            padding: 5px;
            text-align: center;
            border: 1px solid black;
            border-collapse: collapse;
            font-family: times;
          "
        >
          #
        </th>
        <th
          style="
            padding: 5px;
            text-align: center;
            border: 1px solid black;
            border-collapse: collapse;
            font-family: times;
          "
        >
          University Name
        </th>
        <th
          style="
            padding: 5px;
            text-align: center;
            border: 1px solid black;
            border-collapse: collapse;
            font-family: times;
          "
        >
          Course Name
        </th>
        <th
          style="
            padding: 5px;
            text-align: center;
            border: 1px solid black;
            border-collapse: collapse;
            font-family: times;
          "
        >
          Country
        </th>
        <th
          style="
            padding: 5px;
            text-align: center;
            border: 1px solid black;
            border-collapse: collapse;
            font-family: times;
          "
        >
          Intake
        </th>
      </tr>`;
  for (let i = 0; i < universityPrefList.length; i++) {
    let intakeDate = universityPrefList[i].intakeDate;
    let arr = intakeDate.split("-");
    arr = arr.reverse();
    intakeDate = arr.join("/");
    universityHTML += `
        <tr>
          <td style="
            padding:5px;
            text-align:center;
            border: 1px solid black;
            border-collapse:collapse;
            font-family:times';
          ">
          ${i + 1}
          </td>
          <td style="
            padding:5px;
            text-align:center;
            border: 1px solid black;
            border-collapse:collapse;
            font-family:times';
          ">
          ${universityPrefList[i].universityName.toUpperCase()}
          </td>
          <td style="
            padding:5px;
            text-align:center;
            border: 1px solid black;
            border-collapse:collapse;
            font-family:times';
          ">
          ${universityPrefList[i].courseName.toUpperCase()}
          </td>
          <td style="
            padding:5px;
            text-align:center;
            border: 1px solid black;
            border-collapse:collapse;
            font-family:times';
          ">
          ${universityPrefList[i].countryName.toUpperCase()}
          </td>
          <td style="
            padding:5px;
            text-align:center;
            border: 1px solid black;
            border-collapse:collapse;
            font-family:times';
          ">
          ${intakeDate}
          </td>
        </tr>`;
  }
  universityHTML += `
        </table>
      </div>`;
  html += universityHTML;

  let compiArr = ["gre", "ielts", "toefl", "gmat", "gate", "other"];
  let compiExamHTML = `
  <div>
    <p style="margin-top: 10px; font-family: Times">
      My Compititive exam score is below:
    </p>
    <div style="width: 100%">
      <table
        style="
          border: 1px solid black;
          border-collapse: collapse;
          font-family: times;
          margin-top: 10px;
          font-size: 13px;
          width: 100%;
        "
      >
      <tr>`;
  compiArr.map((exam) => {
    compiExamHTML += `
        <th
          style="
          padding: 5px;
          text-align: center;
          border: 1px solid black;
          border-collapse: collapse;
          font-family: times;
          "
        >
          ${exam.toUpperCase()}
        </th>`;
  });
  compiExamHTML += `
    </tr>
    <tr>`;
  console.log(compiExamDetails.compiExam);
  // if (compiExamDetails.compiExam === "false") {
  //   compiArr.map(() => {
  //     compiExamHTML += `
  //     <td
  //     style="
  //     padding: 5px;
  //     text-align: center;
  //     border: 1px solid black;
  //     border-collapse: collapse;
  //     font-family: times;
  //     "
  //   >-</td>`;
  //   });
  // } 
  // else {
  //   compiArr.map((exam) => {
  //     if (compiExamDetails[exam] === "") {
  //       compiExamHTML += `
  //       <td
  //         style="
  //           padding: 5px;
  //           text-align: center;
  //           border: 1px solid black;
  //           border-collapse: collapse;
  //           font-family: times;
  //         "
  //       >-</td>`;
  //     } else {
  //       compiExamHTML += `
  //       <td
  //         style="
  //           padding: 5px;
  //           text-align: center;
  //           border: 1px solid black;
  //           border-collapse: collapse;
  //           font-family: times;
  //         "
  //       >${compiExamDetails[exam]}</td>`;
  //     }
  //   });
  //   compiExamHTML += `
  //   </tr>
  //   </table>
  //   </div>
  // </div>`;
  // }

    compiArr.map((exam) => {
      if (compiExamDetails[exam] === "") {
        compiExamHTML += `
        <td
          style="
            padding: 5px;
            text-align: center;
            border: 1px solid black;
            border-collapse: collapse;
            font-family: times;
          "
        >-</td>`;
      } else {
        compiExamHTML += `
        <td
          style="
            padding: 5px;
            text-align: center;
            border: 1px solid black;
            border-collapse: collapse;
            font-family: times;
          "
        >${compiExamDetails[exam]}</td>`;
      }
    });
    compiExamHTML += `
    </tr>
    </table>
    </div>
  </div>`;


  html += compiExamHTML;

  let facHTML = `
  <div>
  <p style="margin-top: 10px; font-family: Times">
    I want LOR from below listed faculty members
  </p>
  <div style="width: 100%">
    <table
      style="
        border: 1px solid black;
        border-collapse: collapse;
        font-family: times;
        font-size: 13px;
        margin-top: 10px;
        width: 100%;
      "
    >
      <tr>
        <th
          style="
            padding: 5px;
            text-align: center;
            border: 1px solid black;
            border-collapse: collapse;
            font-family: times;
            width: 6%;
          "
        >
          #
        </th>
        <th
          style="
            padding: 5px;
            text-align: center;
            border: 1px solid black;
            border-collapse: collapse;
            font-family: Times;
            width: 47%;
          "
        >
          Faculty Name
        </th>
        <th
          style="
            padding: 5px;
            text-align: center;
            border: 1px solid black;
            border-collapse: collapse;
            font-family: times;
            width: 47%;
          "
        >
          Email-ID
        </th>
      </tr>`;
  for (let i = 0; i < facultyPrefList.length; i++) {
    facHTML += `
        <tr>
          <td
            style="
              padding: 5px;
              text-align: center;
              border: 1px solid black;
              border-collapse: collapse;
              font-family: times;
              width: 6%;
            "
          >
            ${i + 1}
          </td>
          <td
            style="
              padding: 5px;
              text-align: center;
              border: 1px solid black;
              border-collapse: collapse;
              font-family: times;
              width: 47%;
            "
          >
            ${facultyPrefList[i].facultyName.toUpperCase()}
          </td>
          <td
            style="
              padding: 5px;
              text-align: center;
              border: 1px solid black;
              border-collapse: collapse;
              font-family: times;
              width: 47%;
            "
          >
            ${facultyPrefList[i].facultyEmail.toLowerCase()}
          </td>
        </tr>
        `;
  }
  facHTML += `</table>
    </div>
  </div>`;
  html += facHTML;

  let resultHTML = `
  <div>
  <p style="margin-top: 10px; font-family: Times">
    My average attendance and CGPA after each semester area as
    below:
  </p>
  <div style="width: 100%">
    <table
      style="
        border: 1px solid black;
        border-collapse: collapse;
        font-family: times;
        margin-top: 10px;
        font-size: 13px;
        width: 100%;
      "
    >
      <tr>
        <th
          style="
            padding: 5px;
            text-align: center;
            border: 1px solid black;
            border-collapse: collapse;
            font-family: times;
            width: 15%;
          "
        >
          Semester
        </th>  
  `;
  for (let i = 0; i < 8; i++) {
    resultHTML += `<td
      style="
        padding: 5px;
        text-align: center;
        border: 1px solid black;
        border-collapse: collapse;
        font-family: times;
      "
    >
      ${
        i + 1 === 1
          ? "1st"
          : i + 1 === 2
          ? "2nd"
          : i + 1 === 3
          ? "3rd"
          : `${i + 1}th`
      }
    </td>
    `;
  }
  resultHTML += `</tr>
  <tr>
  <th
    style="
      padding: 5px;
      text-align: center;
      border: 1px solid black;
      border-collapse: collapse;
      font-family: times;
    "
  >
    Attendance
  </th>
  `;
  let resultArr = [
    "first",
    "second",
    "third",
    "forth",
    "fifth",
    "six",
    "seven",
    "eight",
  ];
  resultArr.map((sem) => {
    resultHTML += `
    <td
      style="
        padding: 5px;
        text-align: center;
        border: 1px solid black;
        border-collapse: collapse;
        font-family: times;
      "
    >${attendance[sem]}</td>
    `;
  });
  resultHTML += `</tr>
  <tr>
  <th
    style="
      padding: 5px;
      text-align: center;
      border: 1px solid black;
      border-collapse: collapse;
      font-family: times;
    "
  >
    CGPA
  </th>`;
  resultArr.map((sem) => {
    resultHTML += `
    <td
      style="
        padding: 5px;
        text-align: center;
        border: 1px solid black;
        border-collapse: collapse;
        font-family: times;
      "
    >${cgpa[sem]}</td>
    `;
  });
  resultHTML += ` </tr>
  </table>
</div>
</div>`;
  html += resultHTML;
  let endHTML = `
  <div>
    <p style="margin-top: 15px">
      I required letter-head for LOR. So, I request you to give me
      permission to take LOR from respective faculties
    </p>
  </div>
</div>
</div>
<div style="padding-left:15px;margin-top: 10px; width: 450px; margin-bottom: 50px">
<div
  style="
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  "
>
  <p
    style="padding: 0; margin: 0; font-family: Times; font-size: 12px"
  >
    Counselor's Signature with comment:
  </p>
  <div
    style="border-bottom: 1px solid black; margin-left: 185px"
  ></div>
</div>
<div
  style="
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  "
>
  <p
    style="padding: 0; margin: 0; font-family: Times; font-size: 12px"
  >
    TPR's Signature with comment:
  </p>
  <div
    style="border-bottom: 1px solid black; margin-left: 159px"
  ></div>
</div>
<div
  style="
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  "
>
  <p
    style="padding: 0; margin: 0; font-family: Times; font-size: 12px"
  >
    Alumni Committee Member:
  </p>
  <div
    style="border-bottom: 1px solid black; margin-left: 146px"
  ></div>
</div>
<div
  style="
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  "
>
  <p
    style="padding: 0; margin: 0; font-family: Times; font-size: 12px"
  >
    Approved by HOD:
  </p>
  <div
    style="border-bottom: 1px solid black; margin-left: 105px"
  ></div>
</div>
</div>
</div>
</div>
</body>
</html>
  `;
  html += endHTML;
  return html;
};
// console.log(html);
const html_to_pdf_async = (html, pdfPath) => {
  let options = {
    format: "A4",
    timeout: 120000,
  };
  return new Promise((resolve, reject) => {
    html_to_pdf.create(html, options).toFile(pdfPath, (err, _res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("done");
        resolve(true);
      }
    });
  });
};
exports.generate = async (req, res) => {
  try {
    const { studentId } = req.body;
    let html = await generateHTML(req.body);
    await html_to_pdf_async(
      html,
      `./generated_lor/${studentId.toLowerCase()}.pdf`
    );
    res
      .status(200)
      .send({ success: true, message: "Pdf Generated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "server error",
    });
  }
};
