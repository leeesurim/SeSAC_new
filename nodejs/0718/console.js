// 출력하는 형태 지정
const obj = {
    out: {
        in : {
            key: 'value'
        }
    }
};
console.log(obj);
console.log(obj["out"]);
console.log(obj["out"]["in"]);


// 타임이 시작한 부분부터 끝날 때까지 시간을 밀리초 단위로 출력
// ("내용") 레이블이 동일해야 시간 측정 가능(어디서 시작하고 끝났는지 확인 되어야 하니까)
console.time("시간");

// trace를 이용하여 처음 에러가 뜬 부분을 확인할 수 있음
console.error("에러!");

console.trace("Error");

// 배열로 작성한 내용이 테이블로 들어감
console.table([{name: 'abc', birth: 1990 }, {name: 'def', birth:1980 }]);

// 어디까지 보여줄지 선택 가능
console.dir(obj, {colors: true, depth: 2});
// Key, value를 보여주지 않음
console.dir(obj, {colors: false, depth: 1});


console.timeEnd("시간");