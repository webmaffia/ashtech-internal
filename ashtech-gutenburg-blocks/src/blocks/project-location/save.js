import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, description, mapUrl } = attributes;

    return (
        <section id="location" className="project-location">
            <div className="project-location__container">
                <div className="project-location__header">
                    <div className="project-location__header-left">
                        <RichText.Content tagName="span" className="project-location__label animate-text" value={label} />
                        <RichText.Content tagName="h2" className="project-location__title animate-text" value={title} />
                    </div>
                    <div className="project-location__header-right">
                        <RichText.Content tagName="p" className="project-location__description animate-text" value={description} />
                    </div>
                </div>
                <div className="project-location__map">
                    <iframe 
                        src={mapUrl}
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ashtech Presidential Towers Location - Sector 12, Greater Noida West">
                    </iframe>
                </div>
                <div className="project-location__connectivity">
                    <div className="project-location__slider">
                        <div className="project-location__slider-track">
                            <div className="project-location__item">
                                <div className="project-location__item-icon"><img src="assets/images/project/location-expressway.svg" alt="Expressway" /></div>
                                <p className="project-location__item-text">20 minutes from NH 24 Expressway</p>
                            </div>
                            <div className="project-location__item">
                                <div className="project-location__item-icon"><img src="assets/images/project/location-schools.svg" alt="Schools" /></div>
                                <p className="project-location__item-text">Close to leading schools and hospitals</p>
                            </div>
                            <div className="project-location__item">
                                <div className="project-location__item-icon"><img src="assets/images/project/location-noida.svg" alt="Noida" /></div>
                                <p className="project-location__item-text">20 minutes from Sector 18, Greater Noida</p>
                            </div>
                            <div className="project-location__item">
                                <div className="project-location__item-icon"><img src="assets/images/project/location-corporate.svg" alt="Corporate" /></div>
                                <p className="project-location__item-text">Well-connected to IT, corporate & retail hubs</p>
                            </div>
                            <div className="project-location__item">
                                <div className="project-location__item-icon"><img src="assets/images/project/location-airport.svg" alt="Airport" /></div>
                                <p className="project-location__item-text">25 minutes from Noida International Airport</p>
                            </div>
                            <div className="project-location__item">
                                <div className="project-location__item-icon"><img src="assets/images/project/location-airport.svg" alt="Airport" /></div>
                                <p className="project-location__item-text">25 minutes from Hindon Airport</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

