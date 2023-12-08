/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;

console.log(typeof String(YEAR));
console.log(typeof +YEAR);
console.log(typeof (YEAR + ""));

// undefined, null
let days = null;

let weekend;

console.log(days + "");
// boolean
let isClicked = false;
console.log(isClicked + "");

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;

console.log(Number(friend));

// null

let money = null;

console.log(Number(money));

// boolean

let cutie = true;
console.log(Number(cutie));

// string

let num = "250";
console.log(Number(num));

console.log(+num);

console.log(num / 1);

console.log(num * 1);

// numeric string
const width = "105.3px";

console.log(Number(width));
console.log(parseInt(width, 10)); // 105
console.log(parseFloat(width)); // 105.3
//parseInt
//parseFloat

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
console.log(Boolean(friend));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean("0"));
console.log(Boolean(0));

// const value = prompt("값을 입력해주세요");

// if (+value) {
// }

// console.log(typeof value);
