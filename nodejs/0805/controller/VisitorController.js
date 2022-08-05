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
