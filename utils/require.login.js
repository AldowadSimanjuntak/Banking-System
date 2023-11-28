// middlewares/requireLogin.js
const requireLogin = (req, res, next) => {
    // Jika pengguna sudah login, lanjutkan ke rute selanjutnya
    if (req.isAuthenticated()) {
      return next();
    }
    // Jika pengguna belum login, redirect ke halaman login
    res.redirect('/login');
  };
  
  module.exports = requireLogin;
  