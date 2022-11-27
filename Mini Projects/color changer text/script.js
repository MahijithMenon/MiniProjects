const blue=document.getElementById('blue')
const green=document.getElementById('green')
const red=document.getElementById('red')
const input=document.getElementById('input');
red.addEventListener('click',()=> changecolor('red'));
green.addEventListener('click',()=> changecolor('green'));
blue.addEventListener('click',()=> changecolor('blue'));
function changecolor(colorgiven){
const heading=document.createElement('h1');
heading.style.color=colorgiven;
heading.innerHTML=input.value;
document.body.appendChild(heading);
}
