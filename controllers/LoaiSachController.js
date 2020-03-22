const LoaiSach = require('../models/LoaiSach');

// Defining all methods and business logic for routes
module.exports = {
  // GET
  findAll: function (req, res) {
    LoaiSach.find(req.query)
      .then(item => res.json(item))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    LoaiSach.findById(req.params.id)
      .then(item => res.json(item))
      .catch(err => res.status(422).json(err));
  },

  // POST
  create: function (req, res) {
    LoaiSach.create(req.body)
      .then(item => res.json(item))
      .catch(err => res.status(422).json(err));
  },

  // PUT
  update: function (req, res) {
    LoaiSach.findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(item => res.json(item))
      .catch(err => res.status(422).json(err));
  },

  // DELETE
  remove: function (req, res) {
    LoaiSach.findById({
        _id: req.params.id
      })
      .then(item => item.remove())
      .then(itemList => res.json(itemList))
      .catch(err => res.status(422).json(err));
  }
};