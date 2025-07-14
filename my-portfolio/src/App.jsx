import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./Layout/NavBar.jsx";
import "./App.css";
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
