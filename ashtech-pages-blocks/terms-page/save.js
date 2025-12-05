import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { heroTitle, lastUpdated, introText, sections } = attributes;
    const assetsUrl = window.ashtechBlocksData ? window.ashtechBlocksData.assetsUrl : 'assets/';

    return (
        <div {...useBlockProps.save()}>
            {/* Hero Banner Section */}
            <section className="project-hero contactbg">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText.Content 
                        tagName="h1" 
                        className="project-hero__title" 
                        value={heroTitle} 
                    />
                </div>
            </section>

            {/* Terms and Conditions Content */}
            <section className="privacy-policy">
                <div className="privacy-policy__container">
                    <RichText.Content tagName="p" className="privacy-policy__updated" value={lastUpdated} />

                    <div className="privacy-policy__intro">
                        <RichText.Content tagName="p" value={introText} />
                    </div>

                    {(sections || []).map((section, sectionIndex) => (
                        <div key={sectionIndex} className="privacy-policy__section">
                            <RichText.Content tagName="h2" className="privacy-policy__heading" value={section.heading} />
                            
                            {section.subheading1 && (
                                <RichText.Content tagName="h3" className="privacy-policy__subheading" value={section.subheading1} />
                            )}
                            
                            {section.paragraph1 && (
                                <RichText.Content tagName="p" value={section.paragraph1} />
                            )}
                            
                            {section.subheading2 && (
                                <RichText.Content tagName="h3" className="privacy-policy__subheading" value={section.subheading2} />
                            )}
                            
                            {section.paragraph2 && (
                                <RichText.Content tagName="p" value={section.paragraph2} />
                            )}
                            
                            {section.paragraph && (
                                <RichText.Content tagName="p" value={section.paragraph} />
                            )}
                            
                            {section.paragraphs && section.paragraphs.map((para, paraIndex) => (
                                <RichText.Content key={paraIndex} tagName="p" value={para} />
                            ))}
                            
                            {section.listItems && (
                                <ul className={`privacy-policy__list ${sectionIndex === sections.length - 1 ? 'privacy-policy__list--contact' : ''}`}>
                                    {section.listItems.map((item, itemIndex) => (
                                        <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
