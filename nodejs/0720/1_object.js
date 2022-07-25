let obj = {
    key1: "value1",
    key2: "value2",
    key3: function(){
        console.log("a");
    }
};
// key1: key00 => obj 객체에서 key1 동일한 이름으로 가져와야 하지만 : 통해서 가져올 변수명을 바꿀 수 있음
const {key1: key00 , key2, key3, key4="a"} = obj;
key3();
console.log(key00);

let obj2 = {a:1, b:2, c:3, d:4};
// ... : 전개연산자 원하는 것 가져오고 나머지 다 가져올 수 있음
const {a, b, ... rest} = obj;