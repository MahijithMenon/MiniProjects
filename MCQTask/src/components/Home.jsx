import React from 'react'
import {useNavigate} from 'react-router-dom';
import Button from './Button'

const Home = () => {
  const navigate=useNavigate();
  return (
    <div className="flex flex-col w-screen px-5 h-screen justify-center items-center ">
    <h1 className='font-extrabold text-8xl p-2 invisible md:visible'>Asessment Task-1</h1>
    <Button
    btnName={"Start Assesment"}
    onClick={()=>{
      navigate('/Assesment');
    } }/>
    </div>
  )
}

export default Home