let user = null;
console.log(user || "choong");

let height = 0;
// height = 0 이면, ||를 사용했을 때 falsy 값으로 계산돼서 뒤의 값이 결과값으로 출력된다.
console.log(`${height || 10}px`);

// height가 0이여도 falsy값으로 계산이 아닌 null과 undefined 즉 nullish 값만 평가하기 때문에 0이 반환된다.
console.log(`${height ?? 10}px`);

// let userInfo = { gender: "male", name: null };
// console.log(userInfo.gender || "male");
// console.log(userInfo.name ?? "john");

//삼항 연산자. if 와 ?

//1번문제

// let response = prompt("자바스크립트의 공식 이름은 뭘까요?",'');
// if (response == "ECMAScript") {
//   alert("정답입니다!");
// } else {
//   alert("이름을 모르시나요?");
// }

//2번문제

// let nums = prompt("숫자를 입력하세요", 0);

// if (nums == 0) {
//   alert("0");
// } else if (nums > 0) {
//   alert("1");
// } else {
//   alert("-1");
// }

// let value = prompt("숫자 입력 ㄱㅅ", 0);

// if (value > 0) {
//   alert("1");
// } else if (value < 0) {
//   alert("-1");
// } else {
//   alert("0");
// }
//3번문제

// let result;

// if (a + b < 4) {
//   result = "미만";
// } else {
//   result = "이상";
// }
//힌트 let result = (condition) ? value1 : value2;

// 바꾼 답
// let result = a + b < 4 ? "미만" : "이상";

//4번문제
// let message;

// if (login == "직원") {
//   message = "안녕하세요.";
// } else if (login == "임원") {
//   message = "환영합니다.";
// } else if (login == "") {
//   message = "로그인이 필요합니다.";
// } else {
//   message = "";
// }

// let message =
//   login == "직원"
//     ? "안녕하세요"
//     : login == "임원"
//       ? "환영합니다."
//       : login == ""
//         ? "로그인이 필요합니다."
//         : "";

// for 문제  2~10까지 짝수만 출력
for (let even = 1; even < 11; even++) {
  // even += 1; or log 안에 even+=1 or for문 안에서 even += 2
  // console.log(even);
}
//continue
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 1) continue;
//   alert(i);
// }
//경혜님 코드
// for (let i = 1; i <= 5; i++) {
//   console.log(i * 2);
// }
// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// 사용자가 100보다 큰 숫자를 입력하도록 안내하는 프롬프트 창을 띄워보세요.
// 사용자가 조건에 맞지 않은 값을 입력한 경우 반복문을 사용해
// 동일한 프롬프트 창을 띄워줍시다.

// 사용자가 100을 초과하는 숫자를 입력하거나 취소 버튼을 누른 경우,
// 혹은 아무것도 입력하지 않고 확인 버튼을 누른 경우엔
// 더는 프롬프트 창을 띄워주지 않아도 됩니다.

let over = prompt("100을 초과하는 숫자를 넣으세요", "");

//내 엉망 코드
for (; (over = true); ) {
  if (over < 100) {
    prompt("100을 넘는 숫자를 넣으세요", "");
  } else {
    alert("맞게 입력하셨습니다");
  }
  break;
}

//효진님 코드

// while(true) {
//   let num = +prompt('숫자입력');
//   if(num > 100 || !num) break;

// }

//min(a, b) 함수 만들기
// function min(a, b) {
//   return a > b ? b : a;
// }

//함수 마지막 문제
// function pow(x, n) {
//   return x ** n;
// }

// let x = prompt("x?", "");
// let n = prompt("n?", "");

// if (n < 1) {
//   alert(`${n}은 1이상의 자연수여야합니다.`);
// } else {
//   alert(pow(x, n));
// }
