import React from 'react';
import {Helmet} from 'react-helmet';
import './style.css';

const AppPage = () => {
  return (
    <div className="landing-container">
      <Helmet>
        <title>App - Cappi Finance</title>
      </Helmet>

      <div className="landing-header">
        <h1 className="landing-title">Welcome to Cappi Finance App</h1>
        <p className="landing-subtitle">Monitor your earnings, mint tokens, and stake USDC</p>
      </div>

      <div className="info-block">
        <h2 className="info-title">Liquidity Overview</h2>
        <p className="info-text">Check your liquidity, staking rewards, and daily earnings.</p>
        <div className="app-coming-soon">Feature Coming Soon</div>
      </div>

      <div className="info-block">
        <h2 className="info-title">Mint Tokens</h2>
        <p className="info-text">Mint Cappi tokens with USDC and start earning daily rewards.</p>
        <div className="app-coming-soon">Feature Coming Soon</div>
      </div>

      <div className="info-block">
        <h2 className="info-title">Stake USDC</h2>
        <p className="info-text">Stake your USDC to receive fixed daily returns in Cappi tokens.</p>
        <div className="app-coming-soon">Feature Coming Soon</div>
      </div>
    </div>
  );
};

export default AppPage;
