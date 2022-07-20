// 클래스 선언
class Cat{
    // 가장 처음에 실행되는 것. 없어도 되지만 속성을 받아야 한다면 필요.
    constructor(name){
        this.name = name;
    }
    mew(){
        console.log(this.name + "야옹");
    }
}

// 클래스를 이용하여 객체 만들기(객체 여러개 만들 수 있음)
// new 클래스이름("속성값")
var cat1 = new Cat("나비");
var cat2 = new Cat("냥이");
console.log(cat1);
// 함수 실행
cat1.mew();
cat2.mew();
