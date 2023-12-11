/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  get eat() {
    return this.stomach;
  },
  set eat(food) {
    this.prey = food;
    this.stomach.push(food);
  },
};

let tiger = {
  pattern: "호랑이 무늬",
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal, //이것과
};

// tiger.__proto__ = animal; //이것은 같은 의미로 animal을 부모로 지정해준다.

const 백두산호랑이 = {
  color: "white",
  name: "포동이",
  __proto__: tiger,
};

// 생성자 함수
// 일반함수 vs 생성자함수

// function button(){

// }

// function Button(){

// }

// button() // 일반 함수

// new Button() // 생성자 함수 -> 무조건 객체를 반환

function Animal() {
  this.legs = 4;
  this.stomach = [];
  this.tail = true;

  this.getEat = function () {
    return this.stomach;
  };

  this.setEat = function (food) {
    this.prey = food;
    this.stomach.push(food);
  };
}

// const newAnimal = new Animal();

// console.log(newAnimal);

function Tiger() {
  Animal.call(this); //이걸로 객체의 능력을 상속받을 수 있음. //빌려씀 //애니멀 함수를 실행시키는 것임 //참조가 아니고 깊은복사되는 개념임
  this.name = name;
  this.pattern = "호랑이 무늬";
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 조용히 다가간다.`;
  };
} //인스턴트 메소드 property

Tiger.bark = function () {
  return "어흥!";
}; //스테틱 메소드

const 한라산호랑이 = new Tiger("포동이");
const 금강산호랑이 = new Tiger();
