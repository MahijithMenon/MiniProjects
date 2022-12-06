joke=document.getElementById("joke");
btn=document.getElementById("check");
btn.addEventListener('click',function(){
 fetch('https://v2.jokeapi.dev/joke/Any?type=single')
 .then((response)=>response.json())
 .then((data)=>{joke.innerHTML=data.joke})
//  .then((data)=>{console.log(data)})


// joke.innerHTML=
})