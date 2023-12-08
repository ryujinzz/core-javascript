/* -------------------- */
/* String Type          */
/* -------------------- */

let message = "Less is more.";

// length 프로퍼티
let stringTotalLength = message.length;

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];

console.log(extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;
//message[0] = 'b' 할 수 없다 ;

console.log("b" + message.slice(1));

// 부분 문자열 추출
let slice = message.slice(4, -1);
console.log("slice:", slice);
let subString = message.substring(2, 5);
console.log(subString);
// let subStr = message.substr();

// 문자열 포함 여부 확인
// let indexOf = message.indexOf("Less");
let indexOf = message.indexOf("hi"); //없는 경우 -1
console.log("indexOf:", indexOf);

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf("edge") > -1:
      browserName = "MS Edge";
      break;
    case agent.indexOf("chrome") > -1 && !!window.chrome:
      browserName = "Chrome";
      break;
    case agent.indexOf("safari") > -1:
      browserName = "Safari";
      break;
    case agent.indexOf("firefox") > -1:
      browserName = "firefox";
      break;
    case agent.indexOf("trident") > -1:
      browserName = "IE";
      break;
  }

  return browserName;
}

console.log(checkBrowser());

let lastIndexOf = message.lastIndexOf("s"); //뒤에 잇는 s부터 탐색함
console.log(lastIndexOf);

let includes = message.includes("Less");
console.log(includes);
let startsWith = message.startsWith("less");
console.log(startsWith); // 첫단위로 시작하는거
let endsWith = message.endsWith(".");
console.log(endsWith); //끝단위로 끝나는 거

// 공백 잘라내기
let str = "    a   b   c   d   ";
let trimLeft = str.trimStart();
let trimRight = str.trimEnd();
let trim = str.trim();

console.log(trimLeft);
console.log(trimRight);
console.log(trim);

let reg = str.replace(/\s*/g, "");

function normalText(string) {
  return string.replace(/\s*/g, "");
}

normalText();

console.log(reg);
// 텍스트 반복
let repeat = message.repeat(3);

// 대소문자 변환
let toLowerCase;
let toUpperCase;

// 텍스트 이름 변환 유틸리티 함수

// function toCamelCase(string) {
//   return string.replace(/(\s|-|_)+./g, ($1) =>
//     $1
//       .trim()
//       .replace(/(-|_)+/, "")
//       .toUpperCase()
//   );
// }

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

let toCamelCase = (string) =>
  string.replace(/(s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, "")
      .toUpperCase()
  );
// let toPascalCase;

//

console.log("aa".padStart(4, 0));

//.padEnd(4,0)
