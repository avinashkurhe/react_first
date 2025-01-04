import { useState } from "react"
import './instapost.css'
export default function InstaPost(prop){
    const[like,setLike]=useState(0)
    const[dislike,setDislike]=useState(0)
    const inclike=()=>{
        setLike(like+1)
    }
    const incDislike=()=>{
        setDislike(dislike+1)
    }
    return(
        <div className="cart">
        <h3>{prop.abc.username}</h3>
        <p>{prop.abc.about}</p>
        <img src={prop.abc.imgurl} alt="not found"/><br />
        <button onClick={inclike}> ❤️{like}</button>
        <button onClick={incDislike}> 👎{dislike}</button>
        </div>
    )
}