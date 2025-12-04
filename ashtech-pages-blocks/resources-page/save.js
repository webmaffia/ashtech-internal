import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { heroTitle } = attributes;

    return (
        <div {...useBlockProps.save()}>
            {/* Hero Banner Section */}
            <section className="project-hero resourcesbg">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText.Content 
                        tagName="h1" 
                        className="project-hero__title" 
                        value={heroTitle} 
                    />
                </div>
            </section>

            {/* Tabs Section */}
            <section className="resources-tabs">
                <div className="resources-tabs__container">
                    <div className="resources-tabs__nav">
                        <button className="resources-tabs__link" data-tab="highlights">Highlights</button>
                        <button className="resources-tabs__link" data-tab="blogs">Blogs</button>
                        <button className="resources-tabs__link" data-tab="video">Video Gallery</button>
                        <button className="resources-tabs__link resources-tabs__link--active" data-tab="press">Press & Media</button>
                    </div>
                    <div className="resources-tabs__line"></div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="resources-content">
                {/* Press & Media Tab Content */}
                <div className="resources-content__tab resources-content__tab--active" data-content="press">
                    <div className="resources-news__container">
                        {/* Featured News */}
                        <div className="resources-news__featured">
                            <h2 className="resources-news__title">News & Press Releases</h2>
                            
                            <div className="resources-news__featured-content">
                                <div className="resources-news__featured-text">
                                    <p className="resources-news__date">November 17, 2025</p>
                                    <h3 className="resources-news__featured-title">Ashtech Group enters real estate with ₹1,800-crore luxury project in Greater Noida</h3>
                                    <div className="resources-news__featured-desc">
                                        <p>Marking its entry into real estate development, Delhi-NCR–based Ashtech Group will invest about ₹1,800 crore to build a luxury housing project in Greater Noida. The project will come up on a fully paid 5.6-acre parcel the company recently acquired for roughly ₹300 crore.</p>
                                        <p>Sumit Agarwal, Director of Ashtech Group, said the company has been in allied sectors such as fly ash bricks, AAC Blocks, Ready-mix concrete (RMC), Pre-Engineered Building, large-scale infrastructure, and power infrastructure, news agency PTI reported.</p>
                                    </div>
                                    <a href="https://torbitrealty.com/ashtech-group-enters-real-estate-with-1800-crore-luxury-project-in-greater-noida/" target="_blank" rel="noopener noreferrer" className="btn btn--primary downloadCta">
                                        <span>Read More</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="resources-news__featured-image">
                                    <img src={`${assetsUrl}images/resources/featured-news.jpg`} alt="Featured News" />
                                </div>
                            </div>
                        </div>

                        {/* News Grid */}
                        <div className="resources-news__grid">
                            {/* News Card 1 */}
                            <article className="news-card">
                                <div className="news-card__image">
                                    <img src={`${assetsUrl}images/resources/news-1.jpg`} alt="News" />
                                </div>
                                <div className="news-card__content">
                                    <p className="news-card__date">November 17, 2025</p>
                                    <h3 className="news-card__title">Plot prices near Jewar airport rise five times: Is it good time..</h3>
                                    <p className="news-card__desc">PM Narendra Modi is likely to inaugurate the first phase of the Noida International Airport, Jewar, in the third week..</p>
                                    <a href="https://www.businesstoday.in/personal-finance/real-estate/story/yamuna-expressway-property-prices-is-it-a-good-time-to-buy-ahead-of-jewar-airport-inauguration-502399-2025-11-17#google_vignette" target="_blank" rel="noopener noreferrer" className="news-card__link">Read More</a>
                                </div>
                            </article>

                            {/* News Card 2 */}
                            <article className="news-card">
                                <div className="news-card__image">
                                    <img src={`${assetsUrl}images/resources/news-2.jpg`} alt="News" />
                                </div>
                                <div className="news-card__content">
                                    <p className="news-card__date">November 13, 2025</p>
                                    <h3 className="news-card__title">Ashtech Group enters real estate with ₹1,800-Cr luxury project..</h3>
                                    <p className="news-card__desc">Ashtech Group, a well-known name in construction materials and infrastructure development, has offic..</p>
                                    <a href="https://businessreviewlive.com/ashtech-group-enters-real-estate-with-%e2%82%b91800-cr-luxury-project-in-greater-noida/" target="_blank" rel="noopener noreferrer" className="news-card__link">Read More</a>
                                </div>
                            </article>

                            {/* News Card 3 */}
                            <article className="news-card">
                                <div className="news-card__image">
                                    <img src={`${assetsUrl}images/resources/news-3.jpg`} alt="News" />
                                </div>
                                <div className="news-card__content">
                                    <p className="news-card__date">November 17, 2025</p>
                                    <h3 className="news-card__title">Ashtech Group enters real estate; to invest Rs 1,800 cr on 1st..</h3>
                                    <p className="news-card__desc">NEW DELHI: (Nov 13) Realty firm Ashtech Group, which is into construction materials and infrastructure developmel..</p>
                                    <a href="https://www.ptinews.com/story/business/ashtech-group-enters-real-estate-to-invest-rs-1-800-cr-on-1st-greater-noida-project/3093862" target="_blank" rel="noopener noreferrer" className="news-card__link">Read More</a>
                                </div>
                            </article>

                            {/* News Card 4 */}
                            <article className="news-card">
                                <div className="news-card__image">
                                    <img src={`${assetsUrl}images/resources/news-4.jpg`} alt="News" />
                                </div>
                                <div className="news-card__content">
                                    <p className="news-card__date">November 13, 2025</p>
                                    <h3 className="news-card__title">Ashtech Group enters real estate; to invest Rs 1,800 cr on 1st Gre..</h3>
                                    <p className="news-card__desc">Realty firm Ashtech Group, which is into construction materials and infrastructure development, has..</p>
                                    <a href="https://m.economictimes.com/industry/services/property-/-cstruction/ashtech-group-enters-real-estate-to-invest-rs-1800-cr-on-1st-greater-noida-project/articleshow/125297696.cms" target="_blank" rel="noopener noreferrer" className="news-card__link">Read More</a>
                                </div>
                            </article>

                            {/* News Card 5 */}
                            <article className="news-card">
                                <div className="news-card__image">
                                    <img src={`${assetsUrl}images/resources/news-5.jpg`} alt="News" />
                                </div>
                                <div className="news-card__content">
                                    <p className="news-card__date">November 13, 2025</p>
                                    <h3 className="news-card__title">Ashtech Group forays into real estate with ₹1,800 cr Greater N..</h3>
                                    <p className="news-card__desc">Realty firm Ashtech Group, which is into construction materials and infrastructure development, has ent..</p>
                                    <a href="https://www.business-standard.com/companies/news/ashtech-group-forays-into-real-estate-with-1-800-cr-greater-noida-project-125111301356_1.html" target="_blank" rel="noopener noreferrer" className="news-card__link">Read More</a>
                                </div>
                            </article>

                            {/* News Card 6 */}
                            <article className="news-card">
                                <div className="news-card__image">
                                    <img src={`${assetsUrl}images/resources/news-6.jpg`} alt="News" />
                                </div>
                                <div className="news-card__content">
                                    <p className="news-card__date">November 13, 2025</p>
                                    <h3 className="news-card__title">Ashtech Group Enters Realty with Rs.1,800 Cr Luxury Noida..</h3>
                                    <p className="news-card__desc">Ashtech Group, a leader in sustainable construction materials and infrastructure development, has anno..</p>
                                    <a href="https://www.homesindiamagazine.com/news/ashtech-group-enters-realty-with-rs1800-cr-luxury-noida-project-nwid-5701.html" target="_blank" rel="noopener noreferrer" className="news-card__link">Read More</a>
                                </div>
                            </article>

                            {/* News Card 7 */}
                            <article className="news-card">
                                <div className="news-card__image">
                                    <img src={`${assetsUrl}images/resources/news-7.jpg`} alt="News" />
                                </div>
                                <div className="news-card__content">
                                    <p className="news-card__date">October 7, 2025</p>
                                    <h3 className="news-card__title">Ashtech Group to Invest Rs 1,800 crore to develop Luxury..</h3>
                                    <p className="news-card__desc">Ashtech Group has announced its foray into the real estate sector with plans to invest Rs 1,800 crore to develop a lu..</p>
                                    <a href="https://realtyninfra.in/ashtech-group-to-invest-rs-1800-crore-to-develop-luxury-housing-project-in-greater-noida-west/" target="_blank" rel="noopener noreferrer" className="news-card__link">Read More</a>
                                </div>
                            </article>

                            {/* News Card 8 */}
                            <article className="news-card">
                                <div className="news-card__image">
                                    <img src={`${assetsUrl}images/resources/news-8.jpg`} alt="News" />
                                </div>
                                <div className="news-card__content">
                                    <p className="news-card__date">October 7, 2025</p>
                                    <h3 className="news-card__title">Ashtech Group to invest Rs 1,800 crore in luxury..</h3>
                                    <p className="news-card__desc">Realty developer Ashtech Group will invest Rs 1,800 crore in a luxury housing project in Greater Noida West.</p>
                                    <a href="https://m.economictimes.com/industry/services/property-/-cstruction/ashtech-group-to-invest-rs-1800-crore-in-luxury-housing-project-in-greater-noida/articleshow/124361817.cms" target="_blank" rel="noopener noreferrer" className="news-card__link">Read More</a>
                                </div>
                            </article>

                            {/* News Card 9 */}
                            <article className="news-card">
                                <div className="news-card__image">
                                    <img src={`${assetsUrl}images/resources/news-9.jpg`} alt="News" />
                                </div>
                                <div className="news-card__content">
                                    <p className="news-card__date">November 18, 2025</p>
                                    <h3 className="news-card__title">Plot prices near Jewar airport rise five times: Is it good time to..</h3>
                                    <p className="news-card__desc">The Yamuna Expressway has rapidly transformed from a peripheral stretch into one of the most sought-after..</p>
                                    <a href="https://www.businesstoday.in/personal-finance/real-estate/story/yamuna-expressway-property-prices-is-it-a-good-time-to-buy-ahead-of-jewar-airport-inauguration-502399-2025-11-17#google_vignette" target="_blank" rel="noopener noreferrer" className="news-card__link">Read More</a>
                                </div>
                            </article>

                            {/* News Card 10 */}
                            <article className="news-card news-card--hidden" data-load-more>
                                <div className="news-card__image">
                                    <img src={`${assetsUrl}images/resources/news-10.jpg`} alt="News" />
                                </div>
                                <div className="news-card__content">
                                    <p className="news-card__date">October 7, 2025</p>
                                    <h3 className="news-card__title">Ashtech Group Plans to Invest ₹1,800 Crore in Greater Noida..</h3>
                                    <p className="news-card__desc">Ashtech Group has announced its foray into the real estate sector with plans to invest RsGreater Noida West..</p>
                                    <a href="https://realtynmore.com/ashtech-group-plans-to-invest-%e2%82%b91800-crore-in-greater-noida-west-luxury-housing-project/" target="_blank" rel="noopener noreferrer" className="news-card__link">Read More</a>
                                </div>
                            </article>

                            {/* News Card 11 */}
                            <article className="news-card news-card--hidden" data-load-more>
                                <div className="news-card__image">
                                    <img src={`${assetsUrl}images/resources/news-11.jpg`} alt="News" />
                                </div>
                                <div className="news-card__content">
                                    <p className="news-card__date">October 8, 2025</p>
                                    <h3 className="news-card__title">Ashtech Group enters real estate with ₹1,800-crore luxury pr..</h3>
                                    <p className="news-card__desc">Expanding its footprint beyond sustainable construction materials and infrastructure, Ashtech Group..</p>
                                    <a href="https://torbitrealty.com/ashtech-group-enters-real-estate-with-1800-crore-luxury-project-in-greater-noida-west/" target="_blank" rel="noopener noreferrer" className="news-card__link">Read More</a>
                                </div>
                            </article>
                        </div>

                        {/* Load More Button */}
                        <div className="resources-news__load-more">
                            <button className="btn btn--primary" id="loadMoreBtn">
                                <span>Load More</span>
                                <div className="btn__icon">
                                    <img src={`${assetsUrl}images/contact/icon-arrow.svg`} alt="Arrow" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
