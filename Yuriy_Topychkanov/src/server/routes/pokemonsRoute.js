const Pokemon = require('../models/pokemon');

module.exports = function (app) {
    app.get('/', function (req, res) {
        const { page } = req.query;
        const query = Pokemon.find({}, null, { skip: 10 * (page - 1), limit:10});
        query.exec(function (err, docs) {
            res.send(docs);
        });
    });

};
