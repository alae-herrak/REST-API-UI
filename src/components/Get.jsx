import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Get = () => {
  const isConnected = useSelector((state) => state.isConnected.isConnected);
  const [searchType, setSearchType] = useState("all");

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
        <input type="text" disabled={searchType === "all" ? "disabled" : ""} />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Get;
