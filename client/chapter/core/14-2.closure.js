// function earth(){

//   let water = true;

//   let apple = {
//     founder:'Steve Jobs',
//     ceo:'Tim Cook',
//     product: ['iphone','macbook','macStudio','appleWatch']
//   }

//   let gravity = 10;

//   function tiger(value){ //호랑이든 누구든 상관 없던거야. 지구의 기억을 가지고 있다면.
//     gravity = value;
//   }

//   return tiger

// }

// const ufo = earth()

// ufo(1)

function earth() {
  let water = true;

  let apple = {
    founder: "Steve Jobs",
    ceo: "Tim Cook",
    product: ["iphone", "macbook", "macStudio", "appleWatch"],
  };

  let gravity = 10;

  return function (value) {
    gravity = value;
  };
}

const ufo = earth();

ufo(1);

const handleClick = (() => {
  let isClicked = false;

  return function () {
    if (!isClicked) {
      document.body.style.background = "orange";
    } else {
      document.body.style.background = "white";
    }

    isClicked = !isClicked;
  };
})();

button.addEventListener("click", handleClick);

// const a = (b)=>(d)=>(c)=> b+d+c

// function a(){

//   return function(){

//     return function(){
//       b+d+c
//     }
//   }
// }

function counter() {
  let count = 0;
  let count2 = 0;

  return () => console.log(++count);
}

const c1 = counter(); // 전부
const c2 = counter(); //다
const c3 = counter(); // 다른 환경이므로 각각 실행 된다.

function bindEvent(node, type, handler) {
  node.addEventListener(type, handler); //등록해주고
  return () => node.removeEventListener(type, handler);
}

const remove = bindEvent(button, "click", handleClick); //이벤트 생성 실행인데, 이것을 받아서 제거를 실행할 수 있게 할당해줌  왜? 제거 해주는 함수 호출을 일일히 하기 싫어서

remove(); //이벤트 제거 실행

//
//
//
function useState() {
  let value = initValue;
  function read() {
    return value;
  }
  function write(newValue) {
    value = newValue;
  }
  return [read, write];
}

const [state, setState] = useState(true);
// const arr = useState(true);

// arr[0]() //읽기
// arr[1]() //쓰기
