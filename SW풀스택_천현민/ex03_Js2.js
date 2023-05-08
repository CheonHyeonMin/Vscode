let su = document.getElementById('zero');
        let a =1;
        const plusFunc = ()=>{
            su.innerText = Number(su.innerText)+1;
        }
        const minusFunc =()=>{
            if(su.innerText>0){
                su.innerText = Number(su.innerText)-1;
            }  
        } 
        const resetFunc = ()=>{
            su.innerText=Number(su.innerText=0);
        }