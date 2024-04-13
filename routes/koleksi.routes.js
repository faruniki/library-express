const express = require('express');
const router = express.Router();
const koleksiController = require('../controllers/koleksi.controller');

router.post('/create', koleksiController.create);

router.get('/', koleksiController.findAll);

router.get('/:id', koleksiController.findById);

router.put('/:id', koleksiController.update);

router.delete('/:id', koleksiController.delete);

module.exports = router;