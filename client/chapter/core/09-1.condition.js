/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// function watchMovie() {
//   let didWatchMovie = confirm("영화 봤니?");

//   if (!didWatchMovie) {
//     let goingToWatchMovie = confirm("영화 볼거니?");

//     if (goingToWatchMovie) {
//       let withWho = prompt("누구랑 볼거니?");

//       if (withWho === "you") {
//         console.log("어머,,");
//       }
//     } else {
//       console.log("관심 없어.");
//     }
//   } else {
//     console.log("그래..");
//   }
// }

// watchMovie();

// if(){};

// 영화 볼거니?
// let didToWatchMovie = "no";
// let goingToWatchMovie = "yes";

// let movieMessage = didToWatchMovie.includes("yes");
//   ? "어 그거 재밌더라"
//   : goingTowatchMovie.includes("yes")
//     ? "너무 설렌다 같이 보자!"
//     : "난 별로...";

// movieMessage.includes("응")
//   ? "어 그거 재밌더라"
//   : prompt("그럼 나랑 보러갈래?")
//     ? "와 너무 설렌다 같이 보자!"
//     : "나도 별로..";

// let didToWatchMovie = prompt("영화 봤음?");

// if (didToWatchMovie.includes("응")) {
//   console.log("그거 재밌음");
// } else {
//   let goingToWatchMovie = prompt("같이 보자");
//   if (goingToWatchMovie.includes("그래")) {
//     console.log("좋아, 같이 보자");
//   } else {
//     console.log("나도, 별로");
//   }
// }

// if (movieMessage == "응") {
//   alert("어 그거 재밌더라");
// } else {
//   if (prompt("그럼 나랑 보러갈래?") == "그래") {
//     alert("와 너무 설렌다 같이 보자!");
//   } else {
//     alert("나도 별로..");
//   }
// }

let movieMessage = prompt("그거 영화 봤오?");
// 삼항 연산자
movieMessage === "yes"
  ? alert("어 그거 재밌더라")
  : prompt("그럼 나랑 보러갈래?") === "yes"
    ? alert("와 너무 설렌다 같이 보자!")
    : alert("나도 별로");

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

function render(node, isActive) {
  let template = `
    <div>${isActive ? "안녕" : "잘가"}</div>
  `;

  node.insertAdjacentHTML("beforeend", template);
}

//render(document.body,false)
