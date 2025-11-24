// Project Page Animations and Interactions

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize animations
    initScrollAnimations();
    initSubmenuHighlight();
    initSubmenuSticky();
    initExperiencesTabs();
    initArchitectureTabs();

    
    // Scroll Animations
    function initScrollAnimations() {
        const animateElements = document.querySelectorAll('.animate-text, .animate-text-rtl');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Submenu Sticky/Fixed on Scroll
    function initSubmenuSticky() {
        const submenu = document.querySelector('.project-submenu');
        if (!submenu) return;
        
        const submenuOffset = submenu.offsetTop;
        
        function handleScroll() {
            const scrollPosition = window.scrollY;
            
            if (scrollPosition >= submenuOffset) {
                submenu.classList.add('project-submenu--fixed');
            } else {
                submenu.classList.remove('project-submenu--fixed');
            }
        }
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call
    }
    
    // Submenu Active Link Highlight on Scroll
    function initSubmenuHighlight() {
        const sections = document.querySelectorAll('section[id]');
        const menuLinks = document.querySelectorAll('.project-submenu__link');
        
        function highlightMenu() {
            let scrollPosition = window.scrollY + 150;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    menuLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }
        
        window.addEventListener('scroll', highlightMenu);
        highlightMenu(); // Initial call
    }
    
    // Experiences Tabs Functionality
    function initExperiencesTabs() {
        // Handle new experiences tabs structure
        const experienceTabButtons = document.querySelectorAll('.experiences__tab-button');
        const experienceTabContents = document.querySelectorAll('.experiences__tab-content');
        
        if (experienceTabButtons.length > 0) {
            experienceTabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const tabName = this.getAttribute('data-tab');
                    
                    // Remove active class from all buttons
                    experienceTabButtons.forEach(btn => {
                        btn.classList.remove('experiences__tab-button--active');
                    });
                    
                    // Add active class to clicked button
                    this.classList.add('experiences__tab-button--active');
                    
                    // Hide all content panels
                    experienceTabContents.forEach(content => {
                        content.classList.remove('experiences__tab-content--active');
                    });
                    
                    // Show corresponding content panel
                    const activeContent = document.querySelector(`.experiences__tab-content[data-content="${tabName}"]`);
                    if (activeContent) {
                        activeContent.classList.add('experiences__tab-content--active');
                    }
                });
            });
        }
        
        // Handle old project-experiences tabs structure (if exists)
        const tabs = document.querySelectorAll('.project-experiences__tab');
        const panels = document.querySelectorAll('.project-experiences__panel');
        
        if (tabs.length > 0) {
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const tabName = this.getAttribute('data-tab');
                    
                    // Remove active class from all tabs and panels
                    tabs.forEach(t => t.classList.remove('active'));
                    panels.forEach(p => p.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Show corresponding panel
                    const activePanel = document.querySelector(`.project-experiences__panel[data-panel="${tabName}"]`);
                    if (activePanel) {
                        activePanel.classList.add('active');
                    }
                });
            });
        }
    }
    
    // Architecture Tabs Functionality
    function initArchitectureTabs() {
        const tabs = document.querySelectorAll('.project-architecture__tab');
        const elements = document.querySelectorAll('.project-architecture__element');
        const progressBar = document.querySelector('.project-architecture__progress-bar');
        const architectureSection = document.querySelector('.project-architecture');
        let currentIndex = 0;
        let autoPlayInterval;
        
        // Background images for each element
        const backgroundImages = {
            sun: 'https://www.figma.com/api/mcp/asset/89b6ac4b-79dd-4652-9189-10e5eae22aa9',
            air: 'https://www.figma.com/api/mcp/asset/89b6ac4b-79dd-4652-9189-10e5eae22aa9', // Replace with air image URL
            water: 'https://www.figma.com/api/mcp/asset/89b6ac4b-79dd-4652-9189-10e5eae22aa9', // Replace with water image URL
            earth: 'https://www.figma.com/api/mcp/asset/89b6ac4b-79dd-4652-9189-10e5eae22aa9' // Replace with earth image URL
        };
        
        function changeBackgroundImage(elementType) {
            if (architectureSection && backgroundImages[elementType]) {
                architectureSection.style.backgroundImage = `url(${backgroundImages[elementType]})`;
            }
        }
        
        function showElement(index) {
            // Remove active class from all tabs and elements
            tabs.forEach(t => t.classList.remove('active'));
            elements.forEach(e => {
                e.classList.remove('active');
                e.style.display = 'none';
            });
            
            // Add active class to current tab and element
            tabs[index].classList.add('active');
            elements[index].classList.add('active');
            elements[index].style.display = 'block';
            
            // Get the element type and change background image
            const activeElement = elements[index];
            const elementType = activeElement.getAttribute('data-element');
            if (elementType) {
                changeBackgroundImage(elementType);
            }
            
            // Reset progress bar animation
            if (progressBar) {
                progressBar.style.animation = 'none';
                setTimeout(() => {
                    progressBar.style.animation = 'progressBar 5s linear';
                }, 10);
            }
        }
        
        function nextElement() {
            currentIndex = (currentIndex + 1) % tabs.length;
            showElement(currentIndex);
        }
        
        function startAutoPlay() {
            stopAutoPlay();
            autoPlayInterval = setInterval(nextElement, 5000);
        }
        
        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
            }
        }
        
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', function() {
                currentIndex = index;
                showElement(currentIndex);
                stopAutoPlay();
                startAutoPlay();
            });
        });
        
        // Initialize with first element's background image
        if (elements.length > 0) {
            const firstElementType = elements[0].getAttribute('data-element');
            if (firstElementType) {
                changeBackgroundImage(firstElementType);
            }
        }
        
        // Start auto-play
        startAutoPlay();
        
        // Pause on hover
        if (architectureSection) {
            architectureSection.addEventListener('mouseenter', stopAutoPlay);
            architectureSection.addEventListener('mouseleave', startAutoPlay);
        }
    }
    
    // // Smooth Scroll for Menu Links
    // function initSmoothScroll() {
    //     const menuLinks = document.querySelectorAll('.project-submenu__link');
        
    //     menuLinks.forEach(link => {
    //         link.addEventListener('click', function(e) {
    //             e.preventDefault();
    //             const targetId = this.getAttribute('href');
    //             const targetSection = document.querySelector(targetId);
                
    //             if (targetSection) {
    //                 const headerOffset = 100;
    //                 const elementPosition = targetSection.offsetTop;
    //                 const offsetPosition = elementPosition - headerOffset;
                    
    //                 window.scrollTo({
    //                     top: offsetPosition,
    //                     behavior: 'smooth'
    //                 });
    //             }
    //         });
    //     });
    // }
    
    // Card Hover Effects for Specifications
    function initCardHoverEffects() {
        const cards = document.querySelectorAll('.project-specifications__card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-20px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
    
    // Initialize card hover effects
    initCardHoverEffects();
    
    // Parallax effect disabled - decorations stay fixed
    // Decorations are now static background elements
    
    // Stagger animation for stats
    function animateStats() {
        const stats = document.querySelectorAll('.project-overview__stat');
        
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, {
            threshold: 0.2
        });
        
        stats.forEach(stat => {
            stat.style.opacity = '0';
            stat.style.transform = 'translateY(20px)';
            stat.style.transition = 'all 0.6s ease';
            statsObserver.observe(stat);
        });
    }
    
    // Initialize stats animation
    animateStats();
    
    // Stagger animation for connectivity items
    function animateConnectivityItems() {
        const items = document.querySelectorAll('.project-location__item');
        
        const itemsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, {
            threshold: 0.2
        });
        
        items.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.6s ease';
            itemsObserver.observe(item);
        });
    }
    
    // Initialize connectivity items animation
    animateConnectivityItems();
    
    // Fade in animation for specification cards
    function animateSpecCards() {
        const cards = document.querySelectorAll('.project-specifications__card');
        
        const cardsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        }, {
            threshold: 0.1
        });
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(40px)';
            card.style.transition = 'all 0.8s ease';
            cardsObserver.observe(card);
        });
    }
    
    // Initialize spec cards animation
    animateSpecCards();
    
    // Features stagger animation
    function animateFeatures() {
        const features = document.querySelectorAll('.project-experiences__feature');
        
        const featuresObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'scale(1)';
                    }, index * 150);
                }
            });
        }, {
            threshold: 0.2
        });
        
        features.forEach(feature => {
            feature.style.opacity = '0';
            feature.style.transform = 'scale(0.8)';
            feature.style.transition = 'all 0.6s ease';
            featuresObserver.observe(feature);
        });
    }
    
    // Initialize features animation
    animateFeatures();
    
    // Download button animation
    const downloadButtons = document.querySelectorAll('.project-download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add animation class
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Here you can add actual download functionality
            console.log('Download brochure clicked');
        });
    });
    
    // Header hide/show on scroll
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const submenu = document.querySelector('.project-submenu');
    
    // window.addEventListener('scroll', function() {
    //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
    //     if (scrollTop > lastScrollTop && scrollTop > 100) {
    //         // Scrolling down
    //         header.style.transform = 'translateY(-100%)';
    //     } else {
    //         // Scrolling up
    //         header.style.transform = 'translateY(0)';
    //     }
        
    //     lastScrollTop = scrollTop;
    // });
    
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-text {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    .animate-text.animated {
        opacity: 1;
        transform: translateY(0);
    }
    
    .animate-text-rtl {
        opacity: 0;
        transform: translateX(-30px);
        transition: all 0.8s ease;
    }
    
    .animate-text-rtl.animated {
        opacity: 1;
        transform: translateX(0);
    }
    
    .header {
        transition: transform 0.3s ease;
    }
    
    .project-download-btn {
        transition: transform 0.15s ease;
    }
`;
document.head.appendChild(style);

