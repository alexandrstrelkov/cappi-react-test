import React from 'react';
import {Helmet} from 'react-helmet';
import './style.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <Helmet>
        <title>Cappi Finance | Stable Yield. Fixed Price.</title>
      </Helmet>

      <div className="landing-header">
        <h1 className="landing-title">Cappi Finance</h1>
        <p className="landing-subtitle">Earn stable income in USDC with daily rewards</p>
      </div>

      <div className="info-block">
        <h2 className="info-title">Cappi Finance</h2>
        <p className="info-text">A stable USDC-based project offering daily staking rewards. Join our whitelist and be the first to access the platform.</p>
        <div className="app-coming-soon">APP COMING SOON</div>
        <a href="https://forms.gle/9CKjB4PDa3qJxCwE9" className="whitelist-link" target="_blank" rel="noopener noreferrer">WHITELIST REGISTRATION</a>
      </div>

      <div className="footer">
        <a href="https://medium.com/@cappifi24/cappifi-capi-whitepaper-roadmap-51b2ae85fc54" className="footer-link">Whitepaper</a>
        <a href="https://x.com/CappiFinance" className="footer-link">Twitter (X)</a>
        <a href="https://medium.com/@cappifi24" className="footer-link">Medium</a>
        <a href="https://t.me/cappifi" className="footer-link">Telegram</a>
      </div>

      <div className="footer-text">
        Cappi Finance — a crypto project with fixed USDC income and daily staking rewards. Join now and secure your daily earnings.
      </div>
    </div>
  );
};

export default Landing;
