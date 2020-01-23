module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/add", function (req, res) {
        res.render("add-burger");
    });
}