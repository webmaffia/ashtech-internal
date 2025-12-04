import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { leftTitle, leftText1, leftText2, rightTitle, rightText, footerText, lifeImage } = attributes;

    return (
        <div {...blockProps}>
            <section className="career-life">
                <div className="career-life__container">
                    <div className="career-life__left">
                        <RichText tagName="h3" className="career-life__title animate-text" value={leftTitle} onChange={(value) => setAttributes({ leftTitle: value })} placeholder="Left title..." />
                        <div className="career-life__text-box">
                            <RichText tagName="p" value={leftText1} onChange={(value) => setAttributes({ leftText1: value })} placeholder="Left text 1..." />
                            <RichText tagName="p" value={leftText2} onChange={(value) => setAttributes({ leftText2: value })} placeholder="Left text 2..." />
                        </div>
                    </div>
                    
                    <div className="career-life__image">
                        <img src={lifeImage} alt="Life at Ashtech" />
                    </div>
                    
                    <div className="career-life__right">
                        <RichText tagName="h3" className="career-life__title animate-text" value={rightTitle} onChange={(value) => setAttributes({ rightTitle: value })} placeholder="Right title..." />
                        <div className="career-life__text-box">
                            <RichText tagName="p" value={rightText} onChange={(value) => setAttributes({ rightText: value })} placeholder="Right text..." />
                        </div>
                    </div>
                </div>
                
                <div className="career-life__footer-text">
                    <RichText tagName="p" className="animate-text" value={footerText} onChange={(value) => setAttributes({ footerText: value })} placeholder="Footer text..." allowedFormats={['core/bold', 'core/italic']} />
                </div>
            </section>
        </div>
    );
}
