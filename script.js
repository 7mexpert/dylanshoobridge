// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    const hero = document.querySelector('#hero');
    if (hero) {
        hero.style.backgroundPositionY = `${rate}px`;
    }
});

// Album hover sound effect (placeholder - would need audio files)
// document.querySelectorAll('.album').forEach(album => {
//     album.addEventListener('mouseenter', () => {
//         // Play hover sound
//     });
// });

// Particle background effect for hero
function createParticles() {
    const hero = document.querySelector('#hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        hero.appendChild(particle);
    }
}

createParticles();

// Typing effect for hero text (optional)
// const heroText = "Welcome to Dylàn's World";
// let i = 0;
// const typeWriter = () => {
//     if (i < heroText.length) {
//         document.querySelector('#hero h1').innerHTML += heroText.charAt(i);
//         i++;
//         setTimeout(typeWriter, 100);
//     }
// };
// setTimeout(typeWriter, 1000);

// Magnetic effect for streaming links
document.querySelectorAll('.streaming-links img').forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        link.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.1)`;
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translate(0, 0) scale(1)';
    });
});

// Scroll-triggered animations
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    // Floating animation for merch items
    document.querySelectorAll('.merch-items img').forEach((item, index) => {
        const speed = (index + 1) * 0.1;
        item.style.transform = `translateY(${Math.sin(scrolled * 0.001 + index) * 10}px) rotate(${Math.sin(scrolled * 0.0005 + index) * 5}deg)`;
    });

    // Rotate album covers slightly on scroll
    document.querySelectorAll('.album img').forEach((img, index) => {
        img.style.transform = `rotate(${Math.sin(scrolled * 0.0002 + index) * 2}deg)`;
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Prevent right-click (optional)
// document.addEventListener('contextmenu', e => e.preventDefault());
