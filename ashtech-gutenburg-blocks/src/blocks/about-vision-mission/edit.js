import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { visionTitle, visionText, visionImage, missionTitle, missionText, missionImage } = attributes;

    return (
        <div {...blockProps}>
            <section className="about-vision-mission">
                <div className="about-vision-mission__container">
                    <div className="about-vision-mission__section about-vision-mission__vision">
                        <div className="about-vision-mission__image">
                            <img src={visionImage} alt="Vision" />
                        </div>
                        <div className="about-vision-mission__content">
                            <RichText
                                tagName="h2"
                                className="about-vision-mission__title animate-text"
                                value={visionTitle}
                                onChange={(value) => setAttributes({ visionTitle: value })}
                                placeholder="Vision title..."
                            />
                            <RichText
                                tagName="p"
                                className="about-vision-mission__text animate-text"
                                value={visionText}
                                onChange={(value) => setAttributes({ visionText: value })}
                                placeholder="Vision text..."
                            />
                        </div>
                    </div>

                    <div className="about-vision-mission__section about-vision-mission__mission">
                        <div className="about-vision-mission__image about-vision-mission__image--right">
                            <img src={missionImage} alt="Mission" />
                        </div>
                        <div className="about-vision-mission__content about-vision-mission__content--right">
                            <RichText
                                tagName="h2"
                                className="about-vision-mission__title animate-text"
                                value={missionTitle}
                                onChange={(value) => setAttributes({ missionTitle: value })}
                                placeholder="Mission title..."
                            />
                            <RichText
                                tagName="p"
                                className="about-vision-mission__text animate-text"
                                value={missionText}
                                onChange={(value) => setAttributes({ missionText: value })}
                                placeholder="Mission text..."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
