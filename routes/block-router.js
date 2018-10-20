var express = require('express');
var router = express.Router();

/* GET block */
router.get('/:height(\\d+)', function(req, res, next) {
  res.send('This will GET block ' + req.params.height);
});

/* POST block */
router.post('/', function(req, res, next) {
  res.send('This will POST a block');
});

module.exports = router;
