const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SachSchema = new Schema({
  sku: {
    type: String,
    required: true
  },
  ten_sach: {
    type: String,
    required: true
  },
  tac_gia: {
    type: {
      ma_tacgia: String,
      ten_tacgia: String
    },
    required: true
  },
  ngay_xuatban: {
    type: Date,
    required: true
  },
  nha_xuatban: {
    type: {
      ma_nxb: String,
      ten_nxb: String
    },
    required: true
  },
  so_trang: {
    type: Number,
    default: null
  },
  danh_gia: {
    type: Number,
    default: null
  },
  gioithieu_ngan: {
    type: String,
    default: null
  },
  loai_sach: {
    type: {
      ma_loai: String,
      ten_loai: String
    },
    default: null
  },
  an_hien: {
    type: Boolean,
    default: true
  },
  trang_thai: {
    type: Boolean,
    default: true
  }
});

const Sach = mongoose.model('Sach', SachSchema, 'Sach');

module.exports = Sach;