const bg=document.querySelector('.bg')
const back=document.querySelector('.back')

let load=0;

let int=setInterval(siva,30)


function siva(){
    load++

    console.log(load);
    
    if (load > 99) {

        clearInterval(int)
        
    }
    back.innerText=`${load}%`
    back.style.opacity=scale(load,0,100,1,0)
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`



}
    function scale (number, inMin, inMax, outMin, outMax) {
         return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
 }


