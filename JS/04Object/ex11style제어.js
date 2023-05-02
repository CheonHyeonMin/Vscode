//(1) getElement~
let getSpan1 = document.getElementById('spanTag');
//(2)
let getSpan2 =document.getElementsByTagName('span');
console.log(getSpan2[0]);

//(2) querySelector~
//(2-1) 태그선택자 
let selSpan1 = document.querySelector('span');
//(2-2) 아이디선택자
let selSpan2 = document.querySelector('#spanTag');
console.log(selSpan2);

//querySelector : CSS 선택자로 요소 검색
//querySelectorAll : CSS 선택자로 모든 요소 검색

//DOM 스타일 제어
//요소.style.속성 =값
const btn = ()=>{
    //글자크기 25px
    //글자색상 tomato
    //글자굵기 900
    getSpan1.style.fontSize='25px';
    getSpan1.style.color ='tomato';
    getSpan1.style.fontWeight='900';
    
}