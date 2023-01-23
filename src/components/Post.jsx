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

  const jsonStyle = {
    propertyStyle: { color: "darkgray" },
    stringStyle: { color: "white    " },
    numberStyle: { color: "darkorange" },
  };

  const handlePost = async (postBody) => {
    if (postBody.trim() != "") {
      await axios
        .post(`http://localhost:${port}/${infoType}`, JSON.parse(postBody))
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          setData(error);
        });
    }
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
            onClick={() => {
              handlePost(postBody);
            }}
          >
            Send
          </button>
        </div>
        <div className="request-body">
          <textarea
            defaultValue={
              '{\n  "fullName":"",\n  "email": "",\n  "phoneNumber":""\n}'
            }
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
