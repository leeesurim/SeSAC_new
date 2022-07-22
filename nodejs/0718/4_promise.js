
// // resolve는 성공했을 때 실행, reject는 실패할 때 실행
// const func1 = new Promise( ( resolve, reject ) => {
//     var flag = true;
//     if (flag) resolve("성공");
//     else reject("실패"); // catch 부분 실행
// })

// func1.then( value => {
//     console.log(value);
// }).catch(err => {
//     console.log(err);
// });

// func1.then( value => {
//     return value + "1"; // 다음 then이 return
// }).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// });

const func1 = new Promise( function ( resolve, reject ){
    var flag = true;
    if (flag) resolve("성공");
    else reject("실패"); // catch 부분 실행
})

