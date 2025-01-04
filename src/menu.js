import { Link, NavLink } from "react-router-dom";


const Menu=()=>{
    return(
        <>
        <NavLink to='/'>About</NavLink>
        <Link to='/contact'>Contact</Link>
        </>
    )
}
export default Menu;