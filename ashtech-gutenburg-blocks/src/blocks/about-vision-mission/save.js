import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { visionTitle, visionText, visionImage, missionTitle, missionText, missionImage } = attributes;

    return (
        <section className="about-vision-mission">
            <div className="about-vision-mission__container">
                <div className="about-vision-mission__section about-vision-mission__vision">
                    <div className="about-vision-mission__image">
                        <img src={visionImage} alt="Vision" />
                    </div>
                    <div className="about-vision-mission__content">
                        <RichText.Content
                            tagName="h2"
                            className="about-vision-mission__title animate-text"
                            value={visionTitle}
                        />
                        <RichText.Content
                            tagName="p"
                            className="about-vision-mission__text animate-text"
                            value={visionText}
                        />
                    </div>
                </div>

                <div className="about-vision-mission__section about-vision-mission__mission">
                    <div className="about-vision-mission__image about-vision-mission__image--right">
                        <img src={missionImage} alt="Mission" />
                    </div>
                    <div className="about-vision-mission__content about-vision-mission__content--right">
                        <RichText.Content
                            tagName="h2"
                            className="about-vision-mission__title animate-text"
                            value={missionTitle}
                        />
                        <RichText.Content
                            tagName="p"
                            className="about-vision-mission__text animate-text"
                            value={missionText}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
