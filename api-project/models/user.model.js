const sql = require("./db");

const User = function(user) {
   this.userId = user.userId;
   this.firstName = user.firstName;
   this.secondName = user.secondName || null;
   this.lastName = user.lastName;
   this.hash = user.hash;
   this.privileges = user.privileges;
}

User.getSingle = (userId, result) => {
   sql.query("SELECT * FROM users WHERE idUsers=?", userId, (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
      }
      result(null, res);
   });
};

User.getAll = result => {
   sql.query("SELECT * FROM Users", (err, res) => {
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
   sql.query("UPDATE users SET Name = ?, SecondName = ?, LastName = ?, HashPassword = ?, Administrator = ? WHERE idUser = ?", [userToUpdate.firstName, userToUpdate.secondName, userToUpdate.lastName, userToUpdate.phone, userToUpdate.gender, userId],
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
