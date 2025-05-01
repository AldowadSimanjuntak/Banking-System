const express = require('express');
const router = express.Router();
const { encryptPassword, checkPassword } = require('../utils/auth');
const { signToken } = require('../utils/jwt'); // Mengimpor fungsi JWT yang sudah Anda buat

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Rute untuk pendaftaran pengguna (POST /auth/register)
router.post('/register', async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Periksa apakah email sudah digunakan
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email sudah digunakan' });
    }

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

    // Setelah berhasil mendaftarkan pengguna, buat token JWT
    const token = signToken({ id: newUser.id, email: newUser.email, name: newUser.name });

    res.json({ message: 'Pengguna berhasil terdaftar', user: newUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal mendaftarkan pengguna' });
  }
});

// Rute untuk login (POST /auth/login)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Cari pengguna berdasarkan email
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'Pengguna tidak ditemukan' });
    }

    // Periksa apakah kata sandi cocok
    const passwordMatch = await checkPassword(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Kata sandi salah' });
    }

    // Jika login berhasil, buat token JWT
    const token = signToken({ id: user.id, email: user.email, name: user.name });

    res.json({ status: 'success', message: 'Login berhasil', user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal login' });
  }
});

module.exports = router;
