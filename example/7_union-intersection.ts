function logMessage(value: string) {
  console.log(value);
}
function logMessage(value: number) {
  console.log(value);
}
function logMessage(value: any) {
  console.log(value);
}

// # Union 타입 문법 - `any` 보다는 명시적임
function logMessage(value: string | number) {
  console.log(value);
}

function log(value: string | number) {
  if(typeof value === 'number') {
    value.toLocaleString()
  }
  if(typeof value === 'string') {
    value.toString()
  }
  throw new TypeError("오류 발생");
}

function logt<T>(value:T):T{
  return value
}
logt<string>("안녕하세요")
logt<number>(12)


function onion(value : string | number){

}
onion("안녕하세요")
onion(3)


// # Union 타입 문법 타입 문법
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name="moo";// O
  someone.age; // X
  
}

askSomeone({name: "moo", skill: "skill"})
askSomeone({name: "mooseong", age: 10})


// # Intersection 타입 문법 타입 문법

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeoneWHo(someone: Developer & Person) {
  someone.name="moo";// O
  someone.age; // O
  someone.skill;
}

askSomeoneWHo({name: "moo", skill: "skill", age:10})