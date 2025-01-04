//using useContext hook

import CompC from "./compC"
import { Name,Name1 } from "./App"
import { useContext } from "react"

const CompB=()=>{
    let n=useContext(Name)
    let n1=useContext(Name1)

    return(
        <> 
        <h1>welcome to :{n} {n1}</h1>
        <CompC/>
        </>
    )

}
export default CompB