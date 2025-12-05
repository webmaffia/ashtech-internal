import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { 
        heroTitle, heroSubtitleMain, heroSubtitleText,
        overviewLabel, overviewTitle, overviewText1, overviewText2,
        valuesLabel, valuesTitle, valuesIntro1, valuesIntro2, values, valuesFooter,
        visionTitle, visionText1, visionText2, visionImage,
        missionTitle, missionText1, missionText2,
        timelineItems,
        leadershipLabel, leadershipTitle, directorImage, directorMessage1, directorMessage2, directorName, directorPosition, teamMembers,
        directorMessageLabel, directorMessageTitle, directorMessageText1, directorMessageText2, directorMessageText3, directorMessageText4, directorMessageName, directorMessagePosition, directorMessageImage,
        projectsLabel, projectsTitle, projectsDescription, projectsButtonText
    } = attributes;
    const assetsUrl = window.ashtechBlocksData ? window.ashtechBlocksData.assetsUrl : 'assets/';

    return (
        <div {...useBlockProps()}>
            {/* Hero Banner Section */}
            <section className="project-hero aboutbg">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText
                        tagName="h1"
                        className="project-hero__title"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('From Building the Nation to <br>Crafting Its Finest Homes', 'ashtech-pages-blocks')}
                    />
                    <div className="project-hero__subtitle">
                        <RichText
                            tagName="p"
                            className="project-hero__subtitle-main"
                            value={heroSubtitleMain}
                            onChange={(value) => setAttributes({ heroSubtitleMain: value })}
                            placeholder={__('Ashtech Presidential Towers by Ashtech Group', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="p"
                            className="project-hero__subtitle-text"
                            value={heroSubtitleText}
                            onChange={(value) => setAttributes({ heroSubtitleText: value })}
                            placeholder={__('A legacy of trust and precision...', 'ashtech-pages-blocks')}
                        />
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="about-overview">
                <div className="project-overview__decoration"></div>
                <div className="about-overview__container">
                    <div className="about-overview__header">
                        <RichText
                            tagName="p"
                            className="about-overview__label animate-text"
                            value={overviewLabel}
                            onChange={(value) => setAttributes({ overviewLabel: value })}
                            placeholder={__('Overview', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="h2"
                            className="about-overview__title animate-text"
                            value={overviewTitle}
                            onChange={(value) => setAttributes({ overviewTitle: value })}
                            placeholder={__('From Foundations of Strength to Towers of Excellence', 'ashtech-pages-blocks')}
                        />
                    </div>
                    <div className="about-overview__text">
                        <RichText
                            tagName="p"
                            className="animate-text"
                            value={overviewText1}
                            onChange={(value) => setAttributes({ overviewText1: value })}
                            placeholder={__('First paragraph of overview...', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="p"
                            className="animate-text"
                            value={overviewText2}
                            onChange={(value) => setAttributes({ overviewText2: value })}
                            placeholder={__('Second paragraph of overview...', 'ashtech-pages-blocks')}
                        />
                    </div>
                </div>
            </section>

            {/* Legacy & Values Section */}
            <section className="about-values">
                <div className="about-values__container">
                    <div className="about-values__header">
                        <RichText
                            tagName="p"
                            className="about-values__label animate-text"
                            value={valuesLabel}
                            onChange={(value) => setAttributes({ valuesLabel: value })}
                            placeholder={__('Legacy & Values', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="h2"
                            className="about-values__title animate-text"
                            value={valuesTitle}
                            onChange={(value) => setAttributes({ valuesTitle: value })}
                            placeholder={__('A Legacy Rooted in Purpose, Guided by Values', 'ashtech-pages-blocks')}
                        />
                        <div className="about-values__intro">
                            <RichText
                                tagName="p"
                                className="animate-text"
                                value={valuesIntro1}
                                onChange={(value) => setAttributes({ valuesIntro1: value })}
                                placeholder={__('Values intro text...', 'ashtech-pages-blocks')}
                            />
                            <RichText
                                tagName="p"
                                className="animate-text"
                                value={valuesIntro2}
                                onChange={(value) => setAttributes({ valuesIntro2: value })}
                                placeholder={__('Values intro text 2...', 'ashtech-pages-blocks')}
                            />
                        </div>
                    </div>
                    
                    <div className="about-values__graphic">
                        <img src={`${assetsUrl}images/about/values-graphic.svg`} alt="Values Graphic" className="about-values__graphic-image" />
                        <div className="about-values__items">
                            {(values || []).map((value, index) => {
                                const positions = ['about-values__item--left about-values__item--1', 'about-values__item--left about-values__item--2', 'about-values__item--left about-values__item--3', 'about-values__item--right about-values__item--4', 'about-values__item--right about-values__item--5', 'about-values__item--right about-values__item--6'];
                                return (
                                    <div key={index} className={`about-values__item ${positions[index] || ''}`}>
                                        <RichText
                                            tagName="p"
                                            className="about-values__item-text"
                                            value={value}
                                            onChange={(valueText) => {
                                                const newValues = [...(values || [])];
                                                newValues[index] = valueText;
                                                setAttributes({ values: newValues });
                                            }}
                                            placeholder={__('Value text...', 'ashtech-pages-blocks')}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="about-values__footer">
                        <RichText
                            tagName="p"
                            className="animate-text"
                            value={valuesFooter}
                            onChange={(value) => setAttributes({ valuesFooter: value })}
                            placeholder={__('Values footer text...', 'ashtech-pages-blocks')}
                        />
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="about-vision-mission">
                <div className="about-vision-mission__container">
                    <div className="about-vision-mission__vision">
                        <RichText
                            tagName="h3"
                            className="about-vision-mission__title"
                            value={visionTitle}
                            onChange={(value) => setAttributes({ visionTitle: value })}
                            placeholder={__('Vision', 'ashtech-pages-blocks')}
                        />
                        <div className="about-vision-mission__content">
                            <RichText
                                tagName="p"
                                value={visionText1}
                                onChange={(value) => setAttributes({ visionText1: value })}
                                placeholder={__('Vision text 1...', 'ashtech-pages-blocks')}
                            />
                            <RichText
                                tagName="p"
                                value={visionText2}
                                onChange={(value) => setAttributes({ visionText2: value })}
                                placeholder={__('Vision text 2...', 'ashtech-pages-blocks')}
                            />
                        </div>
                    </div>
                    
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ visionImage: media.url })}
                            allowedTypes={['image']}
                            render={({ open }) => (
                                <div className="about-vision-mission__image">
                                    {visionImage ? (
                                        <img src={visionImage} alt="Building" />
                                    ) : (
                                        <img src={`${assetsUrl}images/about/overview-pattern.png`} alt="Building" />
                                    )}
                                    <Button onClick={open} isPrimary style={{ marginTop: '10px' }}>
                                        {visionImage ? __('Replace Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                    </Button>
                                </div>
                            )}
                        />
                    </MediaUploadCheck>
                    
                    <div className="about-vision-mission__mission">
                        <RichText
                            tagName="h3"
                            className="about-vision-mission__title"
                            value={missionTitle}
                            onChange={(value) => setAttributes({ missionTitle: value })}
                            placeholder={__('Mission', 'ashtech-pages-blocks')}
                        />
                        <div className="about-vision-mission__content">
                            <RichText
                                tagName="p"
                                value={missionText1}
                                onChange={(value) => setAttributes({ missionText1: value })}
                                placeholder={__('Mission text 1...', 'ashtech-pages-blocks')}
                            />
                            <RichText
                                tagName="p"
                                value={missionText2}
                                onChange={(value) => setAttributes({ missionText2: value })}
                                placeholder={__('Mission text 2...', 'ashtech-pages-blocks')}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* History Timeline Section */}
            <section className="about-history">
                {(timelineItems && timelineItems.length > 0) && (
                    <>
                        <div className="about-history__image-container">
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={(media) => {
                                        const newItems = [...timelineItems];
                                        newItems[0].image = media.url;
                                        setAttributes({ timelineItems: newItems });
                                    }}
                                    allowedTypes={['image']}
                                    render={({ open }) => (
                                        <div>
                                            {timelineItems[0].image ? (
                                                <img src={timelineItems[0].image} alt="Timeline" className="about-history__image" id="historyImage" />
                                            ) : (
                                                <img src={`${assetsUrl}images/about/history-1.jpg`} alt="Timeline" className="about-history__image" id="historyImage" />
                                            )}
                                            <Button onClick={open} isPrimary style={{ marginTop: '10px' }}>
                                                {timelineItems[0].image ? __('Replace Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                            </Button>
                                        </div>
                                    )}
                                />
                            </MediaUploadCheck>
                        </div>
                        
                        <div className="about-history__content-box">
                            <RichText
                                tagName="h3"
                                className="about-history__title"
                                id="historyTitle"
                                value={timelineItems[0].title}
                                onChange={(value) => {
                                    const newItems = [...timelineItems];
                                    newItems[0].title = value;
                                    setAttributes({ timelineItems: newItems });
                                }}
                                placeholder={__('Timeline title...', 'ashtech-pages-blocks')}
                            />
                            <RichText
                                tagName="p"
                                className="about-history__description"
                                id="historyDescription"
                                value={timelineItems[0].description}
                                onChange={(value) => {
                                    const newItems = [...timelineItems];
                                    newItems[0].description = value;
                                    setAttributes({ timelineItems: newItems });
                                }}
                                placeholder={__('Timeline description...', 'ashtech-pages-blocks')}
                            />
                        </div>
                    </>
                )}
                
                <div className="about-history__timeline-wrapper">
                    <div className="about-history__timeline">
                        <div className="about-history__timeline-line"></div>
                        <div className="about-history__timeline-progress" id="timelineProgress"></div>
                        
                        {(timelineItems || []).map((item, index) => {
                            const defaultImages = ['history-1.jpg', 'history-2.jpg', 'history-3.jpg', 'history-4.jpg', 'history-5.jpg', 'history-6.jpg', 'history-7.jpg', 'history-8.jpg'];
                            return (
                                <div key={index} className={`about-history__timeline-item ${index === 0 ? 'active' : ''}`} data-year={item.year} data-title={item.title} data-description={item.description} data-image={item.image || `${assetsUrl}images/about/${defaultImages[index] || 'history-1.jpg'}`}>
                                    <RichText
                                        tagName="p"
                                        className="about-history__timeline-year"
                                        value={item.year}
                                        onChange={(value) => {
                                            const newItems = [...timelineItems];
                                            newItems[index].year = value;
                                            setAttributes({ timelineItems: newItems });
                                        }}
                                        placeholder={__('Year...', 'ashtech-pages-blocks')}
                                    />
                                    <div className="about-history__timeline-dot"></div>
                                    <RichText
                                        tagName="p"
                                        className="about-history__timeline-label"
                                        value={item.label}
                                        onChange={(value) => {
                                            const newItems = [...timelineItems];
                                            newItems[index].label = value;
                                            setAttributes({ timelineItems: newItems });
                                        }}
                                        placeholder={__('Label...', 'ashtech-pages-blocks')}
                                    />
                                    <div style={{ marginTop: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '4px' }}>
                                        <MediaUploadCheck>
                                            <MediaUpload
                                                onSelect={(media) => {
                                                    const newItems = [...timelineItems];
                                                    newItems[index].image = media.url;
                                                    setAttributes({ timelineItems: newItems });
                                                }}
                                                allowedTypes={['image']}
                                                render={({ open }) => (
                                                    <Button onClick={open} isSecondary>
                                                        {item.image ? __('Replace Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                                    </Button>
                                                )}
                                            />
                                        </MediaUploadCheck>
                                        <RichText
                                            tagName="div"
                                            style={{ marginTop: '10px' }}
                                            value={item.title}
                                            onChange={(value) => {
                                                const newItems = [...timelineItems];
                                                newItems[index].title = value;
                                                setAttributes({ timelineItems: newItems });
                                            }}
                                            placeholder={__('Title...', 'ashtech-pages-blocks')}
                                        />
                                        <RichText
                                            tagName="div"
                                            style={{ marginTop: '10px' }}
                                            value={item.description}
                                            onChange={(value) => {
                                                const newItems = [...timelineItems];
                                                newItems[index].description = value;
                                                setAttributes({ timelineItems: newItems });
                                            }}
                                            placeholder={__('Description...', 'ashtech-pages-blocks')}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="about-leadership">
                <div className="project-overview__decoration"></div>
                <div className="about-leadership__container">
                    <div className="about-leadership__header">
                        <RichText
                            tagName="p"
                            className="about-leadership__label animate-text"
                            value={leadershipLabel}
                            onChange={(value) => setAttributes({ leadershipLabel: value })}
                            placeholder={__('Leadership', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="h2"
                            className="about-leadership__title animate-text"
                            value={leadershipTitle}
                            onChange={(value) => setAttributes({ leadershipTitle: value })}
                            placeholder={__('The Legacy Continues with Our Leadership Team', 'ashtech-pages-blocks')}
                        />
                    </div>

                    {/* Main Director */}
                    <div className="about-leadership__main">
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={(media) => setAttributes({ directorImage: media.url })}
                                allowedTypes={['image']}
                                render={({ open }) => (
                                    <div className="about-leadership__main-image">
                                        {directorImage ? (
                                            <img src={directorImage} alt="Director" />
                                        ) : (
                                            <img src={`${assetsUrl}images/about/director-sumit.jpg`} alt="Director" />
                                        )}
                                        <Button onClick={open} isPrimary style={{ marginTop: '10px' }}>
                                            {directorImage ? __('Replace Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                        </Button>
                                    </div>
                                )}
                            />
                        </MediaUploadCheck>
                        <div className="about-leadership__main-content">
                            <div className="about-leadership__main-text">
                                <RichText
                                    tagName="p"
                                    value={directorMessage1}
                                    onChange={(value) => setAttributes({ directorMessage1: value })}
                                    placeholder={__('Director message 1...', 'ashtech-pages-blocks')}
                                />
                                <RichText
                                    tagName="p"
                                    value={directorMessage2}
                                    onChange={(value) => setAttributes({ directorMessage2: value })}
                                    placeholder={__('Director message 2...', 'ashtech-pages-blocks')}
                                />
                            </div>
                            <div className="about-leadership__main-info">
                                <RichText
                                    tagName="p"
                                    className="about-leadership__main-name"
                                    value={directorName}
                                    onChange={(value) => setAttributes({ directorName: value })}
                                    placeholder={__('Director name...', 'ashtech-pages-blocks')}
                                />
                                <RichText
                                    tagName="p"
                                    className="about-leadership__main-position"
                                    value={directorPosition}
                                    onChange={(value) => setAttributes({ directorPosition: value })}
                                    placeholder={__('Director position...', 'ashtech-pages-blocks')}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Core Team */}
                    <div className="about-leadership__team">
                        {(teamMembers || []).map((member, index) => {
                            const defaultImages = ['team-1.jpg', 'team-2.jpg', 'team-3.jpg', 'team-4.jpg', 'team-5.jpg', 'team-6.jpg'];
                            return (
                                <div key={index} className="about-leadership__team-member">
                                    <MediaUploadCheck>
                                        <MediaUpload
                                            onSelect={(media) => {
                                                const newMembers = [...teamMembers];
                                                newMembers[index].image = media.url;
                                                setAttributes({ teamMembers: newMembers });
                                            }}
                                            allowedTypes={['image']}
                                            render={({ open }) => (
                                                <div className="about-leadership__team-image">
                                                    {member.image ? (
                                                        <img src={member.image} alt={member.name} />
                                                    ) : (
                                                        <img src={`${assetsUrl}images/about/${defaultImages[index] || 'team-1.jpg'}`} alt={member.name} />
                                                    )}
                                                    <Button onClick={open} isSecondary style={{ marginTop: '10px', fontSize: '12px' }}>
                                                        {member.image ? __('Replace', 'ashtech-pages-blocks') : __('Upload', 'ashtech-pages-blocks')}
                                                    </Button>
                                                </div>
                                            )}
                                        />
                                    </MediaUploadCheck>
                                    <div className="about-leadership__team-info">
                                        <RichText
                                            tagName="p"
                                            className="about-leadership__team-name"
                                            value={member.name}
                                            onChange={(value) => {
                                                const newMembers = [...teamMembers];
                                                newMembers[index].name = value;
                                                setAttributes({ teamMembers: newMembers });
                                            }}
                                            placeholder={__('Team member name...', 'ashtech-pages-blocks')}
                                        />
                                        <RichText
                                            tagName="p"
                                            className="about-leadership__team-position"
                                            value={member.position}
                                            onChange={(value) => {
                                                const newMembers = [...teamMembers];
                                                newMembers[index].position = value;
                                                setAttributes({ teamMembers: newMembers });
                                            }}
                                            placeholder={__('Team member position...', 'ashtech-pages-blocks')}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Director's Message Section */}
            <section className="about-director-message">
                <div className="about-director-message__background"></div>
                <div className="about-director-message__container">
                    <div className="about-director-message__header">
                        <RichText
                            tagName="p"
                            className="about-director-message__label animate-text"
                            value={directorMessageLabel}
                            onChange={(value) => setAttributes({ directorMessageLabel: value })}
                            placeholder={__('Director\'s Message', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="h2"
                            className="about-director-message__title animate-text"
                            value={directorMessageTitle}
                            onChange={(value) => setAttributes({ directorMessageTitle: value })}
                            placeholder={__('Crafting a New Legacy', 'ashtech-pages-blocks')}
                        />
                    </div>

                    <div className="about-director-message__content">
                        <div className="about-director-message__text-wrapper">
                            <div className="about-director-message__text">
                                <RichText
                                    tagName="p"
                                    className="animate-text"
                                    value={directorMessageText1}
                                    onChange={(value) => setAttributes({ directorMessageText1: value })}
                                    placeholder={__('Director message text 1...', 'ashtech-pages-blocks')}
                                />
                                <RichText
                                    tagName="p"
                                    className="animate-text"
                                    value={directorMessageText2}
                                    onChange={(value) => setAttributes({ directorMessageText2: value })}
                                    placeholder={__('Director message text 2...', 'ashtech-pages-blocks')}
                                />
                                <RichText
                                    tagName="p"
                                    className="animate-text"
                                    value={directorMessageText3}
                                    onChange={(value) => setAttributes({ directorMessageText3: value })}
                                    placeholder={__('Director message text 3...', 'ashtech-pages-blocks')}
                                />
                                <RichText
                                    tagName="p"
                                    className="animate-text"
                                    value={directorMessageText4}
                                    onChange={(value) => setAttributes({ directorMessageText4: value })}
                                    placeholder={__('Director message text 4...', 'ashtech-pages-blocks')}
                                />
                            </div>
                            <div className="about-director-message__signature">
                                <RichText
                                    tagName="p"
                                    className="about-director-message__name"
                                    value={directorMessageName}
                                    onChange={(value) => setAttributes({ directorMessageName: value })}
                                    placeholder={__('Director name...', 'ashtech-pages-blocks')}
                                />
                                <RichText
                                    tagName="p"
                                    className="about-director-message__position"
                                    value={directorMessagePosition}
                                    onChange={(value) => setAttributes({ directorMessagePosition: value })}
                                    placeholder={__('Director position...', 'ashtech-pages-blocks')}
                                />
                            </div>
                        </div>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={(media) => setAttributes({ directorMessageImage: media.url })}
                                allowedTypes={['image']}
                                render={({ open }) => (
                                    <div className="about-director-message__image">
                                        {directorMessageImage ? (
                                            <img src={directorMessageImage} alt="Director" />
                                        ) : (
                                            <img src={`${assetsUrl}images/about/director-updated.jpg`} alt="Director" />
                                        )}
                                        <Button onClick={open} isPrimary style={{ marginTop: '10px' }}>
                                            {directorMessageImage ? __('Replace Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                        </Button>
                                    </div>
                                )}
                            />
                        </MediaUploadCheck>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="about-projects">
                <div className="project-overview__decoration"></div>
                <div className="about-projects__container">
                    <div className="about-projects__header">
                        <RichText
                            tagName="p"
                            className="about-projects__label animate-text"
                            value={projectsLabel}
                            onChange={(value) => setAttributes({ projectsLabel: value })}
                            placeholder={__('Projects', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="h2"
                            className="about-projects__title animate-text"
                            value={projectsTitle}
                            onChange={(value) => setAttributes({ projectsTitle: value })}
                            placeholder={__('Experience the New Benchmark of Luxury Living', 'ashtech-pages-blocks')}
                        />
                    </div>
                    <div className="about-projects__content">
                        <RichText
                            tagName="p"
                            className="about-projects__description animate-text"
                            value={projectsDescription}
                            onChange={(value) => setAttributes({ projectsDescription: value })}
                            placeholder={__('Projects description...', 'ashtech-pages-blocks')}
                        />
                        <div className="about-projects__button">
                            <a href="project.html" className="btn btn--primary">
                                <RichText
                                    tagName="span"
                                    value={projectsButtonText}
                                    onChange={(value) => setAttributes({ projectsButtonText: value })}
                                    placeholder={__('View Our Project', 'ashtech-pages-blocks')}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M1 1L7 8.5L1 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
