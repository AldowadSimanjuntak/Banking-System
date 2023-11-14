const request = require('supertest');
const express = require('express');
const app = express();
const authRouter = require('../api/auth'); 

jest.mock('../utils/auth', () => ({
  encryptPassword: jest.fn((password) => Promise.resolve('hashedpassword')),
  checkPassword: jest.fn((password, hashedPassword) => Promise.resolve(password === 'correctpassword')),
}));

app.use(express.json());
app.use('/auth', authRouter);

describe('Authentication Routes', () => {
  it('should register a new user', async () => {
    const newUser = {
      email: 'testuser@example.com',
      password: 'correctpassword',
      name: 'Test User',
    };

    const response = await request(app)
      .post('/auth/register')
      .send(newUser);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Pengguna berhasil terdaftar');
    expect(response.body).toHaveProperty('user');
  });

  it('should handle registration error', async () => {

    jest.spyOn(authRouter, 'post').mockImplementation(() => {
      throw new Error('Email sudah digunakan');
    });

    const newUser = {
      email: 'existinguser@example.com',
      password: 'correctpassword',
      name: 'Existing User',
    };

    const response = await request(app)
      .post('/auth/register')
      .send(newUser);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'Email sudah digunakan');
  });

  it('should log in a user', async () => {
    const userCredentials = {
      email: 'testuser@example.com',
      password: 'correctpassword',
    };

    const response = await request(app)
      .post('/auth/login')
      .send(userCredentials);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'success');
    expect(response.body).toHaveProperty('message', 'Login berhasil');
    expect(response.body).toHaveProperty('user');
  });

  it('should handle login error', async () => {
    
    jest.spyOn(authRouter, 'post').mockImplementation(() => {
      throw new Error('Pengguna tidak ditemukan');
    });

    const userCredentials = {
      email: 'nonexistent@example.com',
      password: 'incorrectpassword',
    };

    const response = await request(app)
      .post('/auth/login')
      .send(userCredentials);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'Pengguna tidak ditemukan');
  });
});

