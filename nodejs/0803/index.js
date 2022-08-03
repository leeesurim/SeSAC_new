// 실행되는 최상위 파일
// Express 를 이용해 서버를 실행하는 로직이 담긴다.
const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));
app.use( bodyParser.json());

// routes/index.js라고 했기 때문에 파일명을 작성하지 않고, 폴더명만 작성해도 됨.
const router = require("./routes");
app.use("/user", router);
// "/user" 라는 주제로 묶인 경로로 접속할 시 ( localhost:포트/user/~~~ )
// ./routes/index.js 에 선언되어 있는 대로 동작한다.

// app.use로 등록된 경로 있는지 확인하고 없으면 app.get 실행
app.get("/", function(req,res){
    res.send("Index");
})

app.listen(port, ()=> {
    console.log("Sever Port : ", port);
})