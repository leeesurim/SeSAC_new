
const User = require("../model/0803_model");

exports.register = (req, res) => {
    res.render("0803_signup");
}

exports.post_register = (req, res) => {
    User.post_user(req.body);
    res.send(req.body);
}

exports.login = (req, res) => {
    res.render("0803_signin");
}

exports.post_login = async (req, res) => {
    var data = await User.get_user();
    var info = data.split("//");

    console.log(info);

    if (info[0] != req.body.id){
        res.send("아이디 다름");
    } else if (info[1] != req.body.pw){
        res.send("비밀번호 다름");
    } else {
        res.send("로그인 성공!");
    }

}