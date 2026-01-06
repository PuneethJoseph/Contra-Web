// ConTrac Website - Interactive JavaScript

(function() {
    'use strict';

    // ============================================
    // Navigation
    // ============================================

    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const navLinksContainer = document.querySelector('.nav-links');
            navToggle.classList.toggle('active');
            navLinksContainer?.classList.toggle('active');
        });
    }

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offset = 80; // Account for fixed navbar
                    const targetPosition = targetElement.offsetTop - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ============================================
    // Animations Removed - No fade-in or hover animations
    // ============================================

    // ============================================
    // Button Ripple Effect
    // ============================================

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // ============================================
    // Parallax and Orb Animations Removed
    // ============================================

    // ============================================
    // Download Button Click Tracking (Optional)
    // ============================================

    const downloadButtons = document.querySelectorAll('#download .btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add your analytics tracking here
            // Example: gtag('event', 'download_click', { platform: 'macos' });
            console.log('Download button clicked:', this.textContent.trim());
        });
    });

    // ============================================
    // Form Validation (if contact form added)
    // ============================================

    // Placeholder for future form validation

    // ============================================
    // Performance Optimization
    // ============================================

    // Lazy load images (if added)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // Console Welcome Message
    // ============================================

    console.log('%cConTrac - Contracts Tracker', 'font-size: 20px; font-weight: bold; color: #007AFF;');
    console.log('%cBuilt with ❤️ by Puneeth Joseph', 'font-size: 12px; color: #666;');
    console.log('%cVisit https://www.puneethjoseph.in for more', 'font-size: 12px; color: #666;');

})();

