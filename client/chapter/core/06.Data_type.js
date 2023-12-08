/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;

console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let undef; //const 하면 안 됨. 어딘가에서 할당하고 싶을 때 쓰는겁니다  상수와 찐  상수

console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const str = new String("hi");
//내가 직접 만든다 - 객체지향 프로그래밍
// 있는거 갖다 쓴다 - 함수형 프로그래밍
//스트링 컨스트럭터 펑션 string constructor function - 문자 생성자 함수 - 비권장 방식

const double = "hello"; // 스트링 리터럴 (문자의 값)
const single = "hello"; // 스트링 리터럴 (문자의 값)
const backtick = `hello ${10 + 30}`; // 스트링 리터럴 (문자의 값)

console.log(backtick);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const num = new Number(123);
console.log(typeof num);

const integer = 150;
const floationgPointNumber = 12.34;

console.log(typeof floationgPointNumber);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

let big = 10n;

console.log(typeof big);

// 6. 참(true, yes) 또는 거짓(false, no)

const isActive = true;
const hasActive = false;
console.log(isActive);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const object = new Object({ name: "dayeong" });

console.log(object);

const obj = { name: "tiger" };

console.log(typeof obj);

// 8. 고유한 식별자(unique identifier)

const unique = Symbol("uuid");

console.log(unique);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
console.log(typeof 1 + 2);

// 2) 함수 typeof()
console.log(typeof (1 + 2));

// 언어 상, 오류

// Object
const user = {
  name: "dy",
  age: 30,
  Sayhi: function () {
    console.log("hello~");
  },
  alert1: function () {}, //nomal function  다 같은
  alert2() {}, //consise method 애들
  alert3: () => {}, //arrow funtion 입니다.
};

user.Sayhi();

console.log(user);

// Array

const newArray = new Array([1, 2, 3]); //컨스트럭터 방식

const arr = [10, 100, 1000, 1, 2, 3]; //리터럴 방식 이게 더 쉬워서 이걸 씀

console.log(arr[2]);

Array(10);

Array(10).fill(); //공백인 배열이 10개 생김, fill함수로 내용물을 채움

// function 함수 vs 클래스 붕어빵 틀
function 붕어빵틀(재료) {
  // console.log(`냠냠 ${재료} 붕어빵`);
  return `냠냠 ${재료} 붕어빵`;
}

const a = 붕어빵틀("팥");

console.log(a);

// 붕어빵틀("팥");
// 붕어빵틀("슈크림");
// 붕어빵틀("피자");

// this
