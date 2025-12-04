import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, directorName, directorTitle, directorBio1, directorBio2, directorImage, teamTitle, team1Name, team1Role, team1Image, team2Name, team2Role, team2Image, team3Name, team3Role, team3Image, team4Name, team4Role, team4Image, team5Name, team5Role, team5Image, team6Name, team6Role, team6Image } = attributes;

    return (
        <div {...blockProps}>
            <section className="about-leadership">
                <div className="about-leadership__container">
                    <div className="about-leadership__header">
                        <RichText tagName="p" className="about-leadership__label animate-text" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Label..." />
                        <RichText tagName="h2" className="about-leadership__title animate-text" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Title..." />
                    </div>

                    <div className="about-leadership__director">
                        <div className="about-leadership__director-image">
                            <img src={directorImage} alt="Director" />
                        </div>
                        <div className="about-leadership__director-info">
                            <RichText tagName="h3" className="about-leadership__director-name animate-text" value={directorName} onChange={(value) => setAttributes({ directorName: value })} placeholder="Director name..." />
                            <RichText tagName="p" className="about-leadership__director-title animate-text" value={directorTitle} onChange={(value) => setAttributes({ directorTitle: value })} placeholder="Director title..." />
                            <div className="about-leadership__director-bio animate-text">
                                <RichText tagName="p" value={directorBio1} onChange={(value) => setAttributes({ directorBio1: value })} placeholder="Bio paragraph 1..." />
                                <RichText tagName="p" value={directorBio2} onChange={(value) => setAttributes({ directorBio2: value })} placeholder="Bio paragraph 2..." />
                            </div>
                        </div>
                    </div>

                    <div className="about-leadership__team">
                        <RichText tagName="h3" className="about-leadership__team-title animate-text" value={teamTitle} onChange={(value) => setAttributes({ teamTitle: value })} placeholder="Team title..." />
                        <div className="about-leadership__grid">
                            <div className="about-leadership__card animate-text">
                                <div className="about-leadership__card-image"><img src={team1Image} alt="Team Member" /></div>
                                <RichText tagName="h4" className="about-leadership__card-name" value={team1Name} onChange={(value) => setAttributes({ team1Name: value })} placeholder="Name..." />
                                <RichText tagName="p" className="about-leadership__card-role" value={team1Role} onChange={(value) => setAttributes({ team1Role: value })} placeholder="Role..." />
                            </div>

                            <div className="about-leadership__card animate-text">
                                <div className="about-leadership__card-image"><img src={team2Image} alt="Team Member" /></div>
                                <RichText tagName="h4" className="about-leadership__card-name" value={team2Name} onChange={(value) => setAttributes({ team2Name: value })} placeholder="Name..." />
                                <RichText tagName="p" className="about-leadership__card-role" value={team2Role} onChange={(value) => setAttributes({ team2Role: value })} placeholder="Role..." />
                            </div>

                            <div className="about-leadership__card animate-text">
                                <div className="about-leadership__card-image"><img src={team3Image} alt="Team Member" /></div>
                                <RichText tagName="h4" className="about-leadership__card-name" value={team3Name} onChange={(value) => setAttributes({ team3Name: value })} placeholder="Name..." />
                                <RichText tagName="p" className="about-leadership__card-role" value={team3Role} onChange={(value) => setAttributes({ team3Role: value })} placeholder="Role..." />
                            </div>

                            <div className="about-leadership__card animate-text">
                                <div className="about-leadership__card-image"><img src={team4Image} alt="Team Member" /></div>
                                <RichText tagName="h4" className="about-leadership__card-name" value={team4Name} onChange={(value) => setAttributes({ team4Name: value })} placeholder="Name..." />
                                <RichText tagName="p" className="about-leadership__card-role" value={team4Role} onChange={(value) => setAttributes({ team4Role: value })} placeholder="Role..." />
                            </div>

                            <div className="about-leadership__card animate-text">
                                <div className="about-leadership__card-image"><img src={team5Image} alt="Team Member" /></div>
                                <RichText tagName="h4" className="about-leadership__card-name" value={team5Name} onChange={(value) => setAttributes({ team5Name: value })} placeholder="Name..." />
                                <RichText tagName="p" className="about-leadership__card-role" value={team5Role} onChange={(value) => setAttributes({ team5Role: value })} placeholder="Role..." />
                            </div>

                            <div className="about-leadership__card animate-text">
                                <div className="about-leadership__card-image"><img src={team6Image} alt="Team Member" /></div>
                                <RichText tagName="h4" className="about-leadership__card-name" value={team6Name} onChange={(value) => setAttributes({ team6Name: value })} placeholder="Name..." />
                                <RichText tagName="p" className="about-leadership__card-role" value={team6Role} onChange={(value) => setAttributes({ team6Role: value })} placeholder="Role..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
