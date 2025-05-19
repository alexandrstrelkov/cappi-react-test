import React from "react";
import {Link} from "react-router-dom";
//import /style.css

const LandingPage = () => {
  return (
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cappi Finance - Stable Daily Rewards</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #7e22ce 0%, #ec4899 100%);
            color: #e7e7e7;
        }
        
        .orbitron {
            font-family: 'Orbitron', sans-serif;
        }
        
        .neon-text {
            text-shadow: 0 0 12px rgba(183, 148, 244, 0.4);
        }
        
        .neon-accent {
            box-shadow: 0 0 15px 3px rgba(183, 148, 244, 0.3);
        }
        
        .glow-effect {
            filter: drop-shadow(0 0 8px rgba(183, 148, 244, 0.3));
        }
        
        .gradient-text {
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, #2d1b69 0%, #3a1d7a 100%);
        }
        
        .btn-primary {
            background: linear-gradient(90deg, #8b5cf6 0%, #d946ef 100%);
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(139, 92, 246, 0.3);
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 25px rgba(139, 92, 246, 0.5);
        }
        
        .btn-secondary {
            background: rgba(255, 255, 255, 0.08);
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(183, 148, 244, 0.1);
        }
        
        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(183, 148, 244, 0.2);
        }
        
        .social-icon {
            transition: all 0.3s ease;
            color: #a7a9be;
        }
        
        .social-icon:hover {
            color: #8b5cf6;
            transform: translateY(-2px);
            filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.4));
        }
        
        .content-box {
            background: rgba(26, 16, 61, 0.7);
            border-radius: 20px;
            padding: 40px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(139, 92, 246, 0.2);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            max-width: 800px;
            margin: 0 auto;
        }
        
        .header-glow {
            box-shadow: 0 4px 30px rgba(139, 92, 246, 0.1);
        }
    </style>
</head>
<body class="min-h-screen flex flex-col">
    <!-- Header with soft glow -->
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

    <!-- Main Content -->
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

    <!-- Footer -->
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

    <script>
        // Enhanced hover effects with glow
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => {
                el.style.transform = 'translateY(-2px)';
                if(el.classList.contains('neon-accent') || el.classList.contains('social-icon')) {
                    el.style.filter = 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.6))';
                }
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = '';
                el.style.filter = '';
            });
        });
        
        // Background animation
        document.addEventListener('DOMContentLoaded', () => {
            const body = document.querySelector('body');
            let hue = 270;
            
            setInterval(() => {
                hue = (hue + 0.1) % 360;
                body.style.background = `linear-gradient(135deg, hsl(${Math.min(hue, 280)}, 70%, 45%) 0%, hsl(${Math.max((hue + 40) % 360, 330)}, 70%, 55%) 100%)`;
            }, 50);
        });
    </script>
</body>
</html>
  
  );
};

export default LandingPage;
