import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
        <Link to={`/`} >Home</Link>
        <Link to={`/signup`} >Sign Up</Link>
    </nav>
  )
}

export default Nav