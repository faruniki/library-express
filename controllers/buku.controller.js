const Buku = require('../models/buku.model');

const bukuController = {};

const handleResponse = (res, statusCode, data) => {
  res.status(statusCode).json(data);
};

const handleError = (res, statusCode, error) => {
  res.status(statusCode).json({ message: error.message });
};

bukuController.create = async (req, res) => {
  try {
    const buku = await Buku.create(req.body);
    handleResponse(res, 201, buku);
  } catch (error) {
    handleError(res, 400, error);
  }
};

bukuController.findAll = async (req, res) => {
  try {
    const bukus = await Buku.find();
    handleResponse(res, 200, bukus);
  } catch (error) {
    handleError(res, 500, error);
  }
};

bukuController.findById = async (req, res) => {
  try {
    const buku = await Buku.findById(req.params.id);
    if (!buku) {
      return handleError(res, 404, new Error('Buku not found'));
    }
    handleResponse(res, 200, buku);
  } catch (error) {
    handleError(res, 500, error);
  }
};

bukuController.update = async (req, res) => {
  try {
    const buku = await Buku.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!buku) {
      return handleError(res, 404, new Error('Buku not found'));
    }
    handleResponse(res, 200, buku);
  } catch (error) {
    handleError(res, 400, error);
  }
};

bukuController.delete = async (req, res) => {
  try {
    const buku = await Buku.findByIdAndDelete(req.params.id);
    if (!buku) {
      return handleError(res, 404, new Error('Buku not found'));
    }
    handleResponse(res, 200, { message: 'Buku deleted' });
  } catch (error) {
    handleError(res, 500, error);
  }
};

module.exports = bukuController;
