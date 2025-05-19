import { useEffect } from "react";
import "./index.css";
import "./app-style.css";
import "./app-script.js";

function App() {
  useEffect(() => {
    // Скрипт подключается и запускается здесь
    import("./script.js").then((module) => {
      module.default();
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-pink-500 text-white">
      {/* Header */}
      <header className="py-4 px-6 lg:px-12 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-xl font-bold">Cappi Finance</span>
        </div>
        <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 font-medium">
          Connect Wallet
        </button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-12 py-8">
        {/* Global Stats */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Global Statistics</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-gray-400 mb-1">Current Yield</h3>
              <p className="text-3xl font-bold">8.24%</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-gray-400 mb-1">Total Value Locked</h3>
              <p className="text-3xl font-bold">$24.7M</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900/30 backdrop-blur-sm border-t border-gray-800/50">
        <div className="text-center text-gray-400">
          © 2025 Cappi Finance. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
