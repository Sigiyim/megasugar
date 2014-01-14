
/*
 * GET home page.
 */

exports.index = function(req, res){
    var user = req.query['user'];
    var code = req.query['code'];

    req.db.collection('users').findOne({ userName : user, code : code }, function(err, doc) {
        if ( doc ) {
            req.session.user = doc;
            res.render('index', { title: 'Express' });
        } else {
            res.send("Unable to validate user");
        }
    });
};