import React from "react";
import {Link} from "react-router-dom";
import useHoverEffects from "./useHoverEffects";

const LandingPage = () => {
  useHoverEffects();
  return (

    <div class="min-h-screen flex flex-col">
    <header class="py-6 px-4 sm:px-8 lg:px-16 flex justify-between items-center bg-gray-900/50 backdrop-blur-sm header-glow">
        <div class="flex items-center space-x-2 glow-effect">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="url(#logo-gradient)"/>
                <path d="M25 15C25 17.7614 22.7614 20 20 20C17.2386 20 15 17.7614 15 15C15 12.2386 17.2386 10 20 10C22.7614 10 25 12.2386 25 15Z" fill="#A5B4FC"/>
                <path d="M25 25C25 27.7614 22.7614 30 20 30C17.2386 30 15 27.7614 15 25C15 22.2386 17.2386 20 20 20C22.7614 20 25 22.2386 25 25Z" fill="#818CF8"/>
                <circle cx="16" cy="15" r="1" fill="#312E81"/>
                <circle cx="24" cy="15" r="1" fill="#312E81"/>
                <path d="M18 18C18 19.1046 18.8954 20 20 20C21.1046 20 22 19.1046 22 18C22 16.8954 21.1046 16 20 16C18.8954 16 18 16.8954 18 18Z" fill="#312E81"/>
                <defs>
                    <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#8B5CF6"/>
                        <stop offset="50%" stop-color="#D946EF"/>
                        <stop offset="100%" stop-color="#8B5CF6"/>
                    </linearGradient>
                </defs>
            </svg>
            <span class="text-2xl font-bold gradient-text bg-gradient-to-r from-purple-400 to-pink-400 orbitron">Cappi Finance</span>
        </div>
    </header>

    <main class="flex-grow container mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <div class="content-box">
            <h1 class="text-4xl sm:text-5xl font-bold mb-6 neon-text gradient-text bg-gradient-to-r from-purple-300 to-pink-300 text-center orbitron">
                Earn Stable Daily Rewards with Cappi Finance
            </h1>
            <p class="text-lg text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                Fixed price. Predictable income. Join the Cappi community and start earning passive rewards with our innovative DeFi solution.
            </p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <button class="px-8 py-3 rounded-xl btn-primary font-bold text-gray-900 neon-accent orbitron">
                    Launch App
                </button>
                <button class="px-8 py-3 rounded-xl btn-secondary font-medium glow-effect orbitron">
                    Whitepaper
                </button>
            </div>
        </div>
    </main>

    <footer class="py-8 px-4 sm:px-8 lg:px-16 border-t border-gray-800/50 bg-gray-900/30 backdrop-blur-sm">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0">
                <p class="text-gray-400">© 2025 Cappi Finance. All rights reserved.</p>
            </div>
            
            <div class="flex space-x-6">
                <a href="#" class="text-gray-400 hover:text-purple-300 transition hover:drop-shadow-[0_0_5px_rgba(183,148,244,0.5)]">Twitter</a>
                <a href="#" class="text-gray-400 hover:text-pink-300 transition hover:drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">Medium</a>
                <a href="#" class="text-gray-400 hover:text-blue-400 transition hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">Telegram</a>
            </div>
        </div>
    </footer>
</div>
    
  );
};

export default LandingPage;
