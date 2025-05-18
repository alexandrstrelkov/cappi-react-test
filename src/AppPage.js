import React from "react";

const AppPage = () => {
  return (
    <div className="page-container">
      <div className="content">
        <h1 className="title">App Dashboard</h1>
        <p className="subtitle">
          Monitor your staking rewards and manage your assets.
        </p>

        <div className="content-block">
          <h2>Your Staking Rewards</h2>
          <p>USDC Rewards: 0.05% - 0.1% daily</p>
        </div>

        <div className="content-block">
          <h2>Mint Tokens</h2>
          <p>Mint your tokens and start earning.</p>
        </div>

        <div className="content-block">
          <h2>Stake Tokens</h2>
          <p>Stake tokens to receive daily rewards in USDC.</p>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
