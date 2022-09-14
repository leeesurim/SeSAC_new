var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile( __dirname + "/socket2.html" );
});

var msg = {hello: "안녕하세요?", study: "공부합시다~", bye: "안녕히가세요."};
io.on("connection", function(socket){
    console.log( "connected" );
    // socket.emit로 보낸 것 받기
    socket.on("send", function(data){
        // data로 hello가 들어왔을 때
        console.log( "client : ", data );
        socket.emit("response", data + " : " + msg[data]);
        // socket.emit( "response", "hello : 안녕하세요?");
        // if ( data == "hello" ) socket.emit("response", "hello : 안녕하세요?");
    })
});

http.listen( 8000, function(){
    console.log( "Server port : ", 8000 );
});