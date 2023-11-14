const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = process.env;

function auth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      status: 'failed',
      message: 'You are not authorized',
      data: null,
    });
  }

  jwt.verify(authorization, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: 'failed',
        message: 'You are not authorized',
        err: err.message,
        data: null,
      });
    }

    req.user = decoded;
    next();
  });
}

function signToken(user) {
  const token = jwt.sign(user, JWT_SECRET_KEY, { expiresIn: '1h' }); // Perhatikan bahwa expiresIn adalah objek
  return token;
}

module.exports = {
  auth,
  signToken,
};
