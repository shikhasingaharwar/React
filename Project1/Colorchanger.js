const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
console.log(e);
console.log(e.target);
if(e.target.id === "grey"){
    body.style.backgroundColor="grey";
}
if(e.target.id === "green"){
    body.style.backgroundColor="green";
}
if(e.target.id === "blue"){
    body.style.backgroundColor="blue";
}
if(e.target.id === "Magenta"){
    body.style.backgroundColor="Magenta";
}
   
    })

});