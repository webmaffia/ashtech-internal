// ===========================================
// LANDING PAGE ANIMATIONS
// ===========================================

/**
 * Landing Page Scroll Animations
 * Uses Intersection Observer API for performance-optimized scroll animations
 */

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // ===========================================
  // 1. BANNER FADE-IN ANIMATION (On Load)
  // ===========================================
  
  window.addEventListener('load', () => {
    const bannerTitle = document.querySelector('.landing-banner__title');
    const bannerScroll = document.querySelector('.landing-banner__scroll');
    
    if (bannerTitle) {
      setTimeout(() => {
        bannerTitle.style.opacity = '1';
        bannerTitle.style.transform = 'translate(-50%, calc(-50% + 103px))';
      }, 300);
    }
    
    if (bannerScroll) {
      setTimeout(() => {
        bannerScroll.style.opacity = '1';
      }, 600);
    }
  });

  // ===========================================
  // 1A. SVG PATH DRAWING ANIMATION (On Scroll)
  // ===========================================
  
  // Flag to track if SVG animation is complete
  let svgAnimationComplete = false;
  
  const bannerSvg = document.getElementById('banner-svg-animation');
  
  if (bannerSvg) {
    // Get all paths and lines in the SVG
    const svgPaths = bannerSvg.querySelectorAll('path, line');
    
    // Store path lengths and set up initial state
    const pathData = [];
    
    svgPaths.forEach((path) => {
      const length = path.getTotalLength();
      
      // Set up the starting positions
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.opacity = '1';
      
      // Apply glow filter
      path.setAttribute('filter', 'url(#strongGlow)');
      
      pathData.push({
        element: path,
        length: length
      });
    });
    
    // Get banner content elements
    const bannerTitle = document.querySelector('.landing-banner__title');
    const bannerScrollText = document.querySelector('.landing-banner__scroll');
    
    // Scroll-based path drawing animation
    let svgTicking = false;
    
    window.addEventListener('scroll', () => {
      if (!svgTicking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          
          // Start drawing when user starts scrolling (0 to 80% of viewport height)
          // Paths should be fully drawn by the time user scrolls 80vh
          const maxScroll = windowHeight * 0.8;
          const scrollProgress = Math.min(scrollY / maxScroll, 1);
          
          // Draw paths based on scroll progress
          pathData.forEach((data) => {
            // Calculate how much of the path to reveal
            const drawLength = data.length * (1 - scrollProgress);
            data.element.style.strokeDashoffset = drawLength;
          });
          
          // Fade out banner content as SVG animation progresses
          if (scrollProgress > 0) {
            // Start fading out from the beginning of scroll
            const fadeOutProgress = Math.min(scrollProgress * 2, 1); // Fade out faster (by 50% of animation)
            const opacity = 1 - fadeOutProgress;
            
            if (bannerTitle) {
              bannerTitle.style.opacity = opacity;
            }
            if (bannerScrollText) {
              bannerScrollText.style.opacity = opacity;
            }
          } else {
            // Show banner content when at the top
            if (bannerTitle) {
              bannerTitle.style.opacity = '1';
            }
            if (bannerScrollText) {
              bannerScrollText.style.opacity = '1';
            }
          }
          
          // Check if SVG animation is complete (when scroll progress reaches 100%)
          if (scrollProgress >= 1 && !svgAnimationComplete) {
            svgAnimationComplete = true;
          } else if (scrollProgress < 1 && svgAnimationComplete) {
            // Reset flag if user scrolls back up
            svgAnimationComplete = false;
          }
          
          svgTicking = false;
        });
        
        svgTicking = true;
      }
    });
    
    // Trigger initial state on load
    window.dispatchEvent(new Event('scroll'));
  }

  // ===========================================
  // 2. OVERVIEW SECTION - SCROLL UP ANIMATION
  // ===========================================
  
  const overviewSection = document.querySelector('.landing-overview');
  const bannerSection = document.querySelector('.landing-banner');
  const overviewDecoration = document.querySelector('.landing-overview__decoration');
  
  if (overviewSection && bannerSection) {
    // Scroll event to move overview section up and fade out banner
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          
          // Show/hide overview section based on SVG animation completion
          if (svgAnimationComplete) {
            overviewSection.style.opacity = '1';
          } else {
            overviewSection.style.opacity = '0';
          }
          
          // Only start overview scroll animation after SVG animation completes
          if (svgAnimationComplete && scrollY > windowHeight * 0.8) {
            // Calculate how much to move up (max 100vw)
            const progress = Math.min((scrollY - windowHeight * 0.8) / (windowHeight * 0.8), 1);
            const translateValue = 100 - (progress * 100); // From 100vh to 0vh
            overviewSection.style.top = `${translateValue}vh`;
            
            // Fade out banner as overview moves up
            // When translateValue reaches 0 (or negative), banner opacity should be 0
            bannerSection.style.opacity = translateValue / 100;
            
            // Gradually scale decoration based on scroll progress
            if (overviewDecoration) {
              // Start scale: 1.565 (zoomed/big)
              // End scale: 1.0 (original size)
              // Interpolate smoothly based on scroll progress (0 to 1)
              
              const startScale = 1.565;
              const endScale = 1.0;
              
              // Calculate current scale based on progress
              const currentScale = startScale - ((startScale - endScale) * progress);
              
              overviewDecoration.style.transform = `translateX(-50%) scale(${currentScale})`;
            }
          } else {
            overviewSection.style.top = '100vh';
            bannerSection.style.opacity = '1';
            
            // Reset decoration to big/zoomed size when scrolled back to top
            if (overviewDecoration) {
              overviewDecoration.style.transform = 'translateX(-50%) scale(1.565)';
            }
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    });
  }

  // Observer for content fade-in
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const overviewObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Only animate if SVG animation is complete
      if (entry.isIntersecting && svgAnimationComplete) {
        entry.target.classList.add('animate');
      } else {
        // Remove animate class when scrolling out to reset animation
        entry.target.classList.remove('animate');
      }
    });
  }, observerOptions);

  const overviewContent = document.querySelector('.landing-overview__content');
  if (overviewContent) {
    overviewContent.classList.add('fade-in');
    overviewObserver.observe(overviewContent);
  }

  // ===========================================
  // 3. VALUES SECTION - STAGGERED ANIMATION
  // ===========================================
  
  const valuesHeaderObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  }, observerOptions);

  const valuesHeader = document.querySelector('.landing-values__header');
  if (valuesHeader) {
    valuesHeader.classList.add('fade-in');
    valuesHeaderObserver.observe(valuesHeader);
  }

  const valuesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const valueItems = document.querySelectorAll('.landing-values__item');
        
        // Staggered pairs: [[0,3], [1,4], [2,5]]
        const pairs = [
          [valueItems[0], valueItems[3]], // जुनून + विश्वास
          [valueItems[1], valueItems[4]], // संकल्प + निष्ठा
          [valueItems[2], valueItems[5]]  // लगन + दृढता
        ];

        // Animate in forward
        pairs.forEach((pair, pairIndex) => {
          setTimeout(() => {
            pair.forEach((item) => {
              if (item) {
                const title = item.querySelector('.landing-values__item-title');
                const description = item.querySelector('.landing-values__item-description');
                
                // Title animates first
                if (title) {
                  title.style.opacity = '1';
                  title.style.transform = 'translateY(0)';
                }
                
                // Description animates 150ms after title
                if (description) {
                  setTimeout(() => {
                    description.style.opacity = '1';
                    description.style.transform = 'translateY(0)';
                  }, 150);
                }
              }
            });
          }, pairIndex * 300); // 300ms delay between pairs
        });
      } else {
        // Animate out in reverse order
        const valueItems = document.querySelectorAll('.landing-values__item');
        const pairs = [
          [valueItems[0], valueItems[3]], // जुनून + विश्वास
          [valueItems[1], valueItems[4]], // संकल्प + निष्ठा
          [valueItems[2], valueItems[5]]  // लगन + दृढता
        ];
        
        // Reverse animation: last pair animates out first
        pairs.reverse().forEach((pair, pairIndex) => {
          setTimeout(() => {
            pair.forEach((item) => {
              if (item) {
                const title = item.querySelector('.landing-values__item-title');
                const description = item.querySelector('.landing-values__item-description');
                
                // Description fades out first
                if (description) {
                  description.style.opacity = '0';
                  description.style.transform = 'translateY(40px)';
                }
                
                // Title fades out after
                if (title) {
                  setTimeout(() => {
                    title.style.opacity = '0';
                    title.style.transform = 'translateY(40px)';
                  }, 150);
                }
              }
            });
          }, pairIndex * 200); // Faster reverse animation
        });
      }
    });
  }, observerOptions);

  const valuesGraphic = document.querySelector('.landing-values__graphic');
  if (valuesGraphic) {
    // Set initial states
    const valueItems = document.querySelectorAll('.landing-values__item-title, .landing-values__item-description');
    valueItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(40px)';
      item.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });
    
    valuesObserver.observe(valuesGraphic);
  }

  // ===========================================
  // 4. PROJECTS SECTION - FADE IN ANIMATION
  // ===========================================
  
  const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  }, observerOptions);
  
  const projectsContent = document.querySelector('.landing-projects__content');
  if (projectsContent) {
    projectsContent.classList.add('fade-in');
    projectsObserver.observe(projectsContent);
  }

  // ===========================================
  // 4A. BUILDING IMAGE - SCROLL UP ANIMATION
  // ===========================================
  
  const buildingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const buildingImg = document.querySelector('.building');
      if (buildingImg) {
        if (entry.isIntersecting) {
          // Animate building to bottom: 0
          buildingImg.style.bottom = '0';
        } else {
          // Reset to initial position
          buildingImg.style.bottom = '-50vw';
        }
      }
    });
  }, observerOptions);
  
  const buildingTrigger = document.querySelector('.landing-projects');
  if (buildingTrigger) {
    buildingObserver.observe(buildingTrigger);
  }

  // ===========================================
  // 5. NRI DESK SECTION - STAGGERED ANIMATION
  // ===========================================
  
  const nriObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const nriContent = entry.target.querySelector('.landing-nri__info');
        const nriFeatures = entry.target.querySelectorAll('.landing-nri__feature');
        
        // Animate main content first
        if (nriContent) {
          nriContent.style.opacity = '1';
          nriContent.style.transform = 'translateY(0)';
        }
        
        // Then animate features with stagger
        nriFeatures.forEach((feature, index) => {
          setTimeout(() => {
            feature.style.opacity = '1';
            feature.style.transform = 'translateX(0)';
          }, 300 + (index * 150));
        });
      } else {
        // Animate out in reverse order
        const nriContent = entry.target.querySelector('.landing-nri__info');
        const nriFeatures = entry.target.querySelectorAll('.landing-nri__feature');
        
        // Features fade out first in reverse order
        Array.from(nriFeatures).reverse().forEach((feature, index) => {
          setTimeout(() => {
            feature.style.opacity = '0';
            feature.style.transform = 'translateX(-30px)';
          }, index * 100);
        });
        
        // Content fades out last
        if (nriContent) {
          setTimeout(() => {
            nriContent.style.opacity = '0';
            nriContent.style.transform = 'translateY(40px)';
          }, nriFeatures.length * 100);
        }
      }
    });
  }, observerOptions);

  const nriSection = document.querySelector('.landing-nri');
  if (nriSection) {
    const nriInfo = nriSection.querySelector('.landing-nri__info');
    const nriFeatures = nriSection.querySelectorAll('.landing-nri__feature');
    
    if (nriInfo) {
      nriInfo.style.opacity = '0';
      nriInfo.style.transform = 'translateY(40px)';
      nriInfo.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    }
    
    nriFeatures.forEach(feature => {
      feature.style.opacity = '0';
      feature.style.transform = 'translateX(-30px)';
      feature.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });
    
    nriObserver.observe(nriSection);
  }

  // ===========================================
  // 6. AWARDS SECTION - STAGGERED ANIMATION
  // ===========================================
  
  const awardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const header = entry.target.querySelector('.landing-awards__header');
        const items = entry.target.querySelectorAll('.landing-awards__item');
        
        // Animate header first
        if (header) {
          header.style.opacity = '1';
          header.style.transform = 'translateY(0)';
        }
        
        // Then animate award items with stagger
        items.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 400 + (index * 150));
        });
      } else {
        // Animate out in reverse order
        const header = entry.target.querySelector('.landing-awards__header');
        const items = entry.target.querySelectorAll('.landing-awards__item');
        
        // Items fade out first in reverse order
        Array.from(items).reverse().forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(40px)';
          }, index * 100);
        });
        
        // Header fades out last
        if (header) {
          setTimeout(() => {
            header.style.opacity = '0';
            header.style.transform = 'translateY(40px)';
          }, items.length * 100);
        }
      }
    });
  }, observerOptions);

  const awardsSection = document.querySelector('.landing-awards');
  if (awardsSection) {
    const header = awardsSection.querySelector('.landing-awards__header');
    const items = awardsSection.querySelectorAll('.landing-awards__item');
    
    if (header) {
      header.style.opacity = '0';
      header.style.transform = 'translateY(40px)';
      header.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    }
    
    items.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(40px)';
      item.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });
    
    awardsObserver.observe(awardsSection);
  }

  // ===========================================
  // 7. TESTIMONIALS SECTION - SLIDE ANIMATIONS
  // ===========================================
  
  const testimonialsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const header = entry.target.querySelector('.landing-testimonials__header');
        const content = entry.target.querySelector('.landing-testimonials__content');
        
        // Slide in from sides
        if (header) {
          setTimeout(() => {
            header.style.opacity = '1';
            header.style.transform = 'translateX(0)';
          }, 200);
        }
        
        if (content) {
          setTimeout(() => {
            content.style.opacity = '1';
            content.style.transform = 'translateX(0)';
          }, 400);
        }
      } else {
        // Slide out in reverse order
        const header = entry.target.querySelector('.landing-testimonials__header');
        const content = entry.target.querySelector('.landing-testimonials__content');
        
        // Content slides out first
        if (content) {
          content.style.opacity = '0';
          content.style.transform = 'translateX(100px)';
        }
        
        // Header slides out after
        if (header) {
          setTimeout(() => {
            header.style.opacity = '0';
            header.style.transform = 'translateX(-100px)';
          }, 150);
        }
      }
    });
  }, observerOptions);

  const testimonialsSection = document.querySelector('.landing-testimonials');
  if (testimonialsSection) {
    const header = testimonialsSection.querySelector('.landing-testimonials__header');
    const content = testimonialsSection.querySelector('.landing-testimonials__content');
    
    if (header) {
      header.style.opacity = '0';
      header.style.transform = 'translateX(-100px)';
      header.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    }
    
    if (content) {
      content.style.opacity = '0';
      content.style.transform = 'translateX(100px)';
      content.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    }
    
    testimonialsObserver.observe(testimonialsSection);
  }

  // ===========================================
  // 8. FOOTER SECTION - FADE IN ANIMATION
  // ===========================================
  
  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  }, observerOptions);
  
  const footerContent = document.querySelector('.landing-footer__content');
  if (footerContent) {
    footerContent.classList.add('fade-in');
    footerObserver.observe(footerContent);
  }

  // ===========================================
  // 9. UNIVERSAL TEXT ANIMATIONS
  // ===========================================
  
  // Bottom to Top Animation for all text elements
  const textAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      } else {
        // Reset animation when scrolling out
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(40px)';
      }
    });
  }, observerOptions);

  // Right to Left Animation for specific elements
  const textRTLAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      } else {
        // Reset animation when scrolling out
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateX(100px)';
      }
    });
  }, observerOptions);

  // Select all text elements with animate-text class
  const animateTextElements = document.querySelectorAll('.animate-text');
  animateTextElements.forEach(element => {
    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    
    // Observe element
    textAnimationObserver.observe(element);
  });

  // Select all text elements with animate-text-rtl class (Right to Left)
  const animateTextRTLElements = document.querySelectorAll('.animate-text-rtl');
  animateTextRTLElements.forEach(element => {
    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateX(100px)';
    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    
    // Observe element
    textRTLAnimationObserver.observe(element);
  });
}

// ===========================================
// TESTIMONIAL NAVIGATION (Interactive)
// ===========================================

const prevBtn = document.querySelector('.landing-testimonials__nav-btn--prev');
const nextBtn = document.querySelector('.landing-testimonials__nav-btn--next');

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    console.log('Previous testimonial');
    // Add testimonial navigation logic here
  });

  nextBtn.addEventListener('click', () => {
    console.log('Next testimonial');
    // Add testimonial navigation logic here
  });
}

console.log('Landing page animations initialized');

