// 내장객체 : 자바스크립트에서 제공하는 객체
//Array, Math, Date, ...

let today = new Date();
let yesterday = new Date(2023, 3, 27, 0,0,0);
console.log('오늘 :',today);
console.log('어제 :',yesterday);

//출력형태 -> 콘솔창
// 00년 0월 0일 0요일
//0시 0분 0초

let tyear =today.getFullYear();
let tmonth =today.getMonth()+1;
let tdate = today.getDate();
let tday = today.getDay();
let thour =today.getHours();
let tmin =today.getMinutes();
let tsec =today.getSeconds();
switch(tday){
    case 0:
        tday="일요일";
        break;
    case 1:
        tday="월요일";
        break;
    case 2:
        tday="화요일";
        break;
    case 3:
        tday="수요일";
        break;
    case 4:
        tday="목요일";
        break;
    case 5:
        tday="금요일";
        break;
    case 6:
        tday="토요일";
        break;


}


console.log(`${tyear}년 ${tmonth}월 ${tdate}일 ${tday} `);
console.log(`${thour}시 ${tmin} ${tsec}초`);