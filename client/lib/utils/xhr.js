/* 

[readyState]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/
function xhr({ method, url, onsuccess, onFail }) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.addEventListener("readystatechange", () => {
    //
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      console.log("통신완료");
      if (status >= 200 && status < 400) {
        console.log("통신성공");
        //string인 것을 다시 데이터 JSON으로 변환시켜줌
        return JSON.parse(response);
      } else {
        console.log("통신 실패");
      }
    }
  });

  xhr.send();
}

xhr({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/users",
  onsuccess() {},
  onFail() {},
});
