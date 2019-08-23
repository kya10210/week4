var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
let db = [];
db.push({
    carId: 0,
    carMake: 'BMW',
    carModel: '735',
    carYear: 2014
});
db.push({
    carId: 1,
    carMake: 'Mercedes',
    carModel: 'C250',
    carYear: 2017
});
db.push({
    carId: 3,
    carMake: 'Audi',
    carModel: 'A6',
    carYear: 2019
});
app.get('/', function (req, res) {
    res.render('test.html', {username: "Guest", carDb: db});
});
app.listen(8080);