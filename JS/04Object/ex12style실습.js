        let red1 = document.getElementById('redBox');
        let green1 = document.getElementById('greenBox');
        let blue1 = document.getElementById('blueBox');
        let gray1 = document.getElementById('grayBox');
        

        //배열 형태로요소 전체 가져오기
        let divList = document.querySelectorAll('div');
        const moveFunc = ()=>{
            blue1.style.marginLeft='100px';
            green1.style.marginLeft='200px';
            gray1.style.marginLeft='300px';
        }
        console.log(divList);

        const roundFunc =()=>{
            //for of 문
            // for(let i of divList){
            //     i.style.borderTopRightRadius='50px';
            //     i.style.borderBottomLeftRadius='50px';
            // }

            divList.forEach(element=>{
                element.style.borderTopRightRadius='50px';
                element.style.borderBottomLeftRadius='50px';
            });
            // red1.style.borderTopRightRadius='50px';
            // red1.style.borderBottomLeftRadius='50px';

            // blue1.style.borderTopRightRadius='50px';
            // blue1.style.borderBottomLeftRadius='50px';

            // green1.style.borderTopRightRadius='50px';
            // green1.style.borderBottomLeftRadius='50px';

            // gray1.style.borderTopRightRadius='50px';
            // gray1.style.borderBottomLeftRadius='50px';
        }
        

        