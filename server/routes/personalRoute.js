const { Router } = require("express");
const express = require("express");

const { personalInfo,getAllStudents,getStudentInfo,getResult, getAttendance,sendEmail,uniPreference, facultyPreference, searchByCountry } = require("../controller/perosnalController");
const router = require("express").Router();

router.route("/unipref").post(uniPreference);
router.route("/fcpref").post(facultyPreference);
router.route("/personalinfo").post(personalInfo);
router.route("/personalinfo").get(getAllStudents);
router.route("/personalinfo/:id").get(getStudentInfo);
router.route("/resultinfo/:id").get(getResult).get(getAttendance);
router.route("/sendemail").post(sendEmail);
router.route("/search/:search").get(searchByCountry);

module.exports = router;
