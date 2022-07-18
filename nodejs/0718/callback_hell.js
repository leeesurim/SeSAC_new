function login(id, pw, cb){
    setTimeout(() => {
        console.log("사용자 입장");
        cb(id);
    }, 3000);
}

function getVideo(id, cb){
    setTimeout(() => {
        cb(['아이언맨1', '아이언맨2']);
    }, 2000);
}

function getDetail(video, cb) {
    setTimeout(() => {
        cb("비디오 제목은 : "+ video);
    }, 1000);
}

// login 콜백함수는 함수 실행 후 진행
login('kim', '1234', user => {
    console.log('user님 환영');
    getVideo(user, (videos) => {
        console.log(videos);
        getDetail(videos[0], title => {
            console.log(title);
        });
    });
});

// login 실행 => setTimeout 3초 기다림 => "사용자 입장" => cb(id) 즉 login 뒤 콜백함수 실행 => getVideo videos에 ['아이언맨1', '아이언맨2'] 들어감 => getDetail "비디오 제목은 : ", 아이언맨1