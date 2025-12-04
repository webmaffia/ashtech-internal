export default function save() {
    return (
        <section className="project-architecture" id="architecture">
            <div className="project-architecture__container">
                <div className="project-architecture__header">
                    <div className="project-architecture__header-left">
                        <p className="project-architecture__label animate-text">Architecture & Design</p>
                        <h2 className="project-architecture__title animate-text">Where Form Meets Function,<br />With Absolute Precision</h2>
                    </div>
                    <div className="project-architecture__header-right">
                        <p className="project-architecture__description animate-text">
                            Every line, material, and element has been considered with engineering rigor. The architecture of Ashtech Presidential Towers reflects our 30-year legacy in building infrastructure that endures.
                        </p>
                    </div>
                </div>
                
                <div className="project-architecture__tabs">
                    <div className="project-architecture__tab-list">
                        <button className="project-architecture__tab-button project-architecture__tab-button--active" data-tab="structure">
                            <div className="project-architecture__tab-icon">
                                <img src="assets/images/project/tab-icon-1.svg" alt="" />
                            </div>
                            <span className="project-architecture__tab-text">Structure</span>
                        </button>
                        <button className="project-architecture__tab-button" data-tab="facade">
                            <div className="project-architecture__tab-icon">
                                <img src="assets/images/project/tab-icon-2.svg" alt="" />
                            </div>
                            <span className="project-architecture__tab-text">Facade</span>
                        </button>
                        <button className="project-architecture__tab-button" data-tab="planning">
                            <div className="project-architecture__tab-icon">
                                <img src="assets/images/project/tab-icon-3.svg" alt="" />
                            </div>
                            <span className="project-architecture__tab-text">Planning</span>
                        </button>
                        <button className="project-architecture__tab-button" data-tab="sustainability">
                            <div className="project-architecture__tab-icon">
                                <img src="assets/images/project/tab-icon-4.svg" alt="" />
                            </div>
                            <span className="project-architecture__tab-text">Sustainability</span>
                        </button>
                    </div>
                    
                    <div className="project-architecture__tab-content project-architecture__tab-content--active" data-content="structure">
                        <div className="project-architecture__content-image">
                            <img src="assets/images/project/architecture-structure.jpg" alt="Building Structure" />
                        </div>
                        <div className="project-architecture__content-text">
                            <h3 className="project-architecture__content-title animate-text">Engineered for Permanence</h3>
                            <p className="project-architecture__content-desc animate-text">
                                Built to withstand seismic zones, with structural audits at every construction phase. RCC framework designed for multi-generational durability, supported by third-party TQ Cert inspections.
                            </p>
                        </div>
                    </div>
                    
                    <div className="project-architecture__tab-content" data-content="facade">
                        <div className="project-architecture__content-image">
                            <img src="assets/images/project/architecture-facade.jpg" alt="Building Facade" />
                        </div>
                        <div className="project-architecture__content-text">
                            <h3 className="project-architecture__content-title animate-text">Aluminium Crown Facade</h3>
                            <p className="project-architecture__content-desc animate-text">
                                A sleek, low-maintenance exterior using premium aluminium composite panels. Engineered for thermal efficiency, weather resistance, and timeless aesthetics.
                            </p>
                        </div>
                    </div>
                    
                    <div className="project-architecture__tab-content" data-content="planning">
                        <div className="project-architecture__content-image">
                            <img src="assets/images/project/architecture-planning.jpg" alt="Master Planning" />
                        </div>
                        <div className="project-architecture__content-text">
                            <h3 className="project-architecture__content-title animate-text">80% Open, By Design</h3>
                            <p className="project-architecture__content-desc animate-text">
                                With just 20% built-up area, the master plan prioritizes landscape, light, and breathing room. Every tower is positioned to maximize cross-ventilation and views.
                            </p>
                        </div>
                    </div>
                    
                    <div className="project-architecture__tab-content" data-content="sustainability">
                        <div className="project-architecture__content-image">
                            <img src="assets/images/project/architecture-sustainability.jpg" alt="Sustainability Features" />
                        </div>
                        <div className="project-architecture__content-text">
                            <h3 className="project-architecture__content-title animate-text">Built to Last, Naturally</h3>
                            <p className="project-architecture__content-desc animate-text">
                                Rainwater harvesting, solar-ready infrastructure, energy-efficient lighting, and low-VOC materials. Sustainability here isn't an add-on—it's engineered in.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
