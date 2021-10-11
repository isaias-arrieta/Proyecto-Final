module.exports = app => {
    const users = require("../controllers/user.controller.js");
    app.get("/users", users.getAll);
    app.get("/users/:userId", users.getSingle);
    app.post("/users/create", users.create);
    app.post("/users/update", users.update);
}