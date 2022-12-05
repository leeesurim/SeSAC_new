// : 타입 표기 (Type Annotation)
let str: string = 'hi';
let num: number = 1;
let flag: boolean = true;
let age: number | string;
age = 10;
age = 'a';
// age = true;

// 모든 타입을 담을 수 있는 변수
let any: any;

// Array 
let arr1: number[] = [1,2,3,4,5];
let arr2: string[] = ['a', 'b', 'c', 'd'];
let arr3: Array<number> = [1,2,3,4,5];

// Tuple
// 타입과 배열의 길이가 고정되어 있음
let arr4: [string, number] = ['str', 1];
arr4[0].concat();

//Enum - 자바스크립트에서 잘 사용하지 않음
enum Names {홍길동, 코딩온, 새싹};
let name1: Names = Names.홍길동;
name1 = Names.코딩온;

// void
// 함수 : 반환값이 없는 친구 / 변수 undefined와 null만 들어갈 수 있다
let void1: void = undefined;
function voids(): void {
    console.log('11');
}

// never - 절대 반환하지 않는 함수
// 함수에 사용. 함수의 끝에 절대 도달하지 않는다
// function neverEnd() : never{
//     while(true){
//     }
// }

let test: any; // 모든 타입허용(최대한 사용하지 않는 것이 좋음)
test = 1;
test = [1,2,3];

let test2: object; // 기본타입을 제외한 나머지 모두(array, tuple 등)
// test2 = 1;
test2 = [1,2,3];