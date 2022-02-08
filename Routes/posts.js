const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');
const {authentication} = require('../middlewares/authentication');

router.post('/',authentication,PostController.create);
router.put('/:_id',authentication, PostController.update);
router.delete('/id/:_id',authentication,PostController.delete);
router.get('/id/:_id',PostController.getById);
router.get('/id/:name',PostController.getPostByName);
router.get('/',PostController.getAll);
router.put('/reviews/:_id', authentication, PostController.insertComment);
router.put('/likes/:_id', authentication, PostController.like);

module.exports = router;