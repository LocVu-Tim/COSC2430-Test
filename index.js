const express = require("express"); // Import Express Framework
const app = express(); // Store express in app
const path = require("path");
const port = 3000;

// Middleware execution for static files
module.exports = path.dirname(require.main.filename);
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

// Route
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/vendor", (req, res) => {
  res.render("vendor/vendor");
});
app.get("/vendor/products", (req, res) => {
  res.render("vendor/products");
});
app.get("/vendor/login", (req, res) => {
  res.render("vendor/login");
});
app.get("/vendor/signup", (req, res) => {
  res.render("vendor/signup");
});
app.get("/vendor/addProduct", (req, res) => {
  res.render("vendor/addProduct");
});
app.get("/vendor/profile", (req, res) => {
  res.render("vendor/profile");
});
app.get("/vendor/termService", (req, res) => {
  res.render("vendor/termService");
});
// Starting
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
