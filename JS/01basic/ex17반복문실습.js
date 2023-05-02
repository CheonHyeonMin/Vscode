// 1. 랜덤한 수를 하나 뽑아준다.
let ranNum = parseInt(Math.random()*100+1);
console.log(ranNum);
// 2. 사용자로부터 숫자를 입력 받는다.
// 입력 > 랜덤 -> '입력한 숫자보다 작은 수입니다.'
// 입력 < 랜덤 -> '입력한 숫자보다 큰 수입니다.
// 입력 = 랜덤 -> '정답입니다. 축하합니다!
//알림팝업창의 형태로 출력!


let num1=0;
while(true){
    let num1 = prompt('숫자를 입력하세요.');
    while(num1!=ranNum){
        if(num1>ranNum){
        alert('입력한 숫자보다 작은 수입니다.');
        break;
        }
        else if(num1<ranNum){
        alert('입력한 숫자보다 큰 수입니다.');
        break;
        }
    
    }
    if(num1==ranNum){
        alert('정답입니다. 축하합니다!❤');
        break;
        }
    
}

