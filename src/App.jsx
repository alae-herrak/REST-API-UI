import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Configuration, Get, Post, Update, Delete } from "./components/index";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Configuration />} />
        <Route path="/get" element={<Get />} />
        <Route path="/post" element={<Post />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
