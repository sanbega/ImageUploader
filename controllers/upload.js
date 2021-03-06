const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const path = require("path");
require("dotenv").config();

const s3 = new aws.S3({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  region: "sa-east-1",
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "upload-project1",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      console.log(file);
      cb(null, file.fieldname + "-" + uniqueSuffix);
    },
  }),
});

exports.upload = upload.single("myFile");

exports.uploadFile = (req, res) => {
  res.json({ url: req.file.location });
};
