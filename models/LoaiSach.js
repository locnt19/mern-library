const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loaiSachSchema = new Schema({
  ten_loai: {
    type: String,
    required: true
  },
  trang_thai: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const LoaiSach = mongoose.model('LoaiSach', loaiSachSchema, 'Loai_Sach');

module.exports = LoaiSach;