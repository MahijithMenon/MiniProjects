txt=document.getElementById('txt');
h1=document.getElementById('h1');
h2=document.getElementById('h2');
h3=document.getElementById('h3');
console.log(txt.value);
h1.addEventListener('click',function(){
    createh1=document.createElement("h1");
    let textNode=document.createTextNode(txt.value);
    createh1.appendChild(textNode);
    document.body.appendChild(createh1);
})
h2.addEventListener('click',function(){
    createh2=document.createElement('h2');
    let textNode=document.createTextNode(txt.value);
    createh2.appendChild(textNode);
    document.body.appendChild(createh2);
})
h3.addEventListener('click',function(){
    createh3=document.createElement('h3');
    createh3.innerHTML=txt.value;
    // createh3.appendChild(txt.value);
    document.body.appendChild(createh3);
})