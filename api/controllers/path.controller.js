function upload(req, res) {
    if (req.file.filename) {
        const path ={
            filetype: req.file.mimeType,
            name: req,
            filePath: req.file.filePath,
            userID: id
          }
        models.Paths.create(path).then(result => {

        });
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