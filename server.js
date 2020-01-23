const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const bars = require('express-handlebars');

const db = require('./models');

// serve static content for the app from "public"
app.use(express.static('public'));

// Parse req.body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set View Engine to Handlebars
app.engine('handlebars', bars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);
db.sequelize.sync({ force: true }).then(function () {
    // Start server and begin listening for requests
    app.listen(PORT, (err) => {
        if (err) throw err;
        console.log('Server listening on: http://localhost:' + PORT);
    });
});