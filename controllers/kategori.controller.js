const Kategori = require('../models/kategori.model');

const kategoriController = {};

kategoriController.create = async (req, res) => {
  try {
    const kategori = await Kategori.create(req.body);
    res.status(201).json(kategori);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

kategoriController.findAll = async (req, res) => {
  try {
    const kategoris = await Kategori.find();
    res.json(kategoris);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

kategoriController.findById = async (req, res) => {
  try {
    const kategori = await Kategori.findById(req.params.id);
    if (!kategori) {
      return res.status(404).json({ message: 'Kategori buku not found' });
    }
    res.json(kategori);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

kategoriController.update = async (req, res) => {
  try {
    const kategori = await Kategori.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!kategori) {
      return res.status(404).json({ message: 'Kategori buku not found' });
    }
    res.json(kategori);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

kategoriController.delete = async (req, res) => {
  try {
    const kategori = await Kategori.findByIdAndDelete(req.params.id);
    if (!kategori) {
      return res.status(404).json({ message: 'Kategori buku not found' });
    }
    res.json({ message: 'Kategori buku deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = kategoriController;
