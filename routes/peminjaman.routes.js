const express = require('express');
const router = express.Router();
const peminjamanController = require('../controllers/peminjaman.controller');

router.post('/create', peminjamanController.create);

router.get('/', peminjamanController.findAll);

router.get('/:id', peminjamanController.findById);

router.put('/:id', peminjamanController.update);

router.delete('/:id', peminjamanController.delete);

module.exports = router;