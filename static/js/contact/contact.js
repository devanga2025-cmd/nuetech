document.addEventListener('DOMContentLoaded', () => {
    
    // Animate the text fade-in
    const textArea = document.querySelector('.contact-text-area');
    const featuresBar = document.querySelector('.contact-features-bar');

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
    
    // Animate the text fade-in for the Contact Hero (if it's on the same page)
    const contactTextArea = document.querySelector('.contact-text-area');
    const contactFeaturesBar = document.querySelector('.contact-features-bar');

    if(contactTextArea && contactFeaturesBar) {
        contactTextArea.style.opacity = '0';
        contactTextArea.style.transform = 'translateY(30px)';
        contactTextArea.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

        contactFeaturesBar.style.opacity = '0';
        contactFeaturesBar.style.transform = 'translateY(40px)';
        contactFeaturesBar.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s';

        setTimeout(() => {
            contactTextArea.style.opacity = '1';
            contactTextArea.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                contactFeaturesBar.style.opacity = '1';
                contactFeaturesBar.style.transform = 'translateY(0)';
            }, 400);
        }, 100);
    }

    // Scroll Animation for Continuation Sections
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Added elements from this section
    const elementsToAnimate = document.querySelectorAll(
        '.get-in-touch-section, .urgent-banner, .job-video-layout, .job-row, .top-benefit-card, .job-benefit-card, .switch-container, .news-card, .gallery-item, .video-card, .product-card, .service-card, .help-container, .who-container, .mission-vision-grid, .why-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});