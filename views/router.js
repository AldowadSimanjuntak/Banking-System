const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const { encryptPassword, checkPassword } = require('../utils/auth');

const prisma = new PrismaClient();

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
                // Sukses, pindahkan ke halaman dashboard (akan diimplementasikan nanti)
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

module.exports = router;
