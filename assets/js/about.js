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

})();

