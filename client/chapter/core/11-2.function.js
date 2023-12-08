/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (a, b, c, d, e, f, g) {};
// 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 변수 : arguments
// arguments 객체를 사용해서 함수의 매개변수 없이 모든 아이템들을 수집 : 모든 값 더하기

// console.log( arguments );

let total = 0;

// (1)for 문
// for (let i = 0; i < arguments.length; i++) {
//   // total = total + arguments[i];
//   total += arguments[i];
// }
//(2)for .. of 문
// for (let value of arguments) {
//   total += value;
// }
//(3) 빌려쓰기 - 단점: 1회성이다.
// Array.prototype.forEach.call(arguments, function (item) {
//   total += item;
// });

//진짜 배열 만들기
// (1-1)인스턴스 함수 슬라이스 그대로 포 떠옴 (구식브라우저) const arr = Array.prototype.slice.call(arguments)
// (1-2)스테틱 함수 최신 브라우저 const arr = Array.from(arguments);

//(1-3)스프레드 -> 모든 배열의 기능을 다 가져와서 쓸 수 있음
// const arr = [...arguments];

//(4)forEach : 값을 반환하지 않음
// arr.forEach(function (item) {
//   total += item;
// });
// console.log (a) value 순서대로 나옴 -> 배열로 만들어줌
// console.log(b) index
// 각각의 배열이 나옴
//void 내보내지 않겠다. -> undefined 타입스크립트에서는 void를 지정해주어야함
//리턴문 쓸 수 없음 그냥 계산만 해준다.

//map 값을 반환합니다. 단, 배열만 반환합니다. 리스트렌더링 -> 리액트에서 배열로 만들어 줘야한다.

//filter: 값을 반환함. 단, 배열만.

//reduce  : 값을 반환합니다. >코드 자체를 줄여쓸 수 있어서 reduce다.
//acc 누적된 값, cur item의 모든 값을 나열해둔다.
//acc 초기값은 어떻게 설정할거야? {}, 0 < 여기가 초깃값이 된다. 아무것도 안 쓰면 첫번째 아이템값이 들어간다.
//배열의 갯수만큼 값 더하기를 반복한다.
// return arr.reduce(function (acc, cur) {
//   return acc + cur;
// }, 0);
//위의 식을 화살표함수로 바꾸면
// return arr.reduce((acc, cur) => acc + cur, 0);
// return total;
// };

//arr.forEach(item => total += item)
//콜백 함수는 표현식(화살표함수)로 많이 씁니다.

const result = calculateTotal(1000, 2300, 5000, 1500, 3500, 4600, 35000);

console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};
//호출은 앞부분 선언부로 해야함다. hello()로 호출하면 안됨... 이런식으로는 잘 안 쓰므로 ㄱㅊ

// 콜백 함수 (표현)식
// let cb = function (a, b, c) {
//   console.log(a);
//   console.log(b());
//   console.log(c());
// };

// cb(
//   true,
//   function () {
//     console.log("성공");
//   },
//   function () {
//     console.log("실패");
//   }
// );

//위의 함수를 의미있는 이름들로 바꾸어 실행하기
// let cb = function (isActive, success, fail) {
//   if (isActive) {
//     success();
//   } else {
//     fail();
//   }
// };

// cb(
//   true,
//   function () {
//     console.log("성공!");
//   },
//   function () {
//     console.log("실패!");
//   }
// );

//url.includes("www")는 허술해서
//map은 들어온 아이템 단위로 배열을 만들어 주면 검사하는 것.
function movePage(url, success, fail) {
  if (url.match(/http.+www/) || typeof url === "string") {
    success(url);
  } else {
    fail();
  }
}

//실행부
movePage(
  "https://www.naver.com",
  function (url) {
    console.log(url + "해당 페이지로 넘어갑니다.");
  },
  function () {
    console.log("입력하신 url 주소는 없는 주소입니다.");
  }
);

//윗부분 캡쳐에 err에 아래가 다 생략된것임.
//let bambi = { name: 'bambi', age: 10 };
// func1(bambi);

// function func1(bambi) {
//   console.log(bambi.name);
// }

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
//(function a(){})() 기본 틀
// 함수 호출이 필요 없이 즉시 실행된다.
//함수가 선언됨과 동시에 실행되는 것을 말합니다.
//브라우저 로딩되지마자 실행시키려고 , var를 가두려면 함수가 있어야하고 그렇기 때문에 쓰임.
// let IIFE = ;

// var는 블록 스코프 : x
// var는 함수 스코프 : o

// incapsulation (캡슐화)
// 📂
// import css from 'css.js' // module
// 모듈화 => 모듈 프로그래미(import, export)

// const MASTER = (function (g){

//   console.log( g.alert() );
//   let uuid =  'askdjazxjd!@#!@$123';

//   return {
//     getKey(){
//       return uuid
//     },
//     setKey(value){
//       uuid = value
//     }
//   }

// })(window);

// // console.log(MASTER.getKey());

// MASTER.setKey('새로운 비밀번호')

const css = (function () {
  function getStyle(node, prop) {
    if (typeof node === "string") node = document.querySelector(node);
    if (typeof prop !== "string")
      throw new Error(
        "getStyle 함수의 두 번째 인수는 string 타입 이어야 합니다."
      );

    return getComputedStyle(node, null)[prop];
  }

  function setStyle(node, prop, value) {
    if (typeof node === "string") node = document.querySelector(node);
    if (typeof prop !== "string")
      throw new Error(
        "setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다."
      );
    if (!value)
      throw new Error("setStyle 함수의 세 번째 인수는 필수값 입니다.");

    node.style[prop] = value;
  }

  function css(node, prop, value) {
    // if(!value){
    //   return getStyle(node,prop) // getter
    // }else{
    //   setStyle(node,prop,value) // setter
    // }

    return !value ? getStyle(node, prop) : setStyle(node, prop, value);
  }

  return css;
})();

//foreach, map, reduce 비교
// const arr = ['김다영','이경화','김용범'];

// const newArr = ['김다영-hi','이경화-hi','김용범-hi'];

// let name = [];

// arr.forEach(function(item){
//   name.push(item + '-hi')
// })

// console.log(name);

// const name = arr.reduce(function(acc,cur){

//   acc.push(cur + '-hi');

//   return acc;
// },[])

// console.log( name );

// const name = arr.map(function(item){
//   return item + '-hi'
// })

// console.log(name);
