import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <p style={{padding: '20px', background: '#f0f0f0', border: '2px dashed #999'}}>
                Nri Why Choose Block - Editor View
            </p>
        </div>
    );
}
