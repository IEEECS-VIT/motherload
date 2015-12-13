'use strict';

var express = require('express');
var router = express.Router();

router.post('/updates', function (request, response) {
    var collection = request.db.collection('articles');
    var onSearch = function (err, docs) {
        if (err) {
            console.log('Internal Server Error: ' + err);
            response.status(500).send('Internal Server Error');
        }
        else {
            response.json(docs);
        }
    };
    var date = request.body.timestamp;
    var parsedDate = new Date(date).toISOString();
    collection.find({
        timestamp: {'$gte': {'$date': parsedDate}}
    }, onSearch);
});

module.exports = router;
