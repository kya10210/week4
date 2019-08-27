let express = require('express');
let app=express();
let bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(express.static("images"));
app.get('/',function(req,res){
    res.sendFile(__dirname + "/tute5.html");
})
app.listen(8080);