const express = require('express');

const demoController = require('../controllers/DemoController');

const router = express.Router();

router.get('/', demoController.getDemo);

router.post('/', demoController.postDemo);

router.post('/update', demoController.updateDemo);

module.exports = router;
