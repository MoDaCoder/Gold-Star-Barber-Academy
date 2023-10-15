const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth scroll on click
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
});

function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetOffset = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    }
}