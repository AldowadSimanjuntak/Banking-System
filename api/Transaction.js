const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const createTransaction = async (data) => {
  return await prisma.transaction.create({
    data,
  });
};

// Rute untuk membuat transaksi
router.post('/', async (req, res) => {
  const { account_number, balance, transaction_detail } = req.body;

  try {
    const newTransaction = await createTransaction({
      account_number,
      balance,
      transaction_detail,
    });
    res.json({ Status: 'Success', message: 'Transaksi berhasil dibuat.', transaction: newTransaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Status: 'Error', message: 'Gagal membuat transaksi.' });
  }
});


// Rute untuk membaca semua transaksi
router.get('/', async (req, res) => {
  try {
    const allTransactions = await prisma.transaction.findMany();
    res.json({ Status: 'Success', message: 'Data semua transaksi berhasil diambil.', transactions: allTransactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Status: 'Error', message: 'Gagal mengambil data transaksi.' });
  }
});


// Rute untuk membaca transaksi berdasarkan ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await prisma.transaction.findUnique({
      where: { id: parseInt(id) },
    });
    if (transaction) {
      res.json({ Status: 'Success', message: 'Data transaksi berhasil diambil.', transaction });
    } else {
      res.status(404).json({ Status: 'Error', message: 'Transaksi tidak ditemukan.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ Status: 'Error', message: 'Gagal mengambil data transaksi.' });
  }
});

// Rute untuk mengupdate transaksi berdasarkan ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { account_number, balance, transaction_detail } = req.body;

  try {
    const updatedTransaction = await prisma.transaction.update({
      where: { id: parseInt(id) },
      data: {
        account_number,
        balance,
        transaction_detail,
      },
    });
    res.json({ Status: 'Success', message: 'Data transaksi berhasil diperbarui.', transaction: updatedTransaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Status: 'Error', message: 'Gagal memperbarui transaksi.' });
  }
});


// Rute untuk menghapus transaksi berdasarkan ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.transaction.delete({
      where: { id: parseInt(id) },
    });
    res.json({ Status: 'Success', message: 'Data transaksi berhasil dihapus.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Status: 'Error', message: 'Gagal menghapus transaksi.' });
  }
});
  





module.exports = router;