const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.render("login2");
});

const list = fs.readFileSync("info.txt").toString().split("//");


app.post("/login_receive", function(req, res){
    console.log(req.body);
    let info = req.body;
    
    if (list[0] == info.id && list[2] == info.password){
        console.log("성공");
        res.send(true);
    }
    else{
        console.log("실패");
        res.send(false);
    }

})

app.listen(port, ()=>{
    console.log("Server port : ", port);
});