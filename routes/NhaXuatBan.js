const router = require('express').Router();
const NhaXuatBanController = require('../controllers/NhaXuatBanController');

router
  .route('/')
  .get(NhaXuatBanController.loadList)
  .post(NhaXuatBanController.create);

router
  .route('/:id')
  .get(NhaXuatBanController.findById)
  .put(NhaXuatBanController.update)
  .delete(NhaXuatBanController.remove);

module.exports = router;