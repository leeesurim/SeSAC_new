const url = require("url");
const { URL } = url;
const string = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=sesac";
const naver = new URL(string);

// 1) 위의 URL 에서 모든 키를 가져오기
console.log(naver.searchParams.keys());
// 2) 위의 URL에서 모든 값을 가져오기
console.log(naver.searchParams.values());
// 3) 위의 URL 에서 sm 키를 삭제하고 1)을 이용해 모든 키 가져오기
naver.searchParams.delete('sm');
console.log(naver.searchParams.keys());