var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    if (req.signedCookies.name)
    {
        res.send({message:true});
        console.log('users');

    }else{
        console.log('user login false');
        res.send({message:false});
    }

});
router.get('/logout',function(req,res){
    if (req.signedCookies.name)
    {
        res.clearCookie('name');
    }
    res.redirect('/main');
});

module.exports = router;
