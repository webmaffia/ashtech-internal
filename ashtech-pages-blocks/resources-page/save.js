import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { 
        heroTitle,
        tabLabels,
        highlightsTitle, highlightsFeatured,
        blogsTitle, blogsFeatured,
        videoTitle, videoFeatured,
        pressTitle, pressFeatured,
        newsItems
    } = attributes;
    const assetsUrl = window.ashtechBlocksData ? window.ashtechBlocksData.assetsUrl : 'assets/';

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
                        {(tabLabels || []).map((label, index) => {
                            const tabs = ['highlights', 'blogs', 'video', 'press'];
                            return (
                                <button 
                                    key={index}
                                    className={`resources-tabs__link ${index === 3 ? 'resources-tabs__link--active' : ''}`} 
                                    data-tab={tabs[index]}
                                >
                                    <RichText.Content tagName="span" value={label} />
                                </button>
                            );
                        })}
                    </div>
                    <div className="resources-tabs__line"></div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="resources-content">
                {/* Highlights Tab Content */}
                <div className="resources-content__tab" data-content="highlights" style={{ display: 'none' }}>
                    <div className="resources-news__container">
                        <div className="resources-news__featured">
                            <RichText.Content tagName="h2" className="resources-news__title" value={highlightsTitle} />
                            <div className="resources-news__featured-content">
                                <div className="resources-news__featured-text">
                                    <RichText.Content tagName="p" className="resources-news__date" value={highlightsFeatured?.date} />
                                    <RichText.Content tagName="h3" className="resources-news__featured-title" value={highlightsFeatured?.title} />
                                    <div className="resources-news__featured-desc">
                                        <RichText.Content tagName="p" value={highlightsFeatured?.description1} />
                                        <RichText.Content tagName="p" value={highlightsFeatured?.description2} />
                                    </div>
                                    <button className="btn btn--primary downloadCta">
                                        <RichText.Content tagName="span" value={highlightsFeatured?.buttonText} />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="resources-news__featured-image">
                                    <img src={highlightsFeatured?.image || `${assetsUrl}images/resources/featured-news.jpg`} alt="Featured Highlight" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blogs Tab Content */}
                <div className="resources-content__tab" data-content="blogs" style={{ display: 'none' }}>
                    <div className="resources-news__container">
                        <div className="resources-news__featured">
                            <RichText.Content tagName="h2" className="resources-news__title" value={blogsTitle} />
                            <div className="resources-news__featured-content">
                                <div className="resources-news__featured-text">
                                    <RichText.Content tagName="p" className="resources-news__date" value={blogsFeatured?.date} />
                                    <RichText.Content tagName="h3" className="resources-news__featured-title" value={blogsFeatured?.title} />
                                    <div className="resources-news__featured-desc">
                                        <RichText.Content tagName="p" value={blogsFeatured?.description1} />
                                        <RichText.Content tagName="p" value={blogsFeatured?.description2} />
                                    </div>
                                    <button className="btn btn--primary downloadCta">
                                        <RichText.Content tagName="span" value={blogsFeatured?.buttonText} />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="resources-news__featured-image">
                                    <img src={blogsFeatured?.image || `${assetsUrl}images/resources/news-6.jpg`} alt="Featured Blog" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Gallery Tab Content */}
                <div className="resources-content__tab" data-content="video" style={{ display: 'none' }}>
                    <div className="resources-news__container">
                        <div className="resources-news__featured">
                            <RichText.Content tagName="h2" className="resources-news__title" value={videoTitle} />
                            <div className="resources-news__featured-content">
                                <div className="resources-news__featured-text">
                                    <RichText.Content tagName="p" className="resources-news__date" value={videoFeatured?.date} />
                                    <RichText.Content tagName="h3" className="resources-news__featured-title" value={videoFeatured?.title} />
                                    <div className="resources-news__featured-desc">
                                        <RichText.Content tagName="p" value={videoFeatured?.description1} />
                                        <RichText.Content tagName="p" value={videoFeatured?.description2} />
                                    </div>
                                    <button className="btn btn--primary downloadCta">
                                        <RichText.Content tagName="span" value={videoFeatured?.buttonText} />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="resources-news__featured-image">
                                    <img src={videoFeatured?.image || `${assetsUrl}images/resources/news-3.jpg`} alt="Video Thumbnail" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Press & Media Tab Content */}
                <div className="resources-content__tab resources-content__tab--active" data-content="press">
                    <div className="resources-news__container">
                        {/* Featured News */}
                        <div className="resources-news__featured">
                            <RichText.Content tagName="h2" className="resources-news__title" value={pressTitle} />
                            
                            <div className="resources-news__featured-content">
                                <div className="resources-news__featured-text">
                                    <RichText.Content tagName="p" className="resources-news__date" value={pressFeatured?.date} />
                                    <RichText.Content tagName="h3" className="resources-news__featured-title" value={pressFeatured?.title} />
                                    <div className="resources-news__featured-desc">
                                        <RichText.Content tagName="p" value={pressFeatured?.description1} />
                                        <RichText.Content tagName="p" value={pressFeatured?.description2} />
                                    </div>
                                    <a href={pressFeatured?.buttonUrl || '#'} target="_blank" rel="noopener noreferrer" className="btn btn--primary downloadCta">
                                        <RichText.Content tagName="span" value={pressFeatured?.buttonText} />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="resources-news__featured-image">
                                    <img src={pressFeatured?.image || `${assetsUrl}images/resources/featured-news.jpg`} alt="Featured News" />
                                </div>
                            </div>
                        </div>

                        {/* News Grid */}
                        <div className="resources-news__grid">
                            {(newsItems || []).map((item, index) => {
                                const defaultImages = ['news-1.jpg', 'news-2.jpg', 'news-3.jpg', 'news-4.jpg', 'news-5.jpg', 'news-6.jpg', 'news-7.jpg', 'news-8.jpg', 'news-9.jpg', 'news-10.jpg', 'news-11.jpg'];
                                return (
                                    <article key={index} className={`news-card ${index >= 9 ? 'news-card--hidden' : ''}`} data-load-more={index >= 9 ? true : undefined}>
                                        <div className="news-card__image">
                                            <img src={item.image || `${assetsUrl}images/resources/${defaultImages[index] || 'news-1.jpg'}`} alt="News" />
                                        </div>
                                        <div className="news-card__content">
                                            <RichText.Content tagName="p" className="news-card__date" value={item.date} />
                                            <RichText.Content tagName="h3" className="news-card__title" value={item.title} />
                                            <RichText.Content tagName="p" className="news-card__desc" value={item.description} />
                                            <a href={item.link || '#'} target="_blank" rel="noopener noreferrer" className="news-card__link">Read More</a>
                                        </div>
                                    </article>
                                );
                            })}
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
