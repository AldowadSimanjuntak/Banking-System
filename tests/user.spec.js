const request = require('supertest');
const app = require('../api/User'); 

describe('User Routes', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/user')
      .send({ email: 'test@test.com', name: 'Test User', password: 'testpassword' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('Status', 'Success');
  });

  it('should get all users', async () => {
    const res = await request(app).get('/user');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('Status', 'Success');
  });

  it('should get a user by id', async () => {
    const res = await request(app).get('/user/20');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
  });

  it('should update a user by id', async () => {
    const res = await request(app)
      .put('/user/20') 
      .send({ email: 'updated@test.com', name: 'Updated User', password: 'updatedpassword' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Data pengguna berhasil diperbarui.');
  });

  it('should delete a user by id', async () => {
    const res = await request(app).delete('/user/20'); 
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Data pengguna berhasil dihapus.');
  });
});
