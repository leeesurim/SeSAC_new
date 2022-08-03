const fs = require("fs").promises;

exports.receive = function(data){
    console.log(data);
    fs.writeFile("./0725_info.text", 
    "이름: " + data.name + " 성별: " + data.gender + " 운동: " + data.sport + " 연도: " + data.year);
}