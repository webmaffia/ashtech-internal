import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
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
        <div {...useBlockProps.save()}>
            {/* Hero Banner Section */}
            <section className="project-hero aboutbg">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText.Content 
                        tagName="h1" 
                        className="project-hero__title" 
                        value={heroTitle} 
                    />
                    <div className="project-hero__subtitle">
                        <RichText.Content 
                            tagName="p" 
                            className="project-hero__subtitle-main" 
                            value={heroSubtitleMain} 
                        />
                        <RichText.Content 
                            tagName="p" 
                            className="project-hero__subtitle-text" 
                            value={heroSubtitleText} 
                        />
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="about-overview">
                <div className="project-overview__decoration"></div>
                <div className="about-overview__container">
                    <div className="about-overview__header">
                        <RichText.Content tagName="p" className="about-overview__label animate-text" value={overviewLabel} />
                        <RichText.Content 
                            tagName="h2" 
                            className="about-overview__title animate-text" 
                            value={overviewTitle} 
                        />
                    </div>
                    <div className="about-overview__text">
                        <RichText.Content 
                            tagName="p" 
                            className="animate-text" 
                            value={overviewText1} 
                        />
                        <RichText.Content 
                            tagName="p" 
                            className="animate-text" 
                            value={overviewText2} 
                        />
                    </div>
                </div>
            </section>

            {/* Legacy & Values Section */}
            <section className="about-values">
                <div className="about-values__container">
                    <div className="about-values__header">
                        <RichText.Content tagName="p" className="about-values__label animate-text" value={valuesLabel} />
                        <RichText.Content tagName="h2" className="about-values__title animate-text" value={valuesTitle} />
                        <div className="about-values__intro">
                            <RichText.Content tagName="p" className="animate-text" value={valuesIntro1} />
                            <RichText.Content tagName="p" className="animate-text" value={valuesIntro2} />
                        </div>
                    </div>
                    
                    <div className="about-values__graphic">
                        <img src={`${assetsUrl}images/about/values-graphic.svg`} alt="Values Graphic" className="about-values__graphic-image" />
                        <div className="about-values__items">
                            {(values || []).map((value, index) => {
                                const positions = ['about-values__item--left about-values__item--1', 'about-values__item--left about-values__item--2', 'about-values__item--left about-values__item--3', 'about-values__item--right about-values__item--4', 'about-values__item--right about-values__item--5', 'about-values__item--right about-values__item--6'];
                                return (
                                    <div key={index} className={`about-values__item ${positions[index] || ''}`}>
                                        <RichText.Content tagName="p" className="about-values__item-text" value={value} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="about-values__footer">
                        <RichText.Content tagName="p" className="animate-text" value={valuesFooter} />
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="about-vision-mission">
                <div className="about-vision-mission__container">
                    <div className="about-vision-mission__vision">
                        <RichText.Content tagName="h3" className="about-vision-mission__title" value={visionTitle} />
                        <div className="about-vision-mission__content">
                            <RichText.Content tagName="p" value={visionText1} />
                            <RichText.Content tagName="p" value={visionText2} />
                        </div>
                    </div>
                    
                    <div className="about-vision-mission__image">
                        <img src={visionImage || `${assetsUrl}images/about/overview-pattern.png`} alt="Building" />
                    </div>
                    
                    <div className="about-vision-mission__mission">
                        <RichText.Content tagName="h3" className="about-vision-mission__title" value={missionTitle} />
                        <div className="about-vision-mission__content">
                            <RichText.Content tagName="p" value={missionText1} />
                            <RichText.Content tagName="p" value={missionText2} />
                        </div>
                    </div>
                </div>
            </section>

            {/* History Timeline Section */}
            <section className="about-history">
                {(timelineItems && timelineItems.length > 0) && (
                    <>
                        <div className="about-history__image-container">
                            <img src={timelineItems[0].image || `${assetsUrl}images/about/history-1.jpg`} alt="Timeline" className="about-history__image" id="historyImage" />
                        </div>
                        
                        <div className="about-history__content-box">
                            <RichText.Content tagName="h3" className="about-history__title" id="historyTitle" value={timelineItems[0].title} />
                            <RichText.Content tagName="p" className="about-history__description" id="historyDescription" value={timelineItems[0].description} />
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
                                    <RichText.Content tagName="p" className="about-history__timeline-year" value={item.year} />
                                    <div className="about-history__timeline-dot"></div>
                                    <RichText.Content tagName="p" className="about-history__timeline-label" value={item.label} />
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
                        <RichText.Content tagName="p" className="about-leadership__label animate-text" value={leadershipLabel} />
                        <RichText.Content tagName="h2" className="about-leadership__title animate-text" value={leadershipTitle} />
                    </div>

                    {/* Main Director */}
                    <div className="about-leadership__main">
                        <div className="about-leadership__main-image">
                            <img src={directorImage || `${assetsUrl}images/about/director-sumit.jpg`} alt="Director" />
                        </div>
                        <div className="about-leadership__main-content">
                            <div className="about-leadership__main-text">
                                <RichText.Content tagName="p" value={directorMessage1} />
                                <RichText.Content tagName="p" value={directorMessage2} />
                            </div>
                            <div className="about-leadership__main-info">
                                <RichText.Content tagName="p" className="about-leadership__main-name" value={directorName} />
                                <RichText.Content tagName="p" className="about-leadership__main-position" value={directorPosition} />
                            </div>
                        </div>
                    </div>

                    {/* Core Team */}
                    <div className="about-leadership__team">
                        {(teamMembers || []).map((member, index) => {
                            const defaultImages = ['team-1.jpg', 'team-2.jpg', 'team-3.jpg', 'team-4.jpg', 'team-5.jpg', 'team-6.jpg'];
                            return (
                                <div key={index} className="about-leadership__team-member">
                                    <div className="about-leadership__team-image">
                                        <img src={member.image || `${assetsUrl}images/about/${defaultImages[index] || 'team-1.jpg'}`} alt={member.name} />
                                    </div>
                                    <div className="about-leadership__team-info">
                                        <RichText.Content tagName="p" className="about-leadership__team-name" value={member.name} />
                                        <RichText.Content tagName="p" className="about-leadership__team-position" value={member.position} />
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
                        <RichText.Content tagName="p" className="about-director-message__label animate-text" value={directorMessageLabel} />
                        <RichText.Content tagName="h2" className="about-director-message__title animate-text" value={directorMessageTitle} />
                    </div>

                    <div className="about-director-message__content">
                        <div className="about-director-message__text-wrapper">
                            <div className="about-director-message__text">
                                <RichText.Content tagName="p" className="animate-text" value={directorMessageText1} />
                                <RichText.Content tagName="p" className="animate-text" value={directorMessageText2} />
                                <RichText.Content tagName="p" className="animate-text" value={directorMessageText3} />
                                <RichText.Content tagName="p" className="animate-text" value={directorMessageText4} />
                            </div>
                            <div className="about-director-message__signature">
                                <RichText.Content tagName="p" className="about-director-message__name" value={directorMessageName} />
                                <RichText.Content tagName="p" className="about-director-message__position" value={directorMessagePosition} />
                            </div>
                        </div>
                        <div className="about-director-message__image">
                            <img src={directorMessageImage || `${assetsUrl}images/about/director-updated.jpg`} alt="Director" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="about-projects">
                <div className="project-overview__decoration"></div>
                <div className="about-projects__container">
                    <div className="about-projects__header">
                        <RichText.Content tagName="p" className="about-projects__label animate-text" value={projectsLabel} />
                        <RichText.Content tagName="h2" className="about-projects__title animate-text" value={projectsTitle} />
                    </div>
                    <div className="about-projects__content">
                        <RichText.Content tagName="p" className="about-projects__description animate-text" value={projectsDescription} />
                        <div className="about-projects__button">
                            <a href="project.html" className="btn btn--primary">
                                <RichText.Content tagName="span" value={projectsButtonText} />
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
