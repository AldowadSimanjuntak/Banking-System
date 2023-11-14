const request = require('supertest');
const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const bankAccountRoutes = require('../api/BankAccount');

app.use('/bank-account', bankAccountRoutes);

describe('Bank Account Routes', () => {
  let createdBankAccountId;

  afterAll(async () => {
    
    if (createdBankAccountId) {
      await prisma.bankAccount.delete({
        where: { id: createdBankAccountId },
      });
    }
    await prisma.$disconnect(); // Close Prisma client
  });

  it('should create a bank account', async () => {
    const bankAccountData = {
      bank_name: 'Bank ABC',
      account_number: '111',
      balance: 130020,
      userId: 5,
    };

    const response = await request(app)
      .post('/bank-account')
      .send(bankAccountData);

    expect(response.status).toBe(200);
    expect(response.body.Status).toBe('Success');
    expect(response.body.message).toBe('Akun bank berhasil dibuat');

    
    createdBankAccountId = response.body.bankAccount.id;
  });

  it('should retrieve all bank accounts', async () => {
    const response = await request(app).get('/bank-account');

    expect(response.status).toBe(200);
    expect(response.body.Status).toBe('Success');
    expect(response.body.message).toBe('Data semua akun bank berhasil diambil');
    expect(response.body.bankAccounts).toHaveLength(6); 
  });

  it('should retrieve a bank account by ID', async () => {
    if (!createdBankAccountId) {
      fail('Bank account ID not available');
    }

    const response = await request(app).get(`/bank-account/${createdBankAccountId}`);

    expect(response.status).toBe(200);
    expect(response.body.Status).toBe('Success');
    expect(response.body.message).toBe('Data akun bank berhasil diambil');
    expect(response.body.bankAccount.id).toBe(createdBankAccountId);
  });

  it('should update a bank account', async () => {
    if (!createdBankAccountId) {
      fail('Bank account ID not available');
    }

    const updatedData = {
      bank_name: 'Updated Bank',
      account_number: '99999999',
      balance: 2000,
    };

    const response = await request(app)
      .put(`/bank-account/${createdBankAccountId}`)
      .send(updatedData);

    expect(response.status).toBe(200);
    expect(response.body.Status).toBe('Success');
    expect(response.body.message).toBe('Data akun bank berhasil diperbarui');
  });

  it('should delete a bank account', async () => {
    if (!createdBankAccountId) {
      fail('Bank account ID not available');
    }

    const response = await request(app).delete(`/bank-account/${createdBankAccountId}`);

    expect(response.status).toBe(200);
    expect(response.body.Status).toBe('Success');
    expect(response.body.message).toBe('Data akun bank berhasil dihapus');
  });
});
