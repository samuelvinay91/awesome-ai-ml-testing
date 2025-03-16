// Theme Toggling
document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        // Update icon
        if (body.classList.contains('dark-theme')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        
        // Add animation to hamburger
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            navLinks.classList.remove('show');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                navLinks.classList.remove('show');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Account for fixed header
                    behavior: 'smooth'
                });
                
                // Update active link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Update active navigation link on scroll
    const sections = document.querySelectorAll('section');
    
    function setActiveLink() {
        const scrollPosition = window.scrollY + 100; // Some offset
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Initial call to set active link
    setActiveLink();
    
    // Set active link on scroll
    window.addEventListener('scroll', setActiveLink);
    
    // Animate sections on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('animated');
            }
        });
    };
    
    // Add animate-on-scroll class to elements
    document.querySelectorAll('.card, .step, .section-header, .about-mission').forEach(element => {
        element.classList.add('animate-on-scroll');
    });
    
    // Initial animation check
    animateOnScroll();
    
    // Animate on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Fetch GitHub stats
    fetchGitHubStats();
});

// Fetch GitHub repository stats
async function fetchGitHubStats() {
    try {
        const response = await fetch('https://api.github.com/repos/samuelvinay91/awesome-ai-ml-testing');
        const data = await response.json();
        
        if (data.stargazers_count) {
            document.getElementById('stars-count').textContent = data.stargazers_count;
        }
        
        if (data.forks_count) {
            document.getElementById('forks-count').textContent = data.forks_count;
        }
        
        // Fetch contributors
        const contributorsResponse = await fetch('https://api.github.com/repos/samuelvinay91/awesome-ai-ml-testing/contributors');
        const contributorsData = await contributorsResponse.json();
        
        if (contributorsData.length) {
            document.getElementById('contributors-count').textContent = contributorsData.length;
        }
        
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
    }
}
