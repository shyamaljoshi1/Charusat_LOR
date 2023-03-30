const { Router } = require("express");
const express = require("express");

const { personalInfo, sendEmail } = require("../controller/perosnalController");
const router = require("express").Router();

router.route("/personalinfo").post(personalInfo);
router.route("/sendemail").post(sendEmail);

module.exports = router;
