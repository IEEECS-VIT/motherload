var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/gallery', function(req, res, next) {
    res.render('gallery');
});
module.exports = router;