const express = require('express');
const pathController = require('../controllers/path.controller');
const documentUploader = require('../helper/document-uploader')
const checkAuth= require('../middleware/checkj-auth')
const router = express.Router();

router.post("/upload/:id",checkAuth.checkAuth, documentUploader.upload.single('file'), pathController.upload);

module.exports = router;
