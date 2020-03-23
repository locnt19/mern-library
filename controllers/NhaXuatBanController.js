const NhaXuatBan = require('../models/NhaXuatBan');

// Defining all methods and business logic for routes
module.exports = {
  // GET
  loadList: function (req, res) {
    NhaXuatBan.find({
        ...req.query,
        trang_thai: 'true'
      })
      .then(item => res.json(item))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    NhaXuatBan.findById(req.params.id)
      .then(item => res.json(item))
      .catch(err => res.status(422).json(err));
  },

  // POST
  create: function (req, res) {
    NhaXuatBan.create(req.body)
      .then(item => res.json(item))
      .catch(err => res.status(422).json(err));
  },

  // PUT
  update: function (req, res) {
    NhaXuatBan.findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(item => res.json(item))
      .catch(err => res.status(422).json(err));
  },

  // DELETE
  remove: function (req, res) {
    NhaXuatBan.findOneAndUpdate({
        _id: req.params.id
      }, {
        trang_thai: false
      })
      .then(itemList => res.json(itemList))
      .catch(err => res.status(422).json(err));
  }
};