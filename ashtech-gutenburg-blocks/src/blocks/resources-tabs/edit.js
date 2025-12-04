import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { tab1, tab2, tab3, tab4 } = attributes;

    return (
        <div {...blockProps}>
            <section className="resources-tabs">
                <div className="resources-tabs__container">
                    <div className="resources-tabs__nav">
                        <button className="resources-tabs__link" data-tab="highlights">
                            <RichText tagName="span" value={tab1} onChange={(value) => setAttributes({ tab1: value })} placeholder="Tab 1..." />
                        </button>
                        <button className="resources-tabs__link" data-tab="blogs">
                            <RichText tagName="span" value={tab2} onChange={(value) => setAttributes({ tab2: value })} placeholder="Tab 2..." />
                        </button>
                        <button className="resources-tabs__link" data-tab="video">
                            <RichText tagName="span" value={tab3} onChange={(value) => setAttributes({ tab3: value })} placeholder="Tab 3..." />
                        </button>
                        <button className="resources-tabs__link resources-tabs__link--active" data-tab="press">
                            <RichText tagName="span" value={tab4} onChange={(value) => setAttributes({ tab4: value })} placeholder="Tab 4..." />
                        </button>
                    </div>
                    <div className="resources-tabs__line"></div>
                </div>
            </section>
        </div>
    );
}
