var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res){
    console.log("client");
    res.sendFile(__dirname + "/chat.html");
});

// io -> 클라이언트와 모든 연결을 갖고 있는 친구
// socket -> 클라이언트 한 명. socket.id 클라이언트를 구분하는 식별자


io.on("connection", function(socket){
    // socket.id 접속이 된 클라이언트에 아이디 
    console.log("connected : ", socket.id);
    socket.emit("info", socket.id);
    io.emit("notice", socket.id + "님이 입장하셨습니다.");
    socket.on("send", function(data){
        // data = {id: ~~~ , msg: ~~~};
        console.log("client message : ", data.msg);
        // 모두에게 보내야 하기 때문에 io.emit 사용
        io.emit("newMessage", data);
    });

    socket.on("disconnect", function(){
        io.emit("notice", socket.id + "님이 퇴장하셨습니다.");
    });
});

http.listen(8000, function(){
    console.log("Server port : ", 8000);
});