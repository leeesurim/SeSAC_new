const fs = require("fs");

console.log(fs);

fs.readFile("./test.txt", function(err, data){
    // 에러 발생하면 코드 멈추겠다. 에러처리할 때 많이 사용
    if (err) throw err; 

    console.log(data); // <Buffer 68 69>
    // Buffer로 출력되기 때문에 문자열로 바꿔주는 작업해야 출력됨.
    console.log(data.toString()); // hi
    })