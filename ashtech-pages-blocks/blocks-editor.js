/**
 * Ashtech Pages Blocks - Editor Script
 * Registers all 9 Gutenberg blocks for the editor
 */

(function(wp) {
    const { registerBlockType } = wp.blocks;
    const { RichText, useBlockProps } = wp.blockEditor;
    const { __ } = wp.i18n;
    const el = wp.element.createElement;

    /**
     * 1. HOME PAGE BLOCK
     */
    registerBlockType('ashtech/home-page', {
        title: __('Home Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        attributes: {
            heroTitle: {
                type: 'string',
                default: 'Nature and Architecture<br>in Perfect Sync'
            },
            mainContent: {
                type: 'string',
                default: 'Ashtech Presidential Towers, a division of Ashtech Group, translates decades of engineering mastery...'
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
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Hero Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value }),
                            placeholder: 'Nature and Architecture in Perfect Sync'
                        })
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Overview Content:'),
                        el(RichText, {
                            tagName: 'p',
                            value: attributes.mainContent,
                            onChange: (value) => setAttributes({ mainContent: value }),
                            placeholder: 'Enter description...'
                        })
                    ),
                    el('div', { style: { padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' } },
                        el('p', { style: { margin: 0, fontSize: '14px' } },
                            '✅ Complete landing page with Banner (SVG), Overview, Values, Projects, NRI, Awards, Testimonials'
                        )
                    )
                )
            );
        },
        save: function() {
            return null; // Dynamic rendering via PHP
        }
    });

    /**
     * 2. PROJECT PAGE BLOCK
     */
    registerBlockType('ashtech/project-page', {
        title: __('Project Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        attributes: {
            heroTitle: { type: 'string', default: 'A Space to Breathe<br>A Space to Belong' },
            heroSubtitle: { type: 'string', default: 'Over 80% open greens...' },
            overviewTitle: { type: 'string', default: 'Crafted for Those Who Value the Calm Within' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } },
                        '🏗️ Project Page Block'
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', {style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Hero Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value }),
                            placeholder: 'A Space to Breathe'
                        })
                    ),
                    el('div', { style: { padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' } },
                        el('p', { style: { margin: 0, fontSize: '14px' } },
                            '✅ Complete project page: Hero, Sub-menu, Overview, Architecture, Experiences, Location, Specifications'
                        )
                    )
                )
            );
        },
        save: function() {
            return null;
        }
    });

    /**
     * 3. NRI CORNER BLOCK
     */
    registerBlockType('ashtech/nri-page', {
        title: __('NRI Corner Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        attributes: {
            heroTitle: { type: 'string', default: 'Ashtech Presidential Towers' },
            heroSubtitle: { type: 'string', default: 'Invest in India\'s Finest Address & Live the Legacy' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } },
                        '🌏 NRI Corner Page Block'
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Hero Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value }),
                            placeholder: 'Ashtech Presidential Towers'
                        })
                    ),
                    el('div', { style: { padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' } },
                        el('p', { style: { margin: 0, fontSize: '14px' } },
                            '✅ NRI page: Investment Benefits, Support Services, Testimonials, CTA'
                        )
                    )
                )
            );
        },
        save: function() {
            return null;
        }
    });

    /**
     * 4. ABOUT US BLOCK
     */
    registerBlockType('ashtech/about-page', {
        title: __('About Us Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        attributes: {
            heroTitle: { type: 'string', default: 'From Building the Nation to Crafting Its Finest Homes' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } },
                        'ℹ️ About Us Page Block'
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Hero Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value }),
                            placeholder: 'From Building the Nation...'
                        })
                    ),
                    el('div', { style: { padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' } },
                        el('p', { style: { margin: 0, fontSize: '14px' } },
                            '✅ About page: Overview, Values, Vision/Mission, Timeline, Leadership, Director Message'
                        )
                    )
                )
            );
        },
        save: function() {
            return null;
        }
    });

    /**
     * 5. RESOURCES BLOCK
     */
    registerBlockType('ashtech/resources-page', {
        title: __('Resources Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        attributes: {
            heroTitle: { type: 'string', default: 'Insights, Updates, Perspectives' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } },
                        '📰 Resources Page Block'
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Hero Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value }),
                            placeholder: 'Insights, Updates, Perspectives'
                        })
                    ),
                    el('div', { style: { padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' } },
                        el('p', { style: { margin: 0, fontSize: '14px' } },
                            '✅ Resources page: Tabs, Featured News, News Grid (11 articles)'
                        )
                    )
                )
            );
        },
        save: function() {
            return null;
        }
    });

    /**
     * 6. CAREER BLOCK
     */
    registerBlockType('ashtech/career-page', {
        title: __('Career Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        attributes: {
            heroTitle: { type: 'string', default: 'Careers at The Ashtech Presidential Towers' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } },
                        '💼 Career Page Block'
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Hero Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value }),
                            placeholder: 'Careers at The Ashtech...'
                        })
                    ),
                    el('div', { style: { padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' } },
                        el('p', { style: { margin: 0, fontSize: '14px' } },
                            '✅ Career page: Overview, Why Choose, Life at Ashtech, Job Openings, Form'
                        )
                    )
                )
            );
        },
        save: function() {
            return null;
        }
    });

    /**
     * 7. CONTACT BLOCK
     */
    registerBlockType('ashtech/contact-page', {
        title: __('Contact Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        attributes: {
            heroTitle: { type: 'string', default: 'We\'re Here to Help!' },
            heroSubtitle: { type: 'string', default: 'Got queries or just a word to share?' },
            salesPhone: { type: 'string', default: '9278 333 333' },
            salesEmail: { type: 'string', default: 'care@ashtechgroup.in' },
            customerPhone: { type: 'string', default: '9278 333 333' },
            customerEmail: { type: 'string', default: 'care@ashtechgroup.in' },
            corporateAddress: { type: 'string', default: 'C-50, RDC, GHAZIABAD-DELHI NCR' },
            corporatePhone: { type: 'string', default: '0120 45 38 000' },
            corporateEmail: { type: 'string', default: 'flyash@ashtechgroup.in' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } },
                        '📞 Contact Page Block'
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Hero Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value }),
                            placeholder: 'We\'re Here to Help!'
                        })
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Sales Phone:'),
                        el(RichText, {
                            tagName: 'p',
                            value: attributes.salesPhone,
                            onChange: (value) => setAttributes({ salesPhone: value }),
                            placeholder: '9278 333 333'
                        })
                    ),
                    el('div', { style: { padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' } },
                        el('p', { style: { margin: 0, fontSize: '14px' } },
                            '✅ Contact page: Enquiry Directory, Office Addresses, Contact Form'
                        )
                    )
                )
            );
        },
        save: function() {
            return null;
        }
    });

    /**
     * 8. TERMS PAGE BLOCK
     */
    registerBlockType('ashtech/terms-page', {
        title: __('Terms & Conditions Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        attributes: {
            heroTitle: { type: 'string', default: 'Terms and Conditions' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } },
                        '📄 Terms & Conditions Page Block'
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Page Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value }),
                            placeholder: 'Terms and Conditions'
                        })
                    ),
                    el('div', { style: { padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' } },
                        el('p', { style: { margin: 0, fontSize: '14px' } },
                            '✅ Complete Terms & Conditions with all legal sections'
                        )
                    )
                )
            );
        },
        save: function() {
            return null;
        }
    });

    /**
     * 9. PRIVACY POLICY BLOCK
     */
    registerBlockType('ashtech/privacy-page', {
        title: __('Privacy Policy Page', 'ashtech-pages-blocks'),
        icon: 'admin-page',
        category: 'layout',
        attributes: {
            heroTitle: { type: 'string', default: 'Privacy Policy' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } },
                        '🔒 Privacy Policy Page Block'
                    ),
                    el('div', { style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } },
                        el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } }, 'Page Title:'),
                        el(RichText, {
                            tagName: 'h1',
                            value: attributes.heroTitle,
                            onChange: (value) => setAttributes({ heroTitle: value }),
                            placeholder: 'Privacy Policy'
                        })
                    ),
                    el('div', { style: { padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' } },
                        el('p', { style: { margin: 0, fontSize: '14px' } },
                            '✅ Complete Privacy Policy with all data protection sections'
                        )
                    )
                )
            );
        },
        save: function() {
            return null;
        }
    });

})(window.wp);

