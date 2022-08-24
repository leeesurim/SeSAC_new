const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );


app.get("/", function(req, res){
    res.render("index");
});

app.get("/jin",function(req,res){
    res.render("jin");
});

app.post("/write", function(req, res){
    console.log(req.body);
    // res.send는 하나의 인자만 보낼 수 있음
    // res.send로 여러개 보내려면 딕셔너리 이용
    res.send({content: req.body.content})
//    res.render("index", {content: req.body.content});
})
app.listen(port, ()=>{
    console.log( "Server Port : ", port );
})