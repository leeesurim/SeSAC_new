// mysql 불러오기
const mysql = require("mysql");

// createConnection: DB를 연결해주는 함수
const cnn = mysql.createConnection({
    // 서버로 접속한다면 IP 주소 입력
    host: 'localhost', 
    user: 'user',
    password: '1234',
    database: 'sesac'
});

exports.get_visitors = (cb) => {
    // query는 콜백함수처럼 사용해야 함.
    cnn.query('SELECT * FROM visitor', (err, rows) => {
        if (err) throw err;
        console.log(rows);
        cb(rows);
    });
    
}

exports.insert = ( name, comment, cb ) => {
    // 어떤 컬럼에 값을 넣을지 명시, 문자가 들어가는 거라서 '' 묶어줘야 함.
    var sql = "INSERT INTO visitor (name, comment) VALUES('"+ name +"', '" + comment +"')";
    cnn.query( sql, (err, rows) => {
        if (err) throw err;

        console.log(rows);
        cb(rows.insertId);
    })
}

exports.get_visitor = (id, cb) => {
    // id 컬럼의 값이 id 인 데이터를 1개만 검색한다.
    cnn.query(`SELECT * FROM visitor WHERE id = ${id} limit 1`, (err, rows) => {
        if (err) throw err;

        cb(rows);
    })

}

exports.update = (data, cb) => {
    let sql = `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}`;
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        cb(rows);
    })

}

exports.delete = (id, cb) => {
    cnn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
        if (err) throw err;
        cb(rows);
    });
}