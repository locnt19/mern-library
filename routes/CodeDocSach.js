const router = require('express').Router();
const CodeDocSachController = require('../controllers/CodeDocSachController');

router
  .route('/')
  .get(CodeDocSachController.loadList)
  .post(CodeDocSachController.create);

router
  .route('/:id')
  .get(CodeDocSachController.findById)
  .put(CodeDocSachController.update)
  .delete(CodeDocSachController.remove);

module.exports = router;