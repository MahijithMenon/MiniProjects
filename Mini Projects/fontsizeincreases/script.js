const increase=document.getElementById('increase');
const decrease=document.getElementById('decrease');
const para=document.getElementById('paragraph');
var styles = window.getComputedStyle(para, null).getPropertyValue('font-size');
// let temp=15;
let temp=styles;
temp=Number(temp.substr(0, temp.length-2));
console.log(temp)
increase.addEventListener('click',function(){
    px=`${temp+2}px`
    temp=temp+2;
    console.log(px)
    console.log(temp)
  para.style.fontSize=px; 
})
decrease.addEventListener('click',function(){
    px=`${temp-2}px`
    temp-=2;
    console.log(px)
    console.log(temp)
    para.style.fontSize=px;
})
// console.log("hello")
