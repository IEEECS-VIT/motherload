var express = require('express');
var path = require('path');
var mongoUsers = require(path.join(__dirname, '..', 'db', 'mongo-users'));
var bcrypt;
var request = require('request');
var record = {
    _id: '',
    dob: '',
    acc_no: '',
    password_hash: '',
    authStrategy: ''
};
try
{
    bcrypt = require('bcryptjs');
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
var app = express();
app.use(require('cors')());
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('templates/index');
});
router.get('/gallery', function(req, res, next) {
    res.render('gallery');
});
router.get('/gallery2', function(req, res, next) {
    res.render('gallery2');
});
router.get('/home',function(req,res,next){
 res.render('home');
});
router.get('/login',function(req,res){
    res.render('login');
});

router.get('/social1',function(req,res){
    res.render('social1');
});
router.get('/mainhome',function(req,res){
    res.render('index_main');
});
router.get('/home2',function(req,res){
    res.render('home2');
});

router.get('/mainpage',function(req,res){
    res.render('mainpage');
});/*
router.get('/register',function(req,res){
    res.render('registration');
});*/
router.get('/analytics',function(req,res){
    res.render(
        'templates/analytics'
    );
});
router.post('/login', function (req, res) {
    var user = req.body.username;
    var password = req.body.password;
    var db = req.db;
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
            res.redirect('/social');
        }
        else if (doc)
        {
            if (bcrypt.compareSync(password, doc['password_hash']))
            {
                res.cookie('name', doc['_id'], {maxAge: 86400000, signed: true});
                console.log('logged in');
                res.redirect('/social')
            }
            else
            {
                console.log('Incorrect');
            }
        }else{
            console.log('bad username');
            res.redirect('/social')
        }
    };
    mongoUsers.fetch(credentials,db, onFetch);
});

router.get('/articles', function (request, response) {
    var collection = request.db.collection('articles');
    var m_category = request.query.main_category;
    if (m_category) {
        collection.find({main_category: m_category}).toArray(function (err, docs) {
            if (err) {
                response.status(500).send('Internal Server Error');
            }
            else {
                response.json(docs);
            }
        });
    }
});/*
router.get('/register',function(req,res){
    res.render('register');
});*/
router.post('/register', function (req, res) {
    var db = req.db;
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
                        res.redirect('/social');
                    }
                };
                mongoUsers.insert(newUser,db, onInsert);
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
    mongoUsers.getCount({},db, onGetCount);
});

router.get('/social',function(req,res){
    res.render('social');
});
router.get('/index2',function(req,res){
    res.render('index2');
});

/** Angular */
router.get('/index',function(req,res){
    res.render('templates/index');
});
router.get('/main',function(req,res){
    res.render('templates/main');
});
router.get('/about',function(req,res){
    res.render('templates/about');
});
router.get('/register',function(req,res){
    res.render('templates/register');
});
router.get('/contact',function(req,res){
    res.render('templates/contact');
});
router.get('/team',function(req,res){
    res.render('templates/team');
});
router.get('/organizers',function(req,res){
    res.render('templates/organizers');
});
router.get('/events',function(req,res){
    res.render('templates/events');
});
router.get('/sponsors',function(req,res){
    res.render('templates/sponsors');
});
router.get('/schedule',function(req,res){
    res.render('templates/schedule');
});
router.get('/papers',function(req,res){
    res.render('templates/papers');
});
router.get('/accommodation',function(req,res){
    res.render('templates/accomodation');
});
router.get('/tcs',function(req,res){
    request("https://superproxy-143010.appspot.com/query?id=ahNzfnN1cGVycHJveHktMTQzMDEwchULEghBcGlRdWVyeRiAgICAuqiOCgw", function(error, response, body) {
        if(error){console.log(error)}
        else{
                  res.send(JSON.parse(body).rows);
        }
    });

});
module.exports = router;