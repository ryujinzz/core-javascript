/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

console.log(Array.isArray([]));

const isArray = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "array";

const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "null";

function normalIsArray(data) {
  // return Array.isArray(data)
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "array"
  );
}
isArray([]);

const arr = [10, 100, 1000, 10000];
const people = [
  {
    id: 0,
    name: "김다영",
    job: "프론트엔드 개발자",
    age: 25,
    imageSrc: "ASdkl31",
  },
  {
    id: 1,
    name: "김충만",
    job: "치킨집사장",
    age: 51,
    imageSrc: "asFkzo23",
  },
  {
    id: 2,
    name: "조윤주",
    job: "화가",
    age: 12,
    imageSrc: "Gzoskq13",
  },
  {
    id: 3,
    name: "송현규",
    job: "마델",
    age: 25,
    imageSrc: "aabaq23",
  },
];

/* 요소 순환 ---------------------------- */

// forEach

arr.forEach((item, index) => {
  // console.log(item);//배열의 아이템을 각각 뱉어내줌 10,100,1000,10000
  //console.log(index); //배열의 인덱스 각각 뱉어내줌 0,1,2,3
});

people.forEach((item) => {
  console.log(item); //객체 타입이 떨어지고 있다. //배열을 한번 벗겨내준다. //로직만 순환
  console.log(item.job); //객체 타입이므로 이렇게 사용가능하다. 직업만 볼 수 있음
});

//쿼리 셀렉터 올 (span) 하면 값이 유사배열로 나온다 -> 얘도 forEach 사용가능
const span = document.querySelectorAll("span");

span.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("clicked!");
  }); //이렇게 쓰면 이벤트가 3개걸리게 된다.(10개 미만은 괜찮지만 그 이상은 컴퓨터를 혹사시키는 것)
  //그래서 감싸는 부모에게 이벤트가 걸리도록 위임하는 것이 이벤트 위임이다
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

//const reverse = arr.reverse();
//console.log(reverse);
//실제 arr도 뒤집혀져 있음

const toReverse = arr.toReversed();
console.log(toReverse); //원본을 훼손시키지 않음

console.log(arr.toSpliced(1, 2, "javascript", "css", "react"));
//원본 훼손 안 됨

const a = arr.toSorted((a, b) => {
  // return a - b; // 오름차순
  return b - a; // 내림차순
});
console.log(a); //원본 파괴 안 함

/* 새로운 배열 반환 ------------------------ */

// concat
// slice

//원본 파괴 안 함
// toSorted
// toReversed
// toSpliced
// map

const jobs = people.map((item) => {
  return item.job;
  //console.log(item.job);
});

console.log(jobs);

//newAge 만나이 적용 ㅎㅎ 가능
const newAge = people.map((item) => item.age - 2);

console.log(newAge);

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find 이름 송현규 찾기

console.log(
  people.find((item) => {
    return item.name === "송현규";
  })
);

const findUser = people.find((item) => {
  return item.age < 30; //한놈만 걸려라,, 처음 true인 애만 객체를 반환해준다.
});
console.log(findUser);

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

const findUser2 = people.filter((item) => {
  return item.age < 30; //filter는 find랑 다르게 모든 범위를 걸러줌 (집합을 만들어주고 걔를 다시 객체로 반환해준다)
});

console.log(findUser2);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

const totalAge = people.reduce((acc, cur) => {
  // console.log(cur); //순환을 한다
  //acc가 cur의 값을 누적한다.
  return acc + cur.age;
}, 0);

//실제 돔으로 활용하여 렌더링 하는 법
const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name} : ${cur.age} 살</div>`,
  ""
);

// console.log( template );

document.body.insertAdjacentHTML("beforeend", template);

// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join

const str = "종명 예진 현주 지인 훈 은원";

// split : 문자 → 배열
const stringToArray = str.split(" ");
console.log(stringToArray);

// join : 배열 → 문자
const arrayToString = stringToArray.join("-");
console.log(arrayToString);

//다 인자로 콜백 함수가 들어간다. 보통 화살표 함수로 많이 쓴다.
//VS Code에서 함수를 쓰고 마우스 오버를 하면 설명이 보이므로 함수 이름만 알아도 대충 사용이 가능하다.
