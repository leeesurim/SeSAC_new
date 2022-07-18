// os 모듈 사용하기 위해서 os 객체 불러오기
const os = require("os");

// console.log(os.hostname()); // 제 컴퓨터 이름 출력

// 1) 사용 가능한 메모리(RAM) 출력하기
console.log(os.freemem());
// 2) 전체 메모리 용량 출력하기
console.log(os.totalmem());
// 3) 홈 디렉토리 경로 출력하기
console.log(os.homedir());


const path = require("path"); // path 모듈 사용하려면 불러와야 해
const { rootCertificates } = require("tls");


// 1) 경로 구분자 출력하기
console.log(path.sep);
// 2) 현재 파일의 확장자 출력하기
const string  = __filename; // 현재 파일이름
console.log(path.extname(string)); // 확장자만 출력
// 3) 현재 파일의 경로 분리해서 출력하기
console.log(path.parse(string));