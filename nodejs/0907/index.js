var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res){
    console.log("client");
    // ejs 설치하지 않았기 때문에 sendFile 이용
    res.sendFile(__dirname + "/index.html");
});

//io - 전체 연결, connection - socket 에서 정의가 된 이름
io.on("connection", function(socket){
    console.log("connected");
    // emit - 이벤트 보낼 것 (이벤트명, 정보) / 동일한 이벤트명에게만 보낼 수 있음
    socket.emit("hello", "server hello");

    socket.on("click", function(data){
        console.log("client click");
        socket.emit("clickResponse", 'success');
        // 모든 연결에 대한 정보를 가지고 있음. 모든 클라이언트에게 보낼 수 있음.
        io.emit("clickResponse", "io succes");
    });
});

http.listen(8000, function(){
    console.log("Server port : ", 8000);
});