import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { newsTitle, featuredDate, featuredTitle, featuredDesc1, featuredDesc2, featuredLink, featuredImage, buttonText, loadMoreText } = attributes;

    return (
        <div {...blockProps}>
            <section className="resources-content">
                <div className="resources-content__tab resources-content__tab--active" data-content="press">
                    <div className="resources-news__container">
                        <div className="resources-news__featured">
                            <RichText tagName="h2" className="resources-news__title" value={newsTitle} onChange={(value) => setAttributes({ newsTitle: value })} placeholder="News title..." />
                            
                            <div className="resources-news__featured-content">
                                <div className="resources-news__featured-text">
                                    <RichText tagName="p" className="resources-news__date" value={featuredDate} onChange={(value) => setAttributes({ featuredDate: value })} placeholder="Date..." />
                                    <RichText tagName="h3" className="resources-news__featured-title" value={featuredTitle} onChange={(value) => setAttributes({ featuredTitle: value })} placeholder="Featured title..." />
                                    <div className="resources-news__featured-desc">
                                        <RichText tagName="p" value={featuredDesc1} onChange={(value) => setAttributes({ featuredDesc1: value })} placeholder="Description paragraph 1..." />
                                        <RichText tagName="p" value={featuredDesc2} onChange={(value) => setAttributes({ featuredDesc2: value })} placeholder="Description paragraph 2..." />
                                    </div>
                                    <a href={featuredLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary downloadCta">
                                        <RichText tagName="span" value={buttonText} onChange={(value) => setAttributes({ buttonText: value })} placeholder="Button..." />
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
                                    <h3 className="news-card__title">Plot prices near Jewar airport rise five times...</h3>
                                    <p className="news-card__desc">PM Narendra Modi is likely to inaugurate the first phase...</p>
                                    <a href="#" className="news-card__link">Read More</a>
                                </div>
                            </article>
                            <p style={{ padding: '15px', background: '#f0f0f0', margin: '20px 0', borderRadius: '4px', fontSize: '12px' }}>
                                ℹ️ Additional news cards shown as static. Featured article above is editable.
                            </p>
                        </div>

                        <div className="resources-news__load-more">
                            <button className="btn btn--primary" id="loadMoreBtn">
                                <RichText tagName="span" value={loadMoreText} onChange={(value) => setAttributes({ loadMoreText: value })} placeholder="Load more..." />
                                <div className="btn__icon"><img src="assets/images/contact/icon-arrow.svg" alt="Arrow" /></div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
