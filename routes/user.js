
/*
 * GET users listing.
 */

exports.list = function(req, res){
    req.db.collection('users').find().toArray(function(err, docs) {
        res.send(docs);
    });
};