// const Visitor = require("../model/Visitor");
const models = require("../model");
// models => model/index.js 에서의 db

exports.get_visitors = (req,res) => {
    // model/Visitor.js 에서의 model
    models.Visitor.findAll() // findAll(): 함수, sequelize 문법 select * from visitor;
    .then((result) => {
        // console.log("result : ", result);
        console.log("index");
        console.log(result[0]);
        console.log(result[0].id);
        res.render("index", {data: result});

    });

    
    // Visitor.get_visitors(function( result ){
    //     console.log( "result : ", result );
    //     console.log( "index" );
    //     res.render("index", { data: result });
    // });
}

exports.post_comment = (req,res) => {
    let object = {
        name: req.body.name,
        comment: req.body.comment
    };
    // create() -> insert into visitor 에러 발생
    // crate({ name: '홍', comment: '길동; })
    // -> insert into visitor(name, comment) values('홍', '길동');
    // create(반드시 작성)
    models.Visitor.create( object )
    .then((result) => {
        console.log(result);
        res.send({id: result.id});
    });

    // console.log( req.body );

    // Visitor.insert( req.body.name, req.body.comment, function( result ){
    //     res.send({ id: result });
    // } );
}

exports.get_visitor = (req,res) => {
    // select * from visitor where id = req.query.id limit 1
    // findOne : 하나만 검색
    models.Visitor.findOne({
        // ,는  AND가 됨 where id = req.query.id and name='홍길동'
        where: {id: req.query.id}
    }).then((result) => {
        console.log(result);
        res.send({result : result});
    })

    // Visitor.get_visitor( req.query.id, function(result) {
    //     console.log( "result : ", result );
    //     res.send( { result : result[0] } );
    // })
}

exports.patch_comment = (req,res) => {
    let newObj = {
        name: req.body.name,
        comment: req.body.comment
    };
    // update visitor set name=req.body.name, comment: req.body.comment
    // update(수정할 객체, 조건)
    models.Visitor.update(newObj, {where: {id: req.body.id}})
    .then((result) => {
        console.log(result);
        res.send('수정 성공');
    })

    // Visitor.update( req.body, function(result){
    //     console.log( result );
    //     res.send( "수정 성공" );
    // });
}

exports.delete_comment = (req,res) => {
    // destroy()
    models.Visitor.destroy({
        where: {id: req.body.id}
    }).then((result) => {
        console.log(result);
        res.send("삭제 성공");
    })

    // Visitor.delete( req.body.id, function(result){
    //     console.log( result );
    //     res.send( "삭제 성공" );
    // });
}