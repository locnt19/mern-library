const router = require('express').Router();
const booksController = require('../controllers/bookController');

router
  .route('/')
  // .get(booksController.findAll)
  .get((req, res) => {
    res.send('Hello from routes/books.js');
  })
  .post(booksController.create);

router
  .route('/:id')
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;