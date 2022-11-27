let text=document.querySelector('#tiptext');
let button=document.querySelector('button');
let result=document.querySelector('#result');
let tip,amt;

button.addEventListener('click',function(){
amt=text.value;
tip=0.10*amt;
result.disabled = false;
result.innerHTML=`Your Tip for the total amount ${amt} is ${Math.round(tip)}` 
})