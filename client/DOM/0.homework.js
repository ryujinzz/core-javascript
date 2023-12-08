//querySelector

const button = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
// console.log(button);

//eventListener 이벤트 핸들러 는 전부다 본인들만의 객체를 각각 가짐 (ex. 클릭은 클릭대로 스크롤은 스크롤대로)
function handleMenu(e) {
  // 자바스크립트는 html태그를 우선시 시켜주므로 anchor태그의 리로딩을 먼저 시켜줌
  e.preventDefault(); //태그가 가진 기본능력을 뺐아옴.
  // console.log(e); // (e라고 쓴이유는 보통 event 또는 e라고 쓴다) '매개변수'에 그 기술 객체를 받는데(이것은 매개변수로 받는 것이기 때문에 함수이름을 마음대로 정하듯 정할 수 있다.)
  //클릭 이벤트에 해당되는 다양한 이벤트의 객체를 보여줌 (이러한 능력들을 소환, 호출한것임)
  // console.log("open!");

  //(1)메뉴에게 is-active라는 클래스를 넣어준다.
  // console.log(menu.classList); 유사배열
  // menu.classList.add("is-active"); //예약어로 class를 사용할 수 없어서 그렇다.// 내가 잡을 클래스를 추가 add
  // menu.classList.remove("is-active");
  menu.classList.toggle("is-active"); //아래의 if문이 그대로 함축적으로 시행되는것.
  // if(!isOpend){
  //   menu.classList.add('is-active')
  // }else{
  //   menu.classList.remove('is-active')
  // }

  // isOpend = !isOpend;
}

button.addEventListener("click", handleMenu);
//버튼아, 내가 너한테 이벤트를 추가할건데 , 클릭이벤트 넣을거고 , 해당항목의 함수를 실행해줘

// Node.addEvent

//classList

//preventDefault
