const router = require('express').Router();
const bookRoutes = require('./books');
const LoaiSachRoutes = require('./LoaiSach');
const NhaXuatBanRoutes = require('./NhaXuatBan');
const TacGiaRoutes = require('./TacGia');
const CodeDocSachRoutes = require('./CodeDocSach');

router.use('/api/books', bookRoutes);
router.use('/api/loai-sach', LoaiSachRoutes);
router.use('/api/nha-xuat-ban', NhaXuatBanRoutes);
router.use('/api/tac-gia', TacGiaRoutes);
router.use('/api/codes', CodeDocSachRoutes);

module.exports = router;