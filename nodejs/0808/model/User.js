const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac'
});

// 회원가입
exports.insert = (data, cb) => {
    let sql = "INSERT INTO register VALUES('"+ data.id +"', '"+ data.pw +"', '"+ data.name +"' )";
    cnn.query(sql, (err, rows) => {
        if (err) throw err;

        console.log(rows);
        cb(rows);
    })
}

// 로그인
exports.get_user = (data, cb) => {
    let sql = `SELECT * FROM register WHERE id = "${data.id}" limit 1`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        
        cb(rows);

    })
}

// 회원정보 수정
exports.update = (data, cb) => {
    console.log(data);
    let sql = `UPDATE register SET pw='${data.pw}', name='${data.name}' WHERE id='${data.id}' `;
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        cb(rows);
    })
}

// 회원정보 삭제
exports.delete = (id, cb) => {
    console.log("id: " ,id);
    let sql = `DELETE FROM register WHERE id = "${id}"`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb(rows);
    });
}