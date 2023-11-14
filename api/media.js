const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const imagekit = require ('../utils/imagekit')
const multerConfig = require('../utils/multer');



module.exports = {
    //const upload image ke local
    uploadImage: async (req, res) => {
        const ImageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    

    return res.status (200).json({
         status : true,
         message : 'success',
         data : {
              image_url: ImageUrl
            }
        })
    },
    //const upload image ke imagekit.io
    imagekitUpload: async (req,res)=> {
        try{
            //mengubah file menjadi string dengan encoding base64
            const stringFile = req.file.buffer.toString('base64');

            //process upload file  ke imagekit
            const uploadFile =  await imagekit.upload({
                fileName : req.file.originalname,
                file:stringFile
            })

            //mengembalikan respons ke client
            return res.status(200).json({
                status: 'OK',
                message : 'success',
                data :{
                    name : uploadFile.name,
                    url : uploadFile.url,
                    type: uploadFile.fileType
                }
            })
        } catch(err){
            throw(err);
        }
    }
}

