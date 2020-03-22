const router = require('express').Router();
const bookRoutes = require('./books');
const loaiSachRoutes = require('./LoaiSach');

router.use('/api/books', bookRoutes);
router.use('/api/loai-sach', loaiSachRoutes);

module.exports = router;