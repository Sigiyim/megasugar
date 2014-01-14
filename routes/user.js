exports.current = function(req, res) {
    res.send(req.session.user);
};