const router = require('express').Router();
const VaiTroController = require('../controllers/VaiTroController');

router
  .route('/')
  .get(VaiTroController.loadList)
  .post(VaiTroController.create);

router
  .route('/:id')
  .get(VaiTroController.findById)
  .put(VaiTroController.update)
  .delete(VaiTroController.remove);

module.exports = router;