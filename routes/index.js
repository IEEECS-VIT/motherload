var express = require('express');
var path = require('path');
var mongoUsers = require(path.join(__dirname, '..', 'db', 'mongo-users'));
var bcrypt;
var record = {
    _id: '',
    dob: '',
    acc_no: '',
    password_hash: '',
    authStrategy: ''
};
try
{
    bcrypt = require('bcrypt');
}
catch (err)
{
    try
    {
        bcrypt = require('bcryptjs');
    }
    catch (err)
    {
        throw "Failure to compile run time requirement: bcrypt(js)";
    }
}
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/gallery', function(req, res, next) {
    res.render('gallery');
});
router.get('/login',function(req,res){
    res.render('login');
});
router.get('/search',function(req,res){
    res.render('search');
});
router.post('/login', function (req, res) {
    var user = req.body.username;
    var password = req.body.password;
    if (req.signedCookies.name)
    {
        res.clearCookie('name');
    }

    var credentials =
    {
        '_id': user
    };
    var onFetch = function (err, doc)
    {
        console.log(err);
        if (err)
        {
            console.log(err);
            res.redirect('/main');
        }
        else if (doc)
        {
            if (bcrypt.compareSync(password, doc['password_hash']))
            {
                res.cookie('name', doc['_id'], {maxAge: 86400000, signed: true});
                console.log('logged in');
                res.redirect('/main')
            }
            else
            {
                console.log('Incorrect');
            }
        }else{
            console.log('bad username');
            res.redirect('/main')
        }
    };
    mongoUsers.fetch(credentials, onFetch);
});

router.get('/articles', function (request, response) {
    var collection = request.db.collection('articles');
    var m_category = request.query.main_category;
    if (m_category) {
        collection.find({main_category: m_category}).toArray(function (err, docs) {
            if (err) {
                console.log(err);
                response.status(500).send('Internal Server Error');
            }
            else {
                response.json(docs);
            }
        });
    }
});
router.get('/register',function(req,res){
    res.render('register');
});
router.post('/register', function (req, res) {
    if (req.signedCookies.name)
    {
        res.clearCookie('name');
    }
    var onGetCount = function (err, number)
    {
        if (err)
        {
            console.log(err.message);
        }
        else if(req.body.username&&req.body.password&&req.body.confirm_password)
        {
            if (req.body.confirm_password === req.body.password)
            {
                var newUser = record;
                newUser._id = req.body.username;
                newUser.dob = new Date();
                newUser.acc_no = parseInt(number) + 1;
                console.log(req.body);
                newUser.password_hash = bcrypt.hashSync(req.body.password);

                var onInsert = function (err, docs)
                {
                    if (err)
                    {
                        console.log(err.message);
                        res.render('register', {response: "User Already Exists"});
                    }
                    else
                    {
                        var name = newUser._id;
                        res.cookie('name', name, {maxAge: 86400000, signed: true});
                        res.redirect('/main');
                    }
                };
                mongoUsers.insert(newUser, onInsert);
            }
            else
            {
                console.log("Incorrect Password");
                res.render('register', {response: "Passwords do not match"});
            }
        }
        else{
            console.log('no data');
        }
    };
    mongoUsers.getCount({}, onGetCount);
});

router.get('/main',function(req,res){
    res.render('main');
});

module.exports = router;