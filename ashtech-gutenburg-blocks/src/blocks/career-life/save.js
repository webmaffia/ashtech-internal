import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { leftTitle, leftText1, leftText2, rightTitle, rightText, footerText, lifeImage } = attributes;

    return (
        <section className="career-life">
            <div className="career-life__container">
                <div className="career-life__left">
                    <RichText.Content tagName="h3" className="career-life__title animate-text" value={leftTitle} />
                    <div className="career-life__text-box">
                        <RichText.Content tagName="p" value={leftText1} />
                        <RichText.Content tagName="p" value={leftText2} />
                    </div>
                </div>
                
                <div className="career-life__image">
                    <img src={lifeImage} alt="Life at Ashtech" />
                </div>
                
                <div className="career-life__right">
                    <RichText.Content tagName="h3" className="career-life__title animate-text" value={rightTitle} />
                    <div className="career-life__text-box">
                        <RichText.Content tagName="p" value={rightText} />
                    </div>
                </div>
            </div>
            
            <div className="career-life__footer-text">
                <RichText.Content tagName="p" className="animate-text" value={footerText} />
            </div>
        </section>
    );
}
