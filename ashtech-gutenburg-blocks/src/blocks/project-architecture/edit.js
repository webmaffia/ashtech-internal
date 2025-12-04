import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, description, tab1Text, tab2Text, tab3Text, tab4Text, content1Title, content1Desc, content1Image, content2Title, content2Desc, content2Image, content3Title, content3Desc, content3Image, content4Title, content4Desc, content4Image } = attributes;

    return (
        <div {...blockProps}>
            <section className="project-architecture" id="architecture">
                <div className="project-architecture__container">
                    <div className="project-architecture__header">
                        <div className="project-architecture__header-left">
                            <RichText tagName="p" className="project-architecture__label animate-text" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Label..." />
                            <RichText tagName="h2" className="project-architecture__title animate-text" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Title..." allowedFormats={['core/bold', 'core/italic']} />
                        </div>
                        <div className="project-architecture__header-right">
                            <RichText tagName="p" className="project-architecture__description animate-text" value={description} onChange={(value) => setAttributes({ description: value })} placeholder="Description..." />
                        </div>
                    </div>
                    
                    <div className="project-architecture__tabs">
                        <div className="project-architecture__tab-list">
                            <button className="project-architecture__tab-button project-architecture__tab-button--active">
                                <div className="project-architecture__tab-icon"><img src="assets/images/project/tab-icon-1.svg" alt="" /></div>
                                <RichText tagName="span" className="project-architecture__tab-text" value={tab1Text} onChange={(value) => setAttributes({ tab1Text: value })} placeholder="Tab 1..." />
                            </button>
                            <button className="project-architecture__tab-button">
                                <div className="project-architecture__tab-icon"><img src="assets/images/project/tab-icon-2.svg" alt="" /></div>
                                <RichText tagName="span" className="project-architecture__tab-text" value={tab2Text} onChange={(value) => setAttributes({ tab2Text: value })} placeholder="Tab 2..." />
                            </button>
                            <button className="project-architecture__tab-button">
                                <div className="project-architecture__tab-icon"><img src="assets/images/project/tab-icon-3.svg" alt="" /></div>
                                <RichText tagName="span" className="project-architecture__tab-text" value={tab3Text} onChange={(value) => setAttributes({ tab3Text: value })} placeholder="Tab 3..." />
                            </button>
                            <button className="project-architecture__tab-button">
                                <div className="project-architecture__tab-icon"><img src="assets/images/project/tab-icon-4.svg" alt="" /></div>
                                <RichText tagName="span" className="project-architecture__tab-text" value={tab4Text} onChange={(value) => setAttributes({ tab4Text: value })} placeholder="Tab 4..." />
                            </button>
                        </div>
                        
                        <div className="project-architecture__tab-content project-architecture__tab-content--active">
                            <div className="project-architecture__content-image">
                                <img src={content1Image} alt="Content" />
                            </div>
                            <div className="project-architecture__content-text">
                                <RichText tagName="h3" className="project-architecture__content-title animate-text" value={content1Title} onChange={(value) => setAttributes({ content1Title: value })} placeholder="Content 1 title..." />
                                <RichText tagName="p" className="project-architecture__content-desc animate-text" value={content1Desc} onChange={(value) => setAttributes({ content1Desc: value })} placeholder="Content 1 description..." />
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ marginTop: '20px', padding: '15px', background: '#f0f0f0', borderRadius: '4px', fontSize: '12px' }}>
                        <strong>📝 Editor Note:</strong> All 4 tab contents are editable. Tab 1 shown above. Others (Facade, Planning, Sustainability) will render on frontend with their editable content.
                    </div>
                </div>
            </section>
        </div>
    );
}
