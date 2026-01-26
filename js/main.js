/**
 * MCTS-DRL Research Website
 * Team 14 - Arizona State University
 * Main JavaScript File
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initSmoothScroll();
    initMobileMenu();
    initReportNavigation();
    initScrollProgress();
});

/**
 * Scroll-based fade-in animations using Intersection Observer
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
                
                // Scroll to target
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, href);
            }
        });
    });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });
    }
}

/**
 * Report section navigation
 */
function initReportNavigation() {
    const reportNavItems = document.querySelectorAll('.report-nav-item');
    const reportArticles = document.querySelectorAll('.report-article');
    
    if (reportNavItems.length === 0 || reportArticles.length === 0) return;
    
    // Click handler for report nav items
    reportNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Update active state immediately on click
            reportNavItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Scroll-based active state
    const updateActiveReportNav = () => {
        let current = '';
        
        reportArticles.forEach(article => {
            const articleTop = article.offsetTop;
            const articleHeight = article.clientHeight;
            
            if (window.scrollY >= articleTop - 200) {
                current = article.getAttribute('id');
            }
        });
        
        if (current) {
            reportNavItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === '#' + current) {
                    item.classList.add('active');
                }
            });
        }
    };
    
    // Throttled scroll listener
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveReportNav();
                ticking = false;
            });
            ticking = true;
        }
    });
}

/**
 * Scroll progress indicator (optional enhancement)
 */
function initScrollProgress() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #00f0ff, #ff00aa);
        z-index: 1001;
        transition: width 0.1s ease;
        width: 0%;
    `;
    document.body.appendChild(progressBar);
    
    // Update on scroll
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

/**
 * Navbar background on scroll
 */
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        nav.style.background = 'linear-gradient(to bottom, rgba(10, 10, 15, 1), transparent)';
    }
});

/**
 * Hide scroll indicator after scrolling
 */
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    }
}, { passive: true });

/**
 * Typing effect for hero title (optional)
 */
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/**
 * Copy code to clipboard
 */
function initCodeCopy() {
    document.querySelectorAll('.code-block').forEach(block => {
        const copyBtn = document.createElement('button');
        copyBtn.textContent = 'Copy';
        copyBtn.className = 'copy-btn';
        copyBtn.style.cssText = `
            position: absolute;
            top: 1rem;
            right: 1rem;
            padding: 0.5rem 1rem;
            background: rgba(0, 240, 255, 0.1);
            border: 1px solid rgba(0, 240, 255, 0.3);
            color: #00f0ff;
            font-family: 'Space Mono', monospace;
            font-size: 0.75rem;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        
        copyBtn.addEventListener('click', () => {
            const code = block.querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 2000);
            });
        });
        
        block.style.position = 'relative';
        block.appendChild(copyBtn);
    });
}

// Initialize code copy after DOM load
document.addEventListener('DOMContentLoaded', initCodeCopy);
