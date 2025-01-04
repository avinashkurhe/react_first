import React, { useState } from 'react'

function Counter() {
    const[count ,setCount]=useState(0)
    

  return (
    <>
    <h1 >Count : {count}</h1>
    <h2>count1 : {count+2}</h2>
    <button onClick={()=>{setCount(count+1)}}>increment</button>
    <button onClick={()=>{setCount(count-1)}}>decrement</button>

    </>
  )
}

export default Counter