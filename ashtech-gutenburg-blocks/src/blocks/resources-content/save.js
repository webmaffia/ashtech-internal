import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { newsTitle, featuredDate, featuredTitle, featuredDesc1, featuredDesc2, featuredLink, featuredImage, buttonText, loadMoreText } = attributes;

    return (
        <section className="resources-content">
            <div className="resources-content__tab resources-content__tab--active" data-content="press">
                <div className="resources-news__container">
                    <div className="resources-news__featured">
                        <RichText.Content tagName="h2" className="resources-news__title" value={newsTitle} />
                        
                        <div className="resources-news__featured-content">
                            <div className="resources-news__featured-text">
                                <RichText.Content tagName="p" className="resources-news__date" value={featuredDate} />
                                <RichText.Content tagName="h3" className="resources-news__featured-title" value={featuredTitle} />
                                <div className="resources-news__featured-desc">
                                    <RichText.Content tagName="p" value={featuredDesc1} />
                                    <RichText.Content tagName="p" value={featuredDesc2} />
                                </div>
                                <a href={featuredLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary downloadCta">
                                    <RichText.Content tagName="span" value={buttonText} />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                        <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="resources-news__featured-image">
                                <img src={featuredImage} alt="Featured News" />
                            </div>
                        </div>
                    </div>

                    <div className="resources-news__grid">
                        <article className="news-card">
                            <div className="news-card__image"><img src="assets/images/resources/news-1.jpg" alt="News" /></div>
                            <div className="news-card__content">
                                <p className="news-card__date">November 17, 2025</p>
                                <h3 className="news-card__title">Plot prices near Jewar airport rise five times: Is it good time..</h3>
                                <p className="news-card__desc">PM Narendra Modi is likely to inaugurate the first phase of the Noida International Airport, Jewar, in the third week..</p>
                                <a href="https://www.businesstoday.in/personal-finance/real-estate/story/yamuna-expressway-property-prices-is-it-a-good-time-to-buy-ahead-of-jewar-airport-inauguration-502399-2025-11-17#google_vignette" target="_blank" rel="noopener noreferrer" className="news-card__link">Read More</a>
                            </div>
                        </article>

                        <article className="news-card">
                            <div className="news-card__image"><img src="assets/images/resources/news-2.jpg" alt="News" /></div>
                            <div className="news-card__content">
                                <p className="news-card__date">November 13, 2025</p>
                                <h3 className="news-card__title">Ashtech Group enters real estate with ₹1,800-Cr luxury project..</h3>
                                <p className="news-card__desc">Ashtech Group, a well-known name in construction materials and infrastructure development, has offic..</p>
                                <a href="https://businessreviewlive.com/ashtech-group-enters-real-estate-with-%e2%82%b91800-cr-luxury-project-in-greater-noida/" target="_blank" rel="noopener noreferrer" className="news-card__link">Read More</a>
                            </div>
                        </article>

                        <article className="news-card">
                            <div className="news-card__image"><img src="assets/images/resources/news-3.jpg" alt="News" /></div>
                            <div className="news-card__content">
                                <p className="news-card__date">November 17, 2025</p>
                                <h3 className="news-card__title">Ashtech Group enters real estate; to invest Rs 1,800 cr on 1st..</h3>
                                <p className="news-card__desc">NEW DELHI: (Nov 13) Realty firm Ashtech Group, which is into construction materials and infrastructure developmel..</p>
                                <a href="https://www.ptinews.com/story/business/ashtech-group-enters-real-estate-to-invest-rs-1-800-cr-on-1st-greater-noida-project/3093862" target="_blank" rel="noopener noreferrer" className="news-card__link">Read More</a>
                            </div>
                        </article>
                    </div>

                    <div className="resources-news__load-more">
                        <button className="btn btn--primary" id="loadMoreBtn">
                            <RichText.Content tagName="span" value={loadMoreText} />
                            <div className="btn__icon"><img src="assets/images/contact/icon-arrow.svg" alt="Arrow" /></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
