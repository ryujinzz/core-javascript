/* --------- */
/* Object    */
/* --------- */

/*global isObject*/

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /*css*/ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  zIndex: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  max_width: 800,
  height: "40vh",
  min_height: 280,
  transform: "translate(-50%, -50%)",
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;
authUser = {
  uid: "user-id-azderidkf!!@#123",
  name: "DY",
  email: "kdo2240k@gmail.com",
  isSignIn: false,
  permission: "paid", // paid | free
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid);
// console.log((authUser.name = ""));
// console.log(authUser.email);
// console.log(authUser.isSignIn);
// console.log(authUser.permission);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// console.log(authUser["uid"]);
// console.log(authUser["name"]);
// console.log(authUser["email"]);
// console.log(authUser["isSignIn"]); //get
// console.log((authUser["permission"] = "paid")); //set

Object.prototype.SIGN = true; //강제로 객체를 훼손 오염시킨것

for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    // console.log(key);
    // console.log(authUser[key]);
  }
}

//객체 key만을 모아놓은 배열
let keyList = Object.keys(authUser);
// console.log(keyList);

//객체의 value만을 모아놓은 배열

let valueList = Object.values(authUser);
// console.log(valueList);

//위의 기능이 없었다면... 내부적으로 돌아가는 예시
function getPropertiesList(object) {
  let result = [];

  for (let key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

const result = getPropertiesList(authUser);

//
//
//
// 계산된 프로퍼티 (computed property)
let calculateProperty = "phone"; // phone | tel

function createUser(name, age, phone = calculateProperty) {
  return {
    name,
    age,
    phone,
  };
}

const user = createUser("tiger", "35");

// console.log(user);

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거remove -> null로 처리 or 삭제delete 아예 흔적을 없앰

// function removeProperty(object, key) {
//   object[key] = null;
// }

// removeProperty(authUser, "name"); //authUser.email = null;
// console.log(authUser);

//유틸함수
// function isObject(data) {
//   return (
//     Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "object"
//   );
// }

//유틸함수를 써서 벨리데이션한 함수 > 딜리트도 이렇게 만들어 보기
function removeProperty(object, key) {
  if (isObject(object)) {
    object[key] = null;
  }
}

removeProperty(authUser, "name");

// function deleteProperty(object, key) {
//   if (typeof object === "object") {
//     delete object[key];
//   }
// }

// deleteProperty(authUser, "name"); //delete authUser.uid;

// console.log(authUser);

// 단축 프로퍼티
let name = "선범";
let email = "seonbeom2@euid.dev";
let authorization = "Lv. 99";
let isLogin = true;

const student = { name, email, authorization, isLogin };

// console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   별 3만5천개*/
/* ------------------------------------------- */
//순서를 바꿀 수 없음. 변수 이름을 바꿀 수는 있다.
const arr = [10, 100, 1000, 10000];

// console.log(arr);

// const a1 = arr[0];
// const a2 = arr[1];
// console.log(a1);
// console.log(a2);

const [a1, a2, a3, a4] = arr;

// console.log(a2);

for (let [key, value] of Object.entries(authUser)) {
  // let key = keyValue[0];
  // let value = keyValue[1];
}

// console.log(key);
//DOM 활용
const [first, second, third] = document.querySelectorAll("span"); // NodeList

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');

const salaries = {
  김지수: 85,
  이정현: 50,
  박수양: 6,
  장효진: 33,
};

// let total = 0; // 월급 총 계산
// for (let [key, value] of Object.entries(salaries)) {
//   total += value;
// }

// console.log(total);

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    별 3만5천개*/
//앞에 점을 붙이지 않고 '변수'로 사용하기 위함.
/* --------------------------------------------- */
//순서 정해지지 않음. 변수의 이름을 변경할 수 있다.
const { 김지수: kim, 이정현: lee, 박수양: park, 장효진: jang } = salaries;

console.log(kim);

function createUserData(obj) {
  console.log(obj);

  const { userName, age, job, gender = "male" } = obj;

  // return {
  //   userName: obj.userName,
  //   age: obj.age,
  //   job: obj.job,
  //   gender: 'male'
  // }

  return {
    userName,
    age,
    job,
    gender,
  };
}

const user1 = createUserData({
  userName: "tiger",
  age: 40,
  job: "developer",
});
