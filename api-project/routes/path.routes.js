module.exports = app => {
    const paths = require("../controllers/paths.controller.js");
    app.post("/upload/file", users.getAll);
    app.post("/upload/files/", users.getSingle);
    app.post("/user", users.create);
    app.put("/user", users.update);
 };
 