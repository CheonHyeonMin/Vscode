// 함수 표현식 : 익명 함수형태로 함수 선언 -> 변수 참조
// function() -> 익명 함수

const intro = function(){
    console.log('안녕하세요. 저는 천현민입니다.');
}
intro();


//매개변수
const lunch = function(menu){
    console.log(`점심으로는${menu}먹었습니다.`);
}
lunch('치돈');

매개변수 + return문
 const dinner =function (menu){
    return `저녁으로는 ${menu}`;
}
// dinner('안먹는다.') 출력x
console.log(dinner('안먹는다.'));

