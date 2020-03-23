const router = require('express').Router();
const TacGiaController = require('../controllers/TacGiaController');

router
  .route('/')
  .get(TacGiaController.loadList)
  .post(TacGiaController.create);

router
  .route('/:id')
  .get(TacGiaController.findById)
  .put(TacGiaController.update)
  .delete(TacGiaController.remove);

module.exports = router;