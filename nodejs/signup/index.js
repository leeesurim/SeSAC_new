const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

app.set('views', './src/views/ejs')
app.set("view engine", "ejs");
app.use(express.static("./src/static"));
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );


app.get("/signup", function(req, res){
    res.render("signup");
});

app.post("/signup", function(req, res){
    res.send(req.body);
})

app.get("/login", function(req, res){
    res.render("login");
})

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
})