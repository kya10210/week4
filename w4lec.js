let express = require('express');
let app = express();
let bodyParser= require('body-parser');
let ejs=require('ejs');

let db=[{name:'Tim', age: 23},{name:'John',age=34}];

app.engine('html', ejs.renderFile);
app.set('view engine','html');
//app.set('views','public');
app.set('portNo',8080);
//sequence for the middleware is important
// app.use(function(req,res,next){
//     console.log('Hello from middleware...1');
//     next();
// });
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/about',function(req,res,next){
    console.log('Hello from middleware...2');
    next();
});

app.use(express.static('public'));

app.get('/', function(req,res){
    console.log('Hello from app.get');
   // res.sendFile('index.html');
    res.render('thankyou.html',{username="tim",data:db});
    //req.send("thank you for your request");
});

app.post('/data',function(req,res){
    console.log("got post");
    console.log(req.body);   //print object
    
});

app.listen(app.get('portNo'));