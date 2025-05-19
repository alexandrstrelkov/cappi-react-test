import React from "react";
import {Link} from "react-router-dom";

const LandingPage = () => {
  return (
    <div class="container">
        <div class="header">Cappi Finance</div>
        <div class="subheader">Earn stable income in USDC with daily rewards.</div>

        <div class="content-box">
            <p><Link to="/app" class="button">App Coming Soon!</Link></p>
            <a href="https://forms.gle/9CKjB4PDa3qJxCwE9" class="whitelist-text" target="_blank" rel="noopener noreferrer">Whitelist Registration</a>
        </div>

        <div class="footer-text">
            Cappi Finance — a crypto project with USDC income with daily staking rewards. Join now and secure your daily earnings.
        </div>

    <div className="bg-blue-500 text-white p-4 rounded-lg">
      Tailwind работает!
    </div>
    <h1 class="text-4xl sm:text-5xl font-bold mb-6 neon-text gradient-text bg-gradient-to-r from-purple-300 to-pink-300 text-center orbitron">
        Earn Stable Daily Rewards with Cappi Finance
    </h1>

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
