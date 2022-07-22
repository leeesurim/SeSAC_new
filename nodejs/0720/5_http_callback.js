const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    fs.readFile('./5_http.html', function(err, data){
        if (err) {
            // promise 에서의 catch
            console.err(err);
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

server.listen(8000, function(){
    console.log("8000번 포트");
});