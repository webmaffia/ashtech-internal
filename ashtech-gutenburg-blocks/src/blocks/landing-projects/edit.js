import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <div style={{
                padding: '20px',
                background: '#f9f9f9',
                border: '1px solid #ddd',
                borderRadius: '4px'
            }}>
                <p style={{
                    margin: 0,
                    fontSize: '14px',
                    color: '#666'
                }}>
                    ✓ Block Preview - Content will render on frontend
                </p>
            </div>
        </div>
    );
}
