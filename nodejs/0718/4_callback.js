console.log("start");

function login(id, pw, cb){
    setTimeout(() => {
        console.log('정보 없음');
        cb( id );
    }, 3000);
}

// const user = login('kim', '1234');
// console.log(user + "님 반갑습니다.");

// 3개의 파라미터를 보내기 때문에 함수에서도 3개 파라미터 필요
// 단점: 너무 많은 콜백이 일어날 수 있음.
const user = login('kim', '1234', user=> {
    console.log(user + "님 반갑습니다.");
});


console.log("finish");