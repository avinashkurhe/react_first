import { useState } from "react"
import './form.css'
export default function FormSpread() {
    const [info, setInfo] = useState({
        fname: "",
        lname: "",
        class: "",
        email: ""
    })
    const [binfo, setBinfo] = useState({
        bfname: "",
        blname: "",
        bclass: "",
        bemail: ""
    })
    // ------------------------------------------------------------------

    const studInfo = (e) => {
        let n = e.target.name;
        let v = e.target.value
        setInfo((preValue) => {
            console.log(preValue)
        
            return {

                ...preValue,
                [n]: v
            }
        })
    }
    // ------------------------------------------------------------------

    // ------------------------------------------------------------------
    const onFormSubmit = (e) => {
        e.preventDefault();
        setBinfo(
            {
                bfname: info.fname,
                blname: info.lname,
                bclass: info.class,
                bemail: info.email
            }
        );
    };
    // ------------------------------------------------------------------
    // ------------------------------------------------------------------

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <h1>This is stud register form</h1>
                <input name="fname" placeholder="enter first name" onChange={studInfo}></input>
                <input name="lname" placeholder="enter last name" onChange={studInfo}></input>
                <input name="email" placeholder="enter email" onChange={studInfo}></input>
                <input name="class" placeholder="enter class name" onChange={studInfo}></input>
                <button >submit</button>
            </form>
            <table >
                <tr>
                    <th>fname</th>
                    <th>lname</th>
                    <th>email</th>
                    <th>class</th>
                </tr>
                <tr>
                    <td>{binfo.bfname}</td>
                    <td>{binfo.blname}</td>
                    <td>{binfo.bemail}</td>
                    <td>{binfo.bclass}</td>

                </tr>
            </table>
        </>

    )
    // ------------------------------------------------------------------

}