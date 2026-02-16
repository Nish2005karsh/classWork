import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Card from "./Components/Card.jsx";
import prod1 from "./Pages/prod1.jsx";
import prod2 from "./Pages/prod2.jsx";
import prod3 from "./Pages/prod3.jsx";
import prod4 from "./Pages/prod4.jsx";

export const App = () => {
  return (
    <>
      <Header />
      <Card />
      

      <Routes>
        <Route path="/" element={<Card />} />
        
        <Route path="/prod1" element={<prod1 />} />
        <Route path="/prod2" element={<prod2 />} />
        <Route path="/prod3" element={<prod3 />} />
        <Route path="/prod4" element={<prod4 />} />
      </Routes>

      <Footer />
    </>
  );
};
export default App;