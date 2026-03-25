import React, { useState } from 'react'

const FormFormed = () => {

  const [title, setTitle] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
     // prevents refreshing of page on submit 
     setTitle('');
  }

  return (
    <div>
      <form onSubmit={(e)=>submitHandler(e)}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormFormed