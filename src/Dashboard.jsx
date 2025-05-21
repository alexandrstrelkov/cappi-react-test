// src/Dashboard.jsx

import React from "react";
import ProfitChart from "./ProfitChart";

const Dashboard = ({ chartData }) => {
  return <ProfitChart data={chartData} />;
};

export default Dashboard;
