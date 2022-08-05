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
    // "a//1//a//\nb//2//b"
    var infos = data.split("\n");
    // infos = ["a//1//a" , "b//2//b"]

    // 첫번째 정답
    for (let i = 0; i < infos.length; i++){
        var info = infos[i].split("//");
        // {a,1,a}
        if( info[0] == req.body.id && info[1] == req.body.password ){
            res.send("로그인 성공!");
            return false;
        }
    }
    res.send("로그인 실패");


    /* 두번째 정답
    var flag = false;
    for (let i = 0; i < infos.length; i++){
        var info = infos[i].split("//");
        if (info[0] == req.body.id && info[1] == req.body.password) flag = true;
    }

    if (flag) res.send("성공");
    else res.send("실패");
    */
    

    /* 첫번째 실습
    if ( info[0] != id ){
        res.send("아이디 다름");

    } else if (info[1] != pw){
        res.send("비밀번호 다름");

    } else {
        res.send("로그인 성공!");
    }
    */

}
