<?php
/**
 * Resources Page Block Template - COMPLETE HTML from resources.html
 */
if (!defined('ABSPATH')) exit;
$assets_url = ASHTECH_BLOCKS_URL . 'assets/';
?>

<!-- Hero Banner Section -->
<section class="project-hero resourcesbg">
    <div class="project-hero__overlay"></div>
    <div class="project-hero__content">
        <h1 class="project-hero__title"><?php echo wp_kses_post($heroTitle); ?></h1>
    </div>
</section>

<!-- Tabs Section -->
<section class="resources-tabs">
    <div class="resources-tabs__container">
        <div class="resources-tabs__nav">
            <button class="resources-tabs__link" data-tab="highlights">Highlights</button>
            <button class="resources-tabs__link" data-tab="blogs">Blogs</button>
            <button class="resources-tabs__link" data-tab="video">Video Gallery</button>
            <button class="resources-tabs__link resources-tabs__link--active" data-tab="press">Press & Media</button>
        </div>
        <div class="resources-tabs__line"></div>
    </div>
</section>

<!-- Content Sections -->
<section class="resources-content">
    <!-- Press & Media Tab Content -->
    <div class="resources-content__tab resources-content__tab--active" data-content="press">
        <div class="resources-news__container">
            <!-- Featured News -->
            <div class="resources-news__featured">
                <h2 class="resources-news__title">News & Press Releases</h2>
                
                <div class="resources-news__featured-content">
                    <div class="resources-news__featured-text">
                        <p class="resources-news__date">November 17, 2025</p>
                        <h3 class="resources-news__featured-title">Ashtech Group enters real estate with ₹1,800-crore luxury project in Greater Noida</h3>
                        <div class="resources-news__featured-desc">
                            <p>Marking its entry into real estate development, Delhi-NCR–based Ashtech Group will invest about ₹1,800 crore to build a luxury housing project in Greater Noida. The project will come up on a fully paid 5.6-acre parcel the company recently acquired for roughly ₹300 crore.</p>
                            <p>Sumit Agarwal, Director of Ashtech Group, said the company has been in allied sectors such as fly ash bricks, AAC Blocks, Ready-mix concrete (RMC), Pre-Engineered Building, large-scale infrastructure, and power infrastructure, news agency PTI reported.</p>
                        </div>
                        <a href="https://torbitrealty.com/ashtech-group-enters-real-estate-with-1800-crore-luxury-project-in-greater-noida/" target="_blank" rel="noopener noreferrer" class="btn btn--primary downloadCta">
                            <span>Read More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                    <div class="resources-news__featured-image">
                        <img src="<?php echo esc_url($assets_url); ?>images/resources/featured-news.jpg" alt="Featured News">
                    </div>
                </div>
            </div>

            <!-- News Grid -->
            <div class="resources-news__grid">
                <!-- News Card 1 -->
                <article class="news-card">
                    <div class="news-card__image">
                        <img src="<?php echo esc_url($assets_url); ?>images/resources/news-1.jpg" alt="News">
                    </div>
                    <div class="news-card__content">
                        <p class="news-card__date">November 17, 2025</p>
                        <h3 class="news-card__title">Plot prices near Jewar airport rise five times: Is it good time..</h3>
                        <p class="news-card__desc">PM Narendra Modi is likely to inaugurate the first phase of the Noida International Airport, Jewar, in the third week..</p>
                        <a href="https://www.businesstoday.in/personal-finance/real-estate/story/yamuna-expressway-property-prices-is-it-a-good-time-to-buy-ahead-of-jewar-airport-inauguration-502399-2025-11-17" target="_blank" rel="noopener noreferrer" class="news-card__link">Read More</a>
                    </div>
                </article>

                <!-- News Card 2 -->
                <article class="news-card">
                    <div class="news-card__image">
                        <img src="<?php echo esc_url($assets_url); ?>images/resources/news-2.jpg" alt="News">
                    </div>
                    <div class="news-card__content">
                        <p class="news-card__date">November 13, 2025</p>
                        <h3 class="news-card__title">Ashtech Group enters real estate with ₹1,800-Cr luxury project..</h3>
                        <p class="news-card__desc">Ashtech Group, a well-known name in construction materials and infrastructure development, has offic..</p>
                        <a href="https://businessreviewlive.com/ashtech-group-enters-real-estate-with-%e2%82%b91800-cr-luxury-project-in-greater-noida/" target="_blank" rel="noopener noreferrer" class="news-card__link">Read More</a>
                    </div>
                </article>

                <!-- News Card 3 -->
                <article class="news-card">
                    <div class="news-card__image">
                        <img src="<?php echo esc_url($assets_url); ?>images/resources/news-3.jpg" alt="News">
                    </div>
                    <div class="news-card__content">
                        <p class="news-card__date">November 17, 2025</p>
                        <h3 class="news-card__title">Ashtech Group enters real estate; to invest Rs 1,800 cr on 1st..</h3>
                        <p class="news-card__desc">NEW DELHI: (Nov 13) Realty firm Ashtech Group, which is into construction materials and infrastructure developmel..</p>
                        <a href="https://www.ptinews.com/story/business/ashtech-group-enters-real-estate-to-invest-rs-1-800-cr-on-1st-greater-noida-project/3093862" target="_blank" rel="noopener noreferrer" class="news-card__link">Read More</a>
                    </div>
                </article>

                <!-- News Cards 4-9 with all images and links -->
                <?php
                $news_items = array(
                    array('img' => 'news-4.jpg', 'date' => 'November 13, 2025', 'title' => 'Ashtech Group enters real estate; to invest Rs 1,800 cr on 1st Gre..', 'desc' => 'Realty firm Ashtech Group, which is into construction materials and infrastructure development, has..', 'link' => 'https://m.economictimes.com/industry/services/property-/-cstruction/ashtech-group-enters-real-estate-to-invest-rs-1800-cr-on-1st-greater-noida-project/articleshow/125297696.cms'),
                    array('img' => 'news-5.jpg', 'date' => 'November 13, 2025', 'title' => 'Ashtech Group forays into real estate with ₹1,800 cr Greater N..', 'desc' => 'Realty firm Ashtech Group, which is into construction materials and infrastructure development, has ent..', 'link' => 'https://www.business-standard.com/companies/news/ashtech-group-forays-into-real-estate-with-1-800-cr-greater-noida-project-125111301356_1.html'),
                    array('img' => 'news-6.jpg', 'date' => 'November 13, 2025', 'title' => 'Ashtech Group Enters Realty with Rs.1,800 Cr Luxury Noida..', 'desc' => 'Ashtech Group, a leader in sustainable construction materials and infrastructure development, has anno..', 'link' => 'https://www.homesindiamagazine.com/news/ashtech-group-enters-realty-with-rs1800-cr-luxury-noida-project-nwid-5701.html'),
                    array('img' => 'news-7.jpg', 'date' => 'October 7, 2025', 'title' => 'Ashtech Group to Invest Rs 1,800 crore to develop Luxury..', 'desc' => 'Ashtech Group has announced its foray into the real estate sector with plans to invest Rs 1,800 crore to develop a lu..', 'link' => 'https://realtyninfra.in/ashtech-group-to-invest-rs-1800-crore-to-develop-luxury-housing-project-in-greater-noida-west/'),
                    array('img' => 'news-8.jpg', 'date' => 'October 7, 2025', 'title' => 'Ashtech Group to invest Rs 1,800 crore in luxury..', 'desc' => 'Realty developer Ashtech Group will invest Rs 1,800 crore in a luxury housing project in Greater Noida West.', 'link' => 'https://m.economictimes.com/industry/services/property-/-cstruction/ashtech-group-to-invest-rs-1800-crore-in-luxury-housing-project-in-greater-noida/articleshow/124361817.cms'),
                    array('img' => 'news-9.jpg', 'date' => 'November 18, 2025', 'title' => 'Plot prices near Jewar airport rise five times: Is it good time to..', 'desc' => 'The Yamuna Expressway has rapidly transformed from a peripheral stretch into one of the most sought-after..', 'link' => 'https://www.businesstoday.in/personal-finance/real-estate/story/yamuna-expressway-property-prices-is-it-a-good-time-to-buy-ahead-of-jewar-airport-inauguration-502399-2025-11-17')
                );
                
                foreach ($news_items as $news) : ?>
                    <article class="news-card">
                        <div class="news-card__image">
                            <img src="<?php echo esc_url($assets_url); ?>images/resources/<?php echo esc_attr($news['img']); ?>" alt="News">
                        </div>
                        <div class="news-card__content">
                            <p class="news-card__date"><?php echo esc_html($news['date']); ?></p>
                            <h3 class="news-card__title"><?php echo esc_html($news['title']); ?></h3>
                            <p class="news-card__desc"><?php echo esc_html($news['desc']); ?></p>
                            <a href="<?php echo esc_url($news['link']); ?>" target="_blank" rel="noopener noreferrer" class="news-card__link">Read More</a>
                        </div>
                    </article>
                <?php endforeach; ?>

                <!-- Hidden news cards 10-11 -->
                <article class="news-card news-card--hidden" data-load-more>
                    <div class="news-card__image">
                        <img src="<?php echo esc_url($assets_url); ?>images/resources/news-10.jpg" alt="News">
                    </div>
                    <div class="news-card__content">
                        <p class="news-card__date">October 7, 2025</p>
                        <h3 class="news-card__title">Ashtech Group Plans to Invest ₹1,800 Crore in Greater Noida..</h3>
                        <p class="news-card__desc">Ashtech Group has announced its foray into the real estate sector with plans to invest Rs Greater Noida West..</p>
                        <a href="https://realtynmore.com/ashtech-group-plans-to-invest-%e2%82%b91800-crore-in-greater-noida-west-luxury-housing-project/" target="_blank" rel="noopener noreferrer" class="news-card__link">Read More</a>
                    </div>
                </article>

                <article class="news-card news-card--hidden" data-load-more>
                    <div class="news-card__image">
                        <img src="<?php echo esc_url($assets_url); ?>images/resources/news-11.jpg" alt="News">
                    </div>
                    <div class="news-card__content">
                        <p class="news-card__date">October 8, 2025</p>
                        <h3 class="news-card__title">Ashtech Group enters real estate with ₹1,800-crore luxury pr..</h3>
                        <p class="news-card__desc">Expanding its footprint beyond sustainable construction materials and infrastructure, Ashtech Group..</p>
                        <a href="https://torbitrealty.com/ashtech-group-enters-real-estate-with-1800-crore-luxury-project-in-greater-noida-west/" target="_blank" rel="noopener noreferrer" class="news-card__link">Read More</a>
                    </div>
                </article>
            </div>

            <!-- Load More Button -->
            <div class="resources-news__load-more">
                <button class="btn btn--primary" id="loadMoreBtn">
                    <span>Load More</span>
                    <div class="btn__icon">
                        <img src="<?php echo esc_url($assets_url); ?>images/contact/icon-arrow.svg" alt="Arrow">
                    </div>
                </button>
            </div>
        </div>
    </div>
</section>

<script src="<?php echo esc_url($assets_url); ?>js/main.js"></script>
<script src="<?php echo esc_url($assets_url); ?>js/project.js"></script>
<script src="<?php echo esc_url($assets_url); ?>js/resources.js"></script>
