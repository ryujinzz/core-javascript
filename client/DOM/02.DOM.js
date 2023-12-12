/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// const first = document.querySelector(".first");
// const spanList = document.querySelectorAll("span");

/* 문서 대상 확인 */
// - matches
// - contains

// function getNode(cla) {
//   if (cla == "string") {
//     document.querySelector(cla);
//   } else {
//     console.error(
//       "클래스에는 문자만 들어갈 수 있습니다. 정해진 클래스를 선택해주세요"
//     );
//   }
// }

// const first = getNode(".first");
//내가 만든 코드 아래에 리팩토링

const first = getNode(".first"); // <span class="first">hello</span>

const span = getNodes(span); // 모든 span을 찾아줌

/* 문서 대상 확인 */
// - matches

console.log(first.matches("span")); // target에 항목(selector)이 있어?
console.log(getNode("h1").contains(getNode(".second"))); // target(부모) 안에 자식 노드가 포함됐어?

// - contains
