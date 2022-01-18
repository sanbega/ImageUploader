const express = require("express");
const controller = require("../controllers/upload");

const router = express.Router();

/**
 * Ruta: /user GET
 */
router.post(`/upload`, controller.upload, controller.uploadFile);

module.exports = router;
