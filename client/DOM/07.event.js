/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler

// const first = getNode(".first");

function handler() {
  console.log("클릭 발생");
}

// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick() {
  console.log("클릭했습니다");
}

// first.addEventListener("mouseenter", handleClick);
// first.addEventListener("mousemove", handleClick);
// first.addEventListener("click", handleClick);

// first.addEventListener("mouseleave", handleClick);
// getNode(".second").addEventListener("click", () => {
//   first.removeEventListener("click", handleClick);
// });

function bindEvent(node, type, handler) {
  if (typeof node === "string") node = getNode(node);

  node.addEventListener(type, handler);
  return () => node.removeEventListener(type, handler);
}
//클로저 이용

// const remove = bindEvent(".first", "click", handleClick);
// remove();

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode(".ground");
const ball = getNode("#ball");

// ground.addEventListener("click", handleClickBall);

function handleClickBall({ offsetX: x, offsetY: y }) {
  // console.log("clicked");
  //객체 구조분해할당
  // const { offsetX: x, offsetY: y } = e;
  console.log(x, y);
  // console.log(e.offsetX, e.offsetY);
  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${
    y - ball.offsetHeight / 2
  }px)`;
}

// ground.addEventListener("mousemove", ({ offsetX: x, offsetY: y }) => {
//   // console.log(x,y);

//   let template = `
//     <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
//   `;

//   ground.insertAdjacentHTML("beforeend", template);
// });
//부하가 너무 많이 걸림, div 생성하면서 렌더링 되므로
//몇초에 한 번 씩만 호출되로록, 마우스의 움직임이 끝나면 호출되도록

// ground.addEventListener(
//   "mousemove",
//   debounce(() => {
//     console.log("디바운스 실행");
//   })
// );

// function debounce(callback, limit = 100) {
//   let timeout;

//   return function (...args) {
//     console.log(args);
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       callback.apply(this, args);
//     }, limit);
//   };
// }

// call
// apply
// bind

function func(a, b) {
  console.log("this : ", this);
  console.log("A : ", a);
  console.log("B : ", b);
}

// func.call('tiger',1,2)    // 실행
// func.apply('tiger',[1,2]) // 실행

const a = func.bind('tiger',1,2) // 실행 시키지 않음.
button.addEventListener('click',a)

function debounce(func, delay) {
  let timerId;

  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// // 사용 예시
// function search() {
//   // 검색 요청 처리
// }

// const debouncedSearch = debounce(search, 300); // 300ms 디바운스 지연 시간

// // 이벤트 리스너에 적용
// input.addEventListener('input', debouncedSearch);

//쓰로틀 완성
function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}
