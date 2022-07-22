interface Developer{
  name: string
  skill : string
}

interface Person{
  name: string
  age : number
}

function introduce() : Developer | Person{
  return { name: "John", age: 12 , skill: "android"}
}

let tony = introduce()
// console.log(tony.skill) 오류 발생 tony.name만 출력 가능

if((tony as Developer).skill){
  let skill = (tony as Developer).skill
  console.log(skill);
}
else if((tony as Person).age){
  let age= ((tony as Person).age);
  console.log(age);
}

// 이렇게 복잡한 코드를 간단하게 작성하기 위하여 타입 가드가 나왔다.

function isDeveloper(target : Developer | Person): target is Developer {
  return( target is Developer)
}