const path = require("path"); // path 모듈 사용하려면 불러와야 해
const { rootCertificates } = require("tls");


// 1) 경로 구분자 출력하기
console.log(path.sep);
// 2) 현재 파일의 확장자 출력하기
const string  = __filename; // 현재 파일이름
console.log(path.extname(string)); // 확장자만 출력
// 3) 현재 파일의 경로 분리해서 출력하기
console.log(path.parse(string));