/**
 * Ashtech Pages Blocks - Main Loader
 * This file registers all 9 Gutenberg blocks
 */

(function(wp) {
    const { registerBlockType } = wp.blocks;
    const { RichText, useBlockProps } = wp.blockEditor;
    const { __ } = wp.i18n;
    const { createElement: el } = wp.element;

    // Helper function to create edit component
    const createEditComponent = (blockTitle, blockIcon, fields) => {
        return (props) => {
            const { attributes, setAttributes } = props;
            
            return el('div', useBlockProps(),
                el('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
                    el('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } },
                        blockIcon + ' ' + blockTitle
                    ),
                    ...fields.map(field => 
                        el('div', { 
                            key: field.name,
                            style: { marginBottom: '20px', padding: '20px', background: '#f5f5f5' } 
                        },
                            el('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } },
                                field.label
                            ),
                            el(RichText, {
                                tagName: field.tagName || 'p',
                                value: attributes[field.name],
                                onChange: (value) => setAttributes({ [field.name]: value }),
                                placeholder: field.placeholder,
                                multiline: field.multiline
                            })
                        )
                    ),
                    el('div', { style: { padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50', marginTop: '20px' } },
                        el('p', { style: { margin: 0, fontSize: '14px' } },
                            '✅ Complete page with your exact HTML structure and all assets included.'
                        )
                    )
                )
            );
        };
    };

    // Register blocks (save components handled server-side)
    const blocksConfig = [
        {
            name: 'ashtech/home-page',
            title: __('Home Page', 'ashtech-pages-blocks'),
            icon: 'admin-page',
            emoji: '🏠',
            fields: [
                { name: 'heroTitle', label: 'Hero Title', tagName: 'h1', placeholder: 'Nature and Architecture in Perfect Sync' },
                { name: 'mainContent', label: 'Overview Content', tagName: 'p', placeholder: 'Enter description...', multiline: true }
            ]
        },
        {
            name: 'ashtech/project-page',
            title: __('Project Page', 'ashtech-pages-blocks'),
            icon: 'admin-page',
            emoji: '🏗️',
            fields: [
                { name: 'heroTitle', label: 'Hero Title', tagName: 'h1', placeholder: 'A Space to Breathe' },
                { name: 'heroSubtitle', label: 'Hero Subtitle', tagName: 'p', placeholder: 'Over 80% open greens...' },
                { name: 'overviewTitle', label: 'Overview Title', tagName: 'h2', placeholder: 'Crafted for Those Who Value...' }
            ]
        },
        {
            name: 'ashtech/nri-page',
            title: __('NRI Corner Page', 'ashtech-pages-blocks'),
            icon: 'admin-page',
            emoji: '🌏',
            fields: [
                { name: 'heroTitle', label: 'Hero Title', tagName: 'h1', placeholder: 'Ashtech Presidential Towers' },
                { name: 'heroSubtitle', label: 'Hero Subtitle', tagName: 'p', placeholder: 'Invest in India\'s Finest Address' },
                { name: 'overviewTitle', label: 'Overview Title', tagName: 'h2', placeholder: 'An Investment Opportunity...' }
            ]
        },
        {
            name: 'ashtech/about-page',
            title: __('About Us Page', 'ashtech-pages-blocks'),
            icon: 'admin-page',
            emoji: 'ℹ️',
            fields: [
                { name: 'heroTitle', label: 'Hero Title', tagName: 'h1', placeholder: 'From Building the Nation...' },
                { name: 'overviewTitle', label: 'Overview Title', tagName: 'h2', placeholder: 'From Foundations of Strength...' }
            ]
        },
        {
            name: 'ashtech/resources-page',
            title: __('Resources Page', 'ashtech-pages-blocks'),
            icon: 'admin-page',
            emoji: '📰',
            fields: [
                { name: 'heroTitle', label: 'Hero Title', tagName: 'h1', placeholder: 'Insights, Updates, Perspectives' }
            ]
        },
        {
            name: 'ashtech/career-page',
            title: __('Career Page', 'ashtech-pages-blocks'),
            icon: 'admin-page',
            emoji: '💼',
            fields: [
                { name: 'heroTitle', label: 'Hero Title', tagName: 'h1', placeholder: 'Careers at The Ashtech...' },
                { name: 'heroSubtitle', label: 'Hero Subtitle', tagName: 'p', placeholder: 'Come, Build the Future With Us!' }
            ]
        },
        {
            name: 'ashtech/contact-page',
            title: __('Contact Page', 'ashtech-pages-blocks'),
            icon: 'admin-page',
            emoji: '📞',
            fields: [
                { name: 'heroTitle', label: 'Hero Title', tagName: 'h1', placeholder: 'We\'re Here to Help!' },
                { name: 'heroSubtitle', label: 'Hero Subtitle', tagName: 'p', placeholder: 'Got queries?' },
                { name: 'salesPhone', label: 'Sales Phone', tagName: 'p', placeholder: '9278 333 333' },
                { name: 'salesEmail', label: 'Sales Email', tagName: 'p', placeholder: 'care@ashtechgroup.in' }
            ]
        },
        {
            name: 'ashtech/terms-page',
            title: __('Terms & Conditions Page', 'ashtech-pages-blocks'),
            icon: 'admin-page',
            emoji: '📄',
            fields: [
                { name: 'heroTitle', label: 'Page Title', tagName: 'h1', placeholder: 'Terms and Conditions' }
            ]
        },
        {
            name: 'ashtech/privacy-page',
            title: __('Privacy Policy Page', 'ashtech-pages-blocks'),
            icon: 'admin-page',
            emoji: '🔒',
            fields: [
                { name: 'heroTitle', label: 'Page Title', tagName: 'h1', placeholder: 'Privacy Policy' }
            ]
        }
    ];

    // Register each block
    blocksConfig.forEach(blockConfig => {
        // Get attributes from block.json
        fetch(ashtechBlocksData.pluginUrl + blockConfig.name.replace('ashtech/', '') + '-page/block.json')
            .then(response => response.json())
            .then(blockData => {
                registerBlockType(blockConfig.name, {
                    title: blockConfig.title,
                    icon: blockConfig.icon,
                    category: 'layout',
                    attributes: blockData.attributes,
                    edit: createEditComponent(blockConfig.title, blockConfig.emoji, blockConfig.fields),
                    save: () => null // Server-side rendering
                });
            });
    });

})(window.wp);

