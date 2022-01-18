const express = require("express");
const aws = require("aws-sdk");
const hbs = require("hbs");
const router = require("./routes/upload");

const app = express();

app.use(router);
app.use(express.static("public"));

app.set("view engine", "hbs");

app.get("/home", (req, res) => {
  res.render("home.hbs");
});

app.get("/", function (req, res) {
  res.send("Welcome to the API project");
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
