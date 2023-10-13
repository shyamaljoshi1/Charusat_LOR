import { useState } from "react";
import "./lorFormat.css";
// import {allData} from "../lor_format/helper";

const LorFormat = (allData) => {
  // const data={...allData};
  // console.log(data.allData.studentId);
  console.log(allData.allData);
  // console.log("HELLO");

  // const [newDate,setNewDate]=useState("-");
  // const date = new Date();
  //     const year=date.getFullYear();
  //     const month=date.getMonth();
  //     const day=date.getDate();
  //     setNewDate("{day}/{month}/{year}");

  console.log(allData.facultyPrefList);
  return (
    <div
      style={{
        fontFamily: "Times",
        width: "100%",
        margin: "30px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{ width: "800px", padding: "15px", border: "1px solid black" }}
      >
        <div style={{ width: "100%", borderTop: "1px solid black" }}>
          <div
            style={{
              margin: "10px 0 0 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontFamily: "Times",
                fontWeight: "bold",
              }}
            >
              CSPIT/CE/04122022/{allData.allData.studentId}
            </div>
            {/* to set id and date */}
            <div
              style={{
                fontFamily: "Times",
                fontSize: "12px",
                width: "180px",
                fontWeight: "bold",
              }}
            >
              Date:
              <span
                style={{
                  fontWeight: "bold",
                  display: "inline-block",
                  fontFamily: "Times",
                  marginLeft: "2px",
                  textAlign: "center",
                  width: "80%",
                  borderBottom: "1px solid black",
                }}
              >
                03/12/2022
              </span>
            </div>{" "}
            {/* to set the date */}
          </div>
          <div
            style={{ textAlign: "center", margin: "15px 0", fontSize: "17px" }}
          >
            <p
              style={{
                margin: "0 0 5px 0",
                fontFamily: "Times",
                fontWeight: "bold",
              }}
            >
              CHAROTAR UNIVERSITY OF SCIENCE AD TECHNOLOGY
            </p>
            <p
              style={{
                margin: "0 0 5px 0",
                fontFamily: "Times",
                fontWeight: "bold",
              }}
            >
              CHANDUBHAI S. PATEL INTITUTE OF TECHNOLOGY
            </p>
            <p
              style={{
                margin: "0 0 5px 0",
                fontFamily: "Times",
                fontWeight: "bold",
              }}
            >
              U & PU. Patel Department of Computer Engineering
            </p>
            <p
              style={{
                margin: "0 0 5px 0",
                fontFamily: "Times",
                fontWeight: "bold",
              }}
            >
              Request for Letter of Recommendation/Further Study
            </p>
          </div>
        </div>
        <div>
          <div style={{ fontSize: "12px" }}>
            <p style={{ margin: "0 0 2px 0", fontFamily: "Times" }}>To,</p>
            <p style={{ margin: "0 0 2px 0", fontFamily: "Times" }}>The HOD,</p>
            <p style={{ margin: "0 0 2px 0", fontFamily: "Times" }}>
              U & PU. Patel Department of Computer Engineering
            </p>
            <p style={{ margin: "0 0 2px 0", fontFamily: "Times" }}>
              CSPIT, CHARUSAT
            </p>
          </div>
          <div style={{ margin: "20px 0 0 0", fontSize: "12px" }}>
            <p style={{ fontFamily: "Times" }}>Respected Sir,</p>
            <p style={{ fontFamily: "Times" }}>
              I am, ID No.: {allData.allData.studentId}{" "}
              {allData.allData.studentName} passed out in{" "}
              {allData.allData.passoutDate} applying for master in universities
              listed in below table:
            </p>
            <div style={{ width: "100%" }}>
              <table
                style={{
                  border: "1px solid black",
                  borderCollapse: "collapse",
                  fontFamily: "times",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                <tr>
                  <th
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      fontFamily: "times",
                    }}
                  >
                    #
                  </th>
                  <th
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      fontFamily: "times",
                    }}
                  >
                    University Name
                  </th>
                  <th
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      fontFamily: "times",
                    }}
                  >
                    Course Name
                  </th>
                  <th
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      fontFamily: "times",
                    }}
                  >
                    Country
                  </th>
                  <th
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      fontFamily: "times",
                    }}
                  >
                    Intake
                  </th>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      fontFamily: "times",
                    }}
                  >
                    &nbsp;
                  </td>
                  <td
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      fontFamily: "times",
                    }}
                  >
                    &nbsp;
                  </td>
                  <td
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      fontFamily: "times",
                    }}
                  >
                    &nbsp;
                  </td>
                  <td
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      fontFamily: "times",
                    }}
                  >
                    &nbsp;
                  </td>
                  <td
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      fontFamily: "times",
                    }}
                  >
                    &nbsp;
                  </td>
                </tr>
              </table>
            </div>
            <div>
              <p style={{ marginTop: "10px", fontFamily: "Times" }}>
                My Compititive exam score is below:
              </p>
              <div style={{ width: "100%" }}>
                <table
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    fontFamily: "times",
                    marginTop: "10px",
                    width: "100%",
                  }}
                >
                  <tr>
                    {/* <th
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      #
                    </th> */}
                    <th
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      GRE
                    </th>
                    <th
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      IELTS
                    </th>
                    <th
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      TOEFL
                    </th>
                    <th
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      GMAT
                    </th>
                    <th
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      GATE
                    </th>
                    <th
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      Other
                    </th>
                  </tr>
                  <tr>
                    {/* <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      1
                    </td> */}
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.greSc}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.ieltsSc}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.toeflSc}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.gmatSc}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.gateSc}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.otherSc}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div>
              <p style={{ marginTop: "10px", fontFamily: "Times" }}>
                I want LOR from below listed faculty members
              </p>
              <div style={{ width: "100%" }}>
                <table
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    fontFamily: "times",
                    marginTop: "10px",
                    width: "100%",
                  }}
                >
                  <tr>
                    <th
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                        width: "6%",
                      }}
                    >
                      #
                    </th>
                    <th
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "Times",
                        width: "47%",
                      }}
                    >
                      Faculty Name
                    </th>
                    <th
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                        width: "47%",
                      }}
                    >
                      Email-ID
                    </th>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                        width: "6%",
                      }}
                    >
                      1
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                        width: "47%",
                      }}
                    >
                      Mrugendra Rahevar
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                        width: "47%",
                      }}
                    >
                      mrugendrarahevar.ce@charusat.ac.in
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div>
              <p style={{ marginTop: "10px", fontFamily: "Times" }}>
                My average attendance and CGPA after each semester area as
                below:
              </p>
              <div style={{ width: "100%" }}>
                <table
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    fontFamily: "times",
                    marginTop: "10px",
                    width: "100%",
                  }}
                >
                  <tr>
                    <th
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                        width: "15%",
                      }}
                    >
                      Semester
                    </th>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      1st
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      2nd
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      3rd
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      4th
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      5th
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      6th
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      7th
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      8th
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      Attendance
                    </th>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.firstSAtt}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.secondSAtt}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.thirdSAtt}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.forthSAtt}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.fifthSAtt}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.sixthSAtt}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.seventhSAtt}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.eightthSAtt}
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      CGPA
                    </th>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.firstSCG}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.secondSCG}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.thirdSCG}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.forthSCG}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.fifthSCG}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.sixthSCG}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.seventhSCG}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        fontFamily: "times",
                      }}
                    >
                      {allData.allData.eightthSCG}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div>
              <p style={{ marginTop: "10px" }}>
                I required {allData.allData.noOfLetterhead} letter-head for LOR.
                So, I request you to give me permission to take LOR from
                respective faculties
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ marginTop: "10px", width: "450px", marginBottom: "50px" }}
        >
          <div style={{ display: "flex" }}>
            <p
              style={{
                marginTop: "5px",
                fontFamily: "Times",
                fontSize: "12px",
              }}
            >
              Counselor's Signature with comment:{" "}
            </p>
            <span
              style={{
                marginLeft: "2px",
                display: "block",
                borderBottom: "1px solid black",
                flex: "1",
              }}
            ></span>
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{
                marginTop: "5px",
                fontFamily: "Times",
                fontSize: "12px",
              }}
            >
              TPR's Signature with comment:
            </p>
            <span
              style={{
                marginLeft: "2px",
                display: "block",
                borderBottom: "1px solid black",
                flex: "1",
              }}
            ></span>
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{
                marginTop: "5px",
                fontFamily: "Times",
                fontSize: "12px",
              }}
            >
              Alumni Committee Member:
            </p>
            <span
              style={{
                marginLeft: "2px",
                display: "block",
                borderBottom: "1px solid black",
                flex: "1",
              }}
            ></span>
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{
                marginTop: "5px",
                fontFamily: "Times",
                fontSize: "12px",
              }}
            >
              Approved by HOD:
            </p>
            <span
              style={{
                marginLeft: "2px",
                display: "block",
                borderBottom: "1px solid black",
                flex: "1",
              }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LorFormat;
