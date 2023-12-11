/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let age = 20;

if (age >= 14 && age <= 90) {
  console.log("청소년 또는 성인입니다.");
}

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

console.log(AandB);

// 논리합(또는) 연산자
let AorB = a || b;

console.log(AorB);

//logical And Assignment 논리곱 할당 연산자
//a &&= b;
// a = a && b

//logical OR Assignment 논리곱 할당 연산자
// a ||= b;

// 부정 연산자
let reverseValue = !value;

console.log(!value); //true

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thisIsFalsy: false };

console.log(whichFalsy); // 전부 true라서 마지막 것을 반환해줌

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thiIsTruthy: true };

console.log(whichTruthy); //결과는 3번째것이다.

function login() {
  let user = prompt("whoIsThere?"); //.toLowerCase();

  if (!user) return; //return 값이 없으면 undefined
  //취소 버튼, esc 누르면 null이 뜸 //에러 안 나게 처리
  // 어떤 값도 입력하지 않았을 경우 => 빈문자 ''

  if (user?.toLowerCase() === "admin") {
    let password = prompt("Password?");

    if (password?.toLowerCase() === "theMaster") {
      console.log("로그인 성공 환영합니다");
    } else {
      console.log("비밀번호를 잘못 입력하셨습니다.");
    }
  } else if (user === null || user.replace(/\s*/g, "") === "") {
    console.log("취소됐습니다.");
  } else {
    console.log("올바른 사용자가 아닙니다.");
  }
}

login();

// else if (){
// prompt('password?');}

//   if(){
// else if (){
//   alert(welcome!);
// }
// else(){
//   prompt('Writing Password');

// }
// }

// else {
// alert('I don\'t know you')

// }
