import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
    const blockProps = useBlockProps({
        className: 'ashtech-block-editor-placeholder'
    });

    return (
        <div {...blockProps}>
            <div style={{
                padding: '30px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
                <div style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '10px'
                }}>
                    ✓ Career Overview - Join legacy intro
                </div>
                <div style={{
                    fontSize: '14px',
                    opacity: 0.9
                }}>
                    Content will render perfectly on frontend with full styling
                </div>
            </div>
        </div>
    );
}
