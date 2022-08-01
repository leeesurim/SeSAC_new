const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

const path = require("path");
const multer = require("multer");

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, req.body.id + ext);
        },
    })
});

app.set("view engine", "ejs");
app.use(express.static("uploads"));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.render("file_test");
});

app.post("/upload", upload.single('userfile'), function(req, res){
    console.log(req.body);
    console.log(req.file);
    res.render("file_test2", {id: req.body.id, filename: req.file.filename});
});


app.listen(port, ()=> {
    console.log("Server Port : ", port);
})