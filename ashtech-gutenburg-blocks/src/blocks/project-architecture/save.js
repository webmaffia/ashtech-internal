import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, description, tab1Text, tab2Text, tab3Text, tab4Text, content1Title, content1Desc, content1Image, content2Title, content2Desc, content2Image, content3Title, content3Desc, content3Image, content4Title, content4Desc, content4Image } = attributes;

    return (
        <section className="project-architecture" id="architecture">
            <div className="project-architecture__container">
                <div className="project-architecture__header">
                    <div className="project-architecture__header-left">
                        <RichText.Content tagName="p" className="project-architecture__label animate-text" value={label} />
                        <RichText.Content tagName="h2" className="project-architecture__title animate-text" value={title} />
                    </div>
                    <div className="project-architecture__header-right">
                        <RichText.Content tagName="p" className="project-architecture__description animate-text" value={description} />
                    </div>
                </div>
                
                <div className="project-architecture__tabs">
                    <div className="project-architecture__tab-list">
                        <button className="project-architecture__tab-button project-architecture__tab-button--active" data-tab="structure">
                            <div className="project-architecture__tab-icon"><img src="assets/images/project/tab-icon-1.svg" alt="" /></div>
                            <RichText.Content tagName="span" className="project-architecture__tab-text" value={tab1Text} />
                        </button>
                        <button className="project-architecture__tab-button" data-tab="facade">
                            <div className="project-architecture__tab-icon"><img src="assets/images/project/tab-icon-2.svg" alt="" /></div>
                            <RichText.Content tagName="span" className="project-architecture__tab-text" value={tab2Text} />
                        </button>
                        <button className="project-architecture__tab-button" data-tab="planning">
                            <div className="project-architecture__tab-icon"><img src="assets/images/project/tab-icon-3.svg" alt="" /></div>
                            <RichText.Content tagName="span" className="project-architecture__tab-text" value={tab3Text} />
                        </button>
                        <button className="project-architecture__tab-button" data-tab="sustainability">
                            <div className="project-architecture__tab-icon"><img src="assets/images/project/tab-icon-4.svg" alt="" /></div>
                            <RichText.Content tagName="span" className="project-architecture__tab-text" value={tab4Text} />
                        </button>
                    </div>
                    
                    <div className="project-architecture__tab-content project-architecture__tab-content--active" data-content="structure">
                        <div className="project-architecture__content-image"><img src={content1Image} alt="Building Structure" /></div>
                        <div className="project-architecture__content-text">
                            <RichText.Content tagName="h3" className="project-architecture__content-title animate-text" value={content1Title} />
                            <RichText.Content tagName="p" className="project-architecture__content-desc animate-text" value={content1Desc} />
                        </div>
                    </div>
                    
                    <div className="project-architecture__tab-content" data-content="facade">
                        <div className="project-architecture__content-image"><img src={content2Image} alt="Building Facade" /></div>
                        <div className="project-architecture__content-text">
                            <RichText.Content tagName="h3" className="project-architecture__content-title animate-text" value={content2Title} />
                            <RichText.Content tagName="p" className="project-architecture__content-desc animate-text" value={content2Desc} />
                        </div>
                    </div>
                    
                    <div className="project-architecture__tab-content" data-content="planning">
                        <div className="project-architecture__content-image"><img src={content3Image} alt="Master Planning" /></div>
                        <div className="project-architecture__content-text">
                            <RichText.Content tagName="h3" className="project-architecture__content-title animate-text" value={content3Title} />
                            <RichText.Content tagName="p" className="project-architecture__content-desc animate-text" value={content3Desc} />
                        </div>
                    </div>
                    
                    <div className="project-architecture__tab-content" data-content="sustainability">
                        <div className="project-architecture__content-image"><img src={content4Image} alt="Sustainability Features" /></div>
                        <div className="project-architecture__content-text">
                            <RichText.Content tagName="h3" className="project-architecture__content-title animate-text" value={content4Title} />
                            <RichText.Content tagName="p" className="project-architecture__content-desc animate-text" value={content4Desc} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
