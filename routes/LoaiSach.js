const router = require('express').Router();
const LoaiSachController = require('../controllers/LoaiSachController');

router
  .route('/')
  .get(LoaiSachController.loadList)
  .post(LoaiSachController.create);

router
  .route('/:id')
  .get(LoaiSachController.findById)
  .put(LoaiSachController.update)
  .delete(LoaiSachController.remove);

module.exports = router;