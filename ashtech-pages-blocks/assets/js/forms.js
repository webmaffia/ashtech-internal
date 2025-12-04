/**
 * Ashtech Forms Handler
 * Handles Contact and Career form submissions
 */

(function($) {
    'use strict';

    /**
     * Contact Form Handler
     */
    function handleContactForm() {
        $('#contactForm').on('submit', function(e) {
            e.preventDefault();
            
            var $form = $(this);
            var $submitBtn = $form.find('button[type="submit"]');
            var originalBtnText = $submitBtn.find('span').text();
            
            // Disable submit button
            $submitBtn.prop('disabled', true);
            $submitBtn.find('span').text('Sending...');
            
            // Remove previous messages
            $('.form-message').remove();
            
            // Prepare form data
            var formData = {
                action: 'ashtech_contact_form',
                nonce: ashtechForms.nonce,
                name: $form.find('#name').val(),
                email: $form.find('#email').val(),
                phone: $form.find('#phone').val(),
                city: $form.find('#city').val(),
                project: $form.find('#project').val(),
                queries: $form.find('#queries').val()
            };
            
            // Send AJAX request
            $.ajax({
                url: ashtechForms.ajaxUrl,
                type: 'POST',
                data: formData,
                success: function(response) {
                    console.log('Contact Form Response:', response);
                    if (response.success) {
                        // Show success message
                        $form.before('<div class="form-message form-message--success">' + response.data.message + '</div>');
                        // Reset form
                        $form[0].reset();
                    } else {
                        // Show error message
                        $form.before('<div class="form-message form-message--error">' + response.data.message + '</div>');
                    }
                },
                error: function(xhr, status, error) {
                    console.error('Contact Form Error:', xhr.responseText);
                    $form.before('<div class="form-message form-message--error">An error occurred. Please try again.</div>');
                },
                complete: function() {
                    // Re-enable submit button
                    $submitBtn.prop('disabled', false);
                    $submitBtn.find('span').text(originalBtnText);
                    
                    // Scroll to message
                    $('html, body').animate({
                        scrollTop: $('.form-message').offset().top - 100
                    }, 500);
                    
                    // Remove message after 5 seconds
                    setTimeout(function() {
                        $('.form-message').fadeOut(function() {
                            $(this).remove();
                        });
                    }, 5000);
                }
            });
        });
    }

    /**
     * Career Form Handler
     */
    function handleCareerForm() {
        $('#careerForm, .career-form__form').on('submit', function(e) {
            e.preventDefault();
            
            var $form = $(this);
            var $submitBtn = $form.find('button[type="submit"]');
            var originalBtnText = $submitBtn.find('span').text();
            
            // Disable submit button
            $submitBtn.prop('disabled', true);
            $submitBtn.find('span').text('Submitting...');
            
            // Remove previous messages
            $('.form-message').remove();
            
            // Prepare form data with file upload
            var formData = new FormData();
            formData.append('action', 'ashtech_career_form');
            formData.append('nonce', ashtechForms.nonce);
            formData.append('name', $form.find('input[name="name"]').val());
            formData.append('email', $form.find('input[name="email"]').val());
            formData.append('phone', $form.find('input[name="phone"]').val());
            formData.append('position', $form.find('input[name="position"]').val());
            formData.append('coverLetter', $form.find('textarea[name="coverLetter"]').val());
            
            // Add resume file if present
            var resumeFile = $form.find('input[type="file"]')[0].files[0];
            if (resumeFile) {
                formData.append('resume', resumeFile);
            }
            
            // Send AJAX request
            $.ajax({
                url: ashtechForms.ajaxUrl,
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {
                    console.log('Career Form Response:', response);
                    if (response.success) {
                        // Show success message
                        $form.before('<div class="form-message form-message--success">' + response.data.message + '</div>');
                        // Reset form
                        $form[0].reset();
                    } else {
                        // Show error message
                        $form.before('<div class="form-message form-message--error">' + response.data.message + '</div>');
                    }
                },
                error: function(xhr, status, error) {
                    console.error('Career Form Error:', xhr.responseText);
                    $form.before('<div class="form-message form-message--error">An error occurred. Please try again.</div>');
                },
                complete: function() {
                    // Re-enable submit button
                    $submitBtn.prop('disabled', false);
                    $submitBtn.find('span').text(originalBtnText);
                    
                    // Scroll to message
                    $('html, body').animate({
                        scrollTop: $('.form-message').offset().top - 100
                    }, 500);
                    
                    // Remove message after 5 seconds
                    setTimeout(function() {
                        $('.form-message').fadeOut(function() {
                            $(this).remove();
                        });
                    }, 5000);
                }
            });
        });
    }

    /**
     * Initialize forms on document ready
     */
    $(document).ready(function() {
        // Check if forms exist before binding
        if ($('#contactForm').length) {
            handleContactForm();
        }
        
        if ($('#careerForm, .career-form__form').length) {
            handleCareerForm();
        }
    });

})(jQuery);

