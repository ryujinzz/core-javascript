/* global gsap*/
import {
  insertLast,
  xhrPromise,
  tiger,
  getNode as $,
  renderUserCard,
  changeColor,
  renderSpinner,
  delayP,
  renderEmptyCard,
} from "./lib/index.js";
// xhrPromise.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//   res.forEach((item) => {
//     insertLast(document.body, `<div>${item.name}</div>`);
//   });
// });

const END_POINT = "https://jsonplaceholder.typicode.com/users";
//phase - 1

const userCardInner = $(".user-card-inner");
//1. user 데이터를 fetch하기
//2. 함수 안에 넣기
async function renderUserList() {
  renderSpinner(userCardInner);
  try {
    await delayP(2000);
    gsap.to(".loadingSpinner", {
      opacity: 0,
      onComplete() {
        $(".loadingSpinner").remove();
      },
    });
    const response = await tiger.get(END_POINT);
    const userData = response.data;
    userData.forEach(
      (data) => renderUserCard(userCardInner, data)
      //3. 유저 테이터 (이름만) 화면에 렌더링
    );
    changeColor(".user-card");
    gsap.from(".user-card", {
      x: 100,
      opacity: 0,
      stagger: {
        from: "edge",
        each: 0.1,
      },
    });
  } catch (err) {
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

function handleDelete(e) {
  //이벤트 위임
  const button = e.target.closest("button");
  //버튼만 수집
  const article = e.target.closest("article");
  //아티클만 수집
  if (!article || !button) return;
  const id = article.dataset.index.slice(5);
  tiger.delete(`${END_POINT}/${id}`);
}

userCardInner.addEventListener("click", handleDelete);
