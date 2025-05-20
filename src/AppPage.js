//import {useEffect} from "react";
import {useEffect, useState} from "react";
import "./index.css";
import "./app-style.css";
import Dashboard from "./Dashboard";
import ProfitChart from "../ProfitChart";

function App() {
  useEffect(() => {
    import("./app-script.js").then((module) => {
      if (module.default) {
        module.default(); // initScripts()
      }
    });
    
    fetch("/public/profit.json")
      .then((res) => res.json())
      .then((data) => setChartData(data))
      .catch((err) => console.error("Ошибка загрузки данных:", err));
  }, []);
  
  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-pink-500 text-white">
    <header className="py-4 px-6 lg:px-12 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full logo-gradient flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <span className="text-xl font-bold orbitron">Cappi Finance</span>
        </div>
        <button className="px-6 py-2 rounded-lg btn-primary font-medium orbitron" data-connect-wallet>
            Connect Wallet
        </button>
    </header>

    <main className="container mx-auto px-6 lg:px-12 py-8">
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 orbitron">Global Statistics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="stat-card p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-gray-400 mb-1">Current Yield</h3>
                            <p className="text-3xl font-bold">8.24<span className="text-xl">%</span></p>
                        </div>
                        <div className="flex space-x-2">
                            <button className="time-selector-btn px-3 py-1 rounded-md text-sm active" data-time-selector>1W</button>
                            <button className="time-selector-btn px-3 py-1 rounded-md text-sm" data-time-selector>1M</button>
                            <button className="time-selector-btn px-3 py-1 rounded-md text-sm" data-time-selector>ALL</button>
                        </div>
                    </div>
                    <div className="chart-container">
                        <div className="p-4">
                          <h2 className="text-xl font-bold mb-4">График доходности</h2>
                            <Dashboard chartData={chartData} />
                        </div>
                    </div>
                </div>
                
                <div className="stat-card p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-gray-400 mb-1">Total Value Locked</h3>
                            <p className="text-3xl font-bold">$24.7<span className="text-xl">M</span></p>
                        </div>
                        <div className="flex space-x-2">
                            <button className="time-selector-btn px-3 py-1 rounded-md text-sm active" data-time-selector>1W</button>
                            <button className="time-selector-btn px-3 py-1 rounded-md text-sm" data-time-selector>1M</button>
                            <button className="time-selector-btn px-3 py-1 rounded-md text-sm" data-time-selector>ALL</button>
                        </div>
                    </div>
                    <div className="chart-container">
                        <div className="chart-placeholder" style={{height: "80%"}}></div>
                        <div className="chart-placeholder mt-1" style={{height: "60%", width: "90%"}}></div>
                        <div className="chart-placeholder mt-1" style={{height: "75%", width: "95%"}}></div>
                        <div className="chart-placeholder mt-1" style={{height: "85%", width: "85%"}}></div>
                        <div className="chart-placeholder mt-1" style={{height: "70%", width: "100%"}}></div>
                        <div className="chart-placeholder mt-1" style={{height: "90%", width: "92%"}}></div>
                        <div className="chart-placeholder mt-1" style={{height: "65%", width: "88%"}}></div>
                    </div>
                </div>
            </div>
        </section>
        
        <div className="divider my-8"></div>
        
        <section>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold orbitron">Your Statistics</h2>
                <button className="px-6 py-2 rounded-lg btn-primary font-medium orbitron" data-connect-wallet>
                    Connect Wallet
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="stat-card p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-gray-400 mb-1">Your Investment</h3>
                            <p className="text-3xl font-bold">$0.00</p>
                        </div>
                        <div className="flex space-x-2">
                            <button className="time-selector-btn px-3 py-1 rounded-md text-sm active" data-time-selector>1W</button>
                            <button className="time-selector-btn px-3 py-1 rounded-md text-sm" data-time-selector>1M</button>
                            <button className="time-selector-btn px-3 py-1 rounded-md text-sm" data-time-selector>ALL</button>
                        </div>
                    </div>
                    <div className="chart-container">
                        <div className="absolute inset-0 flex items-center justify-center connect-wallet-text">
                            Connect wallet to view data
                        </div>
                    </div>
                </div>
                
                <div className="stat-card p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-gray-400 mb-1">Your Rewards</h3>
                            <p className="text-3xl font-bold">$0.00</p>
                            <p className="text-accent-secondary text-sm mt-1">+0.00% today</p>
                        </div>
                        <button className="px-4 py-2 rounded-lg btn-secondary font-medium opacity-50 cursor-not-allowed" data-claim>
                            Claim
                        </button>
                    </div>
                    <div className="chart-container">
                        <div className="absolute inset-0 flex items-center justify-center connect-wallet-text" data-connect-wallet>
                            Connect wallet to view data
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>

    <footer className="py-8 px-4 sm:px-8 lg:px-16 border-t border-gray-800/50 bg-gray-900/30 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                <p className="text-gray-400">© 2025 Cappi Finance. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-purple-300 transition hover:drop-shadow-[0_0_5px_rgba(183,148,244,0.5)]">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-pink-300 transition hover:drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">Medium</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">Telegram</a>
            </div>
        </div>
    </footer></>
  );
}

export default App;
