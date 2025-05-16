import React from 'react';
import { Helmet } from 'react-helmet';

const AppPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-700 via-purple-500 to-pink-500 p-6 text-white">
      <Helmet>
        <title>Cappi Finance | Dashboard</title>
      </Helmet>
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">Cappi Finance Dashboard</h1>
        <p className="text-lg">Manage your assets, track your staking rewards, and mint new tokens.</p>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Your Portfolio</h2>
          <p>Total Staked: $0 USDC</p>
          <p>Daily Rewards: $0 USDC</p>
          <p>Liquidity Provided: $0 USDC</p>
        </div>

        <div className="flex space-x-4">
          <button className="bg-pink-500 py-2 px-4 rounded-lg">Mint Tokens</button>
          <button className="bg-purple-600 py-2 px-4 rounded-lg">Stake Tokens</button>
        </div>
      </div>
    </div>
  );
};

export default AppPage;