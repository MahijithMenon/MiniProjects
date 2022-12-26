const letters=document.querySelectorAll('.scoreboardletter');
console.log(letters);
const loading=document.getElementsByClassName('.info');
const ANSWER_LENGTH=5;
async function init(){
    const res= await fetch('https://words.dev-apis.com/word-of-the-day');
    let {word}=await res.json()
    word=word.toUpperCase();
    console.log(word);
    let currentGuess='';
    let currentRow=0;
document.addEventListener('keydown',function handleKeypress(event){
    const action=event.key;
    console.log(action);

   if(action==='Enter'){
    commit();
   }
   else if(action==='Backspace'){
    backspace();
   }
   else if(isLetters(action)){
    addLetter(action.toUpperCase());
   }
   else{ 
    //do nothing
   }
})
function backspace(){
    currentGuess=currentGuess.substring(0,currentGuess.length-1);
}
function commit(){
    if(currentGuess.length!==ANSWER_LENGTH){
        return;
    }
    currentGuess="";
    currentRow++;
}
function backspace(){
    currentGuess=currentGuess.substring(0,currentGuess.length-1);
    letters[ANSWER_LENGTH*currentRow+currentGuess.length].innerHTML='';
}
function isLetters(letter) {
    return /^[a-zA-Z]$/.test(letter);
}
function addLetter(letter){
    console.log(letter)
    if(currentGuess.length<ANSWER_LENGTH){
        currentGuess+=letter;
    }
    else{
        currentGuess=currentGuess.substring(0,currentGuess.length-1)+ letter
    }
    // console.log(currentGuess+" "+currentGuess.length);
    letters[ANSWER_LENGTH*currentRow+currentGuess.length-1].innerHTML=letter;

}
}
init();
