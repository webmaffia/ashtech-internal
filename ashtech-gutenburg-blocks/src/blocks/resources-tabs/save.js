import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { tab1, tab2, tab3, tab4 } = attributes;

    return (
        <section className="resources-tabs">
            <div className="resources-tabs__container">
                <div className="resources-tabs__nav">
                    <button className="resources-tabs__link" data-tab="highlights">
                        <RichText.Content tagName="span" value={tab1} />
                    </button>
                    <button className="resources-tabs__link" data-tab="blogs">
                        <RichText.Content tagName="span" value={tab2} />
                    </button>
                    <button className="resources-tabs__link" data-tab="video">
                        <RichText.Content tagName="span" value={tab3} />
                    </button>
                    <button className="resources-tabs__link resources-tabs__link--active" data-tab="press">
                        <RichText.Content tagName="span" value={tab4} />
                    </button>
                </div>
                <div className="resources-tabs__line"></div>
            </div>
        </section>
    );
}
