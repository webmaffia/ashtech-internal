export default function save() {
    return (
        <section className="experiences" id="experiences">
            <div className="project-about__decoration"></div>
            
            <div className="experiences__header">
                <div className="experiences__header-left">
                    <p className="experiences__label">Experiences and Privileges</p>
                    <h2 className="experiences__title">A Life Composed for Grace and Grandeur</h2>
                </div>
                
                <div className="experiences__header-right">
                    <p className="experiences__description">
                        Every space at Ashtech Presidential Towers, Greater Noida - West, has been envisioned to create balance between solitude and togetherness, wellness and celebration, simplicity and splendour. Across seventy thousand square feet, experiences unfold with quiet precision.
                    </p>
                    
                    <button className="btn btn--primary">
                        <span>Download Brochure</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div className="experiences__tabs">
                <div className="experiences__tab-list">
                    <button className="experiences__tab-button experiences__tab-button--active" data-tab="wellness">
                        <div className="experiences__tab-icon">
                            <img src="assets/images/project/arrow-right.svg" alt="" />
                        </div>
                        <span className="experiences__tab-text">Wellness & Rejuvenation</span>
                    </button>
                    <button className="experiences__tab-button" data-tab="movement">
                        <div className="experiences__tab-icon">
                            <img src="assets/images/project/arrow-right.svg" alt="" />
                        </div>
                        <span className="experiences__tab-text">Movement & Play</span>
                    </button>
                    <button className="experiences__tab-button" data-tab="culture">
                        <div className="experiences__tab-icon">
                            <img src="assets/images/project/arrow-right.svg" alt="" />
                        </div>
                        <span className="experiences__tab-text">Culture & Gathering</span>
                    </button>
                    <button className="experiences__tab-button" data-tab="ease">
                        <div className="experiences__tab-icon">
                            <img src="assets/images/project/arrow-right.svg" alt="" />
                        </div>
                        <span className="experiences__tab-text">Ease & Arrival</span>
                    </button>
                </div>
                
                <div className="experiences__tab-content experiences__tab-content--active" data-content="wellness">
                    <div className="experiences__features">
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/wellness-pool.svg" alt="Pool icon" />
                            </div>
                            <p className="feature-card__text">Temperature-controlled <br />pool for every season</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/wellness-spa-1.svg" alt="Spa icon" />
                            </div>
                            <p className="feature-card__text">International-inspired <br />spa with hot pool and <br />therapy suites</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/wellness-steam.svg" alt="Steam icon" />
                            </div>
                            <p className="feature-card__text">Steam and sauna retreats</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/wellness-yoga.svg" alt="Yoga icon" />
                            </div>
                            <p className="feature-card__text">Yoga and meditation studios</p>
                        </div>
                    </div>
                </div>
                
                <div className="experiences__tab-content" data-content="movement">
                    <div className="experiences__features">
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/movement-gym.svg" alt="Gym icon" />
                            </div>
                            <p className="feature-card__text">High-performance gym</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/movement-training.svg" alt="Training icon" />
                            </div>
                            <p className="feature-card__text">Functional training zones</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/movement-sports-bar.svg" alt="Sports Bar icon" />
                            </div>
                            <p className="feature-card__text">Sports Bar</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/movement-zumba.svg" alt="Zumba icon" />
                            </div>
                            <p className="feature-card__text">Zumba & yoga zones</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/movement-bowling.svg" alt="Bowling icon" />
                            </div>
                            <p className="feature-card__text">Bowling Alley</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/movement-golf.svg" alt="Golf icon" />
                            </div>
                            <p className="feature-card__text">Golf Simulator</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/movement-arena.svg" alt="Sports arena icon" />
                            </div>
                            <p className="feature-card__text">Indoor sports arena</p>
                        </div>
                    </div>
                </div>
                
                <div className="experiences__tab-content" data-content="culture">
                    <div className="experiences__features">
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/culture-community.svg" alt="Community Hall icon" />
                            </div>
                            <p className="feature-card__text">Community Hall</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/culture-theatre.svg" alt="Theatre icon" />
                            </div>
                            <p className="feature-card__text">Mini Theatre</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/culture-library.svg" alt="Library icon" />
                            </div>
                            <p className="feature-card__text">Library Lounges</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/culture-podcast.svg" alt="Podcast icon" />
                            </div>
                            <p className="feature-card__text">Podcast Room</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/culture-business.svg" alt="Business icon" />
                            </div>
                            <p className="feature-card__text">Business Centre</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/culture-meeting.svg" alt="Meeting icon" />
                            </div>
                            <p className="feature-card__text">Private Meeting Room</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/culture-dining.svg" alt="Dining icon" />
                            </div>
                            <p className="feature-card__text">Alfesco Dining</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/culture-restaurant.svg" alt="Restaurant icon" />
                            </div>
                            <p className="feature-card__text">Restaurant & Bar</p>
                        </div>
                    </div>
                </div>
                
                <div className="experiences__tab-content" data-content="ease">
                    <div className="experiences__features">
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/ease-vehicular.svg" alt="Vehicular icon" />
                            </div>
                            <p className="feature-card__text">Zero vehicular movement<br />at ground level</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/ease-lift-lobby.svg" alt="Lift lobby icon" />
                            </div>
                            <p className="feature-card__text">Fully air-conditioned,<br />triple-height grand lift lobby</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/ease-private-lift.svg" alt="Private lift icon" />
                            </div>
                            <p className="feature-card__text">Private lift foyers for every<br />home in Gold Towers with 2 <br />apartment per core</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-card__icon">
                                <img src="assets/images/project/ease-parking.svg" alt="Parking icon" />
                            </div>
                            <p className="feature-card__text">2-levels of basement parking</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
