// Warte bis das DOM geladen ist
document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll für Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Navigation Toggle
    const nav = document.querySelector('nav ul');
    const header = document.querySelector('header');
    
    // Füge einen Hamburger-Button für mobile Ansicht hinzu
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    header.insertBefore(hamburger, nav);
    
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.setAttribute('data-theme', 
            body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
        );
        
        // Update icon
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
}

// Download CV
const downloadCV = document.getElementById('downloadCV');

if (downloadCV) {
    downloadCV.addEventListener('click', () => {
        window.print();
    });
}

// Animate progress bars on scroll
const progressBars = document.querySelectorAll('.progress');
const animateProgress = () => {
    progressBars.forEach(progress => {
        const rect = progress.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
            progress.style.width = progress.style.width || '0%';
        }
    });
};

window.addEventListener('scroll', animateProgress);
animateProgress(); // Initial check

// Add hover effect to timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('fade-in');
    });
});

// Make contact links interactive
document.querySelectorAll('.cv-contact a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href').startsWith('tel:') || 
            link.getAttribute('href').startsWith('mailto:')) {
            // Let these work normally
            return;
        }
        
        e.preventDefault();
        window.open(link.getAttribute('href'), '_blank');
    });
});
