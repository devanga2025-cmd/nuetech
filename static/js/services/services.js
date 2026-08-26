document.addEventListener('DOMContentLoaded', () => {
    
    // Animate the text fade-in
    const textArea = document.querySelector('.services-text-area');
    const featuresBar = document.querySelector('.services-features-bar');

    if(textArea && featuresBar) {
        // Initial states
        textArea.style.opacity = '0';
        textArea.style.transform = 'translateY(30px)';
        textArea.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

        featuresBar.style.opacity = '0';
        featuresBar.style.transform = 'translateY(40px)';
        featuresBar.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s'; // 0.3s delay

        // Trigger animations
        setTimeout(() => {
            textArea.style.opacity = '1';
            textArea.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                featuresBar.style.opacity = '1';
                featuresBar.style.transform = 'translateY(0)';
            }, 400);
        }, 100);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Existing animations...
    
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // ADDED: '.service-card' to the list
    const elementsToAnimate = document.querySelectorAll(
        '.service-card, .news-card, .gallery-item, .video-card, .product-card, .help-container, .who-container, .mission-vision-grid, .why-card'
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
    const heroText = document.querySelector('.services-text-area');
    const featuresBar = document.querySelector('.services-features-bar');

    if(heroText && featuresBar) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(30px)';
        heroText.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

        featuresBar.style.opacity = '0';
        featuresBar.style.transform = 'translateY(40px)';
        featuresBar.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s';

        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                featuresBar.style.opacity = '1';
                featuresBar.style.transform = 'translateY(0)';
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

    // ADDED: '.switch-container' to the list
    const elementsToAnimate = document.querySelectorAll(
        '.switch-container, .news-card, .gallery-item, .video-card, .product-card, .service-card, .help-container, .who-container, .mission-vision-grid, .why-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});