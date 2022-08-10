// const User = require("../model/User");
const { User } = require("../model");
const models = require("../model");

exports.index = (req, res) => {
    res.render("user_index");
}

exports.register = (req, res) => {
    res.render("register");
}

exports.post_register = (req, res) => {
    console.log(req.body);

    let object = {
        id: req.body.id,
        pw: req.body.pw,
        name: req.body.name
    };

    models.User.create( object )
    .then((result) => {
        console.log(result);
        res.send(req.body);
    });

    // let sql = "INSERT INTO register VALUES('"+ data.id +"', '"+ data.pw +"', '"+ data.name +"' )";
    // User.insert(req.body, function(){
    //     res.send("회원가입 성공");
    // });
    // res.send(req.body);
}

exports.login = (req, res) => {
    res.render("login");
}

exports.post_login = (req,res) => {
    // User.get_user(req.body, function(result){
    //     console.log("result[0]: ", result[0]);
    //     if (req.body.id == result[0].id && req.body.pw == result[0].pw){
    //         res.send("로그인 성공");
    //     } else {
    //         res.send("로그인 실패");
    //     }
    // })
}

exports.update = (req, res) => {
    res.render("update");
}

exports.post_select = (req, res) => {
   
    // User.get_user(req.body, function(result){
    //     console.log("result[0]: ", result[0]);

    //     if (req.body.id == result[0].id){
    //         res.send({result : result[0]});
    //     } 
    // })
}

exports.patch_update = (req, res) => {
    // User.update(req.body, function(result){
    //     console.log("result: ", result);
    //     res.send("수정 완료");
    // });

}


exports.delete_user = (req, res) => {
    User.delete(req.body.id, function(result){
        res.send("탈퇴 완료");
    })
}