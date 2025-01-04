import { useLocation, useParams } from "react-router-dom";

const User=()=>{
    let {fname}=useParams();
    let location=useLocation();
    return(
        <>
            <h1>Hello,{fname}</h1>
            <p>location : {location.pathname}</p>
        </>
    )
}
export default User;