const fs = require("fs").promises;

exports.post_user = function(data){
    console.log(data);
    fs.writeFile("./0803_info.txt", data.id + "//" + data.pw + "//" + data.name);
}

exports.get_user = async function(){
    var buffer = await fs.readFile("./0803_info.txt");
    return buffer.toString();
}