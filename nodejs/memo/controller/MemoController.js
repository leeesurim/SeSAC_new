exports.index = (req,res) => {
    res.render("index");
}

exports.post_cotent = (req, res) => {
    console.log( req.body );
    res.send(req.body);

}