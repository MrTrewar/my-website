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
