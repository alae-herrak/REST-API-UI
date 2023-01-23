import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import JsonFormatter from "react-json-formatter";

const Get = () => {
  const isConnected = useSelector((state) => state.isConnected.isConnected);
  const port = useSelector((state) => state.port.port);
  const infoType = useSelector((state) => state.infoType.infoType);
  const [postBody, setPostBody] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [info, setInfo] = useState("");

  const jsonStyle = {
    propertyStyle: { color: "darkgray" },
    stringStyle: { color: "white    " },
    numberStyle: { color: "darkorange" },
  };

  const handleGetInfo = async (id) => {
    if (id.trim() != "") {
      const info = await axios
        .get(`http://localhost:${port}/${infoType}/${id}`)
        .catch((err) => setInfo(err));
      setInfo(JSON.stringify(info.data, undefined, 4));
    }
  };

  const handleUpdate = async (postBody) => {
    if (postBody.trim() != "") {
      await axios
        .patch(
          `http://localhost:${port}/${infoType}/${id}`,
          JSON.parse(postBody)
        )
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          setData(error);
        });
    } else setData("no change");
  };

  return (
    <div className="request">
      {isConnected ? "" : <Navigate to="/" />}
      <div
        className="request-form"
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div>
          <input
            disabled="disabled"
            value={`http://localhost:${port}/${infoType}`}
            type="text"
            onChange={(e) => {
              setPostBody(e.target.value);
            }}
          />
          <button
            disabled={info == "" ? "disabled" : ""}
            onClick={() => {
              handleUpdate(postBody);
            }}
          >
            Send
          </button>
        </div>
        <div className="request-body">
          <input
            type="text"
            placeholder="id"
            onChange={(e) => setId(e.target.value)}
          />
          <button onClick={(e) => handleGetInfo(id)}>Get info</button>
          <textarea
            defaultValue={info}
            spellCheck="false"
            onChange={(e) => {
              setPostBody(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="request-show">
        {data.length === 0 ? (
          ""
        ) : (
          <JsonFormatter
            json={JSON.stringify(data)}
            tabWith={4}
            jsonStyle={jsonStyle}
          />
        )}
      </div>
    </div>
  );
};

export default Get;
