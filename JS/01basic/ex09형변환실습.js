//1. num1 -> '100, num2 ->200
//2. 콘솔창에 형태에 맞춰 출력
//num1과 num2의 합 >> num1+num2

let num1 ='100';
let num2 =200;
let sum = parseInt(num1)+num2;
sum = Number(num1) +num2;
console.log(sum);

let str1 ='천현민';
let str2 = '입니다';
console.log(str1+str2);

//2. 콘솔창에 형태에 맞춰 출력
//num1과 num2의 합 >> num1+num2
console.log(num1+'과'+num2+'의 합 >>'+sum);

//Template literals(템플릿 리터럴)
// : 표현식/문자열 삽입, 여러 줄 문자열 등 다양한 기능을 제공
// : -> 백틱() 기호 사용 : 숫자 1 왼쪽에 물결이랑 같이 있는 것!
// -> 표현식 : ${data}

console.log(`${num1}과 ${num2}의 합 >> ${sum}`);
console.log(`안녕하세요.
반갑습니다.`);