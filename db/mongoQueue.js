/**
 * Created by Shivam Mathur on 18-01-2016.
 */
var collection_name = 'queue';
exports.push = function(db,doc,callback){
    var collection = db.collection(collection_name);
    var onInsert = function (err, docs)
    {
        if (err)
        {
            callback(err, null);

        }
        else
        {
            callback(null, docs);
        }
    };
    collection.insertOne(doc, {w: 1}, onInsert);
};
exports.pop = function(db,query,callback){
    var collection = db.collection(collection_name);
   // console.log(query);
    var onFind =function(err,docs){
        if(err){
            callback(err);
        }else {
          //  console.log(docs);
            var onPop = function (err) {
                //db.close();
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, docs);
                }
            };
            collection.deleteOne(docs, onPop);
            callback(docs);
        }
    };

    collection.findOne({logo:query.logo},onFind);
};