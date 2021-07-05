var express = require('express');
var router = express.Router();

const apisRouter = require('./apis');

router.use("/apis", apisRouter);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
