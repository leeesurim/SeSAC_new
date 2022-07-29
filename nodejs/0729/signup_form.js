const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs").promises;

// 파일 업로드를 위한 설정
const path = require("path");
const multer = require("multer");
// 파일 업로드 할 때 세부 내용 설정
const upload = multer({
    storage: multer.diskStorage({
        // 저장할 경로
        destination(req, file, done){
            done(null, 'uploads/');
        },
        // 파일명 보이게 설정
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            // 입력한 id로 파일명 받아오기
            done(null, req.body.id + ext);
        },
    }),
    // 파일 사이즈 제한
    limits: {fileSize : 5*1024*1024},

});

app.set("view engine", "ejs");
// 정적파일 보는 경로 '/' => /파일이름로 접속해야 볼 수 있음
app.use(express.static("uploads"));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.render("signup_form");
    
});


app.post("/signup_receive", upload.single('userfile'), function(req,res){
    console.log(req.body);
    console.log(req.file);

    res.render("signup_receive", {filename : req.file.filename});

});

app.listen(port, ()=>{
    console.log("Server port : ", port);
});
