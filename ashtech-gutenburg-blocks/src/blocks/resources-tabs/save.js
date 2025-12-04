export default function save() {
    return (
        <section className="resources-tabs">
            <div className="resources-tabs__container">
                <div className="resources-tabs__nav">
                    <button className="resources-tabs__link" data-tab="highlights">Highlights</button>
                    <button className="resources-tabs__link" data-tab="blogs">Blogs</button>
                    <button className="resources-tabs__link" data-tab="video">Video Gallery</button>
                    <button className="resources-tabs__link resources-tabs__link--active" data-tab="press">Press & Media</button>
                </div>
                <div className="resources-tabs__line"></div>
            </div>
        </section>
    );
}
