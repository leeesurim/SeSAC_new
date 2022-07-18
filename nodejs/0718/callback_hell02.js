function call(name, cb){
    setTimeout(function(){
        console.log(name);
        cb(name);
    }, 1000);
}
function back(cb){
    setTimeout(function(){
        console.log("back");
        cb("back");
    }, 1000);
}
function hell(cb){
    setTimeout(function(){
        cb("callback hell");
    }, 1000);
}
call('kim', function(name){
    console.log(name+"반가워");
    back(function(txt) {
        console.log(txt +"을 실행했구나");
        hell(function(message){
            console.log("여기는 " + message);
        });
    });
});

// call => back => hell 예상
// call('kim', 콜백함수) 형식
// call => 1초 기다림 => console.log(name) => cb(name) console.log(name + "반가워")
// back => 1초 기다림 => console.log("back"); => cb("back");   console.log(txt +"을 실행했구나");
/// hell => 1초 기다림 => cb("callback hell"); console.log("여기는 " + message);


