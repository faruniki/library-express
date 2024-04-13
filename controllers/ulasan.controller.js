const Ulasan = require('../models/ulasan.model');

const ulasanController = {};

ulasanController.create = async (req, res) => {
  try {
    const ulasan = await Ulasan.create(req.body);
    res.status(201).json(ulasan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

ulasanController.findAll = async (req, res) => {
  try {
    const ulasans = await Ulasan.find();
    res.json(ulasans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

ulasanController.findById = async (req, res) => {
  try {
    const ulasan = await Ulasan.findById(req.params.id);
    if (!ulasan) {
      return res.status(404).json({ message: 'Ulasan buku not found' });
    }
    res.json(ulasan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

ulasanController.update = async (req, res) => {
  try {
    const ulasan = await Ulasan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ulasan) {
      return res.status(404).json({ message: 'Ulasan buku not found' });
    }
    res.json(ulasan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

ulasanController.delete = async (req, res) => {
  try {
    const ulasan = await Ulasan.findByIdAndDelete(req.params.id);
    if (!ulasan) {
      return res.status(404).json({ message: 'Ulasan buku not found' });
    }
    res.json({ message: 'Ulasan buku deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = ulasanController;
