// function func(){
//     return new Promise(function(resolve, reject){
//         resolve(1);
//     });
// }

// async는 항상 함수 앞에 붙음
async function func(){
    return 1;
}

func().then(function(result){console.log(result);});