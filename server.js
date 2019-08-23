var express = require('express');
var app = express();
let bodyParser = require('body-parser')

var db=[];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
//app.use(bodyParser.json())         test this

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('images'));
app.use(express.static('css'));
//app.use(express.static('views'));   test this

app.get('/', function (req, res) {
    res.render('index.html');
});
app.get('/newtask', function(req,res){
    res.render('newtask.html');
});
app.post('/add', function(req,res){
    db.push({
        taskName: req.body.taskname,
        taskDue: req.body.taskdue,
        taskDesc: req.body.taskdesc});

    console.log(db);
    res.render('newtask.html');    
});

app.get('/listtasks', function (req, res) {
    res.render('listtasks.html', 
        {taskDb: db});
});
app.listen(8080);
console.log('This server is running on 8080');
