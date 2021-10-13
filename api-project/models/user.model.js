const sql = require("./db");

const User = function(user) {
   this.firstName = user.firstName;
   this.middleName = user.middleName || null;
   this.lastName = user.lastName;
   this.email = user.email;
   this.hash = user.hash;
   this.createdAt = user.createdAt;
   this.updatedAt = user.updatedAt || null;
}

User.getSingle = (userId, result) => {
   sql.query("SELECT * FROM users WHERE id=?", userId, (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
      }
      result(null, res);
   });
};

User.getAll = result => {
   sql.query("SELECT * FROM users", (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
      }
      result(null, res);
   });
};

User.create = (newUser, result) => {
   sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
      }

      console.log("created user: ", {id: res.insertId});
      result(null, res);
   });
};

User.update = (userId, userToUpdate, result) => {
   sql.query("UPDATE users SET firstName = ?, middletName = ?,, lastName = ?, email = ?, hash = ? WHERE id = ?", [userToUpdate.firstName,  userToUpdate.middleName, userToUpdate.lastName, userToUpdate.email, userToUpdate.hash, userId],
      (err, res) => {
         if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
         }

         if (res.affectedRows == 0) {
            // user not found
            result({kind: "user_not_found"}, null);
            return;
         }

         console.log("updated user: ", userId);
         result(null, res);
      }
   )
};

module.exports = User;
