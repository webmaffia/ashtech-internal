// ===========================================
// NRI PAGE - Animations
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

  // Animate feature cards with stagger
  function animateFeatureCards() {
    const featureCards = document.querySelectorAll('.nri-page__feature-card');
    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 150);
        }
      });
    }, observerOptions);

    featureCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(60px)';
      card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      cardsObserver.observe(card);
    });
  }

  // Animate benefit items with stagger
  function animateBenefitItems() {
    const benefitItems = document.querySelectorAll('.nri-page__benefit-item');
    const itemsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }, index * 200);
        }
      });
    }, observerOptions);

    benefitItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-40px)';
      item.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      itemsObserver.observe(item);
    });
  }

  // Animate icons within feature cards
  function animateFeatureIcons() {
    const featureIcons = document.querySelectorAll('.nri-page__feature-icon');
    const iconsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
          }, index * 150 + 100);
        }
      });
    }, observerOptions);

    featureIcons.forEach(icon => {
      icon.style.opacity = '0';
      icon.style.transform = 'translateY(30px) scale(0.8)';
      icon.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      iconsObserver.observe(icon);
    });
  }

  // Animate CTA section
  function animateCTASection() {
    const ctaSection = document.querySelector('.nri-page__cta');
    if (!ctaSection) return;

    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const title = entry.target.querySelector('.nri-page__cta-title');
          const text = entry.target.querySelector('.nri-page__cta-text');
          const buttons = entry.target.querySelectorAll('.nri-page__cta-buttons .btn');

          if (title) {
            setTimeout(() => {
              title.style.opacity = '1';
              title.style.transform = 'translateY(0)';
            }, 100);
          }

          if (text) {
            setTimeout(() => {
              text.style.opacity = '1';
              text.style.transform = 'translateY(0)';
            }, 300);
          }

          buttons.forEach((button, index) => {
            setTimeout(() => {
              button.style.opacity = '1';
              button.style.transform = 'translateY(0)';
            }, 500 + (index * 150));
          });
        }
      });
    }, observerOptions);

    const title = ctaSection.querySelector('.nri-page__cta-title');
    const text = ctaSection.querySelector('.nri-page__cta-text');
    const buttons = ctaSection.querySelectorAll('.nri-page__cta-buttons .btn');

    if (title) {
      title.style.opacity = '0';
      title.style.transform = 'translateY(40px)';
      title.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    }

    if (text) {
      text.style.opacity = '0';
      text.style.transform = 'translateY(40px)';
      text.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    }

    buttons.forEach(button => {
      button.style.opacity = '0';
      button.style.transform = 'translateY(40px)';
      button.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });

    ctaObserver.observe(ctaSection);
  }

  // Animate intro image
  function animateIntroImage() {
    const introImage = document.querySelector('.nri-page__intro-image');
    if (!introImage) return;

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }
      });
    }, observerOptions);

    introImage.style.opacity = '0';
    introImage.style.transform = 'translateX(50px)';
    introImage.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    imageObserver.observe(introImage);
  }

  // Initialize all animations when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    animateFeatureCards();
    animateBenefitItems();
    animateFeatureIcons();
    animateCTASection();
    animateIntroImage();
  });

  // Re-initialize on window load to ensure all elements are ready
  window.addEventListener('load', () => {
    // Trigger a scroll event to check if elements are already in viewport
    window.dispatchEvent(new Event('scroll'));
  });
}

console.log('NRI page animations initialized');

$(function(){
  const $cards = $('.nri-testimonials__cards');

  // Generate dots
  const slideCount = $('.nri-testimonials__cards .tm-item').length;
  const $dotsContainer = $('.nri-testimonials__dots');
  for (let i = 0; i < slideCount; i++) {
    $dotsContainer.append('<span class="nri-testimonials__dot"></span>');
  }

  $cards.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    variableWidth: false,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  const $dots = $('.nri-testimonials__dot');

  // Initially activate first dot
  $dots.removeClass('active').eq(0).addClass('active');

  // Dot click → go to slide (modulo safe)
  $dots.each(function(i){
      $(this).on('click', function(){
          $cards.slick('slickGoTo', i);
          $cards.slick('slickPlay');
      });
  });

  // After slide change (IMPORTANT: modulo fixes infinite loop)
  $cards.on('afterChange', function(event, slick, current){
      const realIndex = current % slideCount; // <-- THIS FIXES LOOP
      $dots.removeClass('active').eq(realIndex).addClass('active');
      $cards.slick('slickPlay');
  });

});


