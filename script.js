// ============================================
// BI-AI Flux - Interactive JavaScript
// ============================================

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// ============================================
// Smooth Scrolling for Navigation Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Adjust for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Navbar Background on Scroll
// ============================================
const navbar = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Intersection Observer for Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing after animation is triggered
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with section-appear class
const animatedElements = document.querySelectorAll('.section-appear');
animatedElements.forEach(el => observer.observe(el));

// ============================================
// Animated Counter for Stats
// ============================================
const counters = document.querySelectorAll('.stat-counter');
let counterAnimated = false;

const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    };

    updateCounter();
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counterAnimated) {
            counters.forEach(counter => {
                animateCounter(counter);
            });
            counterAnimated = true;
        }
    });
}, { threshold: 0.5 });

if (counters.length > 0) {
    counterObserver.observe(counters[0].parentElement.parentElement);
}

// ============================================
// Back to Top Button
// ============================================
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// Contact Form Handling
// ============================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Show success message (you can integrate with a real backend here)
    showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
    
    // Reset form
    contactForm.reset();
});

// ============================================
// Notification System
// ============================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-24 right-6 z-50 px-6 py-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    } text-white`;
    
    notification.innerHTML = `
        <div class="flex items-center space-x-3">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'} text-xl"></i>
            <p class="font-semibold">${message}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// ============================================
// Dynamic Gradient Animation
// ============================================
const gradientTexts = document.querySelectorAll('.gradient-text');
let hue = 0;

function animateGradients() {
    hue = (hue + 0.5) % 360;
    // Subtle color shift - disabled by default for performance
    // Uncomment to enable dynamic color shifting
    /*
    gradientTexts.forEach(text => {
        text.style.background = `linear-gradient(135deg, 
            hsl(${hue}, 100%, 50%) 0%, 
            hsl(${(hue + 60) % 360}, 100%, 50%) 100%)`;
        text.style.webkitBackgroundClip = 'text';
        text.style.backgroundClip = 'text';
    });
    */
    requestAnimationFrame(animateGradients);
}

// animateGradients(); // Uncomment to enable

// ============================================
// Parallax Effect on Hero Section
// ============================================
const heroSection = document.querySelector('#home');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = heroSection.querySelectorAll('.blur-circle');
        parallaxElements.forEach((el, index) => {
            const speed = 0.5 + (index * 0.1);
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ============================================
// Card Hover 3D Effect
// ============================================
const cards = document.querySelectorAll('.card-hover');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ============================================
// Active Navigation Link Highlighting
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('text-primary');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('text-primary');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ============================================
// Typing Effect for Hero Subtitle (Optional)
// ============================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
/*
window.addEventListener('load', () => {
    const subtitle = document.querySelector('#home p.text-xl');
    if (subtitle) {
        const originalText = subtitle.textContent;
        typeWriter(subtitle, originalText, 30);
    }
});
*/

// ============================================
// Loading Animation (Optional)
// ============================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    const heroElements = document.querySelectorAll('#home [class*="animate-"]');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 100);
    });
});

// ============================================
// Service Card Modal (Optional Enhancement)
// ============================================
const serviceCards = document.querySelectorAll('.card-hover');

serviceCards.forEach(card => {
    card.style.cursor = 'pointer';
    
    card.addEventListener('click', function(e) {
        // Prevent navigation if clicking on links inside cards
        if (e.target.tagName !== 'A') {
            const title = this.querySelector('h3').textContent;
            showServiceModal(title, this);
        }
    });
});

function showServiceModal(title, card) {
    // This is a placeholder - you can expand this to show detailed service information
    const description = card.querySelector('p').textContent;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6';
    modal.innerHTML = `
        <div class="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full transform scale-95 transition-transform duration-300">
            <div class="flex justify-between items-start mb-6">
                <h3 class="text-3xl font-bold gradient-text">${title}</h3>
                <button class="text-gray-400 hover:text-white transition text-2xl" onclick="this.closest('.fixed').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <p class="text-gray-300 mb-6">${description}</p>
            <div class="flex justify-end space-x-4">
                <button onclick="this.closest('.fixed').remove()" class="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition">
                    Fechar
                </button>
                <a href="#contact" onclick="this.closest('.fixed').remove()" class="px-6 py-2 gradient-bg rounded-lg hover:opacity-90 transition">
                    Solicitar Orçamento
                </a>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Animate in
    setTimeout(() => {
        modal.querySelector('div').style.transform = 'scale(1)';
    }, 10);
    
    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// ============================================
// Performance Optimization
// ============================================
// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedHighlight = debounce(highlightNavigation, 10);
window.removeEventListener('scroll', highlightNavigation);
window.addEventListener('scroll', debouncedHighlight);

// ============================================
// Console Message
// ============================================
console.log('%c BI-AI Flux ', 'background: linear-gradient(135deg, #00D4FF 0%, #A855F7 100%); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Conectamos Dados. Criamos Clareza. Impulsionamos Resultados. ', 'color: #00D4FF; font-size: 14px;');
console.log('%c Website desenvolvido com ❤️ para PMEs em crescimento ', 'color: #A855F7; font-size: 12px;');
