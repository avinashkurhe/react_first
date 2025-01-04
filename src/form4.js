import { useState } from "react"
import './form.css'
export default function Form4() {
    const [change, setChange] = useState({
        Fname: "",
        Lname: "",
        Password: "",
        Cpassword: ""
    })
    const [bchange, setBchange] = useState({
        BFname: "",
        BLname: "",
        BPassword: "",
        BCpassword: ""
    })
    const inpChange = (e) => {
        let n = e.target.name;
        let v = e.target.value;
        setChange((preValue) => {
            if (n === 'fname') {
                return {
                    Fname: v,
                    Lname: preValue.Lname,
                    Password: preValue.Password,
                    Cpassword: preValue.Cpassword
                }
            }
            else if (n === 'lname') {
                return {
                    Fname: preValue.Fname,
                    Lname: v,
                    Password: preValue.Password,
                    Cpassword: preValue.Cpassword
                }
            }
            else if (n === 'pass') {
                return {
                    Fname: preValue.Fname,
                    Lname: preValue.Lname,
                    Password: v,
                    Cpassword: preValue.Cpassword
                }
            }
            else if (n === 'cpass') {
                return {
                    Fname: preValue.Fname,
                    Lname: preValue.Lname,
                    Password: preValue.Password,
                    Cpassword: v
                }
            }
        })
    }

    const btnsub = (e) => {
       
        e.preventDefault();
        setBchange(
            
            {
                
                BFname: change.Fname,
                BLname: change.Lname,
                BPassword: change.Password,
                BCpassword: change.Cpassword
            }
        );
       
    };




    return (
    <form onSubmit={btnsub}>
    <h3>Set the password</h3>
        <input type="txt" name="fname" placeholder="enter first name" onChange={inpChange} required></input>
        <input type="txt" name="lname" placeholder="enter last name"  onChange={inpChange} required></input>

        <input type="password" name="pass" placeholder="enter password" onChange={inpChange} required></input>

        <input type="password" name="cpass" placeholder="confirm password" onChange={inpChange} required></input>
        <button >Submit</button>
       
        <p>First Name is:{bchange.BFname} <br></br>
        Last Name is:{bchange.BLname} <br></br>
        Password Name is:{bchange.BPassword} <br></br>
        Confirm Password is:{bchange.BCpassword} <br></br>
        </p>
</form>
    

    )
}