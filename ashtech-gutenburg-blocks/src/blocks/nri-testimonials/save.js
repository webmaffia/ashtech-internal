import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, test1Text, test1Name, test2Text, test2Name, test3Text, test3Name, footerText } = attributes;

    return (
        <section className="nri-testimonials">
            <div className="nri-testimonials__decoration"></div>
            <div className="nri-testimonials__container">
                <div className="nri-testimonials__header">
                    <RichText.Content tagName="span" className="nri-testimonials__label animate-text" value={label} />
                    <RichText.Content tagName="h2" className="nri-testimonials__title animate-text" value={title} />
                </div>
                <div className="nri-testimonials__cards">
                    <div className="tm-item">
                        <div className="nri-testimonials__card animate-text">
                            <div className="nri-testimonials__card-quote"><img src="assets/images/nri/nri-quote.svg" alt="Quote" /></div>
                            <RichText.Content tagName="p" className="nri-testimonials__card-text" value={test1Text} />
                            <div className="nri-testimonials__card-author">
                                <div className="nri-testimonials__card-avatar"><img src="assets/images/nri/nri-avatar.png" alt="Avatar" /></div>
                                <div className="nri-testimonials__card-info">
                                    <RichText.Content tagName="p" className="nri-testimonials__card-name" value={test1Name} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tm-item">
                        <div className="nri-testimonials__card animate-text">
                            <div className="nri-testimonials__card-quote"><img src="assets/images/nri/nri-quote.svg" alt="Quote" /></div>
                            <RichText.Content tagName="p" className="nri-testimonials__card-text" value={test2Text} />
                            <div className="nri-testimonials__card-author">
                                <div className="nri-testimonials__card-avatar"><img src="assets/images/nri/nri-avatar.png" alt="Avatar" /></div>
                                <div className="nri-testimonials__card-info">
                                    <RichText.Content tagName="p" className="nri-testimonials__card-name" value={test2Name} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tm-item">
                        <div className="nri-testimonials__card animate-text">
                            <div className="nri-testimonials__card-quote"><img src="assets/images/nri/nri-quote.svg" alt="Quote" /></div>
                            <RichText.Content tagName="p" className="nri-testimonials__card-text" value={test3Text} />
                            <div className="nri-testimonials__card-author">
                                <div className="nri-testimonials__card-avatar"><img src="assets/images/nri/nri-avatar.png" alt="Avatar" /></div>
                                <div className="nri-testimonials__card-info">
                                    <RichText.Content tagName="p" className="nri-testimonials__card-name" value={test3Name} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Duplicate slides for slider */}
                    <div className="tm-item">
                        <div className="nri-testimonials__card animate-text">
                            <div className="nri-testimonials__card-quote"><img src="assets/images/nri/nri-quote.svg" alt="Quote" /></div>
                            <RichText.Content tagName="p" className="nri-testimonials__card-text" value={test1Text} />
                            <div className="nri-testimonials__card-author">
                                <div className="nri-testimonials__card-avatar"><img src="assets/images/nri/nri-avatar.png" alt="Avatar" /></div>
                                <div className="nri-testimonials__card-info">
                                    <RichText.Content tagName="p" className="nri-testimonials__card-name" value={test1Name} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tm-item">
                        <div className="nri-testimonials__card animate-text">
                            <div className="nri-testimonials__card-quote"><img src="assets/images/nri/nri-quote.svg" alt="Quote" /></div>
                            <RichText.Content tagName="p" className="nri-testimonials__card-text" value={test2Text} />
                            <div className="nri-testimonials__card-author">
                                <div className="nri-testimonials__card-avatar"><img src="assets/images/nri/nri-avatar.png" alt="Avatar" /></div>
                                <div className="nri-testimonials__card-info">
                                    <RichText.Content tagName="p" className="nri-testimonials__card-name" value={test2Name} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tm-item">
                        <div className="nri-testimonials__card animate-text">
                            <div className="nri-testimonials__card-quote"><img src="assets/images/nri/nri-quote.svg" alt="Quote" /></div>
                            <RichText.Content tagName="p" className="nri-testimonials__card-text" value={test3Text} />
                            <div className="nri-testimonials__card-author">
                                <div className="nri-testimonials__card-avatar"><img src="assets/images/nri/nri-avatar.png" alt="Avatar" /></div>
                                <div className="nri-testimonials__card-info">
                                    <RichText.Content tagName="p" className="nri-testimonials__card-name" value={test3Name} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RichText.Content tagName="p" className="nri-testimonials__footer-text animate-text" value={footerText} />
                <div className="nri-testimonials__dots"></div>
            </div>
        </section>
    );
}
