const router = require('express').Router();
const bookRoutes = require('./books');
const loaiSachRoutes = require('./LoaiSach');
const NhaXuatBanRoutes = require('./NhaXuatBan');

router.use('/api/books', bookRoutes);
router.use('/api/loai-sach', loaiSachRoutes);
router.use('/api/nha-xuat-ban', NhaXuatBanRoutes);

module.exports = router;