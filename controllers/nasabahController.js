const express = require('express');
const router = express.Router();

const pool = require('../db');


// Menampilkan semua nasabah
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM nasabah');
    if (rows.length === 0) {
      return res.status(200).json({ Status: 'Success', message: 'Data Empty', code: 200 });
    }
    res.status(200).json({ Status: 'Success', message: 'Data Found', code: 200, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data nasabah.' });
  }
});


// Menampilkan nasabah berdasarkan id_nasabah
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM nasabah WHERE id_nasabah = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Nasabah tidak ditemukan.', code: 404 });
    }
    res.status(200).json({Status: 'Success', message: 'Data Found', code: 200, data: rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data nasabah.' });
  }
});

// Membuat data nasabah baru dengan ID kustom
router.post('/', async (req, res) => {
  const { id_nasabah, nama_nasabah, alamat_nasabah, nomor_telepon } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO nasabah (id_nasabah, nama_nasabah, alamat_nasabah, nomor_telepon) VALUES ($1, $2, $3, $4) RETURNING *',
      [id_nasabah, nama_nasabah, alamat_nasabah, nomor_telepon]
    );
    res.status(201).json({ Status: 'Success', message: 'Data berhasil ditambah.', code: 201, data: rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan dalam membuat data nasabah.' });
  }
});

// Memperbarui data nasabah berdasarkan id_nasabah
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nama_nasabah, alamat_nasabah, nomor_telepon } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE nasabah SET nama_nasabah = $1, alamat_nasabah = $2, nomor_telepon = $3 WHERE id_nasabah = $4 RETURNING *',
      [nama_nasabah, alamat_nasabah, nomor_telepon, id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Nasabah tidak ditemukan.', code: 404 });
    }
    res.status(200).json({ Status: 'Success', message: 'Data berhasil diupdate.', code: 200, data: rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan dalam memperbarui data nasabah.' });
  }
});

// Menghapus data nasabah berdasarkan id_nasabah
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('DELETE FROM nasabah WHERE id_nasabah = $1 RETURNING *', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Nasabah tidak ditemukan.', code: 404 });
    }
    res.status(200).json({ Status: 'Success', message: 'Data nasabah berhasil dihapus.', code: 200 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan dalam menghapus data nasabah.' });
  }
});

module.exports = router;