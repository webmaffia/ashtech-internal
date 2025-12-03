/**
 * Testimonials Slider Initialization
 * Initializes Slick slider for testimonials blocks
 */

(function($) {
    'use strict';

    function initTestimonialsSlider() {
        var $sliders = $('.landing-testimonials__slider');
        
        if ($sliders.length === 0) {
            return;
        }

        $sliders.each(function() {
            var $slider = $(this);
            
            // Skip if already initialized
            if ($slider.hasClass('slick-initialized')) {
                return;
            }

            // Initialize Slick slider
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

            // Custom navigation buttons
            var $container = $slider.closest('.landing-testimonials__container');
            
            $container.find('.landing-testimonials__nav-btn--prev').on('click', function(e) {
                e.preventDefault();
                $slider.slick('slickPrev');
            });

            $container.find('.landing-testimonials__nav-btn--next').on('click', function(e) {
                e.preventDefault();
                $slider.slick('slickNext');
            });
        });
    }

    // Initialize on DOM ready
    $(document).ready(function() {
        // Check if jQuery and Slick are loaded
        if (typeof $.fn.slick !== 'undefined') {
            initTestimonialsSlider();
        } else {
            console.error('Slick Slider not loaded. Please ensure slick.js is enqueued.');
        }
    });

    // Re-initialize after Gutenberg block updates (for editor preview)
    if (typeof wp !== 'undefined' && wp.domReady) {
        wp.domReady(function() {
            initTestimonialsSlider();
        });
    }

    // For AJAX-loaded content
    $(document).on('ajaxComplete', function() {
        initTestimonialsSlider();
    });

})(jQuery);

