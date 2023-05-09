const express = require("express"); // Import Express Framework
const path = require("path");
const router = express.Router();

router.get("/Vendor/Products", (req, res) => {
  const viewsCSS = {
    fileCSS: "/css/Vendor/vendorProducts.css",
  };
  res.render("Vendor/Products", viewsCSS);
});

module.exports = router;
