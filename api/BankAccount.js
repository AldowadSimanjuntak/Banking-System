const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Fungsi untuk membuat akun bank
const createBankAccount = async (data) => {
  return await prisma.bankAccount.create({
    data,
  });
};

// Rute untuk membuat akun bank (POST)
router.post('/', async (req, res) => {
  const { bank_name, account_number, balance, userId } = req.body;

  try {
    const newBankAccount = await createBankAccount({
      bank_name,
      account_number,
      balance,
      userId,
    });
    res.json({ Status: 'Success', message: 'Akun bank berhasil dibuat.', bankAccount: newBankAccount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Status: 'Error', message: 'Gagal membuat akun bank.' });
  }
});

// Rute untuk mencari akun bank berdasarkan userId (GET)
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const bankAccounts = await prisma.bankAccount.findMany({
      where: {
        userId: parseInt(userId),
      },
    });
    if (bankAccounts.length > 0) {
      res.json({ Status: 'Success', message: 'Data akun bank berhasil diambil berdasarkan userId.', bankAccounts });
    } else {
      res.status(404).json({ Status: 'Error', message: 'Akun bank tidak ditemukan berdasarkan userId.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ Status: 'Error', message: 'Gagal mengambil data akun bank.' });
  }
});

// Rute untuk membaca semua akun bank (GET)
router.get('/', async (req, res) => {
  try {
    const allBankAccounts = await prisma.bankAccount.findMany();
    if (allBankAccounts.length > 0) {
      res.json({ Status: 'Success', message: 'Data semua akun bank berhasil diambil.', bankAccounts: allBankAccounts });
    } else {
      res.status(404).json({ Status: 'Error', message: 'Tidak ada data akun bank yang tersedia.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ Status: 'Error', message: 'Gagal mengambil data akun bank.' });
  }
});

// Rute untuk membaca akun bank berdasarkan ID (GET)
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const bankAccount = await prisma.bankAccount.findUnique({
      where: { id: parseInt(id) },
    });
    if (bankAccount) {
      res.json({ Status: 'Success', message: 'Data akun bank berhasil diambil.', bankAccount });
    } else {
      res.status(404).json({ Status: 'Error', message: 'Akun bank tidak ditemukan.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ Status: 'Error', message: 'Gagal mengambil data akun bank.' });
  }
});

// Rute untuk mengupdate akun bank berdasarkan ID (PUT)
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { bank_name, account_number, balance } = req.body; // Sertakan account_number dalam body

  try {
    const updatedBankAccount = await prisma.bankAccount.update({
      where: { id: parseInt(id) },
      data: {
        bank_name,
        account_number, // Sertakan account_number dalam data pembaruan
        balance,
      },
    });
    res.json({ Status: 'Success', message: 'Data akun bank berhasil diperbarui.', bankAccount: updatedBankAccount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Status: 'Error', message: 'Gagal memperbarui akun bank.' });
  }
});



// Rute untuk menghapus akun bank berdasarkan ID (DELETE)
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.bankAccount.delete({
      where: { id: parseInt(id) },
    });
    res.json({ Status: 'Success', message: 'Data akun bank berhasil dihapus.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Status: 'Error', message: 'Gagal menghapus akun bank.' });
  }
});

module.exports = router;