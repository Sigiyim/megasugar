exports.new_post = function(req, res) {
    var b = req.body;
    var reading = {
        date : new Date(b.date + ' ' + b.time),
        sugar : b.sugar,
        unitsOfInsulin : b.unitsOfInsulin,
        typeOfInsulin : b.typeOfInsulin,
        user : req.session.user._id
    };

    req.db.collection('readings').insert(reading, function(err, d) {
        if ( err ) {
            res.send({ result : 'failure', message : err });
        } else {
            res.send({result : 'success' });
        }
    });
};

exports.list = function(req, res) {
    var ONE_DAY = 1000 * 60 * 60 * 24;
    var ONE_WEEK = ONE_DAY * 7;
    var today = new Date();
    var weekAgo = new Date(today.getTime() - ONE_WEEK);

    req.db.collection('readings').find({
        user : req.session.user._id,
        date : {
            $gte : weekAgo,
            $lte : today
        }
    }).sort({ date : -1 }).toArray(function(err, docs) {
        res.send(docs);
    });
}