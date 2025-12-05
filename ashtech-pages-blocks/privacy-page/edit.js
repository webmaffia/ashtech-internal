import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { heroTitle, lastUpdated, introText1, introText2, sections } = attributes;
    const assetsUrl = window.ashtechBlocksData ? window.ashtechBlocksData.assetsUrl : 'assets/';

    return (
        <div {...useBlockProps()}>
            {/* Hero Banner Section */}
            <section className="project-hero contactbg">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText
                        tagName="h1"
                        className="project-hero__title"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('Privacy Policy', 'ashtech-pages-blocks')}
                    />
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="privacy-policy">
                <div className="privacy-policy__container">
                    <RichText
                        tagName="p"
                        className="privacy-policy__updated"
                        value={lastUpdated}
                        onChange={(value) => setAttributes({ lastUpdated: value })}
                        placeholder={__('Last updated: ...', 'ashtech-pages-blocks')}
                    />

                    <div className="privacy-policy__intro">
                        <RichText
                            tagName="p"
                            value={introText1}
                            onChange={(value) => setAttributes({ introText1: value })}
                            placeholder={__('Intro text 1...', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="p"
                            value={introText2}
                            onChange={(value) => setAttributes({ introText2: value })}
                            placeholder={__('Intro text 2...', 'ashtech-pages-blocks')}
                        />
                    </div>

                    {(sections || []).map((section, sectionIndex) => (
                        <div key={sectionIndex} className="privacy-policy__section">
                            {section.heading && (
                                <RichText
                                    tagName="h2"
                                    className="privacy-policy__heading"
                                    value={section.heading}
                                    onChange={(value) => {
                                        const newSections = [...(sections || [])];
                                        newSections[sectionIndex].heading = value;
                                        setAttributes({ sections: newSections });
                                    }}
                                    placeholder={__('Section heading...', 'ashtech-pages-blocks')}
                                />
                            )}
                            
                            {section.subheading1 && (
                                <RichText
                                    tagName="h3"
                                    className="privacy-policy__subheading"
                                    value={section.subheading1}
                                    onChange={(value) => {
                                        const newSections = [...(sections || [])];
                                        newSections[sectionIndex].subheading1 = value;
                                        setAttributes({ sections: newSections });
                                    }}
                                    placeholder={__('Subheading...', 'ashtech-pages-blocks')}
                                />
                            )}
                            
                            {section.subheadingSmall1 && (
                                <RichText
                                    tagName="h4"
                                    className="privacy-policy__subheading-small"
                                    value={section.subheadingSmall1}
                                    onChange={(value) => {
                                        const newSections = [...(sections || [])];
                                        newSections[sectionIndex].subheadingSmall1 = value;
                                        setAttributes({ sections: newSections });
                                    }}
                                    placeholder={__('Small subheading...', 'ashtech-pages-blocks')}
                                />
                            )}
                            
                            {section.paragraph1 && (
                                <RichText
                                    tagName="p"
                                    value={section.paragraph1}
                                    onChange={(value) => {
                                        const newSections = [...(sections || [])];
                                        newSections[sectionIndex].paragraph1 = value;
                                        setAttributes({ sections: newSections });
                                    }}
                                    placeholder={__('Paragraph...', 'ashtech-pages-blocks')}
                                />
                            )}
                            
                            {section.subheadingSmall2 && (
                                <RichText
                                    tagName="h4"
                                    className="privacy-policy__subheading-small"
                                    value={section.subheadingSmall2}
                                    onChange={(value) => {
                                        const newSections = [...(sections || [])];
                                        newSections[sectionIndex].subheadingSmall2 = value;
                                        setAttributes({ sections: newSections });
                                    }}
                                    placeholder={__('Small subheading...', 'ashtech-pages-blocks')}
                                />
                            )}
                            
                            {section.subheadingSmall3 && (
                                <RichText
                                    tagName="h4"
                                    className="privacy-policy__subheading-small"
                                    value={section.subheadingSmall3}
                                    onChange={(value) => {
                                        const newSections = [...(sections || [])];
                                        newSections[sectionIndex].subheadingSmall3 = value;
                                        setAttributes({ sections: newSections });
                                    }}
                                    placeholder={__('Small subheading...', 'ashtech-pages-blocks')}
                                />
                            )}
                            
                            {section.paragraph2 && (
                                <RichText
                                    tagName="p"
                                    value={section.paragraph2}
                                    onChange={(value) => {
                                        const newSections = [...(sections || [])];
                                        newSections[sectionIndex].paragraph2 = value;
                                        setAttributes({ sections: newSections });
                                    }}
                                    placeholder={__('Paragraph...', 'ashtech-pages-blocks')}
                                />
                            )}
                            
                            {section.paragraph3 && (
                                <RichText
                                    tagName="p"
                                    value={section.paragraph3}
                                    onChange={(value) => {
                                        const newSections = [...(sections || [])];
                                        newSections[sectionIndex].paragraph3 = value;
                                        setAttributes({ sections: newSections });
                                    }}
                                    placeholder={__('Paragraph...', 'ashtech-pages-blocks')}
                                />
                            )}
                            
                            {section.paragraph && (
                                <RichText
                                    tagName="p"
                                    value={section.paragraph}
                                    onChange={(value) => {
                                        const newSections = [...(sections || [])];
                                        newSections[sectionIndex].paragraph = value;
                                        setAttributes({ sections: newSections });
                                    }}
                                    placeholder={__('Paragraph...', 'ashtech-pages-blocks')}
                                />
                            )}
                            
                            {section.paragraphs && section.paragraphs.map((para, paraIndex) => (
                                <RichText
                                    key={paraIndex}
                                    tagName="p"
                                    value={para}
                                    onChange={(value) => {
                                        const newSections = [...(sections || [])];
                                        newSections[sectionIndex].paragraphs[paraIndex] = value;
                                        setAttributes({ sections: newSections });
                                    }}
                                    placeholder={__('Paragraph...', 'ashtech-pages-blocks')}
                                />
                            ))}
                            
                            {section.paragraphs2 && section.paragraphs2.map((para, paraIndex) => (
                                <RichText
                                    key={paraIndex}
                                    tagName="p"
                                    value={para}
                                    onChange={(value) => {
                                        const newSections = [...(sections || [])];
                                        newSections[sectionIndex].paragraphs2[paraIndex] = value;
                                        setAttributes({ sections: newSections });
                                    }}
                                    placeholder={__('Paragraph...', 'ashtech-pages-blocks')}
                                />
                            ))}
                            
                            {section.listItems && (
                                <ul className={`privacy-policy__list ${sectionIndex === sections.length - 1 ? 'privacy-policy__list--contact' : ''}`}>
                                    {section.listItems.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <RichText
                                                tagName="span"
                                                value={item}
                                                onChange={(value) => {
                                                    const newSections = [...(sections || [])];
                                                    newSections[sectionIndex].listItems[itemIndex] = value;
                                                    setAttributes({ sections: newSections });
                                                }}
                                                placeholder={__('List item...', 'ashtech-pages-blocks')}
                                            />
                                            <Button
                                                onClick={() => {
                                                    const newSections = [...(sections || [])];
                                                    newSections[sectionIndex].listItems.splice(itemIndex, 1);
                                                    setAttributes({ sections: newSections });
                                                }}
                                                isDestructive
                                                isSmall
                                                style={{ marginLeft: '10px' }}
                                            >
                                                {__('Remove', 'ashtech-pages-blocks')}
                                            </Button>
                                        </li>
                                    ))}
                                    <li>
                                        <Button
                                            onClick={() => {
                                                const newSections = [...(sections || [])];
                                                if (!newSections[sectionIndex].listItems) {
                                                    newSections[sectionIndex].listItems = [];
                                                }
                                                newSections[sectionIndex].listItems.push('');
                                                setAttributes({ sections: newSections });
                                            }}
                                            isSecondary
                                            isSmall
                                        >
                                            {__('Add List Item', 'ashtech-pages-blocks')}
                                        </Button>
                                    </li>
                                </ul>
                            )}
                            
                            {section.listItems1 && (
                                <ul className="privacy-policy__list">
                                    {section.listItems1.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <RichText
                                                tagName="span"
                                                value={item}
                                                onChange={(value) => {
                                                    const newSections = [...(sections || [])];
                                                    newSections[sectionIndex].listItems1[itemIndex] = value;
                                                    setAttributes({ sections: newSections });
                                                }}
                                                placeholder={__('List item...', 'ashtech-pages-blocks')}
                                            />
                                            <Button
                                                onClick={() => {
                                                    const newSections = [...(sections || [])];
                                                    newSections[sectionIndex].listItems1.splice(itemIndex, 1);
                                                    setAttributes({ sections: newSections });
                                                }}
                                                isDestructive
                                                isSmall
                                                style={{ marginLeft: '10px' }}
                                            >
                                                {__('Remove', 'ashtech-pages-blocks')}
                                            </Button>
                                        </li>
                                    ))}
                                    <li>
                                        <Button
                                            onClick={() => {
                                                const newSections = [...(sections || [])];
                                                if (!newSections[sectionIndex].listItems1) {
                                                    newSections[sectionIndex].listItems1 = [];
                                                }
                                                newSections[sectionIndex].listItems1.push('');
                                                setAttributes({ sections: newSections });
                                            }}
                                            isSecondary
                                            isSmall
                                        >
                                            {__('Add List Item', 'ashtech-pages-blocks')}
                                        </Button>
                                    </li>
                                </ul>
                            )}
                            
                            {section.listItems2 && (
                                <ul className="privacy-policy__list">
                                    {section.listItems2.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <RichText
                                                tagName="span"
                                                value={item}
                                                onChange={(value) => {
                                                    const newSections = [...(sections || [])];
                                                    newSections[sectionIndex].listItems2[itemIndex] = value;
                                                    setAttributes({ sections: newSections });
                                                }}
                                                placeholder={__('List item...', 'ashtech-pages-blocks')}
                                            />
                                            <Button
                                                onClick={() => {
                                                    const newSections = [...(sections || [])];
                                                    newSections[sectionIndex].listItems2.splice(itemIndex, 1);
                                                    setAttributes({ sections: newSections });
                                                }}
                                                isDestructive
                                                isSmall
                                                style={{ marginLeft: '10px' }}
                                            >
                                                {__('Remove', 'ashtech-pages-blocks')}
                                            </Button>
                                        </li>
                                    ))}
                                    <li>
                                        <Button
                                            onClick={() => {
                                                const newSections = [...(sections || [])];
                                                if (!newSections[sectionIndex].listItems2) {
                                                    newSections[sectionIndex].listItems2 = [];
                                                }
                                                newSections[sectionIndex].listItems2.push('');
                                                setAttributes({ sections: newSections });
                                            }}
                                            isSecondary
                                            isSmall
                                        >
                                            {__('Add List Item', 'ashtech-pages-blocks')}
                                        </Button>
                                    </li>
                                </ul>
                            )}
                            
                            <div style={{ marginTop: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '4px' }}>
                                <Button
                                    onClick={() => {
                                        const newSections = [...(sections || [])];
                                        if (!newSections[sectionIndex].paragraphs) {
                                            newSections[sectionIndex].paragraphs = [];
                                        }
                                        newSections[sectionIndex].paragraphs.push('');
                                        setAttributes({ sections: newSections });
                                    }}
                                    isSecondary
                                    isSmall
                                    style={{ marginRight: '10px' }}
                                >
                                    {__('Add Paragraph', 'ashtech-pages-blocks')}
                                </Button>
                                <Button
                                    onClick={() => {
                                        const newSections = [...(sections || [])];
                                        newSections.splice(sectionIndex, 1);
                                        setAttributes({ sections: newSections });
                                    }}
                                    isDestructive
                                    isSmall
                                >
                                    {__('Remove Section', 'ashtech-pages-blocks')}
                                </Button>
                            </div>
                        </div>
                    ))}
                    
                    <Button
                        onClick={() => {
                            const newSections = [...(sections || [])];
                            newSections.push({ heading: '', paragraphs: [''] });
                            setAttributes({ sections: newSections });
                        }}
                        isPrimary
                        style={{ marginTop: '20px' }}
                    >
                        {__('Add New Section', 'ashtech-pages-blocks')}
                    </Button>
                </div>
            </section>
        </div>
    );
}
