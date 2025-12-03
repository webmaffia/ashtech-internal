// ===========================================
// ABOUT US PAGE ANIMATIONS
// ===========================================

(function() {
    'use strict';

    // ===========================================
    // VALUES ITEMS - STAGGERED LEFT/RIGHT ANIMATION
    // ===========================================
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    // Animate values items with stagger effect
    const valuesItems = document.querySelectorAll('.about-values__item');
    
    const valuesObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const item = entry.target;
                const delay = Array.from(valuesItems).indexOf(item) * 150; // 150ms stagger
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, delay);
                
                valuesObserver.unobserve(item);
            }
        });
    }, observerOptions);

    valuesItems.forEach(item => {
        // Set initial state based on left/right position
        if (item.classList.contains('about-values__item--left')) {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-50px)';
            item.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        } else if (item.classList.contains('about-values__item--right')) {
            item.style.opacity = '0';
            item.style.transform = 'translateX(50px)';
            item.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }
        
        valuesObserver.observe(item);
    });

    // ===========================================
    // VALUES GRAPHIC - FADE IN SCALE
    // ===========================================
    const valuesGraphic = document.querySelector('.about-values__graphic-image');
    
    if (valuesGraphic) {
        valuesGraphic.style.opacity = '0';
        valuesGraphic.style.transform = 'translate(-50%, -50%) scale(0.8)';
        valuesGraphic.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        
        const graphicObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    valuesGraphic.style.opacity = '1';
                    valuesGraphic.style.transform = 'translate(-50%, -50%) scale(1)';
                    graphicObserver.unobserve(valuesGraphic);
                }
            });
        }, observerOptions);
        
        graphicObserver.observe(valuesGraphic);
    }

    // ===========================================
    // VISION & MISSION - SLIDE IN FROM SIDES
    // ===========================================
    const visionSection = document.querySelector('.about-vision-mission__vision');
    const missionSection = document.querySelector('.about-vision-mission__mission');
    const visionMissionImage = document.querySelector('.about-vision-mission__image');

    if (visionSection) {
        visionSection.style.opacity = '0';
        visionSection.style.transform = 'translateX(-50px)';
        visionSection.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        const visionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    visionSection.style.opacity = '1';
                    visionSection.style.transform = 'translateX(0)';
                    visionObserver.unobserve(visionSection);
                }
            });
        }, observerOptions);
        
        visionObserver.observe(visionSection);
    }

    if (missionSection) {
        missionSection.style.opacity = '0';
        missionSection.style.transform = 'translateX(50px)';
        missionSection.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s';
        
        const missionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    missionSection.style.opacity = '1';
                    missionSection.style.transform = 'translateX(0)';
                    missionObserver.unobserve(missionSection);
                }
            });
        }, observerOptions);
        
        missionObserver.observe(missionSection);
    }

    if (visionMissionImage) {
        visionMissionImage.style.opacity = '0';
        visionMissionImage.style.transform = 'scale(0.9)';
        visionMissionImage.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s';
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    visionMissionImage.style.opacity = '1';
                    visionMissionImage.style.transform = 'scale(1)';
                    imageObserver.unobserve(visionMissionImage);
                }
            });
        }, observerOptions);
        
        imageObserver.observe(visionMissionImage);
    }

    // ===========================================
    // LEADERSHIP - MAIN DIRECTOR & TEAM
    // ===========================================
    const mainDirector = document.querySelector('.about-leadership__main');
    
    if (mainDirector) {
        mainDirector.style.opacity = '0';
        mainDirector.style.transform = 'translateY(30px)';
        mainDirector.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        const directorObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    mainDirector.style.opacity = '1';
                    mainDirector.style.transform = 'translateY(0)';
                    directorObserver.unobserve(mainDirector);
                }
            });
        }, observerOptions);
        
        directorObserver.observe(mainDirector);
    }

    // Animate team members with stagger
    const teamMembers = document.querySelectorAll('.about-leadership__team-member');
    
    const teamObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const member = entry.target;
                const index = Array.from(teamMembers).indexOf(member);
                const delay = index * 100; // 100ms stagger
                
                setTimeout(() => {
                    member.style.opacity = '1';
                    member.style.transform = 'translateY(0)';
                }, delay);
                
                teamObserver.unobserve(member);
            }
        });
    }, observerOptions);

    teamMembers.forEach(member => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(30px)';
        member.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        teamObserver.observe(member);
    });

    // ===========================================
    // DIRECTOR'S MESSAGE - FADE IN WITH SLIDE
    // ===========================================
    const directorMessageText = document.querySelector('.about-director-message__text-wrapper');
    const directorMessageImage = document.querySelector('.about-director-message__image');
    const decorations = document.querySelector('.about-director-message__decorations');

    if (directorMessageText) {
        directorMessageText.style.opacity = '0';
        directorMessageText.style.transform = 'translateX(-30px)';
        directorMessageText.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        const textObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    directorMessageText.style.opacity = '1';
                    directorMessageText.style.transform = 'translateX(0)';
                    textObserver.unobserve(directorMessageText);
                }
            });
        }, observerOptions);
        
        textObserver.observe(directorMessageText);
    }

    if (directorMessageImage) {
        directorMessageImage.style.opacity = '0';
        directorMessageImage.style.transform = 'translateX(30px)';
        directorMessageImage.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s';
        
        const imgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    directorMessageImage.style.opacity = '1';
                    directorMessageImage.style.transform = 'translateX(0)';
                    imgObserver.unobserve(directorMessageImage);
                }
            });
        }, observerOptions);
        
        imgObserver.observe(directorMessageImage);
    }

    if (decorations) {
        decorations.style.opacity = '0';
        decorations.style.transition = 'opacity 1.5s ease-in-out 0.5s';
        
        const decObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    decorations.style.opacity = '1';
                    decObserver.unobserve(decorations);
                }
            });
        }, observerOptions);
        
        decObserver.observe(decorations);
    }

    // ===========================================
    // ENSURE IMAGES ARE VISIBLE
    // ===========================================
    const mainImage = document.querySelector('.about-leadership__main-image img');
    if (mainImage) {
        mainImage.style.opacity = '1';
    }
    
    const teamImages = document.querySelectorAll('.about-leadership__team-image img');
    teamImages.forEach(img => {
        img.style.opacity = '1';
    });

    // ===========================================
    // HISTORY TIMELINE - INTERACTIVE
    // ===========================================
    const timelineItems = document.querySelectorAll('.about-history__timeline-item');
    const historyTitle = document.getElementById('historyTitle');
    const historyDescription = document.getElementById('historyDescription');
    const historyImage = document.getElementById('historyImage');
    const timelineProgress = document.getElementById('timelineProgress');

    if (timelineItems.length > 0 && historyTitle && historyDescription && timelineProgress) {
        // Timeline data
        const timelineData = Array.from(timelineItems).map(item => ({
            year: item.getAttribute('data-year'),
            title: item.getAttribute('data-title'),
            description: item.getAttribute('data-description'),
            image: item.getAttribute('data-image'),
            element: item
        }));

        let currentIndex = 2; // Start at 2006 (index 2)
        let autoPlayInterval;

        // Function to update content
        function updateContent(index) {
            const data = timelineData[index];
            
            // Fade out
            historyTitle.style.opacity = '0';
            historyDescription.style.opacity = '0';
            if (historyImage) {
                historyImage.style.opacity = '0';
            }
            
            setTimeout(() => {
                historyTitle.textContent = data.title;
                historyDescription.textContent = data.description;
                if (historyImage && data.image) {
                    historyImage.src = data.image;
                }
                
                // Fade in
                historyTitle.style.opacity = '1';
                historyDescription.style.opacity = '1';
                if (historyImage) {
                    historyImage.style.opacity = '1';
                }
            }, 300);

            // Update active state
            timelineItems.forEach(item => item.classList.remove('active'));
            data.element.classList.add('active');

            // Update progress bar - calculate position to reach center of active dot
            const timelineWrapper = document.querySelector('.about-history__timeline');
            if (timelineWrapper) {
                const itemElement = data.element;
                const itemLeft = itemElement.offsetLeft;
                const itemWidth = itemElement.offsetWidth;
                const itemCenter = itemLeft + (itemWidth / 2);
                const wrapperWidth = timelineWrapper.offsetWidth;
                const progressWidth = (itemCenter / wrapperWidth) * 100;
                timelineProgress.style.width = progressWidth + '%';
            }

            currentIndex = index;
        }

        // Click handlers
        timelineItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                updateContent(index);
                stopAutoPlay();
            });
        });

        // Auto-play functionality
        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % timelineData.length;
                updateContent(currentIndex);
            }, 5000); // Change every 5 seconds
        }

        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
            }
        }

        // Initialize progress bar to reach the active item's dot
        setTimeout(() => {
            const activeItem = timelineData[currentIndex].element;
            const timelineWrapper = document.querySelector('.about-history__timeline');
            if (timelineWrapper && activeItem) {
                const itemLeft = activeItem.offsetLeft;
                const itemWidth = activeItem.offsetWidth;
                const itemCenter = itemLeft + (itemWidth / 2);
                const wrapperWidth = timelineWrapper.offsetWidth;
                const progressWidth = (itemCenter / wrapperWidth) * 100;
                timelineProgress.style.width = progressWidth + '%';
            }
        }, 100);

        // Start auto-play when section is visible
        const historySection = document.querySelector('.about-history');
        if (historySection) {
            const historyObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        startAutoPlay();
                    } else {
                        stopAutoPlay();
                    }
                });
            }, { threshold: 0.3 });

            historyObserver.observe(historySection);
        }

        // Pause on hover
        const timelineWrapper = document.querySelector('.about-history__timeline');
        if (timelineWrapper) {
            timelineWrapper.addEventListener('mouseenter', stopAutoPlay);
            timelineWrapper.addEventListener('mouseleave', () => {
                const historySection = document.querySelector('.about-history');
                if (historySection) {
                    const rect = historySection.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                    if (isVisible) {
                        startAutoPlay();
                    }
                }
            });
        }
    }

})();


