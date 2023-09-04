import React from 'react'
import './uniCard.css'

const UniversityCard = ({data}) => {
    console.log(data);
    return (
    <div className="details">
        <p>Country : {data.countryName}</p>
        <p>Course : {data.courseName}</p>
        <p>Intake : {data.intake}</p>
        <p>University Name : {data.unName}</p>
        <p>Student Name : {data.studentInfo[0].studentName}</p>
        <p>EmailId : {data.studentInfo[0].emailId}</p>
    </div>
    
  )
}

export default UniversityCard