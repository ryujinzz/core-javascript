/* global gsap */

import { jujeobData } from "./data/data.js";
import {
  clearContents,
  copy,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  shake,
  showAlert,
} from "./lib/index.js";
//phase -1
//주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결
//nameField에 있는 값을 가져와 주세요
//주접 데이터 가져오기
//주접 데이터에서 랜덤한 주접 한개를 가져오기

//phase -2
//아무 값도 입력받지 못했을 때 예외처리 (콘솔창 글자출력)
//공백 문자 받았을 때 예외처리 (콘솔창 글자출력)

const submit = getNode("#submit");
const nameField = getNode("#nameField");
const result = getNode(".result");

function handleSubmit(e) {
  e.preventDefault();
  const name = nameField.value;
  const list = jujeobData(name);
  const pick = jujeobData(name)[getRandom(list.length)];

  //!name 도 같이 작동함
  if (name === "" || name.replace(/\s*/g, "") === "") {
    showAlert(".alert-error", "이름을 입력해주세요", 1500);
    shake.restart();
    return;
  }

  //숫자 통과못하게 하는 함수
  if (!isNumericString(name)) {
    showAlert(".alert-error", "제대로 된 이름을 입력해주세요", 2000);
    shake.restart();
    return;
  }

  clearContents(result);
  insertLast(result, pick);
}

function handleCopy() {
  const text = result.textContent;

  //promise가 리턴되는 명령어 이므로 .then을 써서 비동기통신의 여부를 판단한다.
  copy(text).then(() => {
    showAlert(".alert-success", "클립보드 복사 완료");
  });
}

submit.addEventListener("click", handleSubmit);
result.addEventListener("click", handleCopy);
