import React from 'react'

const Button = () => {

  const handleClick = () => {
    console.log('Button 1 clicked')
  }

  function inputChanging(value){
    console.log(value)
  }


  return (
    <div >
      <h1>count</h1>

      <input onChange={function(elem){
        inputChanging(elem.target.value)
      }} type="text" placeholder='Enter name' />

      <button onClick={handleClick}>Button 1</button>
      <button onClick={function(){
        console.log('Button 2 clicked')
      }}>Button 2</button>
      <button onClick={()=>{
        console.log('Button 3 clicked')
      }}>Button 3</button>
    </div>
  )
}

export default Button