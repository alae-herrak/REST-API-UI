import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setPort } from "../redux/portSlice";
import { setInfoType } from "../redux/infoTypeSlice";
import { connect } from "../redux/isConnected";
import { useState } from "react";

const Configuration = () => {
  const port = useSelector((state) => state.port.port);
  const infoType = useSelector((state) => state.infoType.infoType);
  const isConnected = useSelector((state) => state.isConnected.isConnected);
  const dispatch = useDispatch();
  const [connexionMsg, setConnexionMsg] = useState("");

  const handleConnect = async (e) => {
    try {
      await axios.get(`http://localhost:${port}/${infoType}`).then((res) => {
        if (res.status === 200) {
          setConnexionMsg("Connected to API");
          dispatch(connect());
        }
      });
    } catch (error) {
      setConnexionMsg(`Failed to connect to API: ${error}`);
    }
  };

  return (
    <div className="config">
      <div>
        <select onChange={(e) => dispatch(setInfoType(e.target.value))}>
          <option value="users">users</option>
        </select>
        <input
          type="text"
          defaultValue={port}
          placeholder="Port"
          onChange={(e) => {
            dispatch(setPort(e.target.value));
          }}
        />
        <button onClick={handleConnect}>Connect</button>
      </div>

      <div className="config-port-msg">{connexionMsg}</div>
    </div>
  );
};

export default Configuration;
