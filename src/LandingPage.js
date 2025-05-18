import React from "react";
import {Link} from "react-router-dom";

const LandingPage = () => {
  return (
    <div class="container">
        <div class="header">Cappi Finance</div>
        <div class="subheader">Earn stable income in USDC with daily staking rewards.</div>

        <div class="content-box">
            <a href="#" class="button">Launch App (Coming Soon)</a>
            <a href="#" class="whitelist-text">Join Whitelist</a>
        </div>

        <div class="footer-text">
            Cappi Finance — a crypto project with fixed USDC income and daily staking rewards. Join now and secure your daily earnings.
        </div>

        <div class="social-links">
          <a href="https://medium.com/@cappifi24/cappifi-capi-whitepaper-roadmap-51b2ae85fc54" target="_blank" rel="noopener noreferrer">Whitepaper</a>
          <a href="https://x.com/CappiFinance" target="_blank" rel="noopener noreferrer">Twitter (X)</a>
          <a href="https://medium.com/@cappifi24" target="_blank" rel="noopener noreferrer">Medium</a>
          <a href="https://t.me/cappifi" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
    </div>
  );
};

export default LandingPage;
