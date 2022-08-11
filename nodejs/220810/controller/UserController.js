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
        res.send("회원가입 성공");
    });

    // let sql = "INSERT INTO register VALUES('"+ data.id +"', '"+ data.pw +"', '"+ data.name +"' )";
    // User.insert(req.body, function(){
    //     res.send("회원가입 성공");
    // });
   
}

exports.login = (req, res) => {
    res.render("login");
}

exports.post_login = (req,res) => {
    models.User.findOne({
        where: {id: req.body.id}
    }).then((result) => {
        console.log(result);

        if (req.body.id == result.id && req.body.pw == result.pw){
            res.send("로그인 성공");
        } else {
            res.send("로그인 실패");
        }
    })

    // let sql = `SELECT * FROM register WHERE id = "${data.id}" limit 1`;
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
    models.User.findOne({
        where: {id: req.body.id}
    }).then((result) => {
        console.log(result);
        if (req.body.id == result.id){
            res.send({result: result});
        } 
    })

    // User.get_user(req.body, function(result){
    //     console.log("result[0]: ", result[0]);

    //     if (req.body.id == result[0].id){
    //         res.send({result : result[0]});
    //     } 
    // })
}

exports.patch_update = (req, res) => {
    let newObj = {
        pw: req.body.pw,
        name: req.body.name
    };

    models.User.update(newObj, {where: {id: req.body.id}})
    .then((result) => {
        console.log(result);
        res.send("수정 완료");
    })


    // let sql = `UPDATE register SET pw='${data.pw}', name='${data.name}' WHERE id='${data.id}' `;
    // User.update(req.body, function(result){
    //     console.log("result: ", result);
    //     res.send("수정 완료");
    // });

}


exports.delete_user = (req, res) => {
    models.User.destroy({
        where: {id: req.body.id}
    }).then((result) => {
        console.log(result);
        res.send("탈퇴 완료");
    })


    // let sql = `DELETE FROM register WHERE id = "${id}"`;
    // User.delete(req.body.id, function(result){
    //     res.send("탈퇴 완료");
    // })
}