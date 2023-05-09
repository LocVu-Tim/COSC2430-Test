const express = require("express"); // Import Express Framework
const path = require("path");
const router = express.Router();

router.get("/Vendor", (req, res) => {
  const viewsCSS = {
    fileCSS: "/css/Vendor/main.css",
  };
  res.render("Vendor/Vendor", viewsCSS);
});

module.exports = router;
