const db = require('../models');

module.exports = function (app) {

    // get all burgers
    app.get('/api/burgers', (req, res) => {
        db.Burger.findAll().then(data => {
            res.status(200).json(data);
        });
    });

    // create new burger
    app.post('/api/burgers', (req, res) => {
        db.Burger.create(req.body).then(data => {
            res.redirect("/");
        });
    });

    // update burger
    app.put('/api/burgers/:id', (req, res) => {
        db.Burger.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.status(200).json(data);
        });
    });

    // delete burger
    app.delete('/api/burgers/:id', (req, res) => {
        res.status(200).end();
    });
}