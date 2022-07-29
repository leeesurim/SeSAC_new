const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs").promises;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.render("signup_form");
});

app.post("/signup_receive", function(req,res){
    let info = req.body;
    res.render("signup_receive", req.body);
    fs.writeFile("./info.txt", info.id + "//" + info.name  + "//" + info.password );
});

app.listen(port, ()=>{
    console.log("Server port : ", port);
});
