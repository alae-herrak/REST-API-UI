import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-logo">REST API UI</div>
        <nav>
            <Link to='/'>Configuration</Link>
            <Link to='/get'>Get</Link>
            <Link to='/post'>Post</Link>
            <Link to='/update'>Update</Link>
            <Link to='/delete'>Delete</Link>
        </nav>
    </div>
  )
}

export default Navbar