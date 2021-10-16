const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function signUp(req, res){
    models.users.findOne({where:{email:req.body.email}}).then(result => {
        if(result){
            res.status(409).json({
                message: "Email already exist"
            });
        }else{
            bcryptjs.genSalt(10, function(){
                bcryptjs.hash(req.body.administrator, salt, function(err, hash){
                    const user = {
                        name: req.body.name,
                        middleName: req.body.middleName,
                        LastName: req.body.LastName,
                        email: req.body.email,
                        hash: hash,
                        administrator: req.body.administrator
                    }
                    models.users.create(user).then(result =>{
                        res.status(200).json(result);
                    }).catch(error => {
                        res.status(500).json({
                            message: "Error creating user"
                        })
                    });
                })  
            })  
        }
    }).catch(error => {
        res.status(500).json({
            message: "Error creating user"
        })
    });
}
function login(req,res){
    models.users.findOne({where:{email:req.body.email}}).then(user => {
        if(user ===null){
            res.status(401).json({
                message:"invalid credentials",
            });
        }else{
            bcryptjs.compare(req.body.hash, user.hash, function(err, result){
                if(result){
                    const token =jwt.sign({
                        email: user.email,
                        userid: user.id,
                    },process.env.JWT_KEY, function(err, token){
                        res.status(200).json({
                            message:"Authentication sucess",
                            token: token
                        });
                    });
                }else{
                    res.status(500).json({
                        message:"invalid credentials",
                    });
                }
            })
        }
    }).catch(error=> {

    })
}

function getProfile(req, res){
    const id= req.params.id;
    models.users.findByPK(id).then(result => {
        res.status(200).json({
            message: "User created sucessfully"
        });        
    }).catch(error => {
        res.status(500).json({
            message: "Error with specific user"
        })
    });
}
function allProfiles(req, res){
    models.users.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Error retrieveing all users"
        })
    });
}
function updateUser(req, res){
    const id= req.params.id;
    const updatedUser = {
        name: req.body.name,
        middleName: req.body.middleName,
        LastName: req.body.LastName,
        email: req.body.email,
        hash: req.body.hash,
        administrator: req.body.administrator
    }
   models.post.update(updatedUser,{where: {id:id}}).then(result =>{
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

function deleteUser(req, res){
    const id= req.params.id;
    models.users.destroy({where:{id:id}}).then(result => {
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