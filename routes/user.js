exports.current = function(req, res) {
    res.send(req.session.user);
};

exports.new = function(req, res) {
    var userName = req.query['user'];
    var code = req.query['code'];

    req.db.collection('users').insert({ userName : userName, code : code }, function(err, d) {
        res.send({result : 'success' });
    });
}