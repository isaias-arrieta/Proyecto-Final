function upload(req, res) {
    if (req.files.length >= 0) {
        req.files.forEach(file => {
            const id= req.params.id;
            const path ={
                filetype: file.mimeType,
                name: file.filename,
                filePath: file.filePath,
                userID: id
              }
            models.Paths.create(path).then(result => {
                res.status(200).json({
                    message: "Carga existosa",
                    url: req.filename
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