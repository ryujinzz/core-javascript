/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log("총 합 = ", 10000 + 8900 + 1360 + 2100);
// console.log("총 합 = ", 21500 + 3200 + 9800 + 4700);
// console.log("총 합 = ", 3800 + 15200 - 500 + 80200);
// console.log("총 합 = ", 560 + 5000 + 27100 + 10200);
// console.log("총 합 = ", 9000 - 2500 + 5000 + 11900);

function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}
//재미 없어서 1,0 나오게 할 수 있음

// 함수 선언

function calcPrice(priceA = 0, ...priceB) {
  // (1) if (!priceC) priceC = 0;
  // (2) priceC ||= 0;
  priceB ??= 0;
  return priceA + priceB;
}

//범쌤 방법

// if(!priceA || !priceB) {
//   throw new Error('calcPrice 함수의 첫 번째와 두 번째 인수는 필수 입력값 입니다.');
// }

// return priceA + priceB + priceC + priceD;

// 함수 호출
const result = calcPrice();
console.log(result);
// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건
// 1. 하나의 기능만을 수행한다.
//2. 이름과 매개변수의 이름을 직관적으로 짓는다 (가독성 > 주석을 덜 쓴다, 역할을 바로 알 수 있다.)
//3. 재사용성이 좋아야한다.

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
// function rem(pxValue, base = 16) {
//   pxValue ??= 0; //validation
//   const remValue = pxValue / base;
//   return `${remValue}rem`;
// }

// console.log(rem(20));

// function rem(pxValue,base = 16){

//   if(!pxValue) throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값 입니다.');

//   (1) if 문 평가
//    if(typeof pxValue === 'string'){
//     pxValue = parseInt(pxValue,10);
//   }
//   if(typeof base === 'string'){
//     base = parseInt(base,10);
//   }

//  (2) 단축평가
//  typeof pxValue === 'string' && (pxValue = parseInt(pxValue,10));
//  typeof base === 'string' && (base = parseInt(base,10));
// 이 두줄 설명 : 저기서 string 인지 물어보는게 25px이 들어갈지 그냥 숫자가 들어갈지 몰라서
// 그냥 숫자가 들어가면 앞이 false로 그냥 바로 들어가고
// string 입력 값이 들어가면 앞이 ture라서 뒤에 숫자만 골라내는 parseInt가 수행된다
//return pxValue / base + 'rem'
// }
// rem();

//내가 짠 코드를 테스트 하는 법 Test Driven Development
// console.assert(rem(20) === "1.25rem");
// console.assert(rem("25px") === "1.5625rem");
// console.assert(rem("30px", 10) === "3rem");

// css(node: string, prop: string, value: number|strung) : string;
//document.body.style
// getComputedStyle(document.body)

// function getStyle(node, prop) {
//   return getComputedStyle(node, null)[prop];
// } 여기서 콘솔로 찍으면 왜 안 나오지? 뭐지 왜 또 나오지

// getStyle(document.body,'font-size') 이거 자체가 유저 에이전트 스타일을 반환함.
//console.log(getStyle(document.body, "font-size"));

function getStyle(node, prop) {
  if (typeof node === "string") {
    node = document.querySelector(node);
  }

  return getComputedStyle(node, null)[prop];
}

// function setStyle(node,styleSelector,styleInput){

//   if(typeof styleInput === "string" || "number"){
//     node = document[node].style[styleSelector];
//   }
//   setStyle(node) = styleInput;

// }parsing error : Assigning to rvalue 내꺼 오류나

// function setStyle(node,prop,value){

//   if(typeof node === 'string') node = document.querySelector(node);
//   if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.');
//   if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.')
//   node.style[prop] = value;
// }

// setStyle("body", "background", "hotpink");

//범쌤이 한거
// const css =  (node,prop,value) =>!value ? getStyle(node,prop) : setStyle(node,prop,value);

function css(node, prop, value) {
  // if(!value){
  //   return getStyle(node,prop) // getter
  // }else{
  //   setStyle(node,prop,value) // setter
  // }

  return !value ? getStyle(node, prop) : setStyle(node, prop, value);
}

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
