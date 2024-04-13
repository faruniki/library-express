const mongoose = require('mongoose');

const peminjamanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bukuId: { type: mongoose.Schema.Types.ObjectId, ref: 'Buku', required: true },
  tanggal_peminjaman: { type: Date },
  tanggal_pengembalian: { type: Date },
  status_peminjaman: { type: String, enum: ['pending', 'returned'], default: 'pending' }
});

const Peminjaman = mongoose.model('Peminjaman', peminjamanSchema);

module.exports = Peminjaman;
