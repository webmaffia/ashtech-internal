import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { link1Text, link1Href, link2Text, link2Href, link3Text, link3Href, link4Text, link4Href, link5Text, link5Href, link6Text, link6Href } = attributes;

    return (
        <nav className="project-submenu">
            <div className="project-submenu__container">
                <a href={link1Href} className="project-submenu__link">
                    <RichText.Content tagName="span" value={link1Text} />
                </a>
                <a href={link2Href} className="project-submenu__link">
                    <RichText.Content tagName="span" value={link2Text} />
                </a>
                <a href={link3Href} className="project-submenu__link">
                    <RichText.Content tagName="span" value={link3Text} />
                </a>
                <a href={link4Href} className="project-submenu__link">
                    <RichText.Content tagName="span" value={link4Text} />
                </a>
                <a href={link5Href} className="project-submenu__link">
                    <RichText.Content tagName="span" value={link5Text} />
                </a>
                <a href={link6Href} className="project-submenu__link">
                    <RichText.Content tagName="span" value={link6Text} />
                </a>
            </div>
        </nav>
    );
}
