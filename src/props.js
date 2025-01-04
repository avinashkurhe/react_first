import './props.css'
import { useState } from 'react'
export default function Props(prop) {
    let [count,setCount]=useState(0);
    let inc=()=>{
        setCount(count+1)
        console.log("click")
    }
    return (
        <div className='main'>
            <div className="card">
                <h1>my name is {prop.abc.name}, my roll no is {prop.abc.rno}</h1>
                <img src={prop.abc.image} alt='not found'></img>
                <p><b>About </b>{prop.abc.about}</p>
                <h4><button onClick={inc}>❤️</button>  {count}</h4>
                
            </div>
        </div>
    )
}