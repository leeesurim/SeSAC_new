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
    res.render("login_form");
});


app.post("/login_correct", function(req,res){
    let info = req.body;
    console.log(info.id, info.password);
    
    fs.readFile("./info.txt", function(err, data){
        if (err) throw err; 
        list = data.toString().split("//");
        
        if (list[0] == info.id && list[2] == info.password){
            console.log("성공");
            res.render("login_correct");
        }
        else{
            console.log("실패");
            res.render("login_fail");
        }
    })
    
});

app.listen(port, ()=>{
    console.log("Server port : ", port);
});
