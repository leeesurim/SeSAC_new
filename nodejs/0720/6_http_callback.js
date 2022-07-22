const http  = require('http');
const fs = require('fs');
// node -v  버전이 10이전일 때는 .promises 사용하지 않고 callback 이용

const server = http.createServer(function(req, res){
    fs.readFile('./position.html', function(err, data){
        if (err) {
            // promise 에서의 catch
            console.error(err);
            res.writeHead(404);
            res.end(err.message);
        }
        else {
            // promise 에서의 try
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
            res.end(data);
        }       
    });
});

server.listen(8080, function(){
    console.log("8080번 포트");
})

server.on( "request", function(){
    console.log( "Client Request" );
})

server.on("connection", function(){
    console.log("Client Connection");
})

server.on("checkContinue", function(){
    console.log("Client checkContinue");
})