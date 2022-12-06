import React, { useState } from 'react'
import Button from './Button'
import {useNavigate} from 'react-router-dom';
import '../index.css';
const questions = [
  {
    text: "Which part of a mustard plant is edible",
    options: [
      { id: 0, text: "Seeds and flowers", isCorrect: false },
      { id: 1, text: "Leaves and flowers", isCorrect: false },
      { id: 2, text: "Stem and roots", isCorrect: false },
      { id: 3, text: "Seeds and leaves", isCorrect: true },
    ],
  },
  {
    text: "Which of the following methods is used to access HTML elements using Javascript?",
    options: [
      { id: 0, text: "getElementById()", isCorrect: false },
      { id: 1, text: "getElementByClassName()", isCorrect: false },
      { id: 2, text: "None", isCorrect: false },
      { id: 3, text: "Both A and B", isCorrect: true },
    ],
  },
  {
    text: "Which type of JavaScript language is",
    options: [
      { id: 0, text: "Object-Based", isCorrect: true },
      { id: 1, text: "Object-Oriented", isCorrect: false },
      { id: 2, text: "Assembly-language", isCorrect: false },
      { id: 3, text: "High-level", isCorrect: false },
    ],
  },
  {
    text: "Which one of the following also known as Conditional Expression:",
    options: [
      { id: 0, text: "Alternative to if-else", isCorrect: false },
      { id: 1, text: "Immediate if", isCorrect: true },
      { id: 2, text: "If-then-else statement", isCorrect: false },
      { id: 3, text: "Switch statement", isCorrect: false },
    ],
  },
  {
    text: "In JavaScript, what is a block of statement?",
    options: [
      { id: 0, text: "Conditional block", isCorrect: false },
      { id: 1, text: "block that combines a number of statements into a single compound statement", isCorrect: true },
      { id: 2, text: "both conditional block and a single statement", isCorrect: false },
      { id: 3, text: "block that contains a single statement", isCorrect: false },
    ],
  },
];
const Assesment = () => {
const [finalResult, setfinalResult] = useState(false);
const [score, setScore] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState(null)
// const [disableScore, setdisableScore] = useState(false)
const [className, setClassName] = useState("answer")
function checkAnswer(option,isCorrect){
 setSelectedAnswer(option);
 setClassName("answer active");
//  if(!disableScore){
  if(isCorrect){
    setScore(score+1);
    // setdisableScore(true);
  }
// }
}
function restartGame(){
  setScore(0);
  navigate('/');
}
function NextQuestion(){
  if(currentQuestion+1< questions.length){
    setCurrentQuestion(currentQuestion+1)
  }
  else{
    setfinalResult(true);
  }
  // disableScore(false);
}
function prevQuestion(){
  if(currentQuestion> 0){
    setCurrentQuestion(currentQuestion-1)
   }
}
const navigate=useNavigate();
  return(
    <div className="flex flex-col w-screen h-screen  items-center p-0 bg-white text-center ">
      <h1 className='text-black font-extrabold h-7 w-3 text-3xl my-4 sm:text-xl'>Quiz</h1>
      {/* <h2 className='text-black font-bold m-4 text-2xl '>Current Score: {score}</h2> */}
      { finalResult?(<div className='w-3/5 h-3/5'>
      <h2 className='text-black font-bold m-4 text-xl '>Congratulations:You have completed the Assessment</h2>
        <h1 className='text-black font-extrabold text-3xl '>Final Results:-</h1>
        <h2 className='text-black font-bold text-2xl '>{score} out of {questions.length} correct - {(score/questions.length)*100}%</h2>
        <Button
        btnName={"Restart Game"}
        onClick={restartGame}></Button>
      </div>):(
      <div className="flex flex-col justify-start items-start w-4/5 h-4/6">
        <h2 className="text-black font-bold text-2xl">Question {currentQuestion+1} out of {questions.length}</h2>
        <h3 className="text-black font-bold my-5 text-2xl">{questions[currentQuestion].text}</h3>
        <ul>
         { questions[currentQuestion].options.map((option)=>{
            return(
              <>
              <li 
              // style={{ backgroundColor: colour ? 'green' : '',}}
              className={`border-solid border-2 inline-block m-2 p-3 w-full border-black hover:bg-purple-400 font-bold cursor-pointer ${selectedAnswer===option?className:'answer'}`} onClick={()=>{checkAnswer(option,option.isCorrect)}} key={option.id}>{option.text}</li>
              </>
            
            )
          })}
        </ul>
        <div class="w-1/2 flex justify-end m-2">
            <Button btnName="Prev" classStyles=" mr-10 " onClick={prevQuestion} />
            <Button btnName="Next"  classStyles="bg-green-500 " onClick={NextQuestion}/>
      </div>
      </div>
      )}
      
    </div>
  )
}

export default Assesment