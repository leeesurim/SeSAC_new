const Visitor = require("../model/Visitor");

exports.get_visitors = async (req, res) => {
    Visitor.get_visitors(function(result){
        console.log("result : ", result);
        console.log("index");
        res.render("index", { data : result });
    });
}

exports.post_comment = (req, res) => {
    console.log( req.body );

    // insert 함수를 실행할 때 두가지 인자로 보냄
    Visitor.insert(req.body.name, req.body.comment, function( result ){
        // 무조건 insert 후에 실행(ID 가져오기 때문에)
        res.send({id: result}); 
    });
    
}

exports.get_visitor = (req, res) => {
    Visitor.get_visitor(req.query.id, function(result) {
        console.log("result : ", result );
        res.send({ result : result[0] });

    })
}

exports.patch_comment = (req, res) => {
    Visitor.update(req.body, function(result){
        console.log( result );
        res.send("수정 성공");
    });
}

exports.delete_comment = (req, res) => {
    Visitor.delete(req.body.id, function(result){
        console.log( result );
        res.send("삭제 성공");
    })
}