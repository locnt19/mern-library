const router = require('express').Router();
const SachController = require('../controllers/SachController');

router
  .route('/')
  .get(SachController.loadList)
  .post(SachController.create);

router
  .route('/:id')
  .get(SachController.findById)
  .put(SachController.update)
  .delete(SachController.remove);

module.exports = router;