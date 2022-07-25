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
    res.render("form_practice");
});

app.post("/form_receive", function(req,res){
    let info = req.body;
    res.render("form_receive", req.body);
    fs.writeFile("./info.txt", info.email + "//" + info.password + "//" + info.name + "//" + info.tel + "//" + info.date + "//" + info.gender );
});

app.listen(port, ()=>{
    console.log("Server port : ", port);
});
