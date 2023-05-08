        let divList = document.querySelectorAll('div');
        let red1 = document.getElementById('red');
        let green1 = document.getElementById('green');
        let blue1 = document.getElementById('blue');
        let gray1 = document.getElementById('gray');
        
        const MgFunc = ()=>{
            green1.style.marginLeft='100px';
            blue1.style.marginLeft='200px';
            gray1.style.marginLeft='300px';
            
        }

        const brFunc= ()=>{
            divList.forEach(element=>{
                element.style.borderTopRightRadius='50px';
                element.style.borderBottomLeftRadius='50px';
            });
        }