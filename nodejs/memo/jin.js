const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs");

app.set("view engine", "ejs");
app.use( "/static", express.static( "static" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/",function(req,res){
    res.render("index");
});

app.get("/forgot_pw", function(req,res){
    res.render("forgot_pw");
});

app.post("/receive",function(req,res){
    
    let loginId = req.body.name;
    let loginPw = req.body.pw;
    console.log(loginId, loginPw);

    var data = fs.readFileSync("./info.txt").toString().split('//');
    
    let a = data[0];
    let b = data[1];
    
    if(loginId == a && loginPw == b){
        res.send( "로그인 되었습니다.");
    } else{ 
        res.send("아이디,비밀번호가 틀렸습니다. 확인해 주세요.");
    }
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port);
})

