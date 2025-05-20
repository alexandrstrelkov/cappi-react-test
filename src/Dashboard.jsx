// src/Dashboard.jsx

import React from "react";
import ProfitChart from "./ProfitChart";

const Dashboard = ({ chartData }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">График доходности</h2>
      <ProfitChart data={chartData} />
    </div>
  );
};

export default Dashboard;
