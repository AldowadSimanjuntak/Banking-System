const multer = require('multer');
const path = require('path')

const filename = (req, file, callback) => {
    const filename = Date.now() + path.extname(file.originalname);
    callback(null, filename)
}

const generateStorage = (destination) => {
    return multer.diskStorage({
        destination: (req, file, callback) =>{
        callback(null, destination)
        },
        filename
    })
};

// function untuk handling data ke local
const localMulter = multer({
        storage: generateStorage('./public/images'),
        fileFilter: (req, file, callback) => {
            const allowedMimeType = ['image/jpeg','image/jpg','image/png']

            if (allowedMimeType.includes(file.mimetype)){
                callback(null, true)
            } else {
                const err = new Error(`Only ${allowedMimeType.join(',')}allowed to upload`)
                callback(err,false)
            }
        },
        onError: (err,next)=> {
            next(err);
        }
    })
// function untuk handling data ke imagekit.io
const imagekitMulter = multer({
        storage: multer.memoryStorage(), // Gunakan memory storage agar file disimpan di memori
        fileFilter: (req, file, callback) => {
          const allowedMimeType = ['image/jpeg', 'image/jpg', 'image/png'];
      
          if (allowedMimeType.includes(file.mimetype)) {
            callback(null, true);
          } else {
            const err = new Error(`Only ${allowedMimeType.join(',')} allowed to upload`);
            callback(err, false);
          }
        },
        onError: (err, next) => {
          next(err);
        },
      });
      
      module.exports = {
        localImage: localMulter,
        imagekitImage: imagekitMulter,
      };
