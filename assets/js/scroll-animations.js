// ===========================================
// SCROLL ANIMATIONS FOR HOMEPAGE 2
// ===========================================

class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    // Create Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px', // Trigger 100px before element comes into view
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'visible' class when element enters viewport
          entry.target.classList.add('visible');
          
          // Unobserve after animation to prevent re-triggering
          this.observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all elements to animate
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    // Set initial state and observe each element
    elementsToAnimate.forEach(element => {
      // Add initial animation class
      element.classList.add('scroll-animate');
      
      // Start observing
      this.observer.observe(element);
    });

    // Animate children of sections
    this.animateChildren();
  }

  animateChildren() {
    // Specific sections to animate children
    const sections = [
      '.overview-2__content',
      '.values-2',
      '.projects-2__content',
      '.nri-desk-2__content',
      '.awards-2',
      '.testimonials-2'
    ];

    sections.forEach(selector => {
      const section = document.querySelector(selector);
      if (!section) return;

      // Get all children to animate
      const children = section.querySelectorAll(
        '.overview-2__header, .overview-2__text, .btn,' +
        '.values-2__header, .values-2__diagram,' +
        '.projects-2__header, .projects-2__text, .projects-2__buttons,' +
        '.nri-desk-2__main, .nri-desk-2__features,' +
        '.awards-2__header, .awards-2__list,' +
        '.testimonials-2__header, .testimonials-2__slider'
      );

      children.forEach((child, index) => {
        // Add staggered delay
        child.style.transitionDelay = `${index * 0.1}s`;
        child.classList.add('scroll-animate-child');
      });
    });

    // Create observer for child elements
    const childObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          childObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    // Observe all child elements
    document.querySelectorAll('.scroll-animate-child').forEach(child => {
      childObserver.observe(child);
    });
  }
}

// Initialize scroll animations
new ScrollAnimations();

