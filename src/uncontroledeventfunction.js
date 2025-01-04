import React, { useRef } from 'react'


const UncontrolEventfunction =()=> {
    const inputRef=useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputRef.current.value);
        alert('Hello,' + inputRef.current.value)
    }
    
        return (
            <form onSubmit={handleSubmit} >
                <input type='text' ref={inputRef} defaultValue={'avinash'} >
                </input>
                <button type='submit'> click</button>
            </form>
        )
    }

export default UncontrolEventfunction;