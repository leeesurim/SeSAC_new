// View를 호출할 수 있는 것은 controller만 가능(res.render)
// View에게 정보 보내기 

// model
const User = require("../model/User");

// 함수로 선언할 때부터 모듈로 내보낼 것으로 설정
exports.index = (req, res) => {
    res.render("index")
}

exports.register = (req, res) => {
    res.render("register");
}

exports.post_register = (req, res) => {
    User.post_user(req.body);
    res.send(req.body);
}

exports.login = (req, res) => {
    res.render("login");
}

// async + await 는 함께
exports.post_login = async (req, res) => {
    // controller은 데이터 읽을 수 없기 때문에 model에서 가져와야 함
    var data = await User.get_user();
    var p = data.split("\n");
    var id = req.body.id;
    var pw = req.body.password;


    for (var i = 0; i < p.length -1; i++){
        var info = p[i].split("//");


        if ( info[0] == id && info[1] == pw){
            console.log("로그인 성공!");
            break;
        } else {
            console.log("아이디와 비밀번호를 다시 확인하세요.");
            continue;
        }



        // if ( info[0] != id ){
        //     console.log("아이디 다름");
        //     continue; 

        // } else if (info[1] != pw){
        //     console.log("비밀번호 다름");
        //     continue;

        // } else {
        //     console.log("로그인 성공!");
        //     break;
        // }
       

        }




  
   

}
