import { diceAnimation, getNode, getNodes, insertLast } from "./lib/index.js";

// phase 1
// dice 굴리기
// 주사위 굴리기 버튼을 클릭하면 diceAnimation() 실행할 수 있도록

//유사배열의 배열의 구조분해 할당으로 받아옴
const [rollingButton, recordButton, resetButton] = getNodes(
  ".buttonGroup > button"
);
const recordListWrapper = getNode(".recordListWrapper");

//toggle//지역오염방지 클로저
const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      //실행
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      //정지
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked;
  };
})();

let count = 0;
let total = 0;

function createItem(value) {
  //태그만들기
  const template = `
 <tr>
 <td>${++count}</td>
 <td>${value}</td>
 <td>${(total += value)}</td>
</tr>`;
  return template;
}

function renderRecordItem() {
  //  주사위 눈값 가져오기
  const diceValue = getNode("#cube").dataset.dice / 1;
  //뿌려주기
  insertLast(".recordList tbody", createItem(diceValue));
}

function handleRecord() {
  //hidden을 false로 주겠다
  recordListWrapper.hidden = false;

  renderRecordItem();
}
function handleReset() {
  recordListWrapper.hidden = true;
}

rollingButton.addEventListener("click", handleRollingDice);
recordButton.addEventListener("click", handleRecord);
resetButton.addEventListener("click", handleReset);
