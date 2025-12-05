import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
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
        <div {...useBlockProps()}>
            {/* Hero Banner Section */}
            <section className="project-hero resourcesbg">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText
                        tagName="h1"
                        className="project-hero__title"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('Resources & News', 'ashtech-pages-blocks')}
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
                                    <RichText
                                        tagName="span"
                                        value={label}
                                        onChange={(value) => {
                                            const newLabels = [...(tabLabels || [])];
                                            newLabels[index] = value;
                                            setAttributes({ tabLabels: newLabels });
                                        }}
                                        placeholder={__('Tab label...', 'ashtech-pages-blocks')}
                                    />
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
                            <RichText
                                tagName="h2"
                                className="resources-news__title"
                                value={highlightsTitle}
                                onChange={(value) => setAttributes({ highlightsTitle: value })}
                                placeholder={__('Highlights', 'ashtech-pages-blocks')}
                            />
                            <div className="resources-news__featured-content">
                                <div className="resources-news__featured-text">
                                    <RichText
                                        tagName="p"
                                        className="resources-news__date"
                                        value={highlightsFeatured?.date || ''}
                                        onChange={(value) => setAttributes({ highlightsFeatured: { ...highlightsFeatured, date: value } })}
                                        placeholder={__('Date...', 'ashtech-pages-blocks')}
                                    />
                                    <RichText
                                        tagName="h3"
                                        className="resources-news__featured-title"
                                        value={highlightsFeatured?.title || ''}
                                        onChange={(value) => setAttributes({ highlightsFeatured: { ...highlightsFeatured, title: value } })}
                                        placeholder={__('Featured title...', 'ashtech-pages-blocks')}
                                    />
                                    <div className="resources-news__featured-desc">
                                        <RichText
                                            tagName="p"
                                            value={highlightsFeatured?.description1 || ''}
                                            onChange={(value) => setAttributes({ highlightsFeatured: { ...highlightsFeatured, description1: value } })}
                                            placeholder={__('Description 1...', 'ashtech-pages-blocks')}
                                        />
                                        <RichText
                                            tagName="p"
                                            value={highlightsFeatured?.description2 || ''}
                                            onChange={(value) => setAttributes({ highlightsFeatured: { ...highlightsFeatured, description2: value } })}
                                            placeholder={__('Description 2...', 'ashtech-pages-blocks')}
                                        />
                                    </div>
                                    <button className="btn btn--primary downloadCta">
                                        <RichText
                                            tagName="span"
                                            value={highlightsFeatured?.buttonText || ''}
                                            onChange={(value) => setAttributes({ highlightsFeatured: { ...highlightsFeatured, buttonText: value } })}
                                            placeholder={__('Read More', 'ashtech-pages-blocks')}
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => setAttributes({ highlightsFeatured: { ...highlightsFeatured, image: media.url } })}
                                        allowedTypes={['image']}
                                        render={({ open }) => (
                                            <div className="resources-news__featured-image">
                                                {highlightsFeatured?.image ? (
                                                    <img src={highlightsFeatured.image} alt="Featured Highlight" />
                                                ) : (
                                                    <img src={`${assetsUrl}images/resources/featured-news.jpg`} alt="Featured Highlight" />
                                                )}
                                                <Button onClick={open} isPrimary style={{ marginTop: '10px' }}>
                                                    {highlightsFeatured?.image ? __('Replace Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                                </Button>
                                            </div>
                                        )}
                                    />
                                </MediaUploadCheck>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blogs Tab Content */}
                <div className="resources-content__tab" data-content="blogs" style={{ display: 'none' }}>
                    <div className="resources-news__container">
                        <div className="resources-news__featured">
                            <RichText
                                tagName="h2"
                                className="resources-news__title"
                                value={blogsTitle}
                                onChange={(value) => setAttributes({ blogsTitle: value })}
                                placeholder={__('Latest Blogs', 'ashtech-pages-blocks')}
                            />
                            <div className="resources-news__featured-content">
                                <div className="resources-news__featured-text">
                                    <RichText
                                        tagName="p"
                                        className="resources-news__date"
                                        value={blogsFeatured?.date || ''}
                                        onChange={(value) => setAttributes({ blogsFeatured: { ...blogsFeatured, date: value } })}
                                        placeholder={__('Date...', 'ashtech-pages-blocks')}
                                    />
                                    <RichText
                                        tagName="h3"
                                        className="resources-news__featured-title"
                                        value={blogsFeatured?.title || ''}
                                        onChange={(value) => setAttributes({ blogsFeatured: { ...blogsFeatured, title: value } })}
                                        placeholder={__('Featured title...', 'ashtech-pages-blocks')}
                                    />
                                    <div className="resources-news__featured-desc">
                                        <RichText
                                            tagName="p"
                                            value={blogsFeatured?.description1 || ''}
                                            onChange={(value) => setAttributes({ blogsFeatured: { ...blogsFeatured, description1: value } })}
                                            placeholder={__('Description 1...', 'ashtech-pages-blocks')}
                                        />
                                        <RichText
                                            tagName="p"
                                            value={blogsFeatured?.description2 || ''}
                                            onChange={(value) => setAttributes({ blogsFeatured: { ...blogsFeatured, description2: value } })}
                                            placeholder={__('Description 2...', 'ashtech-pages-blocks')}
                                        />
                                    </div>
                                    <button className="btn btn--primary downloadCta">
                                        <RichText
                                            tagName="span"
                                            value={blogsFeatured?.buttonText || ''}
                                            onChange={(value) => setAttributes({ blogsFeatured: { ...blogsFeatured, buttonText: value } })}
                                            placeholder={__('Read More', 'ashtech-pages-blocks')}
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => setAttributes({ blogsFeatured: { ...blogsFeatured, image: media.url } })}
                                        allowedTypes={['image']}
                                        render={({ open }) => (
                                            <div className="resources-news__featured-image">
                                                {blogsFeatured?.image ? (
                                                    <img src={blogsFeatured.image} alt="Featured Blog" />
                                                ) : (
                                                    <img src={`${assetsUrl}images/resources/news-6.jpg`} alt="Featured Blog" />
                                                )}
                                                <Button onClick={open} isPrimary style={{ marginTop: '10px' }}>
                                                    {blogsFeatured?.image ? __('Replace Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                                </Button>
                                            </div>
                                        )}
                                    />
                                </MediaUploadCheck>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Gallery Tab Content */}
                <div className="resources-content__tab" data-content="video" style={{ display: 'none' }}>
                    <div className="resources-news__container">
                        <div className="resources-news__featured">
                            <RichText
                                tagName="h2"
                                className="resources-news__title"
                                value={videoTitle}
                                onChange={(value) => setAttributes({ videoTitle: value })}
                                placeholder={__('Video Gallery', 'ashtech-pages-blocks')}
                            />
                            <div className="resources-news__featured-content">
                                <div className="resources-news__featured-text">
                                    <RichText
                                        tagName="p"
                                        className="resources-news__date"
                                        value={videoFeatured?.date || ''}
                                        onChange={(value) => setAttributes({ videoFeatured: { ...videoFeatured, date: value } })}
                                        placeholder={__('Date...', 'ashtech-pages-blocks')}
                                    />
                                    <RichText
                                        tagName="h3"
                                        className="resources-news__featured-title"
                                        value={videoFeatured?.title || ''}
                                        onChange={(value) => setAttributes({ videoFeatured: { ...videoFeatured, title: value } })}
                                        placeholder={__('Featured title...', 'ashtech-pages-blocks')}
                                    />
                                    <div className="resources-news__featured-desc">
                                        <RichText
                                            tagName="p"
                                            value={videoFeatured?.description1 || ''}
                                            onChange={(value) => setAttributes({ videoFeatured: { ...videoFeatured, description1: value } })}
                                            placeholder={__('Description 1...', 'ashtech-pages-blocks')}
                                        />
                                        <RichText
                                            tagName="p"
                                            value={videoFeatured?.description2 || ''}
                                            onChange={(value) => setAttributes({ videoFeatured: { ...videoFeatured, description2: value } })}
                                            placeholder={__('Description 2...', 'ashtech-pages-blocks')}
                                        />
                                    </div>
                                    <button className="btn btn--primary downloadCta">
                                        <RichText
                                            tagName="span"
                                            value={videoFeatured?.buttonText || ''}
                                            onChange={(value) => setAttributes({ videoFeatured: { ...videoFeatured, buttonText: value } })}
                                            placeholder={__('Read More', 'ashtech-pages-blocks')}
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => setAttributes({ videoFeatured: { ...videoFeatured, image: media.url } })}
                                        allowedTypes={['image']}
                                        render={({ open }) => (
                                            <div className="resources-news__featured-image">
                                                {videoFeatured?.image ? (
                                                    <img src={videoFeatured.image} alt="Video Thumbnail" />
                                                ) : (
                                                    <img src={`${assetsUrl}images/resources/news-3.jpg`} alt="Video Thumbnail" />
                                                )}
                                                <Button onClick={open} isPrimary style={{ marginTop: '10px' }}>
                                                    {videoFeatured?.image ? __('Replace Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                                </Button>
                                            </div>
                                        )}
                                    />
                                </MediaUploadCheck>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Press & Media Tab Content */}
                <div className="resources-content__tab resources-content__tab--active" data-content="press">
                    <div className="resources-news__container">
                        {/* Featured News */}
                        <div className="resources-news__featured">
                            <RichText
                                tagName="h2"
                                className="resources-news__title"
                                value={pressTitle}
                                onChange={(value) => setAttributes({ pressTitle: value })}
                                placeholder={__('News & Press Releases', 'ashtech-pages-blocks')}
                            />
                            
                            <div className="resources-news__featured-content">
                                <div className="resources-news__featured-text">
                                    <RichText
                                        tagName="p"
                                        className="resources-news__date"
                                        value={pressFeatured?.date || ''}
                                        onChange={(value) => setAttributes({ pressFeatured: { ...pressFeatured, date: value } })}
                                        placeholder={__('Date...', 'ashtech-pages-blocks')}
                                    />
                                    <RichText
                                        tagName="h3"
                                        className="resources-news__featured-title"
                                        value={pressFeatured?.title || ''}
                                        onChange={(value) => setAttributes({ pressFeatured: { ...pressFeatured, title: value } })}
                                        placeholder={__('Featured title...', 'ashtech-pages-blocks')}
                                    />
                                    <div className="resources-news__featured-desc">
                                        <RichText
                                            tagName="p"
                                            value={pressFeatured?.description1 || ''}
                                            onChange={(value) => setAttributes({ pressFeatured: { ...pressFeatured, description1: value } })}
                                            placeholder={__('Description 1...', 'ashtech-pages-blocks')}
                                        />
                                        <RichText
                                            tagName="p"
                                            value={pressFeatured?.description2 || ''}
                                            onChange={(value) => setAttributes({ pressFeatured: { ...pressFeatured, description2: value } })}
                                            placeholder={__('Description 2...', 'ashtech-pages-blocks')}
                                        />
                                    </div>
                                    <a href={pressFeatured?.buttonUrl || '#'} target="_blank" rel="noopener noreferrer" className="btn btn--primary downloadCta">
                                        <RichText
                                            tagName="span"
                                            value={pressFeatured?.buttonText || ''}
                                            onChange={(value) => setAttributes({ pressFeatured: { ...pressFeatured, buttonText: value } })}
                                            placeholder={__('Read More', 'ashtech-pages-blocks')}
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                    <div style={{ marginTop: '10px' }}>
                                        <label style={{ display: 'block', marginBottom: '5px' }}>Button URL:</label>
                                        <input
                                            type="text"
                                            value={pressFeatured?.buttonUrl || ''}
                                            onChange={(e) => setAttributes({ pressFeatured: { ...pressFeatured, buttonUrl: e.target.value } })}
                                            placeholder="https://..."
                                            style={{ width: '100%', padding: '5px' }}
                                        />
                                    </div>
                                </div>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => setAttributes({ pressFeatured: { ...pressFeatured, image: media.url } })}
                                        allowedTypes={['image']}
                                        render={({ open }) => (
                                            <div className="resources-news__featured-image">
                                                {pressFeatured?.image ? (
                                                    <img src={pressFeatured.image} alt="Featured News" />
                                                ) : (
                                                    <img src={`${assetsUrl}images/resources/featured-news.jpg`} alt="Featured News" />
                                                )}
                                                <Button onClick={open} isPrimary style={{ marginTop: '10px' }}>
                                                    {pressFeatured?.image ? __('Replace Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                                </Button>
                                            </div>
                                        )}
                                    />
                                </MediaUploadCheck>
                            </div>
                        </div>

                        {/* News Grid */}
                        <div className="resources-news__grid">
                            {(newsItems || []).map((item, index) => {
                                const defaultImages = ['news-1.jpg', 'news-2.jpg', 'news-3.jpg', 'news-4.jpg', 'news-5.jpg', 'news-6.jpg', 'news-7.jpg', 'news-8.jpg', 'news-9.jpg', 'news-10.jpg', 'news-11.jpg'];
                                return (
                                    <article key={index} className={`news-card ${index >= 9 ? 'news-card--hidden' : ''}`} data-load-more={index >= 9 ? true : undefined}>
                                        <MediaUploadCheck>
                                            <MediaUpload
                                                onSelect={(media) => {
                                                    const newItems = [...(newsItems || [])];
                                                    newItems[index].image = media.url;
                                                    setAttributes({ newsItems: newItems });
                                                }}
                                                allowedTypes={['image']}
                                                render={({ open }) => (
                                                    <div className="news-card__image">
                                                        {item.image ? (
                                                            <img src={item.image} alt="News" />
                                                        ) : (
                                                            <img src={`${assetsUrl}images/resources/${defaultImages[index] || 'news-1.jpg'}`} alt="News" />
                                                        )}
                                                        <Button onClick={open} isSecondary style={{ marginTop: '10px', fontSize: '12px' }}>
                                                            {item.image ? __('Replace', 'ashtech-pages-blocks') : __('Upload', 'ashtech-pages-blocks')}
                                                        </Button>
                                                    </div>
                                                )}
                                            />
                                        </MediaUploadCheck>
                                        <div className="news-card__content">
                                            <RichText
                                                tagName="p"
                                                className="news-card__date"
                                                value={item.date}
                                                onChange={(value) => {
                                                    const newItems = [...(newsItems || [])];
                                                    newItems[index].date = value;
                                                    setAttributes({ newsItems: newItems });
                                                }}
                                                placeholder={__('Date...', 'ashtech-pages-blocks')}
                                            />
                                            <RichText
                                                tagName="h3"
                                                className="news-card__title"
                                                value={item.title}
                                                onChange={(value) => {
                                                    const newItems = [...(newsItems || [])];
                                                    newItems[index].title = value;
                                                    setAttributes({ newsItems: newItems });
                                                }}
                                                placeholder={__('News title...', 'ashtech-pages-blocks')}
                                            />
                                            <RichText
                                                tagName="p"
                                                className="news-card__desc"
                                                value={item.description}
                                                onChange={(value) => {
                                                    const newItems = [...(newsItems || [])];
                                                    newItems[index].description = value;
                                                    setAttributes({ newsItems: newItems });
                                                }}
                                                placeholder={__('News description...', 'ashtech-pages-blocks')}
                                            />
                                            <div style={{ marginTop: '10px' }}>
                                                <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>Link URL:</label>
                                                <input
                                                    type="text"
                                                    value={item.link || ''}
                                                    onChange={(e) => {
                                                        const newItems = [...(newsItems || [])];
                                                        newItems[index].link = e.target.value;
                                                        setAttributes({ newsItems: newItems });
                                                    }}
                                                    placeholder="https://..."
                                                    style={{ width: '100%', padding: '5px', fontSize: '12px' }}
                                                />
                                            </div>
                                            <a href={item.link || '#'} target="_blank" rel="noopener noreferrer" className="news-card__link">Read More</a>
                                            <Button
                                                onClick={() => {
                                                    const newItems = [...(newsItems || [])];
                                                    newItems.splice(index, 1);
                                                    setAttributes({ newsItems: newItems });
                                                }}
                                                isDestructive
                                                style={{ marginTop: '10px', fontSize: '12px' }}
                                            >
                                                {__('Remove', 'ashtech-pages-blocks')}
                                            </Button>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                        <Button
                            onClick={() => {
                                const newItems = [...(newsItems || [])];
                                newItems.push({ date: '', title: '', description: '', link: '', image: '' });
                                setAttributes({ newsItems: newItems });
                            }}
                            isPrimary
                            style={{ marginTop: '20px' }}
                        >
                            {__('Add New News Item', 'ashtech-pages-blocks')}
                        </Button>

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
