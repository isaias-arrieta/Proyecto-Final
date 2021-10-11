const sql = require("./db");

const Path = function(path) {
   this.idPaths = path.idPaths;
   this.NameFile = path.NameFile
   this.pathDirectory = path.pathDirectory
   this.fileType = path.fileType;
   this.idUser = path.idUser;
   this.createdAt = path.createdAt;

}

Path.getAll = (idUser, result) => {
   sql.query("SELECT * FROM Paths WHERE idUsers=?", idUser, (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
      }
      result(null, res);
   });
};

Path.getSingle = (idPaths, result) => {
   sql.query("SELECT * FROM Paths WHERE idPaths=?",idPaths, (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
      }
      result(null, res);
   });
};

Path.create = (newDoc, result) => {
   sql.query("INSERT INTO Paths SET ?", newDoc, (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
      }

      console.log("created user: ", {id: res.insertId});
      result(null, res);
   });
};

User.update = (userToUpdate, result) => {
   sql.query("UPDATE users SET firstName = ?, lastName = ?, location = ?, phone = ?, gender = ? WHERE id = ?", [userToUpdate.firstName, userToUpdate.lastName, userToUpdate.location, userToUpdate.phone, userToUpdate.gender, userId],
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

module.exports = Path;
