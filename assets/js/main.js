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
    if (architectureTabs.length > 0) {
        let currentTabIndex = 0;
        setInterval(() => {
            currentTabIndex = (currentTabIndex + 1) % architectureTabs.length;
            architectureTabs[currentTabIndex].click();
        }, 5000);
    }

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
    // SLIDING MENU FUNCTIONALITY
    // ===========================================
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const menuClose = document.getElementById('menuClose');
    const menuOverlay = document.getElementById('menuOverlay');

    // Function to open menu
    function openMenu() {
        sideMenu.classList.add('side-menu--active');
        document.body.style.overflow = 'hidden'; // Prevent body scroll when menu is open
    }

    // Function to close menu
    function closeMenu() {
        sideMenu.classList.remove('side-menu--active');
        document.body.style.overflow = ''; // Restore body scroll
    }

    // Event listeners for menu
    if (menuToggle) {
        menuToggle.addEventListener('click', openMenu);
    }

    if (menuClose) {
        menuClose.addEventListener('click', closeMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    // Close menu on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sideMenu && sideMenu.classList.contains('side-menu--active')) {
            closeMenu();
        }
    });

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

