let num1 = prompt('시작할 숫자를 입력하시오.');
let num2 = prompt('마지막 숫자를 입력하시오.');

let sum = 0;
for(var i=Number(num1); i<= Number(num2); i++){
    sum= sum+i;
}
console.log(`${num1}부터 ${num2}까지의 합은? >>${sum}`);

