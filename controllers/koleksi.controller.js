const Koleksi = require('../models/koleksi.model');

const koleksiController = {};

koleksiController.create = async (req, res) => {
  try {
    const koleksi = await Koleksi.create(req.body);
    res.status(201).json(koleksi);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

koleksiController.findAll = async (req, res) => {
  try {
    const koleksis = await Koleksi.find();
    res.json(koleksis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

koleksiController.findById = async (req, res) => {
  try {
    const koleksi = await Koleksi.findById(req.params.id);
    if (!koleksi) {
      return res.status(404).json({ message: 'Koleksi buku not found' });
    }
    res.json(koleksi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

koleksiController.update = async (req, res) => {
  try {
    const koleksi = await Koleksi.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!koleksi) {
      return res.status(404).json({ message: 'Koleksi buku not found' });
    }
    res.json(koleksi);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

koleksiController.delete = async (req, res) => {
  try {
    const koleksi = await Koleksi.findByIdAndDelete(req.params.id);
    if (!koleksi) {
      return res.status(404).json({ message: 'Koleksi buku not found' });
    }
    res.json({ message: 'Koleksi buku deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = koleksiController;
