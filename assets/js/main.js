// ===========================================
// ASHTECH PRESIDENTIAL TOWERS - MAIN JAVASCRIPT
// ===========================================

(function() {
    'use strict';

    // ===========================================
    // STICKY NAVBAR
    // ===========================================
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    // ===========================================
    // SMOOTH SCROLL FOR NAVIGATION LINKS
    // ===========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for sticky navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================================
    // ACTIVE NAVIGATION HIGHLIGHTING
    // ===========================================
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.navbar__item');

    function updateActiveNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('navbar__item--active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('navbar__item--active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // ===========================================
    // ARCHITECTURE TABS
    // ===========================================
    const architectureTabs = document.querySelectorAll('.architecture__tab-item');
    const tabContents = {
        'SUN': {
            title: 'Sun',
            text: 'East-facing layouts, curved glass balustrades,<br>and deep sundecks that receive every sunrise in quiet warmth.'
        },
        'AIR': {
            title: 'Air',
            text: 'Cross-ventilated residences, naturally cooled corridors,<br>and wind-responsive landscaping that breathes with the seasons.'
        },
        'WATER': {
            title: 'Water',
            text: 'Rainwater harvesting, reflective water bodies,<br>and rhythms of flow integrated into the landscape design.'
        },
        'EARTH': {
            title: 'Earth',
            text: 'Local stone finishes, terraced greens, natural textures,<br>and grounding elements that connect residents to the land.'
        }
    };

    architectureTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabText = this.textContent.trim();
            
            // Update active state
            architectureTabs.forEach(t => {
                t.classList.remove('architecture__tab-item--active');
                t.classList.add('architecture__tab-item--inactive');
            });
            this.classList.add('architecture__tab-item--active');
            this.classList.remove('architecture__tab-item--inactive');
            
            // Update content
            const content = tabContents[tabText];
            if (content) {
                document.querySelector('.architecture__tab-title').textContent = content.title;
                document.querySelector('.architecture__tab-text p').innerHTML = content.text;
            }
            
            // Reset progress bar
            const progressBar = document.querySelector('.architecture__progress-bar');
            progressBar.style.width = '2px';
            setTimeout(() => {
                progressBar.style.width = '100%';
            }, 50);
        });
    });

    // Auto-advance architecture tabs
    let currentTabIndex = 0;
    setInterval(() => {
        currentTabIndex = (currentTabIndex + 1) % architectureTabs.length;
        architectureTabs[currentTabIndex].click();
    }, 5000);

    // ===========================================
    // EXPERIENCES TABS
    // ===========================================
    const experienceButtons = document.querySelectorAll('.experiences__tab-button');
    const experienceContents = {
        'Wellness & Rejuvenation': [
            { icon: 'https://www.figma.com/api/mcp/asset/43992b64-30a1-4b0e-be86-33c207a03cb2', text: 'Temperature-controlled pool for every season' },
            { icon: 'https://www.figma.com/api/mcp/asset/90dbfe5f-f378-4e61-b0cb-ea69d0de7023', text: 'International-inspired spa with hot pool and therapy suites' },
            { icon: 'https://www.figma.com/api/mcp/asset/e2957f0e-50e8-46eb-b668-88daa5558db2', text: 'Steam and sauna retreats' },
            { icon: 'https://www.figma.com/api/mcp/asset/f93c1f22-0d07-4c42-8c68-cb675458fbc0', text: 'Yoga and meditation studios' }
        ],
        'Movement & Play': [
            { icon: 'https://www.figma.com/api/mcp/asset/43992b64-30a1-4b0e-be86-33c207a03cb2', text: 'Multi-sport courts and jogging tracks' },
            { icon: 'https://www.figma.com/api/mcp/asset/90dbfe5f-f378-4e61-b0cb-ea69d0de7023', text: 'Children\'s adventure zones' },
            { icon: 'https://www.figma.com/api/mcp/asset/e2957f0e-50e8-46eb-b668-88daa5558db2', text: 'Indoor games room' },
            { icon: 'https://www.figma.com/api/mcp/asset/f93c1f22-0d07-4c42-8c68-cb675458fbc0', text: 'Fitness center with latest equipment' }
        ],
        'Culture & Gathering': [
            { icon: 'https://www.figma.com/api/mcp/asset/43992b64-30a1-4b0e-be86-33c207a03cb2', text: 'Multi-purpose community hall' },
            { icon: 'https://www.figma.com/api/mcp/asset/90dbfe5f-f378-4e61-b0cb-ea69d0de7023', text: 'Amphitheater for events' },
            { icon: 'https://www.figma.com/api/mcp/asset/e2957f0e-50e8-46eb-b668-88daa5558db2', text: 'Private dining spaces' },
            { icon: 'https://www.figma.com/api/mcp/asset/f93c1f22-0d07-4c42-8c68-cb675458fbc0', text: 'Library and reading lounges' }
        ],
        'Ease & Arrival': [
            { icon: 'https://www.figma.com/api/mcp/asset/43992b64-30a1-4b0e-be86-33c207a03cb2', text: 'Grand entrance lobby with concierge' },
            { icon: 'https://www.figma.com/api/mcp/asset/90dbfe5f-f378-4e61-b0cb-ea69d0de7023', text: 'Multi-level parking with EV charging' },
            { icon: 'https://www.figma.com/api/mcp/asset/e2957f0e-50e8-46eb-b668-88daa5558db2', text: 'High-speed elevators' },
            { icon: 'https://www.figma.com/api/mcp/asset/f93c1f22-0d07-4c42-8c68-cb675458fbc0', text: 'Smart access control systems' }
        ]
    };

    experienceButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            experienceButtons.forEach(btn => btn.classList.remove('experiences__tab-button--active'));
            this.classList.add('experiences__tab-button--active');
            
            // Update content
            const tabName = this.querySelector('.experiences__tab-text').textContent.trim();
            const content = experienceContents[tabName];
            
            if (content) {
                const featuresContainer = document.querySelector('.experiences__features');
                featuresContainer.innerHTML = content.map(item => `
                    <div class="feature-card">
                        <div class="feature-card__icon">
                            <img src="${item.icon}" alt="">
                        </div>
                        <p class="feature-card__text">${item.text}</p>
                    </div>
                `).join('');
            }
        });
    });

    // ===========================================
    // LAZY LOADING IMAGES
    // ===========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ===========================================
    // MOBILE MENU TOGGLE (if needed)
    // ===========================================
    const menuToggle = document.querySelector('.hero-menu__toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            // Add mobile menu functionality here
            console.log('Menu toggle clicked');
        });
    }

    // ===========================================
    // FORM VALIDATION (for contact forms if added)
    // ===========================================
    // Add form validation logic here if needed

    // ===========================================
    // ANIMATIONS ON SCROLL (Optional enhancement)
    // ===========================================
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

    document.querySelectorAll('.spec-card, .feature-card, .location-card').forEach(el => {
        observer.observe(el);
    });

})();

