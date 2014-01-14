
/*
 * GET users listing.
 */

exports.list = function(req, res){
    res.send(req.db==undefined);
//    req.db.collection('users').find().toArray(function(err, docs) {
//        res.send(docs);
//    });
};