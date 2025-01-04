import { useState } from "react";

export default function Form2() {
    const [info, setInfo] = useState({
        username: "",
        pass: ""
    });

    const Infochange = (e) => {
        let n = e.target.name;
        let v = e.target.value;

        setInfo((preValue) => {
            if (n === "username") {
                return {
                    username: v,
                    pass: preValue.pass
                };
            } else {
                return {
                    username: preValue.username,
                    pass: v
                };
            }
        });
    };

    return (
        <form>
            <h1>Form 2 Element</h1>
            <h2>Username is {info.username}</h2>
            <h2>password is {info.pass}</h2>
            <input
                type="text"
                name="username"
                onChange={Infochange}
                placeholder="Enter username"
            />
            <br />
            <input
                type="password"
                name="pass"
                onChange={Infochange}
                placeholder="Enter password"
            />
            <button type="submit">Submit</button>
        </form>
    );
}
