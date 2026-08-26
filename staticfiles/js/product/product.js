document.addEventListener('DOMContentLoaded', () => {
    
    // Animate the content fade-in on load
    const textArea = document.querySelector('.products-text-area');
    const pillsBar = document.querySelector('.product-pills-bar');

    if(textArea && pillsBar) {
        // Initial states
        textArea.style.opacity = '0';
        textArea.style.transform = 'translateY(30px)';
        textArea.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

        pillsBar.style.opacity = '0';
        pillsBar.style.transform = 'translateY(30px)';
        pillsBar.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s';

        // Trigger animations after a short delay
        setTimeout(() => {
            textArea.style.opacity = '1';
            textArea.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                pillsBar.style.opacity = '1';
                pillsBar.style.transform = 'translateY(0)';
            }, 300);
        }, 100);
    }
});



document.addEventListener('DOMContentLoaded', () => {
    // Existing code for your hero and other sections...
    
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // ADDED: '.product-card' to the selector list
    const elementsToAnimate = document.querySelectorAll(
        '.product-card, .help-container, .feature-box, .stat-item, .about-image-wrapper, .about-content, .cta-container, .solution-card, .news-card, .section-title, .btn-outline, .who-container, .mission-vision-grid, .why-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initial Fade-in Animation for Page Load (Products Hero elements)
    const heroText = document.querySelector('.products-text-area');
    const pillsBar = document.querySelector('.product-pills-bar');

    if(heroText && pillsBar) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(30px)';
        heroText.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

        pillsBar.style.opacity = '0';
        pillsBar.style.transform = 'translateY(30px)';
        pillsBar.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s';

        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
            setTimeout(() => {
                pillsBar.style.opacity = '1';
                pillsBar.style.transform = 'translateY(0)';
            }, 300);
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

    // ADDED: '.help-container' to the list of elements to animate on scroll
    const elementsToAnimate = document.querySelectorAll(
        '.help-container, .feature-box, .stat-item, .about-image-wrapper, .about-content, .cta-container, .solution-card, .news-card, .section-title, .btn-outline, .who-container, .mission-vision-grid, .why-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});