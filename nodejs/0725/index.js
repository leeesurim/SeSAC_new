const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
// 
app.use(express.urlencoded({extended : true}));
app.use( bodyParser.json());


app.get("/", function(req, res){ 
    res.render("index"); // views 폴더 아래 index.ejs 생성하고 불러오는 것
});

app.get("/receive", function(req,res){ 
    // console.log("receive-get");
    console.log(req);
    console.log(req.query);
    // get은 서버에서 받는 방식이 다르기 때문에 query로 받아와야 함
    res.render("receive", req.query);
    
});

app.post("/receive", function(req,res){ 
    // console.log("receive-post");
    // res.render("index"); 
    
    console.log(req.body);
    res.render("receive", req.body);
    // res.render("receive", {a:1, b:2});
});


app.listen(port, ()=> {
    console.log("Server Port : ", port);
})