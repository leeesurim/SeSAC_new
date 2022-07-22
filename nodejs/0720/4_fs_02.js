const fs = require("fs").promises;

// fs.writeFile('./write.txt', '안녕')
//     .then(() => {
//         console.log("작성 완료");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// copyFile 할 때 비동기식이라서 writeFile 주석처리 안해주면 내용 복사 안됨.
// fs.copyFile("./write.txt", "./new.txt")
//     .then(()=> {
//         console.log("복사완료");
//     })
//     .catch((err) => {
//         console.log(err);
//     })

async function exec(){
    await fs.writeFile("./write.txt", "안녕");
    await fs.copyFile("./write.txt", "./new2.txt");
}
exec();