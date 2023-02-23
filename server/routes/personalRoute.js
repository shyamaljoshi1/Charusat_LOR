const { Router } = require("express");
const express = require("express");

const { personalInfo } = require("../controller/perosnalController");
const router = require("express").Router();

router.route("/personalinfo").post(personalInfo);

module.exports = router;
