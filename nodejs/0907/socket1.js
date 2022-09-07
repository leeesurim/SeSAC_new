var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res){
    console.log("client");
    res.sendFile(__dirname + "/socket1.html");
});

io.on("connection", function(socket){
    console.log("connected");

    socket.on("hello", function(data){
        console.log("client : ", data);
        socket.emit("clickHello", "Hello : 안녕하세요");
    });

    socket.on("study", function(data){
        console.log("client : ", data);
        socket.emit("clickStudy", "Study: 공부합시다");
    });

    socket.on("bye", function(data){
        console.log("client : ", data);
        socket.emit("clickBye", "Bye: 안녕히 가세요");
    });
})


http.listen(8000, function(){
    console.log("Server port : ", 8000);
});