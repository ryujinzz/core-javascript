/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress = "kdo2240k@naver.com"; //여기에 할당 //prompt("이메일을 입력하세요")
let receivedEmailAddress;
if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = "user@company.io";
} else {
  // let receivedEmailAddress = alert(`입력하신 이메일입니다.:${emailAddress}`);
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? "user@company.io"
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? "user@company.io";
receivedEmailAddress = emailAddress || "user@company.io";
/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = "10px";
const boolean = false;

console.log(undefined ?? WIDTH);
console.log(undefined || WIDTH);

console.log(boolean || WIDTH);
console.log(boolean ?? WIDTH);

console.log("" || WIDTH);
console.log("" ?? WIDTH);

//logical Assignment Operators

let x;

let y;

x ||= y; // x가 false 일때 y값을 x에 할당
x &&= y; // x가 true 일때 y값을 x에 할당
x ??= y; // x가 undefined, null 일때 y값을 x에 할당

let title;
title ||= "범쌤과 함께하는 JS 수업!";

let person = {
  firstName: "DY",
  lastName: "KIM",
};

console.log((person.lastName &&= "KIM"));

let user = {
  userName: "strawberry",
};

console.log((user.nickName ??= "blueberry"));
