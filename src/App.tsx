"use client";

import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { useEffect } from "react";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
