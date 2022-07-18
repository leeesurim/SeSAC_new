// url 모듈 안에 있는 게 모두 보임
const url = require("url");
// url 모듈 안에 URL 클래스를 가져오는 것. 중괄호에 있으면 정확하게 찾아감
const { URL } = url;
// 위처럼 선언하지 않으면 const naver = new url.URL(string); 이런 식으로 작성

const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=sesac&tqi=hWg%2F8sprvmZss6uZF3GssssssfV-461107";
const naver = new URL(string);
console.log( url.format( naver ) );
console.log( url.parse(string));
console.log( naver.searchParams );