import { useState } from "react"
export default function ChangeC(){
    let styles1={
        backgroundColor:"red",
        width:"200px",
        height:"200px"
    }
    let styles2={
        backgroundColor:"green",
        width:"200px",
        height:"200px"
    }
    const[color,setColor]=useState(styles1)
    const changecolor=()=>{
        if(color===styles1){
            setColor(styles2)
        }else{
            setColor(styles1)
        }
    }
    return(
        <div style={color}>
            <button onClick={changecolor}>changecolor</button>
        </div>
    )
}