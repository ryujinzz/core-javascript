//1번 400,500을 삭제하세요.
var nums = [100, 200, 300, 400, 500];
//(1)
nums.pop();
nums.pop();
console.log(nums);
// num.pop(num.pop());

//(2)
// nums.length = 3;
// console.log(nums);

//(3)
// nums.splice(-2, 2);
// console.log(nums);

//2번 데이터
var arr = [200, 100, 300];
//pass
arr.splice(-1, 0, 1000);
console.log(arr);

// 출력[(200, 100, 10000, 300)];

//문제 5번

var a = 10;
var b = 2;
// i+=2 > i + 2 = i
for (var i = 1; i < 5; i += 2) {
  a += i;
  // a + (i) = a
  // 10 + (1) = 11
  // 10 + (3) = 14 > 최종 a 값
}

// 14 + b(=2) = 16

console.log(a + b);

//9번 문제

// var year = '2019';
// var month = '04';
// var day = '26';
// var hour = '11';
// var minute = '34';
// var second = '27';

// var result = //빈칸을 채워주세요

// console.log(result);

// ** 출력 **
// 2019/04/26 11:34:27

//풀이 1번
//var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

//풀이 2번
//var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;

//10번 문제

//(1)현지님 코드
// 1-1.몇 단의 트리를 나눌지
// let n = +prompt("몇 줄 트리를 만들겠습니까?");
// 1-2. 트리 1단에 들어가는 별과 공백을 넣을 빈공간
// let tree = "";

// for (let i = 0; i < n; i++) {
//   //1-4.공백의 나열
//   for (let j = n - i; j > 1; j--) {
//     tree += " ";
//     // tree + " " = tree
//   }
//   //1-5. 입력된 트리 단계에 비례하는 별 갯수 홀수 1/3/5/7...
//   for (let k = 0; k < 2 * i + 1; k++) {
//     tree += "*";
//     // tree + "*" = tree
//   }
//   //1-6.트리 줄 수에 따른 (for 공백과 별 갯수의) 줄바꿈
//   tree += "\n";
//   // tree + "\n" + tree
// }

// console.log(tree);

//1. 빈공간을 5,4,3,2,1,0으로 출력
//2. 별을 1,3,5,7 ..홀수로 출력
//3. 1,2번 할 떄마다 줄바꿈을 출력
//4. 받아둘 공간 출력 ->

// let myInput = prompt("만들려는 트리의 층을 입력하세요.");
// let myTree = "";

// for (let i = 0; i < myInput; i++) {
//   for (let j = myInput - i; j > 1; j--) {
//     myTree += " ";
//   }
//   for (let k = 0; k < 2 * i + 1; k++) {
//     myTree += "*";
//   }
//   myTree += "\n";
// }

// alert(myTree);

//서린님
// function makeTree(num) {
//   console.log(num);
//   for (let i = num, j = 1; i > 0; i--, j += 2) {
//     console.log(" ".repeat(i), "*".repeat(j));
//   }
// }
// makeTree(5);

//지수님
// for (let i = 0; i < 5; i++) {
//   console.log(" ".repeat(5 - i) + "*".repeat(i * 2 + 1));
// }

//경혜님(1)

// for (let i = 1; i <= input; i++) {
//   const spaces = " ".repeat(input - i);
//   const stars = "*".repeat(2 * i - 1);
//   console.log(spaces + stars);
// }

//효진님
// let num = 5;
// let star = '';

// for(let i=0; i<num ; i ++) {

//     star += ' '.repeat(num-i) + '*'.repeat(2*i + 1)+'\n';

// }

// console.log(star);

//11번 문제
let s = 0;

for (let i = 1; i <= 100; i++) {
  s += i;
}

console.log(s);

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    s = i + j;
  }
}

//12번 문제 안 배움

//13번 문제

// let planet = [
//   "수성",
//   "금성",
//   "지구",
//   "화성",
//   "목성",
//   "토성",
//   "천왕성",
//   "해왕성",
// ];

// let num = prompt("알고싶은 행성의 순서를 입력하세요.");

// if (num < planet.length) {
//   alert(`${num} 번 째 행성은 ` + `${planet[num - 1]}` + " 입니다.");
// }
//수성

//14번
//3의 배수일때 짝 그외에 그대로 출력

// let number = +prompt("아무 숫자나 입력하세요");

// if (number % 3 == 0) {
//   alert("짝");
// } else {
//   alert(number);
// }

//15번 자기소개

// let name = prompt("이름을 입력해주세요");

// alert("안녕하세요, 저는 " + name + "입니다.");

//16번 거꾸로 , 로꾸거

// let origin = "거꾸로";

// let reverse = origin.split("").reverse().join("");

// console.log(reverse);

//17번

// let tall = prompt("키를 입력해주세요");

// if (tall < 150) {
//   alert("NO");
// } else {
//   alert("YES");
// }

//18번 점수 평균 구하기 > 다시 풀기

// let score = +prompt(
//   "순서대로 국영수 점수를 한칸씩 띄어서 입력하면 평균을 구해드립니다."
// ).split(" ");
for (let i = 0; i < score.lenth; i++) {}

//19번

// let nine = prompt(
//   "a의 b승을 구하고 싶은대로 숫자 2개를 공백을 두고 입력하시오."
// ).split(" ");

// function rel(a, b) {
//   return a ** b;
// }

// alert(rel(nine[0], nine[1]));

//20번
