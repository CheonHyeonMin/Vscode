
let emo = prompt('이모티콘 입력');
let hang = Number(prompt('행의 개수'));

// const star = ()=>{return emo}

// for(let i =1; i<=hang; i++){
//     for(let j=0; j<i ; j++){
//         document.write(star());
//     }
//     document.write(`<br>`);
// }

const pyramid = (emo,hang)=>{
    for(let i=1; i<=hang; i++){
        for(let j=1; j<=i; j++){
            document.write(emo);;
        }
        document.write('<br>');
    }
}

pyramid(emo,hang);
