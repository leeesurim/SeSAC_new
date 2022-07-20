function promise1(flag){
    return new Promise(function (resolve, reject ){
        if(flag){
            resolve("then으로 연결");
        }else {
            reject("catch로 연결");
        }
    });
}

promise1(true)
    .then(function(result){
        console.log("then : ", result);
    })
    .catch(function(err){
        console.log("catch : ", err);
    });

// promise1(false)
// .then(function(result){
//     console.log("then : ", result);
// })
// .catch(function(err){
//     console.log("catch : ", err);
// });

var a = promise1(true);
console.log(a);

// 결과
// Promise { 'then으로 연결' } => then으로 가면 Promise { 괄호 } 사라진다고 생각
// then :  then으로 연결