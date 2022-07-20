function func1(callback){
    callback();
}
// function func2(){
//     console.log(" 안녕 ");
// }

// // 객체니까 함수를 인자로 보낼 수 있음
// func1(func2);


// 위를 한줄로 작성하는 방법
// callback 함수 이름 상관없음
func1(function a(){
    console.log(" 안녕 ");
});