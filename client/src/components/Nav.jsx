import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
        <Link to={`/`} >Home</Link>
        <br />
        <Link to={`/signup`} >Sign Up</Link>
    </nav>
  )
}

export default Nav