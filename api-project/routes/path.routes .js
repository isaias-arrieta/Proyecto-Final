module.exports = app => {
    const paths = require("../controllers/path.controller.js");
    app.get("/file/:idPath", paths.getSingle);
    app.get("/files/:idUser", paths.getAll);
}