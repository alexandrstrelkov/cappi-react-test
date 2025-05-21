import { useEffect, useState } from "react";
import ProfitChart from "./ProfitChart";
import "./index.css";
import "./app-style.css";

function App() {
  const [chartData, setChartData] = useState([]);
  const [averageYield, setAverageYield] = useState(null);

  useEffect(() => {
    import("./app-script.js").then((module) => {
      if (module.default) module.default();
    });

    fetch("/profit.json")
      .then((res) => res.json())
      .then((data) => {
        setChartData(data);

        const last7 = data.slice(-7);
        const sum = last7.reduce((acc, item) => acc + item.profit, 0);
        setAverageYield(sum.toFixed(2));
      })
      .catch((err) => {
        console.error("Ошибка загрузки данных:", err);
        setAverageYield("0.00");
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
    </Router>
  );
}

export default App;
