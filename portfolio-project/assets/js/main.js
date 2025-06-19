// This file contains the main JavaScript functionality for the portfolio website.

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init();

    // Initialize Typed.js for dynamic text typing effect
    const typed = new Typed('.typed', {
        strings: ['Diseñadora', 'Desarrolladora'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    // Scroll to top functionality
    const scrollTopButton = document.getElementById('scroll-top');
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Preloader functionality
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', function() {
        preloader.style.display = 'none';
    });
});