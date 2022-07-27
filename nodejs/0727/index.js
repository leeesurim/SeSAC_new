const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));
app.use( bodyParser.json());

app.get("/", function(req, res){ 
    res.render("index");
})

app.get("/receive", function(req, res){
    console.log(req.query);
    let name = req.query.name;
    let msg = req.query.name + " GET";
    res.send({name : name, message : msg});
})

app.post("/receive", function(req, res){
    console.log(req.body);
    // res.send는 하나의 인자만 보낼 수 있음
    // res.send로 여러개 보내려면 딕셔너리 이용
    let name = req.body.name;
    let msg = req.body.name + " Post";
    res.send({name : name, message : msg});
})

app.get("/test", function(req, res){
    res.send("test");
})

app.listen(port, ()=> {
    console.log("Sever Port : ", port);
})