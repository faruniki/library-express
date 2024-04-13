const Buku = require('../models/buku.model');

const bukuController = {};

bukuController.create = async (req, res) => {
  try {
    const buku = await Buku.create(req.body);
    res.status(201).json(buku);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

bukuController.findAll = async (req, res) => {
  try {
    const bukus = await Buku.find();
    res.json(bukus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

bukuController.findById = async (req, res) => {
  try {
    const buku = await Buku.findById(req.params.id);
    if (!buku) {
      return res.status(404).json({ message: 'Buku not found' });
    }
    res.json(buku);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

bukuController.update = async (req, res) => {
  try {
    const buku = await Buku.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!buku) {
      return res.status(404).json({ message: 'Buku not found' });
    }
    res.json(buku);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

bukuController.delete = async (req, res) => {
  try {
    const buku = await Buku.findByIdAndDelete(req.params.id);
    if (!buku) {
      return res.status(404).json({ message: 'Buku not found' });
    }
    res.json({ message: 'Buku deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = bukuController;
