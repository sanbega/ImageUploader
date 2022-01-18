const express = require("express");
const aws = require("aws-sdk");
const hbs = require("hbs");
const router = require("./routes/upload");

const app = express();

app.use(router);

app.set("view engine", "hbs");
app.get("/home", (req, res) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + "/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now());
    },
  });

  const upload = multer({ storage: storage });

  upload(req, res, function (err) {
    if (err) {
      console.log("err", err);
      res.send({ ret: "err" });
      return;
    }
    console.log("res", res);
    res.send({ ret: "sucess" });
  });
});
app.get("/", function (req, res) {
  res.send("Welcome to the API project");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
