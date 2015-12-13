'use strict';
var express = require('express');

var router = express.Router();

router.get('/', function (request, response) {
    if (request.signedCookies.name)
    {
        response.render('input', {message: null, results: null});
    }else{
        response.send("Please <a href='/main#login'>Login</a>");
    }
});

router.post('/new', function (request, response) {
    var collection = request.db.collection('articles');
    var article = {
        main_category: request.body.m_category,
        c_name: request.body.c_name,
        content: request.body.contentText,
        timestamp: new Date()
    };
    var onInsert = function (err) {
        if (err) {
            console.log('error: ' + err);
        }
        else {
            response.status(200).send({"message": "Article Added"});
        }
    }
    collection.insert(article, onInsert);
});

router.post('/find', function (request, response) {
    var collection = request.db.collection('articles');
    var c_name = request.body.f_c_name;
    var onSearch = function (err, docs) {
        if (err) {
            console.log('error: ' + err);
        }
        else if (docs === null) {
            response.status(404).send({results: null, message: 'Not Found'});
        }
        else {
            response.status(200).send({results: docs, message: 'Search Successful'});
        }
    };
    collection.findOne({c_name: c_name}, onSearch);
});

router.post('/edit', function (request, response) {
    var collection = request.db.collection('articles');
    var newArticle = {
        main_category: request.body.e_m_category,
        c_name: request.body.e_c_name,
        content: request.body.e_contentText,
        timestamp: new Date()
    };
    var onUpdate = function (err) {
        console.log('here');
        if (err) {
            console.log('error: ' + err);
        }
        else {
            response.status(200).send({message: 'Updated', results: null});
        }
    };
    collection.findAndModify({
            query: {c_name: newArticle.c_name},
            update: {
                $set: {
                    main_category: newArticle.main_category,
                    content: newArticle.content,
                    tags: newArticle.tags,
                    timestamp: newArticle.timestamp
                }
            },
            new: true
        }, onUpdate
    );
});

router.post('/delete', function (request, response) {
    var collection = request.db.collection('articles');
    var updateCollection = request.db.collection('updates');
    var c_name = request.body.d_c_name;
    var onDelete = function (err, results) {
        if (err) {
            console.log('error: ' + err);
        }
        else {
            console.log(results);
            response.status(200).send({message: 'Deleted', results: null});
        }
    };
    var query = {c_name: c_name};
    collection.remove(query, onDelete);
});

router.post('/upload', function (request, response) {
    console.log('Image uploaded: ' + request.files.name);
    response.status(200).send({message: 'Uploaded', results: null});
});
module.exports = router;
