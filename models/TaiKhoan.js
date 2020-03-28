const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaiKhoanSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  mat_khau: {
    type: String,
    required: true
  },
  vai_tro: {
    type: {
      ma_vaitro: String,
      ten_vaitro: String
    },
    default: {
      ma_vaitro: "user",
      ten_vaitro: "Người dùng"
    }
  },
  trang_thai: {
    type: Boolean,
    default: true
  }
});

const TaiKhoan = mongoose.model('TaiKhoan', TaiKhoanSchema, 'Tai_Khoan');

module.exports = TaiKhoan;