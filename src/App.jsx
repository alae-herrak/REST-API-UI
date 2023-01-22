import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Configuration } from "./components/index";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Configuration />} />
      </Routes>
    </>
  );
};

export default App;
