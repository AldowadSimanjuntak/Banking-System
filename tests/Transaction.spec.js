const request = require('supertest');
const express = require('express');
const app = express();

// Import route yang akan diuji
const transactionRouter = require('../api/Transaction');

app.use(express.json());
app.use('/transaction', transactionRouter);

describe('Transaction API', () => {
  it('should create a new transaction', async () => {
    const transactionData = {
      account_number: '12345',
      balance: 1000,
      transaction_detail: 'Purchase',
    };

    const response = await server
      .post('/transaction')
      .send(transactionData);

    expect(response.status).toBe(200);
    expect(response.body.Status).toBe('Success');
    expect(response.body.message).toBe('Transaksi berhasil dibuat');
    expect(response.body.transaction).toHaveProperty('id');
  });

  it('should retrieve all transactions', async () => {
    const response = await server.get('/transaction');

    expect(response.status).toBe(200);
    expect(response.body.Status).toBe('Success');
    expect(response.body.message).toBe('Data semua transaksi berhasil diambil');
    expect(Array.isArray(response.body.transactions)).toBe(true);
  });

  it('should retrieve a transaction by ID', async () => {
    // Ganti '1' dengan ID transaksi yang valid
    const response = await server.get('/transaction/1');

    expect(response.status).toBe(200);
    expect(response.body.Status).toBe('Success');
    expect(response.body.message).toBe('Data transaksi berhasil diambil');
    expect(response.body.transaction).toBeDefined();
  });

  it('should update a transaction by ID', async () => {
    // Ganti '1' dengan ID transaksi yang valid
    const updatedData = {
      account_number: '54321',
      balance: 2000,
      transaction_detail: 'Updated Purchase',
    };

    const response = await server
      .put('/transaction/1')
      .send(updatedData);

    expect(response.status).toBe(200);
    expect(response.body.Status).toBe('Success');
    expect(response.body.message).toBe('Data transaksi berhasil diperbarui');
    expect(response.body.transaction).toBeDefined();
  });

  it('should delete a transaction by ID', async () => {
    
    const response = await server.delete('/transaction/1');

    expect(response.status).toBe(200);
    expect(response.body.Status).toBe('Success');
    expect(response.body.message).toBe('Data transaksi berhasil dihapus');
  });
});
