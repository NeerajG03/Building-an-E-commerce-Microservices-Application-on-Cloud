const express = require("express");
const router = express.Router();

// Routes
router.get("/getprofile", (req, res) => {
  res.send("getprofile");
});

router.post("/login", (req, res) => {
  res.send("login");
});

router.post("/register", (req, res) => {
  res.send("register");
});

router.patch("/updateprofile", (req, res) => {
  res.send("updateprofile");
});

module.exports = router;
