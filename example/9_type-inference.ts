var a = 'a';

function logA(a = 'a') {
  var b = 10;
  return b;
}

interface Dropdown<T> {
  value: T 
  title: string;
}
var items: Dropdown<number> = {
  value: 10,
  title: 'a'
}

// DetailedDropdown가 Dropdown을 상속 받는데 DetailedDropdown의 제너릭 타입을 string으로 주면 Dropdown 타입도 string이 된다.
interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}
var detailItems: DetailedDropdown<string> = {
  value: 'hi',
  title: 'a',
  description: 'b',
  tag: 'c'
}

// Best Common Type : 가장 근접한 타입을 추론한다.
let arr:(number|boolean)[] =[0,true]