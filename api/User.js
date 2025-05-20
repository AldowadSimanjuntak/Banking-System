const express = require('express');
const router = express.Router();
const { verifyToken } = require('../utils/jwt');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Middleware untuk verifikasi token
const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token tidak ditemukan' });
  }

  try {
    const user = await verifyToken(token);
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token tidak valid' });
  }
};

// Rute untuk mendapatkan profil pengguna
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'Pengguna tidak ditemukan' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data pengguna' });
  }
});

// Fungsi untuk membuat pengguna
const createUser = async (data) => {
  return await prisma.user.create({
    data,
  });
};

// Rute untuk membuat pengguna (POST)
router.post('/', async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const newUser = await createUser({
      email,
      name,
      password,
    });
    res.json({ Status: 'Success', message: 'Data pengguna berhasil ditambah.', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Status: 'Error', message: 'Gagal membuat pengguna.' });
  }
});


// Rute untuk mengambil semua pengguna
router.get('/', async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.json({Status: 'Success', message: 'Data semua User berhasil diambil.',transaction:allUsers});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal mengambil data pengguna.' });
  }
});

// Fungsi untuk mendapatkan pengguna berdasarkan ID
const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

// Fungsi untuk mengupdate pengguna berdasarkan ID
const updateUserById = async (id, data) => {
  return await prisma.user.update({
    where: { id },
    data,
  });
};

// Fungsi untuk menghapus pengguna berdasarkan ID
const deleteUserById = async (id) => {
  return await prisma.user.delete({
    where: { id },
  });
};

// Rute untuk mendapatkan pengguna berdasarkan ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await getUserById(parseInt(id));
    if (user) {
      res.json({ user });
    } else {
      res.status(404).json({ error: 'Pengguna tidak ditemukan.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data pengguna.' });
  }
});

// Rute untuk mengupdate pengguna berdasarkan ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { email, name, password } = req.body;

  try {
    const updatedUser = await updateUserById(parseInt(id), {
      email,
      name,
      password,
    });
    res.json({ Status: 'Success', message: 'Data pengguna berhasil diperbarui.', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal memperbarui pengguna.' });
  }
});

// Rute untuk menghapus pengguna berdasarkan ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await deleteUserById(parseInt(id));
    res.json({Status: 'Success',  message: 'Data pengguna berhasil dihapus.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal menghapus pengguna.' });
  }
});

module.exports = router;