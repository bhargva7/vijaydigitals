import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Show button when page is scrolled up to a given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Check if the screen size is mobile
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Mobile if width <= 768px
  };

  // Set the scroll and resize event listeners when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', checkMobile); // Listen for resize events

    // Initial check
    checkMobile();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Only render the button when scroll position is > 300px
  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        zIndex: 1000,
        transition: 'opacity 0.3s',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <button
        onClick={scrollToTop}
        style={{
          backgroundColor: isMobile ? 'black' : '#ff5e14', // Change color on mobile
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '45px',
          height: '45px',
          cursor: 'pointer',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          transition: 'all 0.3s',
        }}
        aria-label="Scroll to top"
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.backgroundColor = isMobile ? '#333' : '#e04e0f';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = isMobile ? 'black' : '#ff5e14';
        }}
      >
        <i className="fa fa-angle-up" style={{ fontSize: '24px' }}></i>
      </button>
    </div>
  );
};

export default ScrollToTop;
