const Bmw = function (color) {
    const c = color;
    this.getColor = function () {
        console.log(c);
    };
};

const x5 = new Bmw("red");

// 초기의 컬러값을 얻을 수만 있고 변경할 수 없음
console.log(x5.getColor()); // red