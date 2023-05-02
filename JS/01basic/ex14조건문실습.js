// 1. '원하는 색상을 입력하세요'라는 입력창 만들기
// 2. 빨강 -> red / 초록 -> green / 파랑 -> blue
//    그 외에는 -> '잘못 입력하셨습니다.' (알림 팝업창)
// 배경색 바꾸는 코드 -> ex02따라하기.html참고

let  color = prompt('색상을 입력해주세요(빨강, 초록, 파랑');
// console.log(color);
// if( color == '빨강'){
//     document.getElementById('first').style.backgroundColor ='red';
// }
// else if(color == "초록"){
//     document.getElementById('first').style.backgroundColor ='green';
// }
// else if(color == "파랑"){
//     document.getElementById('first').style.backgroundColor ='blue';
// }
// else{
//     alert('잘못 입력하셨습니다.');
// }
let result ='';

switch(color){
    case '빨강': result='red'; break;
    case '초록': result ='green'; break;
    case '파랑': result= 'blue'; break;
    default : alert('잘못입력하셨습니다.');
        
}
document.getElementById('first').style.backgroundColor=result;


