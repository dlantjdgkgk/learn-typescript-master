// 자바스크립트 함수 선언
function sum(a: any, b: any) {
    return a + b;
}

// 타입스크립트 함수 선언 - 함수의 매개 변수
function add(a: number, b: number) {
    return a + b;
}

// 타입스크립트 함수 선언 - 함수의 반환 타입
function addNumber(a: number, b: number): number {
    return a + b;
}

// function add(a: number, b: number): string {
//   return a + b;
// }

// 함수 인자
function log(a: string , b?: number) {
    console.log(a);
}
log('a', 10);

// 함수 옵셔널 파라미터(optional parameter)
function printText(text: string, type?: string) {
    console.log(text);
}
printText('hi');

const plus = (a: number, b: number): number => {
    return a + b;
};

plus(10, 20);
