// script.js - Shooting Stars Generator

// Wait for the page to fully load
window.addEventListener('DOMContentLoaded', function() {
  // Get the container where we'll add shooting stars
  const container = document.getElementById('shooting-stars');
  
  // If container doesn't exist, create it
  if (!container) {
    console.log('Container not found, creating one...');
    const newContainer = document.createElement('div');
    newContainer.className = 'shooting-stars-container';
    newContainer.id = 'shooting-stars';
    document.body.insertBefore(newContainer, document.querySelector('.content'));
  }
  
  const starsContainer = document.getElementById('shooting-stars');
  
  // Define colors for shooting stars
  const colors = [
    '#ffffff', // white
    '#a3bffa', // light blue
    '#fef3c7', // light yellow
    '#fda4af', // light pink
    '#bbf7d0', // light green
    '#ddd6fe', // light purple
    '#fed7aa'  // light orange
  ];
  
  // Function to create a shooting star
  function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    
    // Random properties for variety
    const size = Math.random() * 4 + 1; // 1-5px
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100; // 0-100% from left
    const top = Math.random() * 100; // 0-100% from top
    const delay = Math.random() * 15; // 0-15 seconds delay
    const duration = Math.random() * 3 + 1; // 1-4 seconds duration
    const angle = Math.random() * 60 + 15; // 15-75 degrees angle
    
    // Set all the styles
    star.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: 50%;
      box-shadow: 0 0 ${size * 2}px ${size / 2}px ${color};
      left: ${left}%;
      top: ${top}%;
      opacity: 0;
      animation: shootingStar ${duration}s linear infinite ${delay}s;
      transform: rotate(${angle}deg);
      z-index: 0;
      pointer-events: none;
    `;
    
    return star;
  }
  
  // Function to create a special long shooting star
  function createLongShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star-long';
    
    const size = Math.random() * 3 + 1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = Math.random() * 5 + 3; // 3-8 seconds
    const angle = Math.random() * 70 + 10;
    
    star.style.cssText = `
      position: absolute;
      width: ${size * 1.5}px;
      height: ${size / 2}px;
      background: linear-gradient(90deg, transparent, ${color}, transparent);
      border-radius: 50%;
      box-shadow: 0 0 ${size * 3}px ${size}px ${color}40;
      left: ${left}%;
      top: ${top}%;
      opacity: 0;
      animation: shootingStarLong ${duration}s linear infinite ${delay}s;
      transform: rotate(${angle}deg);
      z-index: 0;
      pointer-events: none;
    `;
    
    return star;
  }
  
  // Create 50 regular shooting stars
  for (let i = 0; i < 50; i++) {
    starsContainer.appendChild(createShootingStar());
  }
  
  // Create 15 long shooting stars
  for (let i = 0; i < 15; i++) {
    starsContainer.appendChild(createLongShootingStar());
  }
  
  // Log success message
  console.log(`Created ${starsContainer.children.length} shooting stars!`);
  
  // Bonus: Add some interactive stars on click
  document.addEventListener('click', function(event) {
    // Create a special shooting star from click position
    const clickStar = document.createElement('div');
    clickStar.className = 'click-star';
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 5 + 2;
    
    clickStar.style.cssText = `
      position: fixed;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: 50%;
      box-shadow: 0 0 ${size * 3}px ${size}px ${color};
      left: ${event.clientX}px;
      top: ${event.clientY}px;
      opacity: 1;
      animation: clickShootingStar 2s linear forwards;
      z-index: 0;
      pointer-events: none;
    `;
    
    starsContainer.appendChild(clickStar);
    
    // Remove the star after animation completes
    setTimeout(() => {
      if (clickStar.parentNode) {
        clickStar.parentNode.removeChild(clickStar);
      }
    }, 2000);
  });
});

