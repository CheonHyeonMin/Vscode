let numList=[1,2,3,4,5,6,7,8];

let holList= [];
let count=0;

// for문
// for(let i=0; i<numList.length; i++){
//     if(numList[i]%2==1){
//         holList[count] =numList[i];
//         count++;
//     }
// }

// for of문
for(let i of numList){
    if(i%2==1){
        holList[count] = i;
        count++;
    }
}

alert(`list에 들어있는 홀수는 ${holList}이며 총${count}개입니다.`);