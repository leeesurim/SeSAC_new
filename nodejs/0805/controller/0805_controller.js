const Visitor = require("../model/0805_model");

exports.get_visitors = async (req, res) => {
    Visitor.get_visitors(function(result){
        console.log("result : ", result);
        console.log("index");
        res.render("0805_index", {data : result});
    })
}

exports.post_comment = (req, res) => {
    console.log(req.body);

    Visitor.insert(req.body.name, req.body.comment, function(result){
        res.send({id: result});
    });
}