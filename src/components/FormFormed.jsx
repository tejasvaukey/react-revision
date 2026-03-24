import React from 'react'


const FormFormed = () => {
  const submitHandler = (e) => {
    e.preventDefault(); // prevents refreshing of page on submit 
  }
  return (
    <div>
      <form onSubmit={(e)=>submitHandler(e)}>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormFormed