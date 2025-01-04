import { useState } from "react"
export default function Form(){
    const[fname,setFname]=useState();
    const[bfname,setBfname]=useState()
    const inputchange=(e)=>{
        setFname(e.target.value)
    }

    const onbtnevent=()=>{
        setBfname(fname);

    }
    return(
        <>
            <h1>my name is {bfname}</h1>
            <input placeholder="enter name" name="fname" onChange={inputchange}></input>
            <button onClick={onbtnevent}>click</button>
        </>
    )
}