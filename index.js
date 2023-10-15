// const shadow = document.querySelector('.shadow');

// document.addEventListener('mousemove', (e) => {
//   const x = e.clientX - (shadow.offsetWidth / 2);
//   const y = e.clientY - (shadow.offsetHeight / 2);

//   shadow.style.transform = `translate(${x}px, ${y}px)`;
// });

const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').substring(1);
        const isIndexPage = window.location.pathname === '/index.html';

        // If the target is 'programs', navigate to the programs.html page
        if (targetId === 'programs') {
            window.location.href = 'programs.html';
            return; // Stop further handling for this link
        }

        // If the target is 'home' and we are on the index page, smooth scroll to the top
        if (targetId === 'home' && isIndexPage) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return; // Stop further handling for this link
        }
        else {
            window.location.href = 'index.html';
        }

        smoothScroll.call(link, e); // Otherwise, perform smooth scrolling as before
    });
});



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