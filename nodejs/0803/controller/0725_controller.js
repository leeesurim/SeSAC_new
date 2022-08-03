const User = require("../model/0725_model");

exports.filename = (req, res) => {
    res.send("0725_controller");
}

exports.index = (req, res) => {
    res.render("0725_index");
}

exports.receive = (req, res) => {
    User.receive(req.query);
    res.render("0725_receive", req.query);
}
