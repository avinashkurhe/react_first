import CompB from "./compB"
import { Name ,Name1 ,Batch } from "./App"
import { useContext } from "react"
const CompA=()=>{
    let n=useContext(Name);
    let n1=useContext(Name1)
    let b=useContext(Batch)
    return(
        <> 
        <h1>Welcome to :{n} {n1} ,from {bn}</h1>
        <CompB />
        </>
    )

}
export default CompA