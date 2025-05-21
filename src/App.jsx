import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import AppPage from "./AppPage";
import './style.css';
import ProfitChart from "./ProfitChart";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<AppPage />} />
        </Routes>
      </div>
      <div className="chart-container w-full h-[300px]">
        <ProfitChart data={chartData} />
      </div>
    </Router>
  );
}

export default App;
