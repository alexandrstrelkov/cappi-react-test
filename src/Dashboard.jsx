// src/Dashboard.jsx

import React from "react";
import ProfitChart from "./ProfitChart";

const Dashboard = ({ chartData }) => {
  return (
    <div className="p-4">
      <ProfitChart data={chartData} />
    </div>
  );
};

export default Dashboard;
