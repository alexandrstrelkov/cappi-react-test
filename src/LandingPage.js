import React from "react";
import {Link} from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="page-container">
      <div className="content">
        <h1 className="title">Cappi Finance</h1>
        <p className="subtitle">
          Earn stable income in USDC with daily staking rewards.
        </p>
        <p><Link to="/app" className="launch-button">
          App Coming Soon!
        </Link></p>
        <a
          href="https://forms.gle/9CKjB4PDa3qJxCwE9"
          className="whitelist"
          target="_blank"
          rel="noopener noreferrer"
        >
          WHITELIST REGISTRATION
        </a>
      </div>

      <div className="footer">
          
        <div className="text-center text-gray-300 text-sm">
          Cappi Finance — a crypto project with fixed USDC income and daily staking rewards. Join now and secure your daily earnings.
        </div>
            
        <a href="https://medium.com/@cappifi24/cappifi-capi-whitepaper-roadmap-51b2ae85fc54" target="_blank" rel="noopener noreferrer">
          Whitepaper
        </a>
        <a href="https://x.com/CappiFinance" target="_blank" rel="noopener noreferrer">
          Twitter (X)
        </a>
        <a href="https://medium.com/@cappifi24" target="_blank" rel="noopener noreferrer">
          Medium
        </a>
        <a href="https://t.me/cappifi" target="_blank" rel="noopener noreferrer">
          Telegram
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
