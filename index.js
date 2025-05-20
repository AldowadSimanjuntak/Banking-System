const sendMail = require('./nodemailer/sendmail'); 
const express = require('express');
// modul Sentry
const Sentry = require("@sentry/node");
const { ProfilingIntegration } = require("@sentry/profiling-node");
// dependecies swagger
const swaggerJSON = require('./openapi.json')
const swaggerUI = require('swagger-ui-express')
//  modul Morgan
const morgan = require('morgan'); 
const cors = require('cors');

const path = require('path');
const multer = require('./utils/multer');
const mediaController = require('./api/media');
const multerConfig = require('./utils/multer');

const app = express();
const port = 3000;

const pool = require('./db'); 
const nasabahController = require('./controllers/nasabahController');

const transactionRouter = require('./api/Transaction'); 
const bankAccountRouter = require('./api/BankAccount'); 
const userRouter = require('./api/User'); 
const authRouter = require('./api/auth');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));

// API Routes
app.use('/nasabah', nasabahController);
app.use('/transaction', transactionRouter); 
app.use('/bank-account', bankAccountRouter); 
app.use('/user', userRouter); 
app.use('/auth', authRouter);

// Swagger Documentation
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Media upload routes
app.post('/upload/image', multerConfig.localImage.single('image'), mediaController.uploadImage);
app.post('/upload/imagekit', multerConfig.imagekitImage.single('image'), mediaController.imagekitUpload);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});