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

// ===========================================
// CAREER PAGE - Apply Now Button Functionality
// ===========================================

/**
 * Handle "Apply Now" button clicks
 * Scrolls to career form and auto-fills position field
 */
function handleApplyNowButtons() {
  // Get all "Apply Now" buttons
  const applyButtons = document.querySelectorAll('.apply-now-btn');
  
  applyButtons.forEach(function(button) {
    // Remove existing event listener to avoid duplicates
    button.removeEventListener('click', handleApplyClick);
    // Add event listener
    button.addEventListener('click', handleApplyClick);
  });
}

/**
 * Handle click event on Apply Now button
 */
function handleApplyClick(e) {
  e.preventDefault();
  
  // Get job title from data attribute
  const jobTitle = this.getAttribute('data-job-title');
  
  if (!jobTitle) {
    console.warn('No job title found for Apply Now button');
    return;
  }
  
  // Get the career form section
  const formSection = document.getElementById('careerFormSection');
  const positionField = document.getElementById('position');
  
  if (!formSection) {
    console.warn('Career form section not found');
    return;
  }
  
  if (!positionField) {
    console.warn('Position field not found');
    return;
  }
  
  // Auto-fill position field with job title
  positionField.value = jobTitle;
  
  // Smooth scroll to form section
  formSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
  
  // Optional: Add a small delay and focus the first input field
  setTimeout(function() {
    const firstInput = formSection.querySelector('input[type="text"]:not([readonly])');
    if (firstInput) {
      firstInput.focus();
    }
  }, 500);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', handleApplyNowButtons);
} else {
  // DOM is already loaded
  handleApplyNowButtons();
}

// Also re-initialize on window load for dynamically loaded content
window.addEventListener('load', function() {
  handleApplyNowButtons();
});


