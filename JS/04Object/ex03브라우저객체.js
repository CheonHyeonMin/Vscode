//BOM(Browser Object Model)
// 브라우저에서 제공하는 객체

//window : 브라우저객체 최상위, 브라우저 창 관련 기능, 생략 가능(window.)
// window.open("https://www.naver.com", "네이버", "width=500; height=500");
// open("https://www.naver.com", "네이버", "width=500; height=500");

//location : 브라우저의 주소 관련 정보
console.log(location);
console.log('현재 주소 :', location.href);
//페이지 이동
// location.href = 'https://www.smhrd.or.kr'

//screen :화면 해상도 정보(너비, 높이)
console.log(screen);

//navigator : 현재 브라우저 정보(버전, 이름, 위치 등)
console.log(navigator);

