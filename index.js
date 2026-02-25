// Form handling
document.getElementById('joinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const department = document.getElementById('department').value.trim();
    const suggestion = document.getElementById('suggestion').value.trim();
    
    // Basic validation
    if (!name || !department || !suggestion) {
        showFormMessage('Please fill in all fields.', false);
        return;
    }
    
    if (suggestion.length < 10) {
        showFormMessage('Your suggestion should be at least 10 characters long.', false);
        return;
    }
    
    // Simulate form submission
    showFormMessage('Thank you! Your message has been received. We look forward to connecting with you.', true);
    
    // Reset form
    setTimeout(() => {
        document.getElementById('joinForm').reset();
        document.getElementById('formMessage').style.display = 'none';
    }, 3000);
});

function showFormMessage(message, isSuccess) {
    const messageElement = document.getElementById('formMessage');
    messageElement.textContent = message;
    messageElement.classList.add('success');
    messageElement.style.display = 'block';
    
    if (!isSuccess) {
        messageElement.style.color = '#d32f2f';
    } else {
        messageElement.style.color = '#8b2e3b';
    }
}

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for reveal animation
document.querySelectorAll('.vision-card, .achievement-card, .about-text').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active navigation state based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#d4af37';
        } else {
            link.style.color = '#f8f9fa';
        }
    });
});

// Animate numbers on impact section (when it comes into view)
let numbersAnimated = false;

const impactSection = document.getElementById('impact');
if (impactSection) {
    const impactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !numbersAnimated) {
                numbersAnimated = true;
                animateCounters();
            }
        });
    });
    impactObserver.observe(impactSection);
}

function animateCounters() {
    // Add counter animation if needed
    // This is a placeholder for future enhancements
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// Handle responsive navigation
const navMenu = document.querySelector('.nav-menu');
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-background');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// Add interaction feedback on buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.98)';
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = '';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Console message (subtle)
console.log('%cLateef Fawas Morenikeji', 'font-size: 24px; font-weight: bold; color: #d4af37;');
console.log('%cBuilding the Future of Arts Leadership', 'font-size: 14px; color: #1a3a52;');
