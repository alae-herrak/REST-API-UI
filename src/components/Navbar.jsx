import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-logo">REST API UI</div>
        <nav>
            <Link to='/'>Home</Link>
        </nav>
    </div>
  )
}

export default Navbar