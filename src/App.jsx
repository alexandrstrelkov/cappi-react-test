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
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-pink-500 text-white">
      {/* ... header ... */}

      <main className="container mx-auto px-6 lg:px-12 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 orbitron">Global Statistics</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="stat-card p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-400 mb-1">Current Yield</h3>
                  <p className="text-3xl font-bold">
                    {averageYield !== null ? averageYield : "..."}
                    <span className="text-xl">%</span>
                  </p>
                </div>
              </div>

              <div className="chart-container w-full h-[300px] relative overflow-hidden">
                <ProfitChart data={chartData} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ... footer ... */}
    </div>
  );
}

export default App;
