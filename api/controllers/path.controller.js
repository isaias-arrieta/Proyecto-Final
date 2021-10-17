function upload(req, res) {
    if (req.file.filename) {
        const path ={
            filetype: req.file.mimeType,
            name: req.file.filename,
            filePath: req.file.filePath,
            userID: req.file.userID
          }
          models.Paths.create(pqth).then(result =>{
            res.status(201).json({
                message: "User created successfully",
            });
        }).catch(error => {
            res.status(500).json({
                message: "Error creating user 1",
                error: error
            })
        });      
    } else {
        res.status(500).json({
            message: "Algo salio mal",

        });

    }
}

function obtainAll(req, res) {
    if (req.file.filename) {
        res.status(200).json({
            message: "Carga existosa",
            url: req.filename
        });
    } else {
        res.status(500).json({
            message: "Algo salio mal",

        });

    }
}
function obtain(req, res) {
    if (req.file.filename) {
        res.status(200).json({
            message: "Carga existosa",
            url: req.filename
        });
    } else {
        res.status(500).json({
            message: "Algo salio mal",

        });

    }
}


module.exports = {
    upload:upload
}