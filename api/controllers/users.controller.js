const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtsecret = require('../nodemon.json');

function signUp(req, res){
    models.Users.findOne({where:{email:req.body.email}}).then(result => {
        if(result){
            res.status(409).json({
                message: "Email already exist"
            });
        }else{
            bcryptjs.genSalt(10, function(err, salt){
                bcryptjs.hash(req.body.hash, salt, function(err, hash){
                    const user = {
                        name: req.body.name,
                        middleName: req.body.middleName,
                        LastName: req.body.LastName,
                        email: req.body.email,
                        hash: hash,
                        administrator: req.body.administrator
                    }
                    models.Users.create(user).then(result =>{
                        res.status(201).json({
                            message: "User created successfully",
                        });
                    }).catch(error => {
                        res.status(500).json({
                            message: "Error creating user 1",
                            error: error
                        })
                    });
                })  
            })  
        }
    }).catch(error => {
        res.status(500).json({
            message: "Error creating user 2",
            error: error
        });
    });
}

function login(req, res){
    models.Users.findOne({where:{email: req.body.email}}).then(Users => {
        if(Users === null){
            res.status(401).json({
                message: "Invalid credentials",
            });
        }else{
            bcryptjs.compare(req.body.hash, Users.hash, function(err, result){
                if(result){
                    const token = jwt.sign({
                        email: Users.email,
                        userId: Users.id
                    }, 'secret', function(err, token){
                        res.status(200).json({
                            message: "Authentication successful!",
                            token: token
                        });
                    });
                }else{
                    res.status(401).json({
                        message: "Invalid credentials!",
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
        });
    });
}

function getProfile(req, res){
    const id= req.params.id;
    models.Users.findByPk(id).then(result => {
        res.status(200).json(result);      
    }).catch(error => {
        res.status(500).json({
            message: "Error with specific user"
        })
    });
}
function allProfiles(req, res){
    models.Users.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}
function updateUser(req, res){
    const id= req.params.id;
    const updatedUser = {
        name: req.body.name,
        middleName: req.body.middleName,
        LastName: req.body.LastName,
        email: req.body.email,
        administrator: req.body.administrator
    }
   models.Users.update(updatedUser,{where: {id:id}}).then(result =>{
       res.status(200).json({
        message: "User updated",
        Users: result
       });
   }).catch(error => {
        res.status(500).json({
        message: "User updated",
        error: error
       });
   })
}

function deleteUser(req, res){
    const id= req.params.id;
    models.Users.destroy({where:{id:id}}).then(result => {
        res.status(200).json({
        message: "User updated",
        post: result
    });
    }).catch(error => {
        res.status(500).json({
        message: "User updated",
        error: error
       });
    })
}
module.exports = {
    login: login,
    signUp:signUp,
    getProfile:getProfile,
    allProfiles:allProfiles,
    updateUser:updateUser,
    deleteUser:deleteUser
}