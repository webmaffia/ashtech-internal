(function() {
  'use strict';

  function initHomeTestimonialsSlider() {
    if (typeof jQuery === 'undefined' || typeof jQuery.fn.slick === 'undefined') {
      console.log('jQuery or Slick not loaded yet, retrying...');
      setTimeout(initHomeTestimonialsSlider, 100);
      return;
    }

    var $slider = jQuery('.landing-testimonials__slider');
    
    if ($slider.length > 0) {
      // Destroy existing slider if initialized
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }

      $slider.slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'ease-in-out',
        arrows: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        adaptiveHeight: false
      });
      
      console.log('Home page testimonials slider initialized successfully');

      // Custom navigation buttons
      jQuery('.landing-testimonials__nav-btn--prev').off('click').on('click', function(){
        $slider.slick('slickPrev');
      });

      jQuery('.landing-testimonials__nav-btn--next').off('click').on('click', function(){
        $slider.slick('slickNext');
      });
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(initHomeTestimonialsSlider, 500);
    });
  } else {
    setTimeout(initHomeTestimonialsSlider, 500);
  }

  // Re-initialize on window load (in case content loads dynamically)
  window.addEventListener('load', function() {
    setTimeout(initHomeTestimonialsSlider, 500);
  });
})();

