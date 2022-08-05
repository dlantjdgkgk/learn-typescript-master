interface Developer{
  name :string;
  skill: string
}

interface Person2{
  name :string;
}

let developer : Developer
let person2 : Person2
// developer = person2 이거는 불가능한게 person2 변수는 developer 변수보다 타입이 부족해서 종속이 안된다.
// person2 = developer 이거는 가능

let add1= (a:number)=>{  
}

let sum1 = (a:number,b :number)=>{}

sum1 = add1; // 가능
// add = sum; // 불가능

// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

let a: Developer;
let b: Person;
// a = b; // X
b = a; // O




// // 유니온 타입
// var c: Developer | Person;
// var d: Person | string;
// c = d;
// d = c;