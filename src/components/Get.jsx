import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import JsonFormatter from "react-json-formatter";

const Get = () => {
  const isConnected = useSelector((state) => state.isConnected.isConnected);
  const port = useSelector((state) => state.port.port);
  const infoType = useSelector((state) => state.infoType.infoType);
  const [searchType, setSearchType] = useState("all");
  const [searchId, setSearchId] = useState();
  const [data, setData] = useState([]);

  const jsonStyle = {
    propertyStyle: { color: "red" },
    stringStyle: { color: "green" },
    numberStyle: { color: "darkorange" },
  };

  const handleGet = async (searchType, searchId) => {
    switch (searchType) {
      case "all":
        const allData = await axios.get(`http://localhost:${port}/${infoType}`);
        setData(allData.data);
        break;
      case "byId":
        const dataById = await axios.get(
          `http://localhost:${port}/${infoType}/${searchId}`
        );
        setData(dataById.data);
        break;
    }
  };

  return (
    <div className="get">
      {isConnected ? "" : <Navigate to="/" />}
      <div className="get-form">
        <select
          onChange={(e) => {
            switch (e.target.value) {
              case "all":
                setSearchType("all");
                break;
              case "byId":
                setSearchType("byId");
                break;
            }
          }}
        >
          <option value="all">all</option>
          <option value="byId">by id</option>
        </select>
        <input
          type="text"
          disabled={searchType === "all" ? "disabled" : ""}
          onChange={(e) => {
            setSearchId(e.target.value);
          }}
        />
        <button onClick={() => handleGet(searchType, searchId)}>Send</button>
      </div>
      <div className="get-show">
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
