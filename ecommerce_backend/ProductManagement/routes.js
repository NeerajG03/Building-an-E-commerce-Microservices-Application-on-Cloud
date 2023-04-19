const express = require("express");
const router = express.Router();

// Routes
router.post("/addproduct", (req, res) => {
  res.send("addproduct");
});

router.patch("/editproduct", (req, res) => {
  res.send("editproduct");
});

router.delete("/deleteproduct", (req, res) => {
  res.send("deleteproduct");
});

router.get("/getproduct", (req, res) => {
  res.send("getproduct");
});

module.exports = router;
