const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, process.cwd()+"/uploads");
    },
    filename: function(req, file, cb){
        cb(null, new Date().getTime()+ path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) =>{
    if(file.mimeType === 'image/jpeg' || file.mimeType === 'image/png'){
        cb(null, true);
    }else{
        cb(new Error('Unsupported files'), false);
    }
}

const upload = multer({
    storage: storage,
   
})

module.exports = {
    upload:upload
}