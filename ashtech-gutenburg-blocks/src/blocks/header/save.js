import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const blockProps = useBlockProps.save({
        className: 'header',
    });

    return (
        <header {...blockProps}>
            <div className="header__logo">
                <img 
                    src={attributes.logoUrl} 
                    alt="Logo" 
                />
            </div>
            <div className="header__menu">
                <RichText.Content
                    tagName="span"
                    className="header__menu-text"
                    value={attributes.menuText}
                />
                <img 
                    src={attributes.menuIconUrl} 
                    alt="Menu Icon" 
                    className="hero-2__menu-icon" 
                />
            </div>
        </header>
    );
}

