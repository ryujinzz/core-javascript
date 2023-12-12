/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */
const first = document.querySelector(".first");

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
console.log(first.hasAttribute("class")); // 불리언
// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log(first.getAttribute("sayHi")); // 값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute("id", "text");
// - elementNode.removeAttribute(name) – 속성값을 지움
first.removeAttribute("id");
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log(first.attributes); //유사 배열로 객체의 특징을 가짐 iterator 를 가지고 있음

for (let value of first.attributes) {
  console.log(value);
  // console.dir(value); //객체로 나옴
}

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

first.dataset.name = "tiger"; //setter
console.log(first.dataset.name); //getter //tiger
console.log(first.getAttribute("data-name")); // 값을 가져옴, 위와 같음

function getAttr(node, prop) {
  if (typeof node === "string") node = getNode(node);
  if (typeof prop !== "string")
    throw new TypeError(
      "getAttr 함수의 두 번째 인수는 문자 타입이어야 합니다."
    );
  return node.getAttribute(prop);
}
console.log(getAttr(".first", "class")); //first

// function setAttr(node, prop, value) {
//   if (typeof node === "string") node = getNode(node);
//   if (typeof prop !== "string") {
//     throw new TypeError(
//       "setAttr 함수의 두 번째 인수는 문자 타입이어야 합니다."
//     );
//   } else if (typeof value !== "string") {
//     throw new TypeError(
//       "setAttr 함수의 세 번째 인수는 문자 타입이어야 합니다."
//     );
//   }
//   return node.setAttribute(prop, value);
// }

function setAttr(node, prop, value) {
  if (typeof node === "string") node = getNode(node);
  if (typeof prop !== "string" || typeof value !== "string")
    throw new TypeError(
      "setAttr함수의 두 번째 인수는 문자 타입 이어야 합니다."
    );

  if (value === "") {
    node.removeAttribute(prop);
    return;
  }

  if (!value)
    throw new Error("setAttr함수의 세 번째 인수는 필수 입력값 입니다.");

  //node.dataset.name = 'kindtiger'

  if (prop.startsWith("data")) {
    prop = prop.slice(5);
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
}

const attr = (node, prop, value) =>
  value === undefined ? getAttr(node, prop) : setAttr(node, prop, value);

setAttr(".first", "id", "box");
setAttr(".first", "data-name", "kindtiger");

//위에 함수 리팩토링

// setAttr(".first", "class", "");

attr(".first", "class"); //getter
attr(".first", "class", "hello"); //setter
