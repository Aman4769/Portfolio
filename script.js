// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// CV download link handler
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://drive.google.com/file/d/1xL16lNDMfgRYNwbZOS8-Veal7O3_dYfX/view?usp=drive_link', '_blank');
});

// Project demo links
const projectLinks = document.querySelectorAll('.project-links');
projectLinks[0].querySelectorAll('a')[0].href = "https://github.com/Baibh22/task-management";
projectLinks[0].querySelectorAll('a')[1].href = "C:/Users/amans/Downloads/index.html";
projectLinks[1].querySelectorAll('a')[0].href = "https://github.com/Baibh22/expense-tracker";
projectLinks[1].querySelectorAll('a')[1].href = "C:/Users/amans/Downloads/index.html";

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Scroll reveal animation
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}