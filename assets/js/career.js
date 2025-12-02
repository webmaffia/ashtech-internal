// ===========================================
// CAREER PAGE - Animations
// ===========================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // Observer options
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  // Bottom to top animation observer
  const bottomToTopObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Initialize all animate-text elements
  const animateTextElements = document.querySelectorAll('.animate-text');
  animateTextElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    bottomToTopObserver.observe(element);
  });

  // Animate career cards with stagger
  function animateCareerCards() {
    const careerCards = document.querySelectorAll('.career-why__card');
    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 200);
        }
      });
    }, observerOptions);

    careerCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(60px)';
      card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      cardsObserver.observe(card);
    });
  }

  // Animate job cards with stagger
  function animateJobCards() {
    const jobCards = document.querySelectorAll('.job-card');
    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }, index * 150);
        }
      });
    }, observerOptions);

    jobCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateX(-40px)';
      card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      cardsObserver.observe(card);
    });
  }

  // Animate life section boxes
  function animateLifeBoxes() {
    const textBoxes = document.querySelectorAll('.career-life__text-box');
    const boxesObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 200);
        }
      });
    }, observerOptions);

    textBoxes.forEach(box => {
      box.style.opacity = '0';
      box.style.transform = 'translateY(30px)';
      box.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      boxesObserver.observe(box);
    });
  }

  // Initialize all animations when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    animateCareerCards();
    animateJobCards();
    animateLifeBoxes();
  });

  // Re-initialize on window load to ensure all elements are ready
  window.addEventListener('load', () => {
    // Trigger a scroll event to check if elements are already in viewport
    window.dispatchEvent(new Event('scroll'));
  });
}

console.log('Career page animations initialized');


