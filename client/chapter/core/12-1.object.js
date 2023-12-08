/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */

// 복사(copy) vs. 참조(reference)

let message = "문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.";
let messenger = {
  name: "kakao talk",
  manufacture: "kakao",
};

let text = message;
let conversationTool = messenger;

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);

// 객체 복사
// 1. for ~ in 문을 사용한 복사

const cloneObject = {};

for (let key in messenger) {
  //key는 여기서 주는거고
  cloneObject[key] = messenger[key]; //value는 여기서 주는거다.
}

// 2. Object.assign()을 사용한 복사

const copyObject = Object.assign({}, messenger);
console.log(copyObject);
// 3. 전개 연산자(...)를 사용한 복사

const spreadObject = { ...messenger }; //제일 많이 씀
console.log(spreadObject);

// 4. 객체를 복사해주는 유틸 함수

const copiedObject = (object) => Object.assign({}, object);

const obj = copiedObject(messenger);

console.log(obj);

// 객체 병합(합성)
const cssMapA = {
  color: "#4b004b",
  margin: "0 auto",
};

const cssMapB = {
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  padding: "0.4em 0.62em",
  color: "#3f9e97",
};

let combinedCssMap = Object.assign({}, cssMapA, cssMapB);
let combinedCssMap = { ...cssMapA, ...cssMapB };
//내용물을 한꺼번에 합쳐주는 형식! 얕복

// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  "min-height": "100vh",
  "max-width": {
    sm: "90%",
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140,
  },
};

let copyedContainerStyles = { ...containerStyles };

const realDeep = cloneDeep(containerStyles);

console.log(realDeep);

// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === "object") {
        //map으로 새로운 객체를 만들어주고
        value = cloneDeep(value); //재귀함수를 돌려서 깊은 복사를 해준다
      }
      return [key, value];
    })
  );
}

//
//

const defaultOptions = {
  method: "GET",
  body: null,
  headers: {
    content: "application",
    access: "*",
  },
};

function ajax(options) {
  const { method, body, headers } = {
    ...defaultOptions,
    ...options,
    header: {
      ...defaultOptions.headers, //spread로 인한 깊은복사
      ...options.headers,
    },
  };
}

ajax({
  method: "POST",
  headers: {
    origin: "euid",
  },
});

console.log();

// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
