//genrate random color

const randomcolor =function(){
    const hex ="0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]

    }
    return color;

};

let intervelId;

const startChangingColor=function(){
    if(!intervelId){
  intervelId =setInterval (changeBgColor, 1000);
    }

    function changeBgColor(){
    document.body.style.backgroundColor =randomcolor();
    }
}
const stopChangingColor=function(){
clearInterval(intervelId);
}

document.querySelector("#start").addEventListener('click',startChangingColor);



document.querySelector("#stop").addEventListener('click',stopChangingColor);