const express = require('express');
const router = express.Router();

const users = [
  {
    id: 1,
    name: 'Aldowad',
  },
  {
    id: 2,
    name: 'Simanjuntak',
  },
];

// CREATE (Tambah pengguna baru)
router.post('/users', (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({
      status: 'fail',
      code: 400,
      message: 'Bad Request! Name is required',
    });
  } else {
    const newUser = {
      id: users.length + 1,
      name: name,
    };

    users.push(newUser);

    res.status(201).json({
      status: 'Success',
      code: 201,
      message: 'User added successfully',
      data: newUser,
    });
  }
});

// READ (Membaca semua pengguna)
router.get('/users', (req, res) => {
  if (!users.length) {
    res.status(200).json({
      status: 'Success',
      code: 200,
      message: 'Data Empty',
    });
  } else {
    res.status(200).json({
      status: 'Success',
      code: 200,
      message: 'Data Found',
      data: users,
    });
  }
});

// READ (Membaca pengguna berdasarkan ID)
router.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  if (isNaN(userId)) {
    res.status(400).json({
      status: 'fail',
      code: 400,
      message: 'Bad Request! Invalid ID',
    });
  } else {
    const user = users.find((u) => u.id === userId);

    if (!user) {
      res.status(404).json({
        status: 'fail',
        code: 404,
        message: 'User not found',
      });
    } else {
      res.status(200).json({
        status: 'Success',
        code: 200,
        message: 'Data Found',
        data: user,
      });
    }
  }
});

// UPDATE (Mengubah pengguna berdasarkan ID)
router.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  if (isNaN(userId)) {
    res.status(400).json({
      status: 'fail',
      code: 400,
      message: 'Bad Request! Invalid ID',
    });
  } else {
    const user = users.find((u) => u.id === userId);

    if (!user) {
      res.status(404).json({
        status: 'fail',
        code: 404,
        message: 'User not found',
      });
    } else {
      const { name } = req.body;

      if (!name) {
        res.status(400).json({
          status: 'fail',
          code: 400,
          message: 'Bad Request! Name is required',
        });
      } else {
        user.name = name; // Update nama pengguna

        res.status(200).json({
          status: 'Success',
          code: 200,
          message: 'User updated successfully',
          data: user,
        });
      }
    }
  }
});

// DELETE (Hapus pengguna berdasarkan ID)
router.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  if (isNaN(userId)) {
    res.status(400).json({
      status: 'fail',
      code: 400,
      message: 'Bad Request! Invalid ID',
    });
  } else {
    const index = users.findIndex((u) => u.id === userId);

    if (index === -1) {
      res.status(404).json({
        status: 'fail',
        code: 404,
        message: 'User not found',
      });
    } else {
      users.splice(index, 1);
      res.status(200).json({
        status: 'Success',
        code: 200,
        message: 'User deleted successfully',
      });
    }
  }
});

module.exports = router;
