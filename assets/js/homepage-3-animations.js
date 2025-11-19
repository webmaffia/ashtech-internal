// ===========================================
// HOMEPAGE 3 ANIMATIONS - CUSTOM REQUIREMENTS
// ===========================================

class Homepage3Animations {
  constructor() {
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    // 1️⃣ Banner fade-in on load
    this.initBannerFade();
    
    // 2️⃣ Overview fade-in with upward movement
    this.initOverviewAnimation();
    
    // 3️⃣ Values staggered animation
    this.initValuesAnimation();
    
    // 4️⃣ Projects bottom-up animation
    this.initProjectsAnimation();
    
    // 5️⃣ Awards bottom-up animation
    this.initAwardsAnimation();
    
    // Testimonials slide animation
    this.initTestimonialsAnimation();
  }

  // 1️⃣ Banner Fade Animation
  initBannerFade() {
    const banner = document.querySelector('.hero-3');
    if (banner) {
      setTimeout(() => {
        banner.classList.add('fade-in', 'animate');
      }, 100);
    }
  }

  // 2️⃣ Overview Animation
  initOverviewAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    });

    const overviewContent = document.querySelector('.overview-3__content');
    if (overviewContent) {
      observer.observe(overviewContent);
    }
  }

  // 3️⃣ Values Staggered Animation (Pairs: 0+3, 1+4, 2+5)
  initValuesAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateValuesPaired();
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    });

    const valuesSection = document.querySelector('.values-3');
    if (valuesSection) {
      observer.observe(valuesSection);
    }

    // Also animate header
    const valuesHeader = document.querySelector('.values-3__header');
    if (valuesHeader) {
      const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            headerObserver.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
      });
      
      headerObserver.observe(valuesHeader);
    }
  }

  animateValuesPaired() {
    const values = document.querySelectorAll('.animate-value');
    if (values.length === 0) return;

    // Pairs: [0, 3], [1, 4], [2, 5]
    const pairs = [
      [0, 3], // First pair
      [1, 4], // Second pair
      [2, 5]  // Third pair
    ];

    pairs.forEach((pair, pairIndex) => {
      setTimeout(() => {
        pair.forEach(index => {
          if (values[index]) {
            values[index].classList.add('is-visible');
          }
        });
      }, pairIndex * 300); // 300ms delay between pairs
    });
  }

  // 4️⃣ Projects Bottom-Up Animation
  initProjectsAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target;
          
          // Animate background image first
          const bg = section.querySelector('.projects-3__bg');
          if (bg) {
            bg.classList.add('is-visible');
          }
          
          // Animate content 150ms later
          setTimeout(() => {
            const content = section.querySelector('.projects-3__content');
            if (content) {
              content.classList.add('is-visible');
            }
          }, 150);
          
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    });

    const projectsSection = document.querySelector('.projects-3');
    if (projectsSection) {
      observer.observe(projectsSection);
    }
  }

  // 5️⃣ Awards Bottom-Up Animation
  initAwardsAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate header first
          const header = entry.target.querySelector('.awards-3__header');
          if (header) {
            header.classList.add('is-visible');
          }
          
          // Animate award items with stagger
          const items = entry.target.querySelectorAll('.awards-3__item');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('is-visible');
            }, 400 + (index * 150)); // Start after header, 150ms between each
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    });

    const awardsSection = document.querySelector('.awards-3');
    if (awardsSection) {
      observer.observe(awardsSection);
    }
  }

  // Testimonials Slide Animation
  initTestimonialsAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    });

    const testimonialHeader = document.querySelector('.testimonials-3__header');
    const testimonialSlider = document.querySelector('.testimonials-3__slider');
    
    if (testimonialHeader) observer.observe(testimonialHeader);
    if (testimonialSlider) observer.observe(testimonialSlider);
  }
}

// Initialize animations
new Homepage3Animations();
