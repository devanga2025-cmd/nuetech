document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate sections below the hero only.
    // The hero cards stay visible immediately.
    const elementsToAnimate = document.querySelectorAll(
        '.about-image-wrapper, .about-content, .solution-card, .news-card, .cta-container'
    );

    elementsToAnimate.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});
