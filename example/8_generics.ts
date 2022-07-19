function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
}

// 제네릭 기본 문법 - 함수
function getValue<T>(value: T): T {
  return value;
}
getValue('hi').toLocaleUpperCase();
getValue(100).toLocaleString();

function a<T>(value: T): T {
  console.log(value);
  return value
}
a<string>("hello")

// 그냥 타입을 적용하면 하나의 함수를 2번 사용하는 거에 있어서 코드 관리에 적합하지 않다.
function logMessage(value: string) {
  console.log(value);
}
function logMessage(value: number) {
  console.log(value);
}
// union 타입을 사용하면 함수를 한번만 사용하지만 아래와 같은 오류가 발생한다.

function logValue(value: number | string) {
  console.log(value);
  return value;
}

const b = logValue(5) // b 같은 경우는 number 뿐만 아니라 string type도 있기 때문에 원하는 값을 얻을 수 없다.

// 이와 같은 오류 때문에 제네릭 문법을 사용한다.

function logText<T>(value: T): T {
  console.log(value);
  return value; 
}

const result = logText<string>("안녕하세요")

// 제네릭 기본 문법 - 인터페이스
interface Developert<T> {
  name: string;
  age: T;
}
const tony: Developert<number> = { name: 'tony', age: 100 };

제네릭 타입 제한 - 구체적인 타입
// function getNumberAndArray<T>(value: T): T {
//   value.length; // X
//   return value;
// }

function getNumberAndArray<T>(value: T[]): T[] {
  value.length; // O
  value.forEach((v)=>{
    console.log(v);
  })
  return value;
}
getNumberAndArray<string>([])


// 제네릭 타입 제한 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}
function getAllowedOptions<T extends keyof ShoppingItems>(option: T): T {
  if (option === 'name' || option === 'address') {
    console.log('option type is string');
    return option;
  }
  if (option === 'price' || option === 'stock') {
    console.log('option type is number');
    return option;
  }
}
getAllowedOptions('nothing');
// const a = getAllowedOptions('name');
// a.toUpperCase(); // Name