import React from 'react'

const Button = ({btnName,onClick,classStyles}) => {
  return (
    <div><button
    onClick={onClick}
    className={`h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100 ${classStyles}`}>{btnName}</button></div>

  )
}

export default Button