const express = require("express"); // Import Express Framework
const path = require("path");
const router = express.Router();

router.get("/Vendor/Login", (req, res) => {
  const viewsCSS = {
    fileCSS: "/css/Vendor/login.css",
  };
  res.render("Vendor/Login", viewsCSS);
});

module.exports = router;
