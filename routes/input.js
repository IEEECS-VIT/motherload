'use strict';
var path = require('path');
var express = require('express');
//var fs = require('fs');
//var cloudinary = require('cloudinary');
//var multer = require('multer');
/*var upload = multer({
    dest:  './public/images',
    rename: function (fieldname, filename,originalname) {
        return originalname.replace(/\s+/g, "").toLowerCase();
    },
    limits:{
        files:1
    }
});*/
/*var articleQueue = require(path.join(__dirname, '..', 'db','mongoQueue'));*/
var router = express.Router();

router.get('/', function (request, response) {
    if (request.signedCookies.name) {
        response.render('input', {message: null, results: null});
    } else {
        response.send("Please <a href='/main#login'>Login</a>");
    }
});

router.post('/new', function (request, response) {
    var collection = request.db.collection('articles');
    var newArticle = {
        main_category: request.body.m_category,
        c_name: request.body.c_name,
        content: request.body.contentText,
        vid: request.body.vid,
        website: request.body.website,
        timestamp: new Date()
    };
   // console.log(newArticle.logo);

 /*   if (newArticle.logo) {
        var queueItem = newArticle;
        var onPush = function(err,results){
            if(err){
                console.log(err);
            }else{
               // console.log(results);
            }
        };
        articleQueue.push(request.db,queueItem,onPush);
    }*/
    var onInsert = function (err) {
        if (err) {
            console.log('error: ' + err);
        }
        else {
           response.status(200).send({"message": "Article Added"});
        }
    };
    collection.insert(newArticle, onInsert);

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
        vid: request.body.e_vid,
        website: request.body.e_website,
        timestamp: new Date()
    };
    var onUpdate = function (err,name) {
        if (err) {
            console.log('error: ' + err);
        }
        else {
            if(name){
                response.status(200).send({message: 'Updated: ', results: null,name: name.c_name});
            }
            else {
                response.status(200).send({message: 'Updated. ', results: null, name: 'No image change'});
            }
        }
    };
    collection.findAndModify(
        {c_name: newArticle.c_name},
        [['c_name', 'asc']],
        {
            $set: {
                main_category: newArticle.main_category,
                content: newArticle.content,
                vid: newArticle.vid,
                website: newArticle.website,
                timestamp: newArticle.timestamp
            }
        },
        {new: true}
        , onUpdate
    );
  /* if (newArticle.logo) {
        var queueItem = newArticle;
        var onPush = function(err,results){
            if(err){
               console.log(err);
            }else{
              //  console.log(results);
            }
        };
        articleQueue.push(request.db,queueItem,onPush);
    }*/

});

router.post('/delete', function (request, response) {
    var collection = request.db.collection('articles');
    var updateCollection = request.db.collection('updates');
    var c_name = request.body.d_c_name;
    var onDelete = function (err, results) {
        if (err) {
           // console.log('error: ' + err);
        }
        else {
            //console.log(results);
            if (results.result.n != 0) {
              /*  cloudinary.api.delete_resources(['startup/' + c_name.replace(/\s+/g, "").toLowerCase()],
                    function (result) {
                       // console.log(result);
                    });*/
                response.status(200).send({message: 'Deleted', results: null});
            } else {
                response.status(200).send({message: 'Article Not Found', results: null});
            }
        }
    };
    var query = {c_name: c_name};
    collection.remove(query, onDelete);
});/*
router.post('/upload',function (request, response) {
    var db = request.db;
    upload.single('file')(request, response, function (err) {
        if (err) {
            //console.log(request.file);
            // An error occurred when uploading
            console.log(err);
            response.status(500).send({message: 'Error', results: null});

        }else{
            var onUpload = function(logo){
                var query = {logo: logo};
                var onPop = function(err,doc){
                    if(err){
                        console.log(err);
                    }
                    else if(doc){
                        var onUpdate = function (err,name) {
                            if (err) {
                                console.log('OnUpdate');
                               console.log( err);
                            }
                            else {
                                if(name){
                                    console.log(name);
                                    response.status(200).send({message: 'Updated: ', results: null,name: name});
                                }
                                else {
                                   response.status(200).send({message: 'Updated: ', results: null, name: 'No image change'});
                                }
                            }
                           // db.close();
                        };
                       // console.log(doc.ops);
                        uploadToCloud(doc,db,onUpdate);
                    }else{
                        console.log('not found');
                    }

                };
                articleQueue.pop(db,query,onPop)
            };
           // console.log(request.file);
            fileRename(request.file.filename,request.file.originalname,onUpload);
           // response.status(200).send({message: 'Uploaded', results: null});
        }
   });

});

var fileRename = function(fileName,originalName,callback){

    var imgPath = 'public/images/' + fileName;
    //console.log('file rename');
    var syspath = path.join(__dirname, '..', imgPath);
    //console.log(imgPath);
    //console.log(syspath);
    var replace_with = originalName.replace(/\s+/g, "").toLowerCase();
   // console.log(replace_with);
    fs.access(syspath, fs.R_OK | fs.W_OK, function (err) {
       // console.log(err ? 'no access!' : 'can read/write');
        fs.rename(syspath,'public/images/'+replace_with,function(err){
            if(err){
               // console.log('rename error');
                //console.log(err);
            }else{
                callback(replace_with);
            }
        });
    });
};
var uploadToCloud =function(newArticle,db,callback){
    var logo = newArticle.logo;
    var c_name = newArticle.c_name;
    var collection = db.collection('articles');
    //console.log(newArticle);
    var imgPath = 'public/images/' + logo;
    var syspath = path.join(__dirname, '..', imgPath);
    var replace_with = c_name.replace(/\s+/g, "").toLowerCase();
    fs.access(syspath, fs.R_OK | fs.W_OK, function (err) {
     //   console.log(err ? 'no access!' : 'can read/write');
        if(err){
            console.log(err);
        }
        else{
            var newFileName = replace_with + logo.substr(logo.length - 4, logo.length - 1);
            cloudinary.uploader.upload(imgPath, function (result) {
              // console.log(result);
                newFileName = 'v'+result.version+'/startup/'+newFileName;
                //console.log(newFileName);
                newArticle.logo =  newFileName;
               // console.log(newArticle);
                collection.findAndModify(
                    {c_name: newArticle.c_name},
                    [['c_name', 'asc']],
                    {
                        $set: {
                            main_category: newArticle.main_category,
                            content: newArticle.content,
                            logo: newArticle.logo,
                            website: newArticle.website,
                            timestamp: newArticle.timestamp
                        }
                    },
                    {new: true}
                    , callback(null,newArticle.c_name)
                );
            }, {public_id: replace_with, folder: 'startup'});
            fs.unlink(imgPath, function (err) {
                if (err) {
                  //  console.log(err);
                }

            });
        }
    });
};*/
module.exports = router;
