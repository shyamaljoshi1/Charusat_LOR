import { useState } from 'react';
import './lorFormat.css'
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
        <div className='lor_format__container'>
            <div className='lor_format'>
                <div className='lor_format__header'>
                    <div className='lor_format__header__top'>
                        <div className='lor_format__header__top__id'>CSPIT/CE/04122022/{allData.allData.studentId}</div>   {/* to set id and date */}
                        <div className='lor_format__header__top__date'>Date:<span>03/12/2022</span></div>   {/* to set the date */}
                    </div>
                    <div className='lor_format__header__uni_info'>
                        <p>CHAROTAR UNIVERSITY OF SCIENCE AD TECHNOLOGY</p>
                        <p>CHANDUBHAI S. PATEL INTITUTE OF TECHNOLOGY</p>
                        <p>U & PU. Patel Department of Computer Engineering</p>
                        <p>Request for Letter of Recommendation/Further Study</p>
                    </div>
                </div>
                <div className='lor_format__body'>
                    <div className='lor_format__body__header'>
                        <p>To,</p>
                        <p>The HOD,</p>
                        <p>U & PU. Patel Department of Computer Engineering</p>
                        <p>CSPIT, CHARUSAT</p>
                    </div>
                    <div className='lor_format__body__body'>
                        <p>Respected Sir,</p>
                        <p>I am, ID No.: {allData.allData.studentId} {allData.allData.studentName} passed out in {allData.allData.passoutDate} applying for master in universities listed in below table:</p>
                        <div className='lor_format__body__uni_table__container'>
                            <table style={{ border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times', marginTop: '10px', width: '100%' }}>
                                <tr>
                                    <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>#</th>
                                    <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>University Name</th>
                                    <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>Course Name</th>
                                    <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>Country</th>
                                    <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>Intake</th>
                                </tr>
                                <tr>
                                    <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>&nbsp;</td>
                                    <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>&nbsp;</td>
                                    <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>&nbsp;</td>
                                    <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>&nbsp;</td>
                                    <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>&nbsp;</td>
                                </tr>
                            </table>
                        </div>
                        <div className='lor_format__body__body__compi'>
                            <p>My Compititive exam score is below:</p>
                            <div className='lor_format__body__body__compi_table__container'>
                                <table style={{ border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times', marginTop: '10px', width: '100%' }}>
                                    <tr>
                                        <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>#</th>
                                        <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>GRE</th>
                                        <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>IELTS</th>
                                        <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>TOEFL</th>
                                        <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>GMAT</th>
                                        <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>GATE</th>
                                        <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>Other</th>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>1</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.greSc}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.ieltsSc}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.toeflSc}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.gmatSc}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.gateSc}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.otherSc}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className='lor_format__body__body__faculty'>
                            <p>I want LOR from below listed faculty members</p>
                            <div className='lor_format__body__body__facutly_table__container'>
                                <table style={{ border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times', marginTop: '10px', width: '100%' }}>
                                    <tr>
                                        <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times', width: '6%' }}>#</th>
                                        <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times', width: '47%' }}>Faculty Name</th>
                                        <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times', width: '47%' }}>Email-ID</th>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times', width: '6%' }}>1</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times', width: '47%' }}>Mrugendra Rahevar</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times', width: '47%' }}>mrugendrarahevar.ce@charusat.ac.in</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className='lor_format__body__body__attendance'>
                            <p>My average attendance and CGPA after each semester area as below:</p>
                            <div className='lor_format__body__body__attendance_table__container'>
                                <table style={{ border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times', marginTop: '10px', width: '100%' }}>
                                    <tr>
                                        <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times', width: '15%' }}>Semester</th>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>1st</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>2nd</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>3rd</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>4th</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>5th</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>6th</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>7th</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>8th</td>
                                    </tr>
                                    <tr>
                                        <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>Attendance</th>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.firstSAtt}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.secondSAtt}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.thirdSAtt}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.forthSAtt}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.fifthSAtt}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.sixthSAtt}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.seventhSAtt}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.eightthSAtt}</td>
                                    </tr>
                                    <tr>
                                        <th style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>CGPA</th>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.firstSCG}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.secondSCG}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.thirdSCG}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.forthSCG}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.fifthSCG}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.sixthSCG}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.seventhSCG}</td>
                                        <td style={{ padding: '5px', textAlign: 'center', border: '1px solid black', borderCollapse: 'collapse', fontFamily: 'times' }}>{allData.allData.eightthSCG}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className='lor_format__body__body__footer'>
                            <p>I required {allData.allData.noOfLetterhead} letter-head for LOR. So, I request you to give me permission to take LOR from respective faculties</p>
                        </div>
                    </div>
                </div>
                <div className='lor_format__footer'>
                    <div className='lor_format__footer__signature_container'>
                        <p>Counselor's Signature with comment: </p><span></span>
                    </div>
                    <div className='lor_format__footer__signature_container'>
                        <p>TPR's Signature with comment:</p><span></span>
                    </div>
                    <div className='lor_format__footer__signature_container'>
                        <p>Alumni Committee Member:</p><span></span>
                    </div>
                    <div className='lor_format__footer__signature_container'>
                        <p>Approved by HOD:</p><span></span>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default LorFormat