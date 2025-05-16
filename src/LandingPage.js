import React from 'react';
import { Helmet } from 'react-helmet';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-700 via-purple-500 to-pink-500 flex flex-col justify-center items-center p-4">
      <Helmet>
        <title>Cappi Finance | Earn stable income with daily rewards</title>
      </Helmet>

      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-4">Cappi Finance</h1>
        <p className="text-lg text-gray-200">Earn stable income in USDC with daily rewards</p>
      </div>

      <div className="relative mb-12">
        <div className="w-96 bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col space-y-4 text-center">
          <h2 className="text-3xl text-white font-bold">Cappi Finance</h2>
          <p className="text-base text-gray-300">A stable USDC-based project offering daily staking rewards. Join our whitelist and be the first to access the platform.</p>
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-2 px-4 rounded-lg text-white text-lg font-semibold">APP COMING SOON</div>
          <a href="https://forms.gle/9CKjB4PDa3qJxCwE9" className="text-sm text-pink-300 hover:text-pink-500 transition">WHITELIST REGISTRATION</a>
        </div>
      </div>

      <div className="flex space-x-6 mb-6">
        <a href="https://medium.com/@cappifi24/cappifi-capi-whitepaper-roadmap-51b2ae85fc54" className="text-white text-lg hover:text-pink-300 transition">Whitepaper</a>
        <a href="https://x.com/CappiFinance" className="text-white text-lg hover:text-pink-300 transition">Twitter (X)</a>
        <a href="https://medium.com/@cappifi24" className="text-white text-lg hover:text-pink-300 transition">Medium</a>
        <a href="https://t.me/cappifi" className="text-white text-lg hover:text-pink-300 transition">Telegram</a>
      </div>

      <div className="text-center text-gray-300 text-sm">
        Cappi Finance — a crypto project with fixed USDC income and daily staking rewards. Join now and secure your daily earnings.
      </div>
    </div>
  );
};

export default Landing;
