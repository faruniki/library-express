const Peminjaman = require('../models/peminjaman.model');

const peminjamanController = {};

peminjamanController.create = async (req, res) => {
  try {
    const peminjaman = await Peminjaman.create(req.body);
    res.status(201).json(peminjaman);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

peminjamanController.findAll = async (req, res) => {
  try {
    const peminjamans = await Peminjaman.find();
    res.json(peminjamans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

peminjamanController.findById = async (req, res) => {
  try {
    const peminjaman = await Peminjaman.findById(req.params.id);
    if (!peminjaman) {
      return res.status(404).json({ message: 'Peminjaman not found' });
    }
    res.json(peminjaman);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

peminjamanController.update = async (req, res) => {
  try {
    const peminjaman = await Peminjaman.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!peminjaman) {
      return res.status(404).json({ message: 'Peminjaman not found' });
    }
    res.json(peminjaman);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

peminjamanController.delete = async (req, res) => {
  try {
    const peminjaman = await Peminjaman.findByIdAndDelete(req.params.id);
    if (!peminjaman) {
      return res.status(404).json({ message: 'Peminjaman not found' });
    }
    res.json({ message: 'Peminjaman deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = peminjamanController;
