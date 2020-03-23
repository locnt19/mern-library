const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TacGiaSchema = new Schema({
  ten_tacgia: {
    type: String,
    required: true
  },
  trang_thai: {
    type: Boolean,
    default: true
  }
});

const TacGia = mongoose.model('TacGia', TacGiaSchema, 'Tac_Gia');

module.exports = TacGia;