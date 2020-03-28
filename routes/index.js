const router = require('express').Router();
const SachRoutes = require('./Sach');
const LoaiSachRoutes = require('./LoaiSach');
const NhaXuatBanRoutes = require('./NhaXuatBan');
const TacGiaRoutes = require('./TacGia');
const CodeDocSachRoutes = require('./CodeDocSach');
const TaiKhoanRoutes = require('./TaiKhoan');

router.use('/api/sach', SachRoutes);
router.use('/api/loai-sach', LoaiSachRoutes);
router.use('/api/nha-xuat-ban', NhaXuatBanRoutes);
router.use('/api/tac-gia', TacGiaRoutes);
router.use('/api/codes', CodeDocSachRoutes);
router.use('/api/tai-khoan', TaiKhoanRoutes);

module.exports = router;