const express = require('express');

const postController = require('../controllers/PostController');

const router = express.Router();

router.get('/', postController.getPost);

router.post('/create', postController.createPost);

router.post('/update', postController.updatePost);

module.exports = router;
