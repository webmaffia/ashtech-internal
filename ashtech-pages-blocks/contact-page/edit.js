import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { 
        heroTitle, 
        heroSubtitle, 
        enquiryTitle,
        salesPhone,
        salesEmail,
        customerPhone,
        customerEmail,
        corporateAddress,
        corporatePhone,
        corporateEmail,
        siteAddress,
        siteEmail
    } = attributes;

    return (
        <div {...useBlockProps()}>
            <section className="ashtech-page-wrapper">
                <div className="ashtech-hero">
                    <RichText
                        tagName="h1"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('Enter hero title...', 'ashtech-pages-blocks')}
                    />
                    <RichText
                        tagName="p"
                        value={heroSubtitle}
                        onChange={(value) => setAttributes({ heroSubtitle: value })}
                        placeholder={__('Enter hero subtitle...', 'ashtech-pages-blocks')}
                    />
                </div>

                <div className="ashtech-content">
                    <RichText
                        tagName="h2"
                        value={enquiryTitle}
                        onChange={(value) => setAttributes({ enquiryTitle: value })}
                        placeholder={__('Enquiry Title...', 'ashtech-pages-blocks')}
                    />

                    <div style={{ padding: '20px', background: '#f9f9f9', marginBottom: '20px' }}>
                        <h3>{__('Sales Enquiry', 'ashtech-pages-blocks')}</h3>
                        <RichText
                            tagName="p"
                            value={salesPhone}
                            onChange={(value) => setAttributes({ salesPhone: value })}
                            placeholder={__('Sales Phone...', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="p"
                            value={salesEmail}
                            onChange={(value) => setAttributes({ salesEmail: value })}
                            placeholder={__('Sales Email...', 'ashtech-pages-blocks')}
                        />
                    </div>

                    <div style={{ padding: '20px', background: '#f9f9f9', marginBottom: '20px' }}>
                        <h3>{__('Customer Enquiry', 'ashtech-pages-blocks')}</h3>
                        <RichText
                            tagName="p"
                            value={customerPhone}
                            onChange={(value) => setAttributes({ customerPhone: value })}
                            placeholder={__('Customer Phone...', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="p"
                            value={customerEmail}
                            onChange={(value) => setAttributes({ customerEmail: value })}
                            placeholder={__('Customer Email...', 'ashtech-pages-blocks')}
                        />
                    </div>

                    <h2>{__('Office Addresses', 'ashtech-pages-blocks')}</h2>

                    <div style={{ padding: '20px', background: '#f9f9f9', marginBottom: '20px' }}>
                        <h3>{__('Corporate Office', 'ashtech-pages-blocks')}</h3>
                        <RichText
                            tagName="p"
                            value={corporateAddress}
                            onChange={(value) => setAttributes({ corporateAddress: value })}
                            placeholder={__('Corporate Address...', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="p"
                            value={corporatePhone}
                            onChange={(value) => setAttributes({ corporatePhone: value })}
                            placeholder={__('Corporate Phone...', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="p"
                            value={corporateEmail}
                            onChange={(value) => setAttributes({ corporateEmail: value })}
                            placeholder={__('Corporate Email...', 'ashtech-pages-blocks')}
                        />
                    </div>

                    <div style={{ padding: '20px', background: '#f9f9f9', marginBottom: '20px' }}>
                        <h3>{__('Site Office', 'ashtech-pages-blocks')}</h3>
                        <RichText
                            tagName="p"
                            value={siteAddress}
                            onChange={(value) => setAttributes({ siteAddress: value })}
                            placeholder={__('Site Address...', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="p"
                            value={siteEmail}
                            onChange={(value) => setAttributes({ siteEmail: value })}
                            placeholder={__('Site Email...', 'ashtech-pages-blocks')}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

