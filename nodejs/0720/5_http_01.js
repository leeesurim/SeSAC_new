const http = require("http");

// request 객체, response 응답 객체
const server = http.createServer(function(req, res){
    // 한글 깨지지 않도록 설정
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.write("<h1>hi</h1>"); // 글 작성
    res.end("<p>안녕</p>"); // 적고나서 보내기(응답 종료)
});

// 서버 열기 
server.listen(8000, function(){
    console.log("8000번 포트");
})
// localhost:8000으로 접속 가능

server.on( "request", function(){
    console.log( "Client Request" );
})

server.on("connection", function(){
    console.log("Client Connection");
})

server.on("checkContinue", function(){
    console.log("Client checkContinue");
})