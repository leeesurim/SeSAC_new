const http  = require('http');
const fs = require('fs');
// node -v  버전이 10이전일 때는 .promises 사용하지 않고 callback 이용

const server = http.createServer(async function(req, res){
    try{
        const data = await fs.readFile('./position.html', function(err, data){
            if (err) throw err;

            res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
            res.end(data);
        });
    } catch(err){
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    }
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