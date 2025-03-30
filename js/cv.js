// Animate skill bars on scroll
document.addEventListener('DOMContentLoaded', function() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    function animateSkills() {
        skillLevels.forEach(level => {
            const rect = level.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                level.style.width = level.style.width || '0%';
            }
        });
    }

    // Initial check
    animateSkills();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkills);
});

// Add hover effects to timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});

// Make contact links interactive
document.querySelectorAll('.contact-item a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href').startsWith('tel:') || 
            link.getAttribute('href').startsWith('mailto:')) {
            return; // Let these work normally
        }
        
        e.preventDefault();
        window.open(link.getAttribute('href'), '_blank');
    });
});

// Add print functionality
window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
}); 