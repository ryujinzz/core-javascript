import {
  clearContents,
  deleteStorage,
  getNode,
  getStorage,
  setStorage,
} from "./lib/index.js";

const textField = getNode("#textField");
const textButton = getNode("button");

// 1. textField의 value값을 로컬스토리지에 저장해주세요.

// 2. 새로고침시(DOMContentLoaded) 로컬스토리지에 저장된 textField의 값을 가져와 뿌려줍니다.

function handleTextField() {
  const value = this.value;
  setStorage("text", value);
}

function init() {
  getStorage("text").then((res) => (textField.value = res));
}

function clearText() {
  // console.log(getStorage("text"));
  //조건문넣어야함

  deleteStorage("text");
  // clearContents(value);
}

textButton.addEventListener("click", clearText);
textField.addEventListener("input", handleTextField);
//새로고침이 일어났을 때
window.addEventListener("DOMContentLoaded", init);
