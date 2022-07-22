// 한개의 모듈을 require 할 때는 이름이 의미 없음
const returnString = require("./func.js");

// 여러개의 모듈을 가져올 때는 중괄호 필요
// 어떤 거 가져올지 모르니까 필요한 거 다 작성 
// 이름 동일하게 작성해야 함
const { a, b } = require("./variable.js");

console.log( returnString() );