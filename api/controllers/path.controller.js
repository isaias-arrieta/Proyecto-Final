const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtsecret = require('../nodemon.json');

function upload(req, res) {
    const files = req.files;
    const id= req.params.id;
    if (Array.isArray(files) && files.length > 0) {
        req.files.forEach(file => {
            
            const path ={
                filetype: file.mimetype,
                name: file.originalname,
                filePath: file.filename,
                userID: id
              }
            models.Paths.create(path).then(result => {
                res.status(200).json({
                    message: "Carga existosa",
                    url: file.filePath
                });
            });
            
        });
       

    } else {
        res.status(500).json({
            message: "Algo salio mal",

        });

    }
}

function obtainAll(req, res) {  
    models.Paths.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}
function obtain(req, res) {
    const id= req.params.id;
    models.Paths.findByPk(id).then(result => {
        res.status(200).json(result);      
    }).catch(error => {
        res.status(500).json({
            message: "Error with specific user"
        })
    });
}

function deletePath(req, res){
    const id= req.params.id;
    models.Paths.destroy({where:{id:id}}).then(result => {
        res.status(200).json({
        message: "Path deleted",
        post: result
    });
    }).catch(error => {
        res.status(500).json({
        message: "Path deleted",
        error: error
       });
    })
}
module.exports = {
    upload:upload,
    obtain:obtain,
    obtainAll:obtainAll,
    deletePath:deletePath
}