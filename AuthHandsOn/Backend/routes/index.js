var express = require('express');
var { onsignup, onlogout, onlogin } = require('../controller/authcontroller')
var router = express.Router();

/* GET home page. */

router.post('/signup', onsignup);
router.post('/logout', onlogout);
router.post('/login', onlogin);
router.post('/',onsignup)
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
