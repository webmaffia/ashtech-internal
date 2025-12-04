import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, description, buttonText, tab1Text, tab2Text, tab3Text, tab4Text, wellness1, wellness2, wellness3, wellness4 } = attributes;

    return (
        <div {...blockProps}>
            <section className="experiences" id="experiences">
                <div className="project-about__decoration"></div>
                
                <div className="experiences__header">
                    <div className="experiences__header-left">
                        <RichText tagName="p" className="experiences__label" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Label..." />
                        <RichText tagName="h2" className="experiences__title" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Title..." />
                    </div>
                    
                    <div className="experiences__header-right">
                        <RichText tagName="p" className="experiences__description" value={description} onChange={(value) => setAttributes({ description: value })} placeholder="Description..." />
                        <button className="btn btn--primary">
                            <RichText tagName="span" value={buttonText} onChange={(value) => setAttributes({ buttonText: value })} placeholder="Button..." />
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div className="experiences__tabs">
                    <div className="experiences__tab-list">
                        <button className="experiences__tab-button experiences__tab-button--active">
                            <div className="experiences__tab-icon"><img src="assets/images/project/arrow-right.svg" alt="" /></div>
                            <RichText tagName="span" className="experiences__tab-text" value={tab1Text} onChange={(value) => setAttributes({ tab1Text: value })} placeholder="Tab 1..." />
                        </button>
                        <button className="experiences__tab-button">
                            <div className="experiences__tab-icon"><img src="assets/images/project/arrow-right.svg" alt="" /></div>
                            <RichText tagName="span" className="experiences__tab-text" value={tab2Text} onChange={(value) => setAttributes({ tab2Text: value })} placeholder="Tab 2..." />
                        </button>
                        <button className="experiences__tab-button">
                            <div className="experiences__tab-icon"><img src="assets/images/project/arrow-right.svg" alt="" /></div>
                            <RichText tagName="span" className="experiences__tab-text" value={tab3Text} onChange={(value) => setAttributes({ tab3Text: value })} placeholder="Tab 3..." />
                        </button>
                        <button className="experiences__tab-button">
                            <div className="experiences__tab-icon"><img src="assets/images/project/arrow-right.svg" alt="" /></div>
                            <RichText tagName="span" className="experiences__tab-text" value={tab4Text} onChange={(value) => setAttributes({ tab4Text: value })} placeholder="Tab 4..." />
                        </button>
                    </div>
                    
                    <div className="experiences__tab-content experiences__tab-content--active">
                        <div className="experiences__features">
                            <div className="feature-card">
                                <div className="feature-card__icon"><img src="assets/images/project/wellness-pool.svg" alt="Pool icon" /></div>
                                <RichText tagName="p" className="feature-card__text" value={wellness1} onChange={(value) => setAttributes({ wellness1: value })} placeholder="Feature 1..." allowedFormats={['core/bold', 'core/italic']} />
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon"><img src="assets/images/project/wellness-spa-1.svg" alt="Spa icon" /></div>
                                <RichText tagName="p" className="feature-card__text" value={wellness2} onChange={(value) => setAttributes({ wellness2: value })} placeholder="Feature 2..." allowedFormats={['core/bold', 'core/italic']} />
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon"><img src="assets/images/project/wellness-steam.svg" alt="Steam icon" /></div>
                                <RichText tagName="p" className="feature-card__text" value={wellness3} onChange={(value) => setAttributes({ wellness3: value })} placeholder="Feature 3..." />
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon"><img src="assets/images/project/wellness-yoga.svg" alt="Yoga icon" /></div>
                                <RichText tagName="p" className="feature-card__text" value={wellness4} onChange={(value) => setAttributes({ wellness4: value })} placeholder="Feature 4..." />
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ marginTop: '20px', padding: '15px', background: '#f0f0f0', borderRadius: '4px', fontSize: '12px' }}>
                        <strong>📝 Note:</strong> Wellness tab shown (4 features editable). Other tabs (Movement, Culture, Ease) have their own features and render on frontend.
                    </div>
                </div>
            </section>
        </div>
    );
}
