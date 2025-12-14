document.addEventListener('DOMContentLoaded', () => {
    /* --- Mobile Navigation --- */
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('show');
        });
    }

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('show');
        });
    });

    /* --- Header Background on Scroll --- */
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(5, 5, 5, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        } else {
            header.style.background = 'rgba(5, 5, 5, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    /* --- Marquee Duplication --- */
    const marquee = document.getElementById('marquee');
    if (marquee) {
        // Duplicate content to ensure smooth seamless loop
        const content = marquee.innerHTML;
        marquee.innerHTML = content + content;
    }
});
