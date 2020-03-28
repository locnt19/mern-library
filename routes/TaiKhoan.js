const router = require('express').Router();
const TaiKhoanController = require('../controllers/TaiKhoanController');

router
  .route('/')
  .get(TaiKhoanController.loadList)
  .post(TaiKhoanController.create);

router
  .route('/:id')
  .get(TaiKhoanController.findById)
  .put(TaiKhoanController.update)
  .delete(TaiKhoanController.remove);

module.exports = router;