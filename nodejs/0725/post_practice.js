const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.render("post_practice");
});

app.post("/post_receive", function(req,res){
    console.log(req.body);
    res.render("post_receive", req.body);
});

app.listen(port, ()=>{
    console.log("Server port : ", port);
});
