import {useEffect} from "react";

const useHoverEffects = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("a, button");
    const body = document.querySelector("body");
    let hue = 270;
    let backgroundInterval;

    // Hover Effects
    const handleMouseEnter = (e) => {
      e.target.style.transform = "translateY(-2px)";
      if (e.target.classList.contains("neon-accent") || e.target.classList.contains("social-icon")) {
        e.target.style.filter = "drop-shadow(0 0 10px rgba(139, 92, 246, 0.6))";
      }
    };

    const handleMouseLeave = (e) => {
      e.target.style.transform = "";
      e.target.style.filter = "";
    };

    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Background Animation
    const startBackgroundAnimation = () => {
      backgroundInterval = setInterval(() => {
        hue = (hue + 0.1) % 360;
        body.style.background = `linear-gradient(135deg, hsl(${Math.min(hue, 280)}, 70%, 45%) 0%, hsl(${Math.max((hue + 40) % 360, 330)}, 70%, 55%) 100%)`;
      }, 50);
    };

    startBackgroundAnimation();

    // Cleanup
    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      clearInterval(backgroundInterval);
    };
  }, []);
};

export default useHoverEffects;
