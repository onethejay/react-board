import {Route, Routes} from "react-router-dom";
import BoardList from "./routes/BoardList";
import BoardDetail from "./routes/BoardDetail";
import Home from "./routes/Home";
import Header from "./layout/Header";
import React from "react";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/board" element={<BoardList/>}/>
        <Route path="/board/:idx" element={<BoardDetail/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
