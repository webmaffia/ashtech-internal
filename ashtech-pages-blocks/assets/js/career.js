(function() {
  'use strict';

  // ===========================================
  // CAREER PAGE - Animations
  // ===========================================

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    // Observer options
    var observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    // Bottom to top animation observer
    var bottomToTopObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Initialize all animate-text elements
    var animateTextElements = document.querySelectorAll('.animate-text');
    animateTextElements.forEach(function(element) {
      element.style.opacity = '0';
      element.style.transform = 'translateY(40px)';
      element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      bottomToTopObserver.observe(element);
    });

    // Animate career cards with stagger
    function animateCareerCards() {
      var careerCards = document.querySelectorAll('.career-why__card');
      var cardsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
          if (entry.isIntersecting) {
            setTimeout(function() {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, index * 200);
          }
        });
      }, observerOptions);

      careerCards.forEach(function(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(60px)';
        card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        cardsObserver.observe(card);
      });
    }

    // Animate job cards with stagger
    function animateJobCards() {
      var jobCards = document.querySelectorAll('.job-card');
      var cardsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
          if (entry.isIntersecting) {
            setTimeout(function() {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateX(0)';
            }, index * 150);
          }
        });
      }, observerOptions);

      jobCards.forEach(function(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-40px)';
        card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        cardsObserver.observe(card);
      });
    }

    // Animate life section boxes
    function animateLifeBoxes() {
      var textBoxes = document.querySelectorAll('.career-life__text-box');
      var boxesObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
          if (entry.isIntersecting) {
            setTimeout(function() {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, index * 200);
          }
        });
      }, observerOptions);

      textBoxes.forEach(function(box) {
        box.style.opacity = '0';
        box.style.transform = 'translateY(30px)';
        box.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        boxesObserver.observe(box);
      });
    }

    // Initialize all animations when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
      animateCareerCards();
      animateJobCards();
      animateLifeBoxes();
    });

    // Re-initialize on window load to ensure all elements are ready
    window.addEventListener('load', function() {
      // Trigger a scroll event to check if elements are already in viewport
      window.dispatchEvent(new Event('scroll'));
    });
  }

  // ===========================================
  // CAREER PAGE - Apply Now Button Functionality
  // ===========================================

  // Simple event delegation - works immediately and always
  document.addEventListener('click', function(e) {
    // Check if clicked element or its parent is an Apply Now button
    var button = e.target;
    while (button && button !== document) {
      if (button.classList && button.classList.contains('apply-now-btn')) {
        e.preventDefault();
        e.stopPropagation();
        
        // Get job title from data attribute
        var jobTitle = button.getAttribute('data-job-title');
        
        // Fallback: get from job card title
        if (!jobTitle) {
          var jobCard = button.closest('.job-card');
          if (jobCard) {
            var titleEl = jobCard.querySelector('.job-card__title');
            if (titleEl) {
              jobTitle = titleEl.textContent.trim();
            }
          }
        }
        
        if (!jobTitle) {
          console.error('No job title found');
          return;
        }
        
        // Get form section and position field
        var formSection = document.getElementById('careerFormSection');
        var positionField = document.getElementById('position');
        
        if (!formSection || !positionField) {
          console.error('Form section or position field not found');
          return;
        }
        
        // Auto-fill position field
        positionField.value = jobTitle;
        
        // Scroll to form
        var offset = 100;
        var formTop = formSection.getBoundingClientRect().top;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        window.scrollTo({
          top: formTop + scrollTop - offset,
          behavior: 'smooth'
        });
        
        // Focus first input after scroll
        setTimeout(function() {
          var firstInput = formSection.querySelector('input[type="text"]:not([readonly])');
          if (firstInput) firstInput.focus();
        }, 700);
        
        return;
      }
      button = button.parentElement;
    }
  });

})();
