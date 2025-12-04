import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, directorName, directorTitle, directorBio1, directorBio2, directorImage, teamTitle, team1Name, team1Role, team1Image, team2Name, team2Role, team2Image, team3Name, team3Role, team3Image, team4Name, team4Role, team4Image, team5Name, team5Role, team5Image, team6Name, team6Role, team6Image } = attributes;

    return (
        <section className="about-leadership">
            <div className="about-leadership__container">
                <div className="about-leadership__header">
                    <RichText.Content tagName="p" className="about-leadership__label animate-text" value={label} />
                    <RichText.Content tagName="h2" className="about-leadership__title animate-text" value={title} />
                </div>

                <div className="about-leadership__director">
                    <div className="about-leadership__director-image">
                        <img src={directorImage} alt="Director" />
                    </div>
                    <div className="about-leadership__director-info">
                        <RichText.Content tagName="h3" className="about-leadership__director-name animate-text" value={directorName} />
                        <RichText.Content tagName="p" className="about-leadership__director-title animate-text" value={directorTitle} />
                        <div className="about-leadership__director-bio animate-text">
                            <RichText.Content tagName="p" value={directorBio1} />
                            <RichText.Content tagName="p" value={directorBio2} />
                        </div>
                    </div>
                </div>

                <div className="about-leadership__team">
                    <RichText.Content tagName="h3" className="about-leadership__team-title animate-text" value={teamTitle} />
                    <div className="about-leadership__grid">
                        <div className="about-leadership__card animate-text">
                            <div className="about-leadership__card-image"><img src={team1Image} alt="Team Member" /></div>
                            <RichText.Content tagName="h4" className="about-leadership__card-name" value={team1Name} />
                            <RichText.Content tagName="p" className="about-leadership__card-role" value={team1Role} />
                        </div>

                        <div className="about-leadership__card animate-text">
                            <div className="about-leadership__card-image"><img src={team2Image} alt="Team Member" /></div>
                            <RichText.Content tagName="h4" className="about-leadership__card-name" value={team2Name} />
                            <RichText.Content tagName="p" className="about-leadership__card-role" value={team2Role} />
                        </div>

                        <div className="about-leadership__card animate-text">
                            <div className="about-leadership__card-image"><img src={team3Image} alt="Team Member" /></div>
                            <RichText.Content tagName="h4" className="about-leadership__card-name" value={team3Name} />
                            <RichText.Content tagName="p" className="about-leadership__card-role" value={team3Role} />
                        </div>

                        <div className="about-leadership__card animate-text">
                            <div className="about-leadership__card-image"><img src={team4Image} alt="Team Member" /></div>
                            <RichText.Content tagName="h4" className="about-leadership__card-name" value={team4Name} />
                            <RichText.Content tagName="p" className="about-leadership__card-role" value={team4Role} />
                        </div>

                        <div className="about-leadership__card animate-text">
                            <div className="about-leadership__card-image"><img src={team5Image} alt="Team Member" /></div>
                            <RichText.Content tagName="h4" className="about-leadership__card-name" value={team5Name} />
                            <RichText.Content tagName="p" className="about-leadership__card-role" value={team5Role} />
                        </div>

                        <div className="about-leadership__card animate-text">
                            <div className="about-leadership__card-image"><img src={team6Image} alt="Team Member" /></div>
                            <RichText.Content tagName="h4" className="about-leadership__card-name" value={team6Name} />
                            <RichText.Content tagName="p" className="about-leadership__card-role" value={team6Role} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
