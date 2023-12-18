/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */
const nav = getNode("nav");

function handleClick(e) {
  let target = e.target;
  let li = target.closest("li");

  if (!li) return;

  // if (li.className === "home") {
  //   li.style.background = "orange";
  // }
  if (li.dataset.name === "contact") {
    li.style.background = "blue";
  }
}

nav.addEventListener("click", handleClick);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
