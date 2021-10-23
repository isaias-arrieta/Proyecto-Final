const express = require('express');
const pathController = require('../controllers/path.controller');
const documentUploader = require('../helper/document-uploader')
const checkAuth= require('../middleware/checkj-auth')
const router = express.Router();

router.post("/upload/:id",checkAuth.checkAuth, documentUploader.upload.array('files'), pathController.upload);
router.get("/:id", checkAuth.checkAuth, pathController.obtain);
router.get("/get/All", checkAuth.checkAuth, pathController.obtainAll);
router.delete("/delete/:id", checkAuth.checkAuth, pathController.deletePath);
module.exports = router;
