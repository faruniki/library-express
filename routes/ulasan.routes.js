const express = require('express');
const router = express.Router();
const ulasanController = require('../controllers/ulasan.controller');

router.post('/create', ulasanController.create);

router.get('/', ulasanController.findAll);

router.get('/:id', ulasanController.findById);

router.put('/:id', ulasanController.update);

router.delete('/:id', ulasanController.delete);

module.exports = router;