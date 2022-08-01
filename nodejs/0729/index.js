const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

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
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    // 파일 사이즈 제한
    limits: {fileSize : 5*1024*1024},

    // 어떤 경로로 업로드 할지 지정
    // dest: "uploads/"
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));
app.use( bodyParser.json());

// 미들웨어 test, test2 실행 후 function 실행
app.get("/", test, test2, function(req, res){ 
    res.render("index");
});

// 한개만 업로드 - single('input name')
app.post("/upload", upload.single('userfile'), function(req, res){
    console.log(req.body);
    console.log(req.file);
    res.send("Upload");
});

// 여러개 업로드 - array('input name')
app.post("/upload/array", upload.array('userfile'), function(req, res){
    console.log(req.body);
    console.log(req.files);
    res.send("Upload Array");
});

// 여러개 업로드 - 올릴 파일만큼 지정해줘야 함(잘 사용하지 않음)
app.post("/upload/fields", upload.fields([{name:'userfile'}, {name:'userfile2'}, {name:'userfile3'}]), function(req, res){
    console.log(req.body);
    console.log(req.files);
    res.send("Upload Array");
});

function test(req, res, next){
    console.log("test함수");
    console.log(req.path);
    req.aaa = "...";
    next();
}

function test2(req, res, next){
    console.log("Test2 함수");
    next();
}

app.listen(port, ()=> {
    console.log("Sever Port : ", port);
})