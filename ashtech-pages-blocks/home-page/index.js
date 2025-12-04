const { registerBlockType } = wp.blocks;
const { RichText, useBlockProps } = wp.blockEditor;
const { __ } = wp.i18n;

// Import metadata
const metadata = {
    name: 'ashtech/home-page',
    title: 'Home Page',
    icon: 'admin-page',
    category: 'layout',
};

// Edit component
const Edit = ({ attributes, setAttributes }) => {
    const { heroTitle, mainContent } = attributes;

    return wp.element.createElement(
        'div',
        useBlockProps(),
        wp.element.createElement('div', { style: { padding: '20px', border: '2px dashed #ccc' } },
            wp.element.createElement('h3', { style: { background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' } },
                __('🏠 Home Page Block (Landing Page)', 'ashtech-pages-blocks')
            ),
            wp.element.createElement('div', { style: { marginBottom: '30px', padding: '20px', background: '#f5f5f5' } },
                wp.element.createElement('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '10px' } },
                    __('Hero Banner Title:', 'ashtech-pages-blocks')
                ),
                wp.element.createElement(RichText, {
                    tagName: 'h1',
                    value: heroTitle,
                    onChange: (value) => setAttributes({ heroTitle: value }),
                    placeholder: __('Nature and Architecture in Perfect Sync', 'ashtech-pages-blocks')
                })
            ),
            wp.element.createElement('div', { style: { padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' } },
                wp.element.createElement('p', { style: { margin: 0, fontSize: '14px' } },
                    '✅ Complete landing page with Banner, Overview, Values, Projects, NRI, Awards, and Testimonials.'
                )
            )
        )
    );
};

// Save component - Reference to external file
const Save = ({ attributes }) => {
    // This will be rendered by the save.js React component
    const { heroTitle, mainContent } = attributes;
    const blockProps = useBlockProps.save();
    
    // Note: Complex save function is in save.js - this is a placeholder
    return null; // WordPress will use server-side rendering
};

// Register block
registerBlockType(metadata.name, {
    ...metadata,
    attributes: {
        heroTitle: {
            type: 'string',
            default: 'Nature and Architecture<br>in Perfect Sync'
        },
        mainContent: {
            type: 'string',
            default: 'Ashtech Presidential Towers, a division of Ashtech Group...'
        }
    },
    edit: Edit,
    save: Save,
});

