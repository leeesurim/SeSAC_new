function login(id, pw){
    return new Promise( function ( resolve, reject ){
        setTimeout ( function() {
            console.log("사용자 입장");
            resolve(id);
        }, 3000);
    })
}
function getVideo(id){
    return new Promise(function(resolve, reject){
        setTimeout( function(){
            resolve(['아이언맨1', '아이언맨2']);
        }, 2000);
    });
}
function getDetail(video){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("비디오 제목은 : " + video);
        });
    });
}
// login('kim', '1234')
// .then( function(user){
//     console.log(user +'님 환영');
//     return getVideo(user);
// })
// .then(function(video){
//     console.log(video);
//     return getDetail(video[0]);
// })
// .then(function(title){
//     console.log(title);
// });


// 선언할 때는 async, 하나의 비동기함수를 실행시키고 결과가 리턴될 때까지 기다리는 것 await 
async function exec(){
    let user = await login('kim', '1234');
    console.log(user +'님 환영');
    let videos = await getVideo(user);
    console.log(videos)
    let title = await getDetail(videos[0]);
    console.log(title);
}

// 실행
exec();
