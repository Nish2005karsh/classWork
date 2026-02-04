import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Fashion from "./Fashion";
import Data from "../data.jsx";
import Cards from "./pages/Cards.jsx";
import ResizableCard from "./pages/useState.jsx";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import FetchingApi from "./pages/fetchingapi.jsx";

export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/data" element={<Data />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/resizable-card" element={<ResizableCard />} />
        <Route path="/fetching-api" element={<FetchingApi />} />
      </Routes>

      <Footer />
    </>
  );
};
