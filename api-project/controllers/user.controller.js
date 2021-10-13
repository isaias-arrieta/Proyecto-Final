const User = require("../models/user.model.js");

exports.getAll = (res) => {
   User.getAll((err, data) => {
      if (err) {
         res.status(500).send({
            message: err.message || "Server error getting all users"
         });
      }
      else {
         res.send(data);
      }
   });
};

exports.getSingle = (req, res) => {

   if (!req.params.userid) {
      res.status(400).send({
         message: "Error: user id not specified, send parameter 'id'"
      })
   }

   User.getSingle(req.params.userId, (err, data) => {
      if (err) {
         res.status(500).send({
            message: err.message || "Server error getting the user"
         });
      }
      else {
			if (data.length) {
				res.send(data);
			}
			else {
				res.status(404).send({
					message: "user not found"
				});
			}
      }
   });
};

exports.create = (req, res) => {

   if (!req.body.firstName) {
      res.status(400).send({
         message: "Error: firstName can't be empty"
      });
   }
   if (!req.body.middleName) {
      res.status(400).send({
         message: "Error: lastName can't be empty"
      });
   }

   if (!req.body.lastName) {
      res.status(400).send({
         message: "Error: lastName can't be empty"
      });
   }

   if (!req.body.email) {
      res.status(400).send({
         message: "Error: gender can't be empty"
      });
   }
   if (!req.body.hash) {
      res.status(400).send({
         message: "Error: gender can't be empty"
      });
   }
   const user = new User({
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      email: req.body.email ,
      hash: req.body.hash,
      createdAt: req.body.createdAt
   })

   User.create(user, (err, data) => {
      if (err) {
         res.status(500).send({
            message: err.message || "Server error while creating user"
         });
      }  
      else {
         res.send(
            {
               message: "user created successfully",
               id: data.insertId
            }
         );
      }
   });
};

exports.update = (req, res) => {

   if (!req.body.firstName) {
      res.status(400).send({
         message: "Error: firstName can't be empty"
      });
   }
   if (!req.body.middleName) {
      res.status(400).send({
         message: "Error: lastName can't be empty"
      });
   }

   if (!req.body.lastName) {
      res.status(400).send({
         message: "Error: lastName can't be empty"
      });
   }

   if (!req.body.email) {
      res.status(400).send({
         message: "Error: gender can't be empty"
      });
   }
   if (!req.body.hash) {
      res.status(400).send({
         message: "Error: gender can't be empty"
      });
   }
   
   console.log("about to update");

   User.update(
      req.body.id,
      new User(req.body),
      (err, data) => {
         if (err) {
            if (err.kind == 'user_not_found') {
               res.status(404).send({
                  message: "user id not found in the database"
               });
            }
            else {
               res.status(500).send();
            }
         }
         else {
            console.log("send update data");
            res.send({
               message: 'user updated successfully',
               id: req.body.id
            });
         }
      }
   );
};
