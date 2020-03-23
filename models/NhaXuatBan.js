const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NhaXuatBanSchema = new Schema({
  ten_nxb: {
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

const NhaXuatBan = mongoose.model('NhaXuatBan', NhaXuatBanSchema, 'Nha_Xuat_Ban');

module.exports = NhaXuatBan;