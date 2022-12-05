/*
    function 함수이름 (변수명:타입) : 반환타입 {}
 */

function sum1(a, b){
    return a + b;
}
console.log(sum1(1, 'a'));

function sum2(a: number, b:number): number {
    return a + b;
}
console.log(sum2(1,2)); // 숫자가 아니면 에러 발생

// ? - number OR undefined
// ?라고 설정해줘도 반환값이 number면 에러 발생
function sum3( a:number, b?:number ){
    return a + b;
}
console.log(sum3(1));

/*
    tsconfig.json에 "target": "ES2015"이면 실행하는 환경이 옛날 환경이라고 명시한 거라서
    최신 문법으로 작성해도 옛날 문법으로 변경(화살표 함수 형식 => 일반 함수 형식)
 */
// const tetfunction = () => {
//     return 'test';
// }
// console.log( tetfunction() );

let person = { name:'코딩온', age: 10};
function getInfo(obj: {name: string, age: number}){

}
getInfo(person);

// interface 미리 정해놓은 약속
interface PersonData{
    // readonly : 읽기 전용 속성이라 변경할 수 없음
    readonly name: string;
    age: number;
    nickname?: string;
}
function getInfo2(obj: PersonData){

}
// 객체에도 인터페이스 지정
let person2:PersonData = { name:'코딩온', age: 10};
person2.age = person2.age + 1;

// 함수 하나에 대해서 미리 지정할 수 있음.
interface login {
    (id: string, pw: string):boolean
};
let loginUser: login = (id, pw) => {
    return true;
} 

interface Book{
    title: string,
    getInfo(): void;
    changeTitle(newTitle: string): void;
}

class MyBook implements Book{
    title = "책";
    date = "2022-12-05";
    getInfo(){
        console.log("정보");
    }
    changeTitle(newTitle: string): void{

    }
}