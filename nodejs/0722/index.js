const express = require('express'); // express 모듈 불러오기
const app = express();
const port = 8000;

// 이미지 삽입 - public을 정적 파일 관리하는 곳이라고 지정 => localhost:8000/apple.png로 접속
// app.use(express.static('public'));

// 화면 engine을 EJS로 설정
app.set('view engine', 'ejs');

// 접근하는 가상 경로를 /abc로 하겠음 => localhost:8000/abc/apple.png로 접속
app.use('/abc', express.static('public'));


// '/' 경로에 따라 처리 가능
app.get('/', (req, res) => {
    // 백 내용을 프론트로 보내는 방법
    var list = ['apple', 'banana']; // DB에서 정보를 가져왔다
    res.render("test", {list: list}); // {키:값} 형태로 보내기

    // res.send('Hello Express!'); // 화면에 출력
    // res.render("test"); // views 폴더 아래 test.ejs 불러오기
});

app.listen(port, () => {
    console.log('Server port : ', port);
});