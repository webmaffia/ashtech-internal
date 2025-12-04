/**
 * Ashtech Pages Blocks - Editor Script
 * Registers all 9 Gutenberg blocks with FULL editing support
 */

(function(wp) {
    const { registerBlockType } = wp.blocks;
    const { RichText, MediaUpload, MediaUploadCheck, useBlockProps } = wp.blockEditor;
    const { Button } = wp.components;
    const { __ } = wp.i18n;
    const el = wp.element.createElement;

    /**
     * 1. HOME PAGE BLOCK
     */
    registerBlockType('ashtech/home-page', {
        title: __('Home Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        supports: {
            align: ['full']
        },
        attributes: {
            heroTitle: {
                type: 'string',
                default: 'Nature and Architecture<br>in Perfect Sync'
            },
            mainContent: {
                type: 'string',
                default: 'Ashtech Presidential Towers, a division of Ashtech Group...'
            },
            imageUrl: {
                type: 'string',
                default: ''
            },
            imageId: {
                type: 'number'
            }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } },
                        '🏠 Home Page Block (Landing Page)'
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 
                            'Hero Title:'
                        ),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value }),
                            placeholder: 'Nature and Architecture in Perfect Sync',
                            style: { fontSize: '2em' }
                        })
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 
                            'Overview Content:'
                        ),
                        el(RichText, {
                            tagName: 'p',
                            value: attributes.mainContent,
                            onChange: (value) => setAttributes({ mainContent: value }),
                            placeholder: 'Enter description...'
                        })
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 
                            'Optional Image:'
                        ),
                        el(MediaUploadCheck, {},
                            el(MediaUpload, {
                                onSelect: (media) => {
                                    setAttributes({
                                        imageUrl: media.url,
                                        imageId: media.id
                                    });
                                },
                                allowedTypes: ['image'],
                                value: attributes.imageId,
                                render: ({ open }) => {
                                    return el('div', {},
                                        attributes.imageUrl ? el('img', { 
                                            src: attributes.imageUrl, 
                                            style: { maxWidth: '200px', marginBottom: '10px', display: 'block' }
                                        }) : null,
                                        el(Button, {
                                            onClick: open,
                                            variant: 'primary'
                                        }, attributes.imageUrl ? 'Change Image' : 'Upload Image')
                                    );
                                }
                            })
                        )
                    ),
                    el('div', { style: { padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' } },
                        el('p', { style: { margin: 0, fontSize: '14px' } },
                            '✅ Complete landing page with Banner, Overview, Values, Projects, NRI, Awards, Testimonials'
                        )
                    )
                )
            );
        },
        save: function(props) {
            const { attributes } = props;
            const blockProps = useBlockProps.save();
            
            return el('div', blockProps,
                el('div', { 
                    className: 'ashtech-home-block',
                    'data-hero-title': attributes.heroTitle,
                    'data-content': attributes.mainContent,
                    'data-image': attributes.imageUrl
                },
                    '<!-- Home Page Block - Rendered via template.php -->'
                )
            );
        }
    });

    /**
     * 2. PROJECT PAGE BLOCK
     */
    registerBlockType('ashtech/project-page', {
        title: __('Project Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        supports: { align: ['full'] },
        attributes: {
            heroTitle: { type: 'string', default: 'A Space to Breathe<br>A Space to Belong' },
            heroSubtitle: { type: 'string', default: 'Over 80% open greens...' },
            imageUrl: { type: 'string', default: '' },
            imageId: { type: 'number' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } },
                        '🏗️ Project Page Block'
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Hero Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value }),
                            placeholder: 'A Space to Breathe'
                        })
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Hero Subtitle:'),
                        el(RichText, {
                            tagName: 'p',
                            value: attributes.heroSubtitle,
                            onChange: (value) => setAttributes({ heroSubtitle: value }),
                            placeholder: 'Over 80% open greens...'
                        })
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Optional Image:'),
                        el(MediaUploadCheck, {},
                            el(MediaUpload, {
                                onSelect: (media) => setAttributes({ imageUrl: media.url, imageId: media.id }),
                                allowedTypes: ['image'],
                                value: attributes.imageId,
                                render: ({ open }) => el('div', {},
                                    attributes.imageUrl ? el('img', { src: attributes.imageUrl, style: { maxWidth: '200px', marginBottom: '10px', display: 'block' }}) : null,
                                    el(Button, { onClick: open, variant: 'primary' }, attributes.imageUrl ? 'Change Image' : 'Upload Image')
                                )
                            })
                        )
                    )
                )
            );
        },
        save: function(props) {
            return el('div', useBlockProps.save(),
                el('div', { className: 'ashtech-project-block', 'data-hero-title': props.attributes.heroTitle, 'data-hero-subtitle': props.attributes.heroSubtitle, 'data-image': props.attributes.imageUrl }, '<!-- Project Page Block -->')
            );
        }
    });

    /**
     * 3. NRI CORNER BLOCK
     */
    registerBlockType('ashtech/nri-page', {
        title: __('NRI Corner Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        supports: { align: ['full'] },
        attributes: {
            heroTitle: { type: 'string', default: 'Ashtech Presidential Towers' },
            heroSubtitle: { type: 'string', default: 'Invest in India\'s Finest Address' },
            imageUrl: { type: 'string', default: '' },
            imageId: { type: 'number' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } }, '🌏 NRI Corner Page'),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Hero Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value }),
                            placeholder: 'Ashtech Presidential Towers'
                        })
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Upload Image:'),
                        el(MediaUploadCheck, {},
                            el(MediaUpload, {
                                onSelect: (media) => setAttributes({ imageUrl: media.url, imageId: media.id }),
                                allowedTypes: ['image'],
                                value: attributes.imageId,
                                render: ({ open }) => el('div', {},
                                    attributes.imageUrl ? el('img', { src: attributes.imageUrl, style: { maxWidth: '200px', marginBottom: '10px', display: 'block' }}) : null,
                                    el(Button, { onClick: open, variant: 'primary' }, attributes.imageUrl ? 'Change Image' : 'Upload Image')
                                )
                            })
                        )
                    )
                )
            );
        },
        save: function(props) {
            return el('div', useBlockProps.save(),
                el('div', { className: 'ashtech-nri-block', 'data-hero-title': props.attributes.heroTitle }, '<!-- NRI Page Block -->')
            );
        }
    });

    /**
     * 4. ABOUT US BLOCK
     */
    registerBlockType('ashtech/about-page', {
        title: __('About Us Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        supports: { align: ['full'] },
        attributes: {
            heroTitle: { type: 'string', default: 'From Building the Nation to Crafting Its Finest Homes' },
            imageUrl: { type: 'string', default: '' },
            imageId: { type: 'number' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } }, 'ℹ️ About Us Page'),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Hero Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value })
                        })
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Upload Image:'),
                        el(MediaUploadCheck, {},
                            el(MediaUpload, {
                                onSelect: (media) => setAttributes({ imageUrl: media.url, imageId: media.id }),
                                allowedTypes: ['image'],
                                value: attributes.imageId,
                                render: ({ open }) => el('div', {},
                                    attributes.imageUrl ? el('img', { src: attributes.imageUrl, style: { maxWidth: '200px', marginBottom: '10px', display: 'block' }}) : null,
                                    el(Button, { onClick: open, variant: 'primary' }, attributes.imageUrl ? 'Change Image' : 'Upload Image')
                                )
                            })
                        )
                    )
                )
            );
        },
        save: function(props) {
            return el('div', useBlockProps.save(),
                el('div', { className: 'ashtech-about-block', 'data-hero-title': props.attributes.heroTitle }, '<!-- About Page Block -->')
            );
        }
    });

    /**
     * 5. RESOURCES BLOCK
     */
    registerBlockType('ashtech/resources-page', {
        title: __('Resources Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        supports: { align: ['full'] },
        attributes: {
            heroTitle: { type: 'string', default: 'Insights, Updates, Perspectives' },
            imageUrl: { type: 'string', default: '' },
            imageId: { type: 'number' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } }, '📰 Resources Page'),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Hero Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value })
                        })
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Upload Featured Image:'),
                        el(MediaUploadCheck, {},
                            el(MediaUpload, {
                                onSelect: (media) => setAttributes({ imageUrl: media.url, imageId: media.id }),
                                allowedTypes: ['image'],
                                value: attributes.imageId,
                                render: ({ open }) => el('div', {},
                                    attributes.imageUrl ? el('img', { src: attributes.imageUrl, style: { maxWidth: '200px', marginBottom: '10px', display: 'block' }}) : null,
                                    el(Button, { onClick: open, variant: 'primary' }, attributes.imageUrl ? 'Change Image' : 'Upload Image')
                                )
                            })
                        )
                    )
                )
            );
        },
        save: function(props) {
            return el('div', useBlockProps.save(),
                el('div', { className: 'ashtech-resources-block' }, '<!-- Resources Page Block -->')
            );
        }
    });

    /**
     * 6. CAREER BLOCK
     */
    registerBlockType('ashtech/career-page', {
        title: __('Career Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        supports: { align: ['full'] },
        attributes: {
            heroTitle: { type: 'string', default: 'Careers at The Ashtech Presidential Towers' },
            heroSubtitle: { type: 'string', default: 'Come, Build the Future With Us!' },
            imageUrl: { type: 'string', default: '' },
            imageId: { type: 'number' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } }, '💼 Career Page'),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Hero Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value })
                        })
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Upload Image:'),
                        el(MediaUploadCheck, {},
                            el(MediaUpload, {
                                onSelect: (media) => setAttributes({ imageUrl: media.url, imageId: media.id }),
                                allowedTypes: ['image'],
                                value: attributes.imageId,
                                render: ({ open }) => el('div', {},
                                    attributes.imageUrl ? el('img', { src: attributes.imageUrl, style: { maxWidth: '200px', marginBottom: '10px', display: 'block' }}) : null,
                                    el(Button, { onClick: open, variant: 'primary' }, attributes.imageUrl ? 'Change Image' : 'Upload Image')
                                )
                            })
                        )
                    )
                )
            );
        },
        save: function(props) {
            return el('div', useBlockProps.save(),
                el('div', { className: 'ashtech-career-block' }, '<!-- Career Page Block -->')
            );
        }
    });

    /**
     * 7. CONTACT BLOCK - With FULL Editing
     */
    registerBlockType('ashtech/contact-page', {
        title: __('Contact Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        supports: { align: ['full'] },
        attributes: {
            heroTitle: { type: 'string', default: 'We\'re Here to Help!' },
            heroSubtitle: { type: 'string', default: 'Got queries or just a word to share?' },
            salesPhone: { type: 'string', default: '9278 333 333' },
            salesEmail: { type: 'string', default: 'care@ashtechgroup.in' },
            corporateAddress: { type: 'string', default: 'C-50, RDC, GHAZIABAD-DELHI NCR' },
            corporatePhone: { type: 'string', default: '0120 45 38 000' },
            corporateEmail: { type: 'string', default: 'flyash@ashtechgroup.in' },
            imageUrl: { type: 'string', default: '' },
            imageId: { type: 'number' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } }, '📞 Contact Page Block'),
                    
                    // Hero Title
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Hero Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value }),
                            placeholder: 'We\'re Here to Help!'
                        })
                    ),
                    
                    // Hero Subtitle
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Hero Subtitle:'),
                        el(RichText, {
                            tagName: 'p',
                            value: attributes.heroSubtitle,
                            onChange: (value) => setAttributes({ heroSubtitle: value }),
                            placeholder: 'Got queries?'
                        })
                    ),
                    
                    // Sales Phone
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#fff3cd', border: '1px solid #ffc107' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, '📞 Sales Phone:'),
                        el(RichText, {
                            tagName: 'p',
                            value: attributes.salesPhone,
                            onChange: (value) => setAttributes({ salesPhone: value }),
                            placeholder: '9278 333 333'
                        })
                    ),
                    
                    // Sales Email
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#fff3cd', border: '1px solid #ffc107' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, '📧 Sales Email:'),
                        el(RichText, {
                            tagName: 'p',
                            value: attributes.salesEmail,
                            onChange: (value) => setAttributes({ salesEmail: value }),
                            placeholder: 'care@ashtechgroup.in'
                        })
                    ),
                    
                    // Corporate Address
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#e3f2fd', border: '1px solid #2196f3' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, '🏢 Corporate Office Address:'),
                        el(RichText, {
                            tagName: 'p',
                            value: attributes.corporateAddress,
                            onChange: (value) => setAttributes({ corporateAddress: value }),
                            placeholder: 'C-50, RDC, GHAZIABAD'
                        })
                    ),
                    
                    // Corporate Phone
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#e3f2fd', border: '1px solid #2196f3' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, '📞 Corporate Phone:'),
                        el(RichText, {
                            tagName: 'p',
                            value: attributes.corporatePhone,
                            onChange: (value) => setAttributes({ corporatePhone: value }),
                            placeholder: '0120 45 38 000'
                        })
                    ),
                    
                    // Corporate Email
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#e3f2fd', border: '1px solid #2196f3' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, '📧 Corporate Email:'),
                        el(RichText, {
                            tagName: 'p',
                            value: attributes.corporateEmail,
                            onChange: (value) => setAttributes({ corporateEmail: value }),
                            placeholder: 'flyash@ashtechgroup.in'
                        })
                    ),
                    
                    // Upload Office Image
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Upload Office Image:'),
                        el(MediaUploadCheck, {},
                            el(MediaUpload, {
                                onSelect: (media) => setAttributes({ imageUrl: media.url, imageId: media.id }),
                                allowedTypes: ['image'],
                                value: attributes.imageId,
                                render: ({ open }) => el('div', {},
                                    attributes.imageUrl ? el('img', { src: attributes.imageUrl, style: { maxWidth: '200px', marginBottom: '10px', display: 'block' }}) : null,
                                    el(Button, { onClick: open, variant: 'primary' }, attributes.imageUrl ? 'Change Image' : 'Upload Image')
                                )
                            })
                        )
                    ),
                    
                    el('div', { style: { padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' } },
                        el('p', { style: { margin: 0, fontSize: '14px' } }, '✅ Complete contact page with Enquiry Cards, Office Addresses, and Form')
                    )
                )
            );
        },
        save: function(props) {
            return el('div', useBlockProps.save(),
                el('div', { 
                    className: 'ashtech-contact-block',
                    'data-hero-title': props.attributes.heroTitle,
                    'data-sales-phone': props.attributes.salesPhone,
                    'data-sales-email': props.attributes.salesEmail,
                    'data-corporate-address': props.attributes.corporateAddress,
                    'data-corporate-phone': props.attributes.corporatePhone,
                    'data-corporate-email': props.attributes.corporateEmail
                }, '<!-- Contact Page Block -->')
            );
        }
    });

    /**
     * 8. TERMS PAGE BLOCK
     */
    registerBlockType('ashtech/terms-page', {
        title: __('Terms & Conditions Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        supports: { align: ['full'] },
        attributes: {
            heroTitle: { type: 'string', default: 'Terms and Conditions' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } }, '📄 Terms & Conditions'),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Page Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value })
                        })
                    )
                )
            );
        },
        save: function(props) {
            return el('div', useBlockProps.save(),
                el('div', { className: 'ashtech-terms-block' }, '<!-- Terms Page Block -->')
            );
        }
    });

    /**
     * 9. PRIVACY POLICY BLOCK
     */
    registerBlockType('ashtech/privacy-page', {
        title: __('Privacy Policy Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        supports: { align: ['full'] },
        attributes: {
            heroTitle: { type: 'string', default: 'Privacy Policy' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } }, '🔒 Privacy Policy'),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Page Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value })
                        })
                    )
                )
            );
        },
        save: function(props) {
            return el('div', useBlockProps.save(),
                el('div', { className: 'ashtech-privacy-block' }, '<!-- Privacy Page Block -->')
            );
        }
    });

})(window.wp);
