const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodeDocSachSchema = new Schema({
  ma_code: {
    type: String,
    required: true
  },
  danh_sach: {
    type: [{
      ma_sach: String,
      ten_sach: String,
      tac_gia: String
    }],
    default: null
  },
  han_su_dung: {
    type: Date,
    required: true
  },
  trang_thai: {
    type: Boolean,
    default: true
  }
});

const CodeDocSach = mongoose.model('CodeDocSach', CodeDocSachSchema, 'Code_DocSach');

module.exports = CodeDocSach;