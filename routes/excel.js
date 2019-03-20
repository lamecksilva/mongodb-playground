const router = require("express").Router();
const multer = require("multer");

router.get("/", (req, res) => {
  res.json({ msg: "Tey" });
});

module.exports = router;
