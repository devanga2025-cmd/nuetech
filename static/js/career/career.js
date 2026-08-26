document.addEventListener('DOMContentLoaded', () => {
    
    // Animate the text fade-in
    const textArea = document.querySelector('.careers-text-area');

    if(textArea) {
        // Initial states
        textArea.style.opacity = '0';
        textArea.style.transform = 'translateY(30px)';
        textArea.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

        // Trigger animation after a short delay
        setTimeout(() => {
            textArea.style.opacity = '1';
            textArea.style.transform = 'translateY(0)';
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

    // ADDED: '.job-video-layout' and '.job-row' to the list
    const elementsToAnimate = document.querySelectorAll(
        '.job-video-layout, .job-row, .top-benefit-card, .job-benefit-card, .switch-container, .news-card, .gallery-item, .video-card, .product-card, .service-card, .help-container, .who-container, .mission-vision-grid, .why-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});