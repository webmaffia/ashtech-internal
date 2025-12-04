import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { link1Text, link1Href, link2Text, link2Href, link3Text, link3Href, link4Text, link4Href, link5Text, link5Href, link6Text, link6Href } = attributes;

    return (
        <div {...blockProps}>
            <nav className="project-submenu">
                <div className="project-submenu__container">
                    <a href={link1Href} className="project-submenu__link">
                        <RichText tagName="span" value={link1Text} onChange={(value) => setAttributes({ link1Text: value })} placeholder="Link 1..." />
                    </a>
                    <a href={link2Href} className="project-submenu__link">
                        <RichText tagName="span" value={link2Text} onChange={(value) => setAttributes({ link2Text: value })} placeholder="Link 2..." />
                    </a>
                    <a href={link3Href} className="project-submenu__link">
                        <RichText tagName="span" value={link3Text} onChange={(value) => setAttributes({ link3Text: value })} placeholder="Link 3..." />
                    </a>
                    <a href={link4Href} className="project-submenu__link">
                        <RichText tagName="span" value={link4Text} onChange={(value) => setAttributes({ link4Text: value })} placeholder="Link 4..." />
                    </a>
                    <a href={link5Href} className="project-submenu__link">
                        <RichText tagName="span" value={link5Text} onChange={(value) => setAttributes({ link5Text: value })} placeholder="Link 5..." />
                    </a>
                    <a href={link6Href} className="project-submenu__link">
                        <RichText tagName="span" value={link6Text} onChange={(value) => setAttributes({ link6Text: value })} placeholder="Link 6..." />
                    </a>
                </div>
            </nav>
        </div>
    );
}
