const express = require('express');
const router = express.Router();
const kategoriController = require('../controllers/kategori.controller');

router.post('/create', kategoriController.create);

router.get('/', kategoriController.findAll);

router.get('/:id', kategoriController.findById);

router.put('/:id', kategoriController.update);

router.delete('/:id', kategoriController.delete);

module.exports = router;