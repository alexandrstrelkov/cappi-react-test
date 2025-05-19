import {useEffect} from "react";

const useHoverEffects = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('a, button');
    
    const handleMouseEnter = (e) => {
      e.target.style.transform = 'translateY(-2px)';
      if (e.target.classList.contains('neon-accent') || e.target.classList.contains('social-icon')) {
        e.target.style.filter = 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.6))';
      }
    };

    const handleMouseLeave = (e) => {
      e.target.style.transform = '';
      e.target.style.filter = '';
    };

    elements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
};

export default useHoverEffects;
