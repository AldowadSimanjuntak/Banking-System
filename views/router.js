const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const { encryptPassword, checkPassword } = require('../utils/auth');

const sendMailModule = require('../nodemailer/sendmail'); 
const sendMail = sendMailModule.sendMail;

// Rute untuk pendaftaran pengguna (POST /views/router/register)
router.post('/register', async (req, res) => {
    const { email, password, name } = req.body;

    try {
        // Periksa apakah email sudah digunakan
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            // Gagal, email sudah digunakan
            req.flash('error', 'Email sudah digunakan');
            res.redirect('/register');
        } else {
            // Enkripsi kata sandi
            const hashedPassword = await encryptPassword(password);

            // Buat pengguna baru
            const newUser = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    name,
                },
            });

            // Sukses, pindahkan ke halaman login
            req.flash('success', 'Pengguna berhasil terdaftar');
            res.redirect('/login');
        }
    } catch (error) {
        console.error(error);
        // Gagal mendaftarkan pengguna
        req.flash('error', 'Gagal mendaftarkan pengguna');
        res.redirect('/register');
    }
});


// Rute untuk login (POST /views/router/login)
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Cari pengguna berdasarkan email
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            // Gagal, pengguna tidak ditemukan
            req.flash('error', 'Pengguna tidak ditemukan');
            res.redirect('/login');
        } else {
            // Periksa apakah kata sandi cocok
            const passwordMatch = await checkPassword(password, user.password);

            if (!passwordMatch) {
                // Gagal, kata sandi salah
                req.flash('error', 'Kata sandi salah');
                res.redirect('/login');
            } else {
                // Sukses, pindahkan ke halaman dashboard
                req.flash('success', 'Login berhasil');
                res.redirect('/dashboard');
            }
        }
    } catch (error) {
        console.error(error);
        // Gagal login
        req.flash('error', 'Gagal login');
        res.redirect('/login');
    }
});

// Rute untuk mengecek email (POST /views/router/check-email)
router.post('/check-email', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (user) {
            // Email ditemukan, kirim email sebagai respons
            res.json({ userEmail: user.email });
            req.flash('success', 'Email berhasil ditemukan');
        } else {
            // Email tidak ditemukan
            res.status(404).json({ message: 'Email not found' });
        }
    } catch (error) {
        console.error(error);
        // Gagal mengecek email
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Rute untuk mengatur password baru (POST /views/router/set-new-password)
router.post('/set-new-password', async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        // Perbarui kata sandi pengguna
        const hashedPassword = await encryptPassword(newPassword);
        await prisma.user.update({
            where: { email },
            data: { password: hashedPassword },
        });

        // Sukses mengatur password baru, redirect ke halaman login
        req.flash('success', 'Password berhasil diubah');
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        // Gagal mengatur password baru
        req.flash('error', 'Gagal mengatur password baru');
        res.redirect('/resetpassword');
    }
});

// Rute ForgotPassword
router.post('/forgot-password', async (req, res) => {
    const { email, name } = req.body;

    try {
        // Kirim email ke template mail.ejs
        sendMail(email, name);
        // Sukses mengirim email, kirim respons JSON
        res.status(200).json({ status: 'ok', message: 'Confirmation successful. Please check your Email to continue your process.' });
    } catch (error) {
        console.error(error);
        // Gagal mengirim email, kirim respons JSON dengan status error
        res.status(500).json({ status: 'error', message: 'Gagal mengirim email konfirmasi reset password' });
    }
});




module.exports = router;
