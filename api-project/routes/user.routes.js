module.exports = app => {
   const users = require("../controllers/user.controller.js");
   app.get("/users", users.getAll);
   app.get("/user/:userId", users.getSingle);
   app.post("/user", users.create);
   app.put("/user", users.update);
};
