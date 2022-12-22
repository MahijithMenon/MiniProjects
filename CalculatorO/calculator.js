screen=document.querySelector('.screen');
// btn=document.getElementsByTagName('button');
btn=document.querySelector('.calc-buttons');
let buffer='0';
let total=0;
let previousOperator="";
console.log(screen)
// for(i=0;i<btn.length;i++){
btn.addEventListener('click',function(event){
    // screen[0].textContent="022";
    takeValue(event.target.value);
}
)
function takeValue(value){
    // console.log(typeof value);
    if(isNaN(parseInt(value))){
        Symbols(value);
    }
    else{
        Numbers(value);
    }
}

function Numbers(value){
    if(buffer==='0'){
        buffer=value;
    }
    else{
        buffer+=value;
    }
    screen.innerText=buffer;
    
}
function Symbols(value){
    switch(value){
            case 'C': buffer="0";
            break;
            case '←':if(buffer.length===1){
                buffer='0';
            }
            else{
                buffer=buffer.substring(0,buffer.length-1)
            } 
            break;
            case '+':
            case '-': 
            case '/':
            case '*':
                MathOperation(value); 
            break;
            case'=':
            console.log(total)
            screen.innerText=total;
            break;
    }
    // buffer+=value;
    screen.innerText=buffer;

}
function MathOperation(value){
if(buffer==='0'){
    return;
}
const intBuffer=parseInt(buffer);
if(total===0){
    total=intBuffer;
}
else{
    flushOperation(intBuffer);
}
previousOperator=value;
buffer='0';
console.log(total);
console.log(value);
}
function flushOperation(intBuffer){
switch(previousOperator){
    case '+':total+=intBuffer;
    break;
    case '*':total*=intBuffer;
    break;
    case '/':total/=intBuffer;
    break;
    case '-':total-=intBuffer;
    break;
}
}
// }