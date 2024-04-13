const mongoose = require("mongoose");

const kategoriSchema = new mongoose.Schema({
  nama_kategori: { type: String, required: true },
});

const Kategori = mongoose.model("Kategori", kategoriSchema);

module.exports = Kategori;
