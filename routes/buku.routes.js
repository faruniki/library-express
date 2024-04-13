const express = require('express');
const router = express.Router();
const bukuController = require('../controllers/buku.controller');

router.post('/create', bukuController.create);

router.get('/', bukuController.findAll);

router.get('/:id', bukuController.findById);

router.put('/:id', bukuController.update);

router.delete('/:id', bukuController.delete);

module.exports = router;