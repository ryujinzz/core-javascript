/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: "Brendan",
  createAt: "1995.05",
  standardName: "ECMAScript",
  currentVersion: 2023,
};

Object.prototype.nickName = "tiger";

//객체에서 내가 원하는 값이 있어?
//in 문

console.log("nickName" in javaScript); //true 오염 되어버림

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
const key = "nickName";
console.log(javaScript.hasOwnProperty(key)); //false 엄격하게 실행함 오염 안 된걸 걸러줌
//왜 자꾸 하지말라고 할까? 자바스는 자유로운 언어이므로 내가 마음대로 바꿀 수 있음.

console.log(Object.prototype.hasOwnProperty.call(javaScript, key)); //false 엄격하게 실행함 오염 안 된걸 걸러줌
console.log({}.hasOwnProperty.call(javaScript, key)); //위에거랑 같은거임 //false 엄격하게 실행함 오염 안 된걸 걸러줌

//엄마 object를 불러서 조상에 call을 불러 힘을 빌려와서 실행함

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
} //이렇게 하면 더럽혀지지 않은 키값만 반환해준다.

// const tens = [10, 100, 1000, 10000];

// for (let key in tens) {
//   console.log(tens[key]); // 10, 100, 1000, 10000
// } //Object.prototype.nickName = "tiger"; 때문에 다른 객체(배열)에도 이미 더럽혀져서 tiger가 나온다 ㅠㅠ

const obj = {};

obj.nickName = "tiger";

Object.defineProperty(obj, "key1", {
  enumerable: false,
  value: "kindtiger",
});

Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
    enumerable: true,
  },
  property2: {
    value: "hello",
    writable: false,
    configurable: true,
  },
});

console.log(obj);

//이부분 뭐였지?

let obj1 = { name: "철수", age: "20" };
for (let key in obj1) {
  console.log(key + ":" + obj1[key]);
}
