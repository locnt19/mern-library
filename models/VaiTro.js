const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VaiTroSchema = new Schema({
  ma_vaitro: {
    type: String,
    required: true
  },
  ten_vaitro: {
    type: String,
    required: true
  },
  trang_thai: {
    type: Boolean,
    default: true
  }
});

const VaiTro = mongoose.model('VaiTro', VaiTroSchema, 'Vai_Tro');

module.exports = VaiTro;