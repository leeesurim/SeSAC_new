// model은 데이터와 관련된 모든 처리(파일 작성, 읽기, DB 연결 등)
const fs = require("fs").promises;

exports.post_user = function(data){
    console.log(data);
    // writeFile => appendFile: 덮여쓰기 , 개행문자 \n 추가
    // const {id, password, name } = data;
    // fs.appendFile("./info.txt", '$(id)//$(password)//$(name)\n');
    fs.appendFile("./info.txt", data.id + "//" + data.password  + "//" + data.name + "\n");
}

exports.get_user = async function(){
    // 파일을 읽어오면 버퍼형태이기 때문에 우리가 볼 수 있는 형태로 바꿔서 리턴
    var buffer = await fs.readFile("./info.txt");
    return buffer.toString();
}