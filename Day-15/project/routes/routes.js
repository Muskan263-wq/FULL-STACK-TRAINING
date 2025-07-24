// admin.routes.js
const express = require("express");
const router = express.Router();
const Job = require("../models/job.model");
const User = require("../models/user.model");
const Resume = require("../models/resume.model");

// Route: /admin/add-job (GET)
router.get("/add-job", (req, res) => {
  res.send("Job adding form yahan hoga");
});

// Route: /admin/view-jobs (GET)
router.get("/view-jobs", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Route: /admin/users (GET)
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Route: /admin/resumes (GET)
router.get("/resumes", async (req, res) => {
  const resumes = await Resume.find();
  res.json(resumes);
});

module.exports = router;
