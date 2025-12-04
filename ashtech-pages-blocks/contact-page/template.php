<?php
/**
 * Contact Page Block Template - COMPLETE HTML
 */
if (!defined('ABSPATH')) exit;
$assets_url = ASHTECH_BLOCKS_URL . 'assets/';
?>

<!-- Hero Banner Section -->
<section class="project-hero contactbg">
    <div class="project-hero__overlay"></div>
    <div class="project-hero__content">
        <h1 class="project-hero__title"><?php echo wp_kses_post($heroTitle); ?></h1>
        <div class="project-hero__subtitle">
            <p class="project-hero__subtitle-main"><?php echo wp_kses_post($heroSubtitle); ?></p>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section class="contact-enquiry">
    <div class="contact-enquiry__background"></div>
    <div class="contact-enquiry__container">
        <div class="contact-enquiry__header">
            <h2 class="contact-enquiry__title">Enquiry Directory</h2>
            <p class="contact-enquiry__subtitle">Connect With Ashtech</p>
        </div>
        
        <div class="contact-enquiry__content">
            <div class="contact-enquiry__row">
                <div class="contact-enquiry__card">
                    <h3 class="contact-enquiry__card-title">Sales Enquiry</h3>
                    <div class="contact-enquiry__details">
                        <div class="contact-enquiry__detail-item">
                            <div class="contact-enquiry__icon">
                                <img src="<?php echo esc_url($assets_url); ?>images/contact/icon-phone.svg" alt="Phone">
                            </div>
                            <a href="tel:<?php echo esc_attr(preg_replace('/\s+/', '', $salesPhone)); ?>" class="contact-enquiry__text"><?php echo esc_html($salesPhone); ?></a>
                        </div>
                        <div class="contact-enquiry__detail-item contact-enquiry__detail-item--email">
                            <div class="contact-enquiry__icon">
                                <img src="<?php echo esc_url($assets_url); ?>images/contact/icon-email.svg" alt="Email">
                            </div>
                            <a href="mailto:<?php echo esc_attr($salesEmail); ?>" class="contact-enquiry__text"><?php echo esc_html($salesEmail); ?></a>
                        </div>
                    </div>
                </div>
                
                <div class="contact-enquiry__card">
                    <h3 class="contact-enquiry__card-title">Customer Enquiry</h3>
                    <div class="contact-enquiry__details">
                        <div class="contact-enquiry__detail-item">
                            <div class="contact-enquiry__icon">
                                <img src="<?php echo esc_url($assets_url); ?>images/contact/icon-phone.svg" alt="Phone">
                            </div>
                            <a href="tel:9278333333" class="contact-enquiry__text">9278 333 333</a>
                        </div>
                        <div class="contact-enquiry__detail-item contact-enquiry__detail-item--email">
                            <div class="contact-enquiry__icon">
                                <img src="<?php echo esc_url($assets_url); ?>images/contact/icon-email.svg" alt="Email">
                            </div>
                            <a href="mailto:care@ashtechgroup.in" class="contact-enquiry__text">care@ashtechgroup.in</a>
                        </div>
                    </div>
                </div>
                
                <div class="contact-enquiry__card">
                    <h3 class="contact-enquiry__card-title">Investor Relations</h3>
                    <div class="contact-enquiry__details">
                        <div class="contact-enquiry__detail-item">
                            <div class="contact-enquiry__icon">
                                <img src="<?php echo esc_url($assets_url); ?>images/contact/icon-phone.svg" alt="Phone">
                            </div>
                            <a href="tel:9278333333" class="contact-enquiry__text">9278 333 333</a>
                        </div>
                        <div class="contact-enquiry__detail-item contact-enquiry__detail-item--email">
                            <div class="contact-enquiry__icon">
                                <img src="<?php echo esc_url($assets_url); ?>images/contact/icon-email.svg" alt="Email">
                            </div>
                            <a href="mailto:care@ashtechgroup.in" class="contact-enquiry__text">care@ashtechgroup.in</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="contact-enquiry__row contact-enquiry__row--center">
                <div class="contact-enquiry__card">
                    <h3 class="contact-enquiry__card-title">Career Enquiry</h3>
                    <div class="contact-enquiry__details">
                        <div class="contact-enquiry__detail-item contact-enquiry__detail-item--email">
                            <div class="contact-enquiry__icon">
                                <img src="<?php echo esc_url($assets_url); ?>images/contact/icon-email.svg" alt="Email">
                            </div>
                            <a href="mailto:care@ashtechgroup.in" class="contact-enquiry__text">care@ashtechgroup.in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Office Addresses Section -->
<section class="contact-offices">
    <div class="contact-offices__container">
        <div class="contact-offices__header">
            <h2 class="contact-offices__title">Office Addresses</h2>
        </div>
        
        <div class="contact-offices__content">
            <!-- Corporate Office -->
            <div class="contact-offices__card">
                <div class="contact-offices__image">
                    <?php if (!empty($imageUrl)) : ?>
                        <img src="<?php echo esc_url($imageUrl); ?>" alt="Ashtech Corporate Office">
                    <?php else : ?>
                        <img src="<?php echo esc_url($assets_url); ?>images/contact/office-corporate.jpg" alt="Ashtech Corporate Office">
                    <?php endif; ?>
                </div>
                <div class="contact-offices__info">
                    <h3 class="contact-offices__card-title">Ashtech Corporate Office</h3>
                    <div class="contact-offices__details">
                        <div class="contact-offices__detail-item">
                            <div class="contact-offices__icon">
                                <img src="<?php echo esc_url($assets_url); ?>images/contact/icon-location.svg" alt="Location">
                            </div>
                            <div class="contact-offices__text-wrapper">
                                <p class="contact-offices__text"><?php echo wp_kses_post($corporateAddress); ?></p>
                            </div>
                        </div>
                        <div class="contact-offices__detail-item">
                            <div class="contact-offices__icon">
                                <img src="<?php echo esc_url($assets_url); ?>images/contact/icon-phone-office.svg" alt="Phone">
                            </div>
                            <div class="contact-offices__text-wrapper">
                                <a href="tel:<?php echo esc_attr(preg_replace('/\s+/', '', $corporatePhone)); ?>" class="contact-offices__text"><?php echo esc_html($corporatePhone); ?></a>
                            </div>
                        </div>
                        <div class="contact-offices__detail-item">
                            <div class="contact-offices__icon">
                                <img src="<?php echo esc_url($assets_url); ?>images/contact/icon-email-office.svg" alt="Email">
                            </div>
                            <div class="contact-offices__text-wrapper">
                                <a href="mailto:<?php echo esc_attr($corporateEmail); ?>" class="contact-offices__text"><?php echo esc_html($corporateEmail); ?></a>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn--primary contact-offices__button">
                        <span>Get Directions</span>
                        <div class="btn__icon">
                            <img src="<?php echo esc_url($assets_url); ?>images/contact/icon-arrow.svg" alt="Arrow">
                        </div>
                    </button>
                </div>
            </div>
            
            <!-- Site Office -->
            <div class="contact-offices__card">
                <div class="contact-offices__image contact-offices__image--site">
                    <img src="<?php echo esc_url($assets_url); ?>images/contact/office-site.jpg" alt="Ashtech Site Office">
                </div>
                <div class="contact-offices__info">
                    <h3 class="contact-offices__card-title">Ashtech Site Office</h3>
                    <div class="contact-offices__details">
                        <div class="contact-offices__detail-item">
                            <div class="contact-offices__icon">
                                <img src="<?php echo esc_url($assets_url); ?>images/contact/icon-location.svg" alt="Location">
                            </div>
                            <div class="contact-offices__text-wrapper">
                                <p class="contact-offices__text">GH-01/F, G, H & I, Sector 12, Greater Noida west, Uttar Pradesh, India, Pin: 201318</p>
                            </div>
                        </div>
                        <div class="contact-offices__detail-item">
                            <div class="contact-offices__icon">
                                <img src="<?php echo esc_url($assets_url); ?>images/contact/icon-email-office.svg" alt="Email">
                            </div>
                            <div class="contact-offices__text-wrapper">
                                <a href="mailto:care@ashtechgroup.in" class="contact-offices__text">care@ashtechgroup.in</a>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn--primary contact-offices__button">
                        <span>Get Directions</span>
                        <div class="btn__icon">
                            <img src="<?php echo esc_url($assets_url); ?>images/contact/icon-arrow.svg" alt="Arrow">
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Form Section -->
<section class="contact-form">
    <div class="contact-form__container">
        <div class="contact-form__header">
            <h2 class="contact-form__title">Let's get in touch</h2>
            <p class="contact-form__subtitle">Please share your details, and our team will be in touch with you at the earliest.</p>
        </div>
        
        <form class="contact-form__form" id="contactForm">
            <div class="contact-form__fields">
                <div class="contact-form__field">
                    <input type="text" id="name" name="name" class="contact-form__input" placeholder="Your Name" required>
                </div>
                
                <div class="contact-form__field">
                    <input type="email" id="email" name="email" class="contact-form__input" placeholder="Email" required>
                </div>
                
                <div class="contact-form__field-group">
                    <div class="contact-form__field contact-form__field--country">
                        <input type="text" id="countryCode" name="countryCode" class="contact-form__input" value="+91 (India)" readonly>
                    </div>
                    <div class="contact-form__field contact-form__field--phone">
                        <input type="tel" id="phone" name="phone" class="contact-form__input" placeholder="Your Phone Number" required>
                    </div>
                </div>
                
                <div class="contact-form__field">
                    <input type="text" id="city" name="city" class="contact-form__input" placeholder="Enter Your City" required>
                </div>
                
                <div class="contact-form__field">
                    <input type="text" id="project" name="project" class="contact-form__input" placeholder="Enter Project Name" required>
                </div>
                
                <div class="contact-form__field">
                    <textarea id="queries" name="queries" class="contact-form__textarea" placeholder="Any Queries For Us" rows="4"></textarea>
                </div>
            </div>
            
            <button type="submit" class="btn btn--primary contact-form__submit">
                <span>Submit</span>
                <div class="btn__icon">
                    <img src="<?php echo esc_url($assets_url); ?>images/contact/icon-arrow-submit.svg" alt="Arrow">
                </div>
            </button>
        </form>
    </div>
</section>

<script src="<?php echo esc_url($assets_url); ?>js/main.js"></script>
<script src="<?php echo esc_url($assets_url); ?>js/project.js"></script>
