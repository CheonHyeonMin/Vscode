// 화살표 함수 : 함수 표현식 형태, function 키워드 대신=>

const intro = ()=>{
    console.log('안녕하세요. 천현민입니다.');
}
intro();

//매개변수
const lunch = menu=>console.log(`점심으로는${menu}먹었습니다.`);
lunch('치돈');

// 매개변수 + return문
 const dinner =menu=>`저녁으로는 ${menu}`;
// dinner('안먹는다.') 출력x
console.log(dinner('안먹는다.'));


//매개변수 1개 -> () 생략 가능
//실행문 1개 -> {}, return 생략 가능
