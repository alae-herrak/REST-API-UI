import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isConnected = useSelector((state) => state.isConnected.isConnected);

  return (
    <div className="navbar">
      <div className="navbar-logo">REST API UI</div>
      <nav>
        <Link to="/">Configuration</Link>
        <Link
          to={isConnected ? "/get" : null}
          style={isConnected ? {} : { color: "grey" }}
        >
          Get
        </Link>
        <Link
          to={isConnected ? "/post" : null}
          style={isConnected ? {} : { color: "grey" }}
        >
          Post
        </Link>
        <Link
          to={isConnected ? "/update" : null}
          style={isConnected ? {} : { color: "grey" }}
        >
          Update
        </Link>
        <Link
          to={isConnected ? "/delete" : null}
          style={isConnected ? {} : { color: "grey" }}
        >
          Delete
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
