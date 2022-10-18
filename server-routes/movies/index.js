const express = require("express");
const movies = require("../../api/data/movies");
const router = express.Router();


router.get("/", (req, res) => {
  res.status(200).json(movies);;
});

module.exports = router;
