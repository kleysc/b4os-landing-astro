// JavaScript para B4OS
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav-menu-active');
            navToggle.classList.toggle('nav-toggle-active');
        });
    }
    
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('nav-menu-active')) {
                    navMenu.classList.remove('nav-menu-active');
                    navToggle.classList.remove('nav-toggle-active');
                }
            }
        });
    });
    
    // Registration Form Handling
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!validateForm(data)) {
                return;
            }
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                showNotification('¡Aplicación enviada exitosamente! Te contactaremos pronto.', 'success');
                registrationForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
    
    // Form Validation
    function validateForm(data) {
        const requiredFields = ['name', 'email', 'country', 'experience', 'technologies', 'motivation'];
        
        for (let field of requiredFields) {
            if (!data[field] || data[field].trim() === '') {
                showNotification(`Por favor completa el campo: ${getFieldLabel(field)}`, 'error');
                return false;
            }
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Por favor ingresa un email válido', 'error');
            return false;
        }
        
        // Terms checkbox validation
        if (!data.terms) {
            showNotification('Debes aceptar los términos y condiciones', 'error');
            return false;
        }
        
        return true;
    }
    
    // Get field label for validation messages
    function getFieldLabel(field) {
        const labels = {
            'name': 'Nombre completo',
            'email': 'Email',
            'country': 'País',
            'experience': 'Años de experiencia',
            'technologies': 'Tecnologías principales',
            'motivation': 'Motivación'
        };
        return labels[field] || field;
    }
    
    // Notification System
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }
    
    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
        
        // Hide/show header on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        
        lastScrollTop = scrollTop;
    });
    
    console.log('%cBienvenido a B4OS! 🚀', 'color: #f7931a; font-size: 16px; font-weight: bold;');
    console.log('%cBitcoin 4 Open Source - Programa de formación técnica', 'color: #1a1a1a; font-size: 12px;');
});