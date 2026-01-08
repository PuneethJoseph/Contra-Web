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
            const isExpanded = navToggle.classList.toggle('active');
            navLinksContainer?.classList.toggle('active');
            
            // Update ARIA attributes for accessibility
            navToggle.setAttribute('aria-expanded', isExpanded);
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
    // Modern 2026 Features - Scroll Animations
    // ============================================

    // Scroll-triggered animations using IntersectionObserver
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-on-scroll');
                    // Use Web Animations API for more control
                    if (entry.target.dataset.animation) {
                        const animationType = entry.target.dataset.animation;
                        entry.target.classList.add(animationType);
                    }
                    animationObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements for scroll animations
        document.querySelectorAll('.feature-card, .stat-card, .privacy-feature, .budget-feature, .saving-feature, .section-header').forEach(el => {
            animationObserver.observe(el);
        });
    }

    // ============================================
    // Animated Statistics Counters (2026)
    // ============================================

    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                // Format number based on type
                if (target.toString().includes('$')) {
                    element.textContent = '$' + Math.floor(current);
                } else if (target.toString().includes('%')) {
                    element.textContent = Math.floor(current) + '%';
                } else if (target.toString().includes('+')) {
                    element.textContent = '$' + Math.floor(current).toLocaleString() + '+';
                } else {
                    element.textContent = Math.floor(current);
                }
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
    }

    // Animate statistics when they come into view
    if ('IntersectionObserver' in window) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statElement = entry.target;
                    const targetValue = statElement.textContent.trim();
                    
                    // Extract numeric value
                    const numericValue = parseInt(targetValue.replace(/[^0-9]/g, ''));
                    if (numericValue && !statElement.dataset.animated) {
                        statElement.dataset.animated = 'true';
                        animateCounter(statElement, targetValue);
                    }
                    statsObserver.unobserve(statElement);
                }
            });
        }, {
            threshold: 0.5
        });

        document.querySelectorAll('.stat-number').forEach(stat => {
            statsObserver.observe(stat);
        });
    }

    // ============================================
    // View Transitions API (2026)
    // ============================================

    if (document.startViewTransition) {
        // Enhanced page transitions
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link) {
                e.preventDefault();
                document.startViewTransition(() => {
                    const targetId = link.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        const offset = 80;
                        const targetPosition = targetElement.offsetTop - offset;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            }
        });
    }

    // ============================================
    // Web Animations API (2026) - Advanced animations
    // ============================================

    // Animate feature cards on hover using Web Animations API
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (card.animate) {
                card.animate([
                    { transform: 'translateY(0) scale(1)' },
                    { transform: 'translateY(-4px) scale(1.02)' }
                ], {
                    duration: 300,
                    easing: 'ease-out',
                    fill: 'forwards'
                });
            }
        });

        card.addEventListener('mouseleave', () => {
            if (card.animate) {
                card.animate([
                    { transform: 'translateY(-4px) scale(1.02)' },
                    { transform: 'translateY(0) scale(1)' }
                ], {
                    duration: 300,
                    easing: 'ease-in',
                    fill: 'forwards'
                });
            }
        });
    });

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

    // ============================================
    // Service Worker Registration (2026 PWA)
    // ============================================
    
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('[SW] Service Worker registered:', registration.scope);
                    
                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // New service worker available
                                console.log('[SW] New service worker available');
                            }
                        });
                    });
                })
                .catch((error) => {
                    console.log('[SW] Service Worker registration failed:', error);
                });
        });
    }

    // ============================================
    // Console Welcome Message
    // ============================================

    console.log('%cConTrac - Contracts Tracker', 'font-size: 20px; font-weight: bold; color: #007AFF;');
    console.log('%cBuilt with ❤️ by Puneeth Joseph', 'font-size: 12px; color: #666;');
    console.log('%cVisit https://www.puneethjoseph.in for more', 'font-size: 12px; color: #666;');
    console.log('%c✨ Powered by 2026 Web Technologies', 'font-size: 12px; color: #007AFF;');

})();

