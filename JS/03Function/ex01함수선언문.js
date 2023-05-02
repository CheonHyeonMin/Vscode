// 함수 : 특정 기능을 수행하는 소스 코드를 하나로 묶어서
//          필요할 때마다 사용하기 위한 구조
function intro(){
    console.log('👌컹');
}

//함수 호출
intro();


//매개변수
function lunch(menu){
    console.log(`점심으로는${menu}먹었습니다.`);
}
lunch('치돈');

//매개변수 + return문
function dinner(menu){
    return `저녁으로는 ${menu}`;
}
// dinner('안먹는다.') 출력x
console.log(dinner('안먹는다.'));
