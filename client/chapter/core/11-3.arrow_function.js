/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
//...rest 진짜 배열로 바꿔줌
// let calcAllMoney = (...rest) => {
//   console.log(rest);
// };

// calcAllMoney(1000, 5000, 4500, 15000);

// 함수 선언 → 화살표 함수 (표현)식
//                rest parameter
let calcAllMoney = (...args) => {
  let total = 0;

  total = args.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);

  return total;
};

const result = calcAllMoney(1000, 5000, 4500, 15000);

console.log(result);

//위의 식 아래에 화살표 함수로 바꾸기
// let total = 0;
//   total = args.reduce((acc,cur)=> acc + cur,0)
//   return total; 여기에서 더 간단히

// let calcAllMoney2 = (...args) => args.reduce((acc,cur)=> acc + cur,0); 이렇게 됩니다.

//
//
// 화살표 함수와 this
//일반 함수의 양면의 얼굴 //'생성자'라는 역할을 같이한다.
//생성자 함수를 쓰이려면 앞에 대문자를 붙여서 일반함수와는 다르게 구별 짓도록했다. -> 너무 헷갈리니까 class 문법으로 바꿈
//화살표함수는 생성자 함수로 쓸 수 없다. (최근 자바스크립트) 화살표 함수는 프로토타입에 생성자를 내장하고 있지않아. <> 일반 함수는 컨스트럭터(생성자)를 내장하고 있어
//생성자 함수(constructor를 포함하는게)가 되게 무겁다.. 그래서 더 안 쓰게 돼
//일반함수는 this를 호출한 대상을 악착같이 탐지한다.
//화살표 함수는 this를 바인딩하지 않기때문에 그냥 상위의 것을 가져온다.
//직접 호출하면 함수라고하고, 객체를 통해서 호출하면 메소드라고 함.
const user = {
  total: 0,
  name: "상원",
  age: 13,
  address: "서울시 중랑구 면목동",
  grades: [80, 90, 100],
  totalGrades: function () {
    //concise 메소드는 constructor는 비내장, this를 일반함수처럼 찾아줌 (생성자함수)

    console.log("일반 함수 :", this);

    function sayHi() {
      console.log("sayHi : ", this);
    }

    sayHi(); //자의적(this가 전역으로 올라감)으로 호출한다. [sayHi의 함수는 전역실행컨텍스트에 위치한다.] window.sayHi가 생략되어있음.
    //화살표함수는 그냥 주변의 것을 탐색해서 (상위참조로, 부모로부터) 가져온다.
  },
};

user.totalGrades(); // 나(this)를 호출한대상은 user이다

//모듈 세상은 전역을 보호하기 때문에 undefined가 나온다.

//번외 foreach에서 기본값을 this로 지정해주면 일반함수로도 this활용이 가능하다 하지만 그렇게 하려면 그냥 화살표함수를 쓰는게 더 권장된다.

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;
  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }
  return result;
  // return a**b
};
console.log(pow(2, 53));

// let powExpression = (numeric, powerCount) => {
//   return Array(powerCount)
//     .fill(null)
//     .reduce((acc) => {
//       return acc * numeric;
//     }, 1);
// };

// 리턴문 중괄호 삭제하기

let powExpression = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);

console.log(powExpression(2, 53));

//
//
//
// repeat(text: string, repeatCount: number): string;
// let repeat = (text, repeatCount) => {
//   let result2 = "";
//   for (let i = 0; i < repeatCount; i++) {
//     result2 += text;
//   }
//   return result2;
// };
// console.log(repeat("a", 3));

let repeatExpression = (text, repeatCount) => {
  return Array(repeatCount)
    .fill(null)
    .reduce((acc) => {
      return acc + text;
    }, "");
};

console.log(repeatExpression("a", 3));
