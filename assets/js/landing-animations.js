const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  window.addEventListener('load', () => {
    const bannerTitle = document.querySelector('.landing-banner__title');
    const bannerScroll = document.querySelector('.landing-banner__scroll');
    const isMobile = window.innerWidth <= 767; // Match tablet breakpoint for mobile devices
    
    if (bannerTitle) {
      setTimeout(() => {
        bannerTitle.style.opacity = '1';
        // Different transform for mobile vs desktop
        if (isMobile) {
          bannerTitle.style.transform = 'translate(-50%, calc(-50% + 50px))';
        } else {
          bannerTitle.style.transform = 'translate(-50%, calc(-50% + 103px))';
        }
      }, 300);
    }
    
    if (bannerScroll) {
      setTimeout(() => {
        bannerScroll.style.opacity = '1';
      }, 600);
    }
  });

  let svgAnimationComplete = false;
  
  // Get both desktop and mobile SVGs
  const desktopSvg = document.getElementById('banner-svg-animation');
  const mobileSvg = document.getElementById('banner-svg-animation-mobile');
  const bannerSvgs = [desktopSvg, mobileSvg].filter(svg => svg !== null);
  const pathData = [];
  
  console.log('Desktop SVG found:', desktopSvg !== null);
  console.log('Mobile SVG found:', mobileSvg !== null);
  console.log('Window width:', window.innerWidth);
  
  // Initialize animation for all SVGs (both desktop and mobile)
  bannerSvgs.forEach((bannerSvg) => {
    const svgPaths = bannerSvg.querySelectorAll('path, line');
    const isMobile = bannerSvg.classList.contains('mobile-svg');
    const filterUrl = isMobile ? 'url(#strongGlow-mobile)' : 'url(#strongGlow)';
    
    // Check if SVG is visible
    const computedStyle = window.getComputedStyle(bannerSvg);
    const isVisible = computedStyle.display !== 'none';
    
    console.log(`${isMobile ? 'Mobile' : 'Desktop'} SVG - Paths: ${svgPaths.length}, Visible: ${isVisible}, Display: ${computedStyle.display}`);
    
    svgPaths.forEach((path) => {
      try {
        const length = path.getTotalLength();
        
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        path.style.opacity = '1';
        
        path.setAttribute('filter', filterUrl);
        
        pathData.push({
          element: path,
          length: length
        });
      } catch (error) {
        console.error('Error initializing path:', error);
      }
    });
  });
  
  console.log(`Total paths to animate: ${pathData.length}`);
  
  // Only set up scroll animation if we found paths to animate
  if (pathData.length > 0) {
    const bannerTitle = document.querySelector('.landing-banner__title');
    const bannerScrollText = document.querySelector('.landing-banner__scroll');
    const header = document.querySelector('.header');
    
    if (header) {
      header.style.transition = 'opacity 0.5s ease-out';
    }
    
    let svgTicking = false;
    
    window.addEventListener('scroll', () => {
      if (!svgTicking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          
          const maxScroll = windowHeight * 0.8;
          const scrollProgress = Math.min(scrollY / maxScroll, 1);
          
          pathData.forEach((data) => {
            const drawLength = data.length * (1 - scrollProgress);
            data.element.style.strokeDashoffset = drawLength;
          });
          
          if (scrollProgress > 0) {
            const fadeOutProgress = Math.min(scrollProgress * 2, 1);
            const opacity = 1 - fadeOutProgress;
            
            if (bannerTitle) {
              bannerTitle.style.opacity = opacity;
            }
            if (bannerScrollText) {
              bannerScrollText.style.opacity = opacity;
            }
          } else {
            if (bannerTitle) {
              bannerTitle.style.opacity = '1';
            }
            if (bannerScrollText) {
              bannerScrollText.style.opacity = '1';
            }
          }
          
          if (scrollProgress >= 1 && !svgAnimationComplete) {
            svgAnimationComplete = true;
            if (header) {
              header.style.opacity = '0';
              header.style.pointerEvents = 'none';
            }
          } else if (scrollProgress < 1 && svgAnimationComplete) {
            svgAnimationComplete = false;
            if (header) {
              header.style.opacity = '1';
              header.style.pointerEvents = 'auto';
            }
          }
          
          svgTicking = false;
        });
        
        svgTicking = true;
      }
    });
    
    window.dispatchEvent(new Event('scroll'));
  }

  const overviewSection = document.querySelector('.landing-overview');
  const bannerSection = document.querySelector('.landing-banner');
  const overviewDecoration = document.querySelector('.landing-overview__decoration');
  
  if (overviewSection && bannerSection) {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          
          if (svgAnimationComplete) {
            overviewSection.style.opacity = '1';
          } else {
            overviewSection.style.opacity = '0';
          }
          
          if (svgAnimationComplete && scrollY > windowHeight * 0.8) {
            const progress = Math.min((scrollY - windowHeight * 0.8) / (windowHeight * 0.8), 1);
            const translateValue = 100 - (progress * 100);
            overviewSection.style.top = `${translateValue}vh`;
            
            bannerSection.style.opacity = translateValue / 100;
            
            if (overviewDecoration) {
              const startScale = 1.565;
              const endScale = 1.0;
              
              const currentScale = startScale - ((startScale - endScale) * progress);
              
              overviewDecoration.style.transform = `translateX(-50%) scale(${currentScale})`;
            }
          } else {
            overviewSection.style.top = '100vh';
            bannerSection.style.opacity = '1';
            
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

  // Different observer options for mobile vs desktop
  const isMobileView = window.innerWidth <= 767;
  const isMobileDevice = isMobileView; // Use this to check if reverse animations should be disabled
  
  const observerOptions = {
    root: null,
    rootMargin: isMobileView ? '-50px 0px' : '0px', // Delay trigger on mobile
    threshold: isMobileView ? 0.3 : 0.2 // Higher threshold on mobile (30% vs 20%)
  };
  
  console.log('Observer options:', observerOptions);
  console.log('Mobile device (no reverse animations):', isMobileDevice);

  const overviewObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && svgAnimationComplete) {
        entry.target.classList.add('animate');
      } else if (!isMobileDevice) {
        // Only apply reverse animation on desktop
        entry.target.classList.remove('animate');
      }
    });
  }, observerOptions);

  const overviewContent = document.querySelector('.landing-overview__content');
  if (overviewContent) {
    overviewContent.classList.add('fade-in');
    overviewObserver.observe(overviewContent);
  }

  const valuesHeaderObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else if (!isMobileDevice) {
        // Only apply reverse animation on desktop
        entry.target.classList.remove('animate');
      }
    });
  }, observerOptions);

  const valuesHeader = document.querySelector('.landing-values__header');
  if (valuesHeader) {
    valuesHeader.classList.add('fade-in');
    valuesHeaderObserver.observe(valuesHeader);
  }

  // Special observer options for values section on mobile
  const valuesObserverOptions = {
    root: null,
    rootMargin: isMobileView ? '-100px 0px' : '0px', // Wait until element is 100px into viewport on mobile
    threshold: isMobileView ? 0.4 : 0.2 // Require 40% visible on mobile vs 20% on desktop
  };
  
  const valuesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Values animation triggered - intersectionRatio:', entry.intersectionRatio);
        const valueItems = document.querySelectorAll('.landing-values__item');
        
        const pairs = [
          [valueItems[0], valueItems[3]],
          [valueItems[1], valueItems[4]],
          [valueItems[2], valueItems[5]]
        ];

        pairs.forEach((pair, pairIndex) => {
          setTimeout(() => {
            pair.forEach((item) => {
              if (item) {
                const title = item.querySelector('.landing-values__item-title');
                const description = item.querySelector('.landing-values__item-description');
                
                if (title) {
                  title.style.opacity = '1';
                  title.style.transform = 'translateY(0)';
                }
                
                if (description) {
                  setTimeout(() => {
                    description.style.opacity = '1';
                    description.style.transform = 'translateY(0)';
                  }, 150);
                }
              }
            });
          }, pairIndex * 300);
        });
      } else if (!isMobileDevice) {
        // Only apply reverse animation on desktop
        const valueItems = document.querySelectorAll('.landing-values__item');
        const pairs = [
          [valueItems[0], valueItems[3]],
          [valueItems[1], valueItems[4]],
          [valueItems[2], valueItems[5]]
        ];
        
        pairs.reverse().forEach((pair, pairIndex) => {
          setTimeout(() => {
            pair.forEach((item) => {
              if (item) {
                const title = item.querySelector('.landing-values__item-title');
                const description = item.querySelector('.landing-values__item-description');
                
                if (description) {
                  description.style.opacity = '0';
                  description.style.transform = 'translateY(40px)';
                }
                
                if (title) {
                  setTimeout(() => {
                    title.style.opacity = '0';
                    title.style.transform = 'translateY(40px)';
                  }, 150);
                }
              }
            });
          }, pairIndex * 200);
        });
      }
    });
  }, valuesObserverOptions);

  // Observe different elements on mobile vs desktop for better trigger timing
  const valuesGraphic = document.querySelector('.landing-values__graphic');
  const valuesItems = document.querySelector('.landing-values__items');
  const valuesObserveTarget = (isMobileView && valuesItems) ? valuesItems : valuesGraphic;
  
  if (valuesObserveTarget) {
    const valueItems = document.querySelectorAll('.landing-values__item-title, .landing-values__item-description');
    valueItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(40px)';
      item.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });
    
    console.log('Observing values section on:', valuesObserveTarget.className);
    valuesObserver.observe(valuesObserveTarget);
  }

  const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else if (!isMobileDevice) {
        // Only apply reverse animation on desktop
        entry.target.classList.remove('animate');
      }
    });
  }, observerOptions);
  
  const projectsContent = document.querySelector('.landing-projects__content');
  if (projectsContent) {
    projectsContent.classList.add('fade-in');
    projectsObserver.observe(projectsContent);
  }

  const buildingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const buildingImg = document.querySelector('.building');
      if (buildingImg) {
        if (entry.isIntersecting) {
          buildingImg.style.bottom = '0';
        } else if (!isMobileDevice) {
          // Only apply reverse animation on desktop
          buildingImg.style.bottom = '-50vw';
        }
      }
    });
  }, observerOptions);
  
  const buildingTrigger = document.querySelector('.landing-projects');
  if (buildingTrigger) {
    buildingObserver.observe(buildingTrigger);
  }

  const nriObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const nriContent = entry.target.querySelector('.landing-nri__info');
        const nriFeatures = entry.target.querySelectorAll('.landing-nri__feature');
        const nriImage = entry.target.querySelector('.landing-nri__image');
        
        if (nriImage) {
          nriImage.style.opacity = '1';
          nriImage.style.transform = 'translateX(0)';
        }
        
        if (nriContent) {
          setTimeout(() => {
            nriContent.style.opacity = '1';
            nriContent.style.transform = 'translateY(0)';
          }, 200);
        }
        
        nriFeatures.forEach((feature, index) => {
          setTimeout(() => {
            feature.style.opacity = '1';
            feature.style.transform = 'translateX(0)';
          }, 500 + (index * 150));
        });
      } else if (!isMobileDevice) {
        // Only apply reverse animation on desktop
        const nriContent = entry.target.querySelector('.landing-nri__info');
        const nriFeatures = entry.target.querySelectorAll('.landing-nri__feature');
        const nriImage = entry.target.querySelector('.landing-nri__image');
        
        Array.from(nriFeatures).reverse().forEach((feature, index) => {
          setTimeout(() => {
            feature.style.opacity = '0';
            feature.style.transform = 'translateX(-30px)';
          }, index * 100);
        });
        
        if (nriContent) {
          setTimeout(() => {
            nriContent.style.opacity = '0';
            nriContent.style.transform = 'translateY(40px)';
          }, nriFeatures.length * 100);
        }
        
        if (nriImage) {
          setTimeout(() => {
            nriImage.style.opacity = '0';
            nriImage.style.transform = 'translateX(100px)';
          }, nriFeatures.length * 100 + 150);
        }
      }
    });
  }, observerOptions);

  const nriSection = document.querySelector('.landing-nri');
  if (nriSection) {
    const nriInfo = nriSection.querySelector('.landing-nri__info');
    const nriFeatures = nriSection.querySelectorAll('.landing-nri__feature');
    const nriImage = nriSection.querySelector('.landing-nri__image');
    
    if (nriImage) {
      nriImage.style.opacity = '0';
      nriImage.style.transform = 'translateX(100px)';
      nriImage.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    }
    
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

  const awardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const header = entry.target.querySelector('.landing-awards__header');
        const items = entry.target.querySelectorAll('.landing-awards__item');
        
        if (header) {
          header.style.opacity = '1';
          header.style.transform = 'translateY(0)';
        }
        
        items.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 400 + (index * 150));
        });
      } else if (!isMobileDevice) {
        // Only apply reverse animation on desktop
        const header = entry.target.querySelector('.landing-awards__header');
        const items = entry.target.querySelectorAll('.landing-awards__item');
        
        Array.from(items).reverse().forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(40px)';
          }, index * 100);
        });
        
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

  const testimonialsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const header = entry.target.querySelector('.landing-testimonials__header');
        const content = entry.target.querySelector('.landing-testimonials__content');
        
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
      } else if (!isMobileDevice) {
        // Only apply reverse animation on desktop
        const header = entry.target.querySelector('.landing-testimonials__header');
        const content = entry.target.querySelector('.landing-testimonials__content');
        
        if (content) {
          content.style.opacity = '0';
          content.style.transform = 'translateX(100px)';
        }
        
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

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else if (!isMobileDevice) {
        // Only apply reverse animation on desktop
        entry.target.classList.remove('animate');
      }
    });
  }, observerOptions);
  
  const footerContent = document.querySelector('.landing-footer__content');
  if (footerContent) {
    footerContent.classList.add('fade-in');
    footerObserver.observe(footerContent);
  }

  const textAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      } else if (!isMobileDevice) {
        // Only apply reverse animation on desktop
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(40px)';
      }
    });
  }, observerOptions);

  const textRTLAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      } else if (!isMobileDevice) {
        // Only apply reverse animation on desktop
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateX(100px)';
      }
    });
  }, observerOptions);

  const animateTextElements = document.querySelectorAll('.animate-text');
  animateTextElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    
    textAnimationObserver.observe(element);
  });

  const animateTextRTLElements = document.querySelectorAll('.animate-text-rtl');
  animateTextRTLElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateX(100px)';
    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    
    textRTLAnimationObserver.observe(element);
  });
}

const prevBtn = document.querySelector('.landing-testimonials__nav-btn--prev');
const nextBtn = document.querySelector('.landing-testimonials__nav-btn--next');

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    console.log('Previous testimonial');
  });

  nextBtn.addEventListener('click', () => {
    console.log('Next testimonial');
  });
}

console.log('Landing page animations initialized');