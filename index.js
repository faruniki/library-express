const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth.routes');
const profileRoutes = require('./routes/profile.routes');
const bukuRoutes = require('./routes/buku.routes');
const ulasanRoutes = require('./routes/ulasan.routes');
const peminjamanRoutes = require('./routes/peminjaman.routes');
const koleksiRoutes = require('./routes/koleksi.routes');
const kategoriRoutes = require('./routes/kategori.routes');

const databaseConfig = require('./config/db.config');

const PORT = process.env.PORT || 4000;
const app = express();

// Cors
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(databaseConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

app.use('/api/buku', bukuRoutes);
app.use('/api/ulasan', ulasanRoutes);
app.use('/api/peminjaman', peminjamanRoutes);
app.use('/api/koleksi', koleksiRoutes);
app.use('/api/kategori', kategoriRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
