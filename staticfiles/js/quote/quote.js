document.addEventListener('DOMContentLoaded', () => {
    
    // Animate the text fade-in
    const textArea = document.querySelector('.quote-text-area');
    const callout = document.querySelector('.quote-callout-wrapper');

    if(textArea && callout) {
        // Initial states
        textArea.style.opacity = '0';
        textArea.style.transform = 'translateY(30px)';
        textArea.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

        callout.style.opacity = '0';
        callout.style.transform = 'translateY(40px)';
        callout.style.transition = 'opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s'; // 0.5s delay

        // Trigger animations
        setTimeout(() => {
            textArea.style.opacity = '1';
            textArea.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                callout.style.opacity = '1';
                callout.style.transform = 'translateY(0)';
            }, 500);
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

    // ADDED: '.quote-form-col', '.process-card', and '.testimonial-card'
    const elementsToAnimate = document.querySelectorAll(
        '.quote-form-col, .process-card, .testimonial-card, .get-in-touch-section, .urgent-banner, .job-video-layout, .job-row, .top-benefit-card, .job-benefit-card, .switch-container, .news-card, .gallery-item, .video-card, .product-card, .service-card, .help-container, .who-container, .mission-vision-grid, .why-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});