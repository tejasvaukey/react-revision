import React, { useState } from 'react'


const UsingStates = () => {

  const [a, setA] = useState(0)
  const changeNum = () => {
    setA(a + 1) // asynchronous function, it will not update the value of a immediately, it will update it in the next render cycle, so it will always give the previous value of a when we click the button, to get the updated value of a we can use the callback function of setA, which will give us the updated value of a in the next render cycle.
    console.log(a) // it will always give the previous value of a when we click the button, to get the updated value of a we can use the callback function of setA, which will give us the updated value of a in the next render cycle. 
    // ui thodi der se aata hai, aur console.log turant execute ho jata hai, isliye hume updated value nahi milti hai, hume callback function ka use karna padta hai, jisme hume updated value milti hai.
    // setA(a) --- agar function me 'sirf' ye hua to rerender nhi hoga, kyuki value change nhi hogi, react detect kr lega ki faltu ka kaam hai 

    // setA(a + 1)
    // setA(a + 1) --- ye teeno mil ke +3 nhi karne wale, bas ek baar +1 hoga
    // setA(a + 1)

    // setA(prev => prev + 1) 
    // setA(prev => prev + 1) 
    // setA(prev => prev + 1) 
    // --- ye teeno mil ke +3 karne wale, kyuki prev me hume updated value milti hai, aur usme hum apna changes kar sakte hai, isliye ye teeno mil ke +3 karne wale.

  }
  
  const [num, setNum] = useState({user:'vividh', age:23})
  const btnclkd = () => {
    const newNum = {...num}; // spreading old object to new object, so that we can update the value of age without changing the value of user, kyuki react me state immutable hoti hai, isliye hume new object banana padta hai, aur usme old object ko spread karna padta hai, taki hume old object ki values mil jaye, aur usme hum apni changes kar sake.
    newNum.age = newNum.age+1; // updating the value of age in new object, kyuki react me state immutable hoti hai, isliye hume new object banana padta hai, aur usme old object ko spread karna padta hai, taki hume old object ki values mil jaye, aur usme hum apni changes kar sake.
    setNum(newNum); // updating the state with new object, kyuki react me state immutable hoti hai, isliye hume new object banana padta hai, aur usme old object ko spread karna padta hai, taki hume old object ki values mil jaye, aur usme hum apni changes kar sake.

    // OR //

    // setNum({...num, age: num.age+1}) 
    // setArr(prev => ({...prev, age: prev.age+1})) 
     
  }

  const [arr, setArr] = useState([10,20,30,40]);
  const spreadd = () => {
    // setArr([...arr, 50]);  spreading old array to new array, so that we can add a new element without changing the existing elements, kyuki react me state immutable hoti hai, isliye hume new array banana padta hai, aur usme old array ko spread karna padta hai, taki hume old array ki values mil jaye, aur usme hum apni changes kar sake.OR ->
    const newArr = [...arr]; 
    newArr.push(50);
    setArr(newArr);

  }

  return (
    <div className='parent'> 
    
      <h1>Value of a is {a}</h1>
      <button onClick={changeNum}>Increase</button>
      
      <p>---------------------------------------------</p>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnclkd}>Click</button>
      <p>---------------------------------------------</p>
      <h1>{arr}</h1>
      <button onClick={spreadd}>click</button>
    </div>
  )
}

export default UsingStates