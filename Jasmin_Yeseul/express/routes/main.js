var express = require('express');
var router = express.Router();
const cookieChecker = require('./middleware/cookie')

/* GET users listing. */
router.get('/',cookieChecker, function(req, res, next) {
  res.render('main');
});

module.exports = router;
