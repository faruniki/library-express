const mongoose = require('mongoose');

const ulasanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bukuId: { type: mongoose.Schema.Types.ObjectId, ref: 'Buku', required: true },
  ulasan: { type: String, required: true },
  rating: { type: Number, required: true }
});

const Ulasan = mongoose.model('Ulasan', ulasanSchema);

module.exports = Ulasan;
