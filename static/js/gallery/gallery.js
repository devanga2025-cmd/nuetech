document.addEventListener('DOMContentLoaded', () => {
    
    // Animate the text fade-in
    const textArea = document.querySelector('.media-text-area');
    const statsBar = document.querySelector('.media-stats-bar');

    if(textArea && statsBar) {
        // Initial states
        textArea.style.opacity = '0';
        textArea.style.transform = 'translateY(30px)';
        textArea.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

        statsBar.style.opacity = '0';
        statsBar.style.transform = 'translateY(40px)';
        statsBar.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s'; // 0.3s delay

        // Trigger animations
        setTimeout(() => {
            textArea.style.opacity = '1';
            textArea.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                statsBar.style.opacity = '1';
                statsBar.style.transform = 'translateY(0)';
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

    // Add the new card classes
    const elementsToAnimate = document.querySelectorAll(
        '.news-card, .gallery-item, .video-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});