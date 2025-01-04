import { Route, Routes } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Menu from "./menu";
import User from "./user";
import Error from "./error";

function App1() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" Component={About}> </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path='/user/:fname' element={<User />}></Route>
                <Route path="/*" Component={Error}> </Route>
            </Routes>
        </>
    )
}
export default App1;