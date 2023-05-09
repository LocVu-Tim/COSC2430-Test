const express = require("express"); // Import Express Framework
const app = express(); // Store express in app
const path = require("path");
const port = 3000;

// Declare routes path
const vendorRoutes = require("./Routes/vendor");
const vendorProductRoutes = require("./Routes/vendorProducts");
const vendorLoginRoutes = require("./Routes/vendorLogin");

// Middleware execution for static files
app.use(express.static(path.join(__dirname, "public"))); // Serve static files
// Call bootstrap css file with class path
app.use(
  "/css",
  express.static(
    path.join(__dirname, "node_modules", "bootstrap", "dist", "css")
  )
);
// Intergrated EJS Template
app.set("view engine", "ejs");
app.set("views", "./views"); // setting config option for views folder

// routes to views
app.get("/", (req, res) => {
  res.render("index");
});

app.use(vendorRoutes);
app.use(vendorProductRoutes);
app.use(vendorLoginRoutes);

app.get("/Vendor-Sign-in", (req, res) => {
  res.render("Vendor/Sign-in");
});

// Starting routing
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
