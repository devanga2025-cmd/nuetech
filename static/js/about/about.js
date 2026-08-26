document.addEventListener('DOMContentLoaded', () => {
    
    // Select the elements to animate
    const heroText = document.querySelector('.hero-text-area');
    const statsBar = document.querySelector('.stats-bar');

    // Set initial state
    heroText.style.opacity = '0';
    heroText.style.transform = 'translateY(30px)';
    heroText.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

    statsBar.style.opacity = '0';
    statsBar.style.transform = 'translateY(40px)';
    statsBar.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s'; // 0.3s delay

    // Trigger the animation on load
    setTimeout(() => {
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
        
        // Trigger stats bar shortly after the text
        setTimeout(() => {
            statsBar.style.opacity = '1';
            statsBar.style.transform = 'translateY(0)';
        }, 400);
        
    }, 100);
});
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initial Fade-in Animation for Page Load (Hero elements)
    const heroText = document.querySelector('.hero-text-area');
    const statsBar = document.querySelector('.stats-bar');

    if(heroText && statsBar) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(30px)';
        heroText.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

        statsBar.style.opacity = '0';
        statsBar.style.transform = 'translateY(40px)';
        statsBar.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s';

        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
            setTimeout(() => {
                statsBar.style.opacity = '1';
                statsBar.style.transform = 'translateY(0)';
            }, 400);
        }, 100);
    }

    // 2. Scroll Animation for Continuation Sections
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // ADDED: '.who-container' to the list of elements to animate on scroll
    const elementsToAnimate = document.querySelectorAll(
        '.feature-box, .stat-item, .about-image-wrapper, .about-content, .cta-container, .solution-card, .news-card, .section-title, .btn-outline, .who-container'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initial Fade-in Animation for Page Load (Hero elements)
    const heroText = document.querySelector('.hero-text-area');
    const statsBar = document.querySelector('.stats-bar');

    if(heroText && statsBar) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(30px)';
        heroText.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

        statsBar.style.opacity = '0';
        statsBar.style.transform = 'translateY(40px)';
        statsBar.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s';

        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
            setTimeout(() => {
                statsBar.style.opacity = '1';
                statsBar.style.transform = 'translateY(0)';
            }, 400);
        }, 100);
    }

    // 2. Scroll Animation for Continuation Sections
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // ADDED: '.mission-vision-grid' and '.why-card' to the target list
    const elementsToAnimate = document.querySelectorAll(
        '.feature-box, .stat-item, .about-image-wrapper, .about-content, .cta-container, .solution-card, .news-card, .section-title, .btn-outline, .who-container, .mission-vision-grid, .why-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});