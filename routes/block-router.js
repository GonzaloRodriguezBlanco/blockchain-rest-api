var express = require('express');
var router = express.Router();
var blockController = require('../controller/block-controller');

/* GET block */
router.get('/:height(\\d+)', blockController.read);

/* POST block */
router.post('/', blockController.create);

module.exports = router;
