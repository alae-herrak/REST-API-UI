import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { disconnect } from "../redux/isConnected";

const Navbar = () => {
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.isConnected.isConnected);

  return (
    <div className="navbar">
      <div className="navbar-logo">REST API UI</div>
      <nav>
        <Link to="/">Configuration</Link>
        <Link
          to={isConnected ? "/get" : null}
          className={!isConnected?'disabled':''}
        >
          Get
        </Link>
        <Link
          to={isConnected ? "/post" : null}
          className={!isConnected?'disabled':''}
        >
          Post
        </Link>
        <Link
          to={isConnected ? "/update" : null}
          className={!isConnected?'disabled':''}
        >
          Update
        </Link>
        <Link
          to={isConnected ? "/delete" : null}
          className={!isConnected?'disabled':''}
        >
          Delete
        </Link>
        <button className={!isConnected?'disabled':''} onClick={() => dispatch(disconnect())}>Disconnect</button>
      </nav>
    </div>
  );
};

export default Navbar;
