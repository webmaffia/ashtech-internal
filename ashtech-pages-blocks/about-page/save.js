import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { heroTitle, heroSubtitleMain, heroSubtitleText, overviewTitle, overviewText1, overviewText2 } = attributes;

    return (
        <div {...useBlockProps.save()}>
            {/* Hero Banner Section */}
            <section className="project-hero aboutbg">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText.Content 
                        tagName="h1" 
                        className="project-hero__title" 
                        value={heroTitle} 
                    />
                    <div className="project-hero__subtitle">
                        <RichText.Content 
                            tagName="p" 
                            className="project-hero__subtitle-main" 
                            value={heroSubtitleMain} 
                        />
                        <RichText.Content 
                            tagName="p" 
                            className="project-hero__subtitle-text" 
                            value={heroSubtitleText} 
                        />
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="about-overview">
                <div className="project-overview__decoration"></div>
                <div className="about-overview__container">
                    <div className="about-overview__header">
                        <p className="about-overview__label animate-text">Overview</p>
                        <RichText.Content 
                            tagName="h2" 
                            className="about-overview__title animate-text" 
                            value={overviewTitle} 
                        />
                    </div>
                    <div className="about-overview__text">
                        <RichText.Content 
                            tagName="p" 
                            className="animate-text" 
                            value={overviewText1} 
                        />
                        <RichText.Content 
                            tagName="p" 
                            className="animate-text" 
                            value={overviewText2} 
                        />
                    </div>
                </div>
            </section>

            {/* Legacy & Values Section */}
            <section className="about-values">
                <div className="about-values__container">
                    <div className="about-values__header">
                        <p className="about-values__label animate-text">Legacy & Values</p>
                        <h2 className="about-values__title animate-text">A Legacy Rooted in Purpose, Guided by Values</h2>
                        <div className="about-values__intro">
                            <p className="animate-text">Ashtech Group's story is one of dedication and vision. What began as an engineering-driven enterprise has evolved into a <br />multi-vertical group with 9 business divisions, 1600+ employees, and 2000+ skilled labourers — each contributing to <br />nation-building in their own way.</p>
                            <p className="animate-text"><strong>At the heart of our journey lie six enduring values:</strong></p>
                        </div>
                    </div>
                    
                    <div className="about-values__graphic">
                        <img src="assets/images/about/values-graphic.svg" alt="Values Graphic" className="about-values__graphic-image" />
                        <div className="about-values__items">
                            <div className="about-values__item about-values__item--left about-values__item--1">
                                <p className="about-values__item-text">जुनून (Passion)</p>
                            </div>
                            <div className="about-values__item about-values__item--left about-values__item--2">
                                <p className="about-values__item-text">संकल्प (Resolution)</p>
                            </div>
                            <div className="about-values__item about-values__item--left about-values__item--3">
                                <p className="about-values__item-text">लगन (Commitment)</p>
                            </div>
                            <div className="about-values__item about-values__item--right about-values__item--4">
                                <p className="about-values__item-text">विश्वास (Trust)</p>
                            </div>
                            <div className="about-values__item about-values__item--right about-values__item--5">
                                <p className="about-values__item-text">निष्ठा (Dedication)</p>
                            </div>
                            <div className="about-values__item about-values__item--right about-values__item--6">
                                <p className="about-values__item-text">दृढता (Strength)</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-values__footer">
                        <p className="animate-text">These are the values that continue to shape the spaces we create. Every project, including Ashtech Presidential Towers, <br />stands as a reflection of these principles, strengthened by Tata Group's <strong>TQ Cert</strong> quality certification and our relentless <br />pursuit of perfection.</p>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="about-vision-mission">
                <div className="about-vision-mission__container">
                    <div className="about-vision-mission__vision">
                        <h3 className="about-vision-mission__title">Vision</h3>
                        <div className="about-vision-mission__content">
                            <p>Our vision is to be a global leader, transforming industries with pioneering technologies and sustainable practices.</p>
                            <p>We aim to inspire progress by creating enduring value for our stakeholders, shaping a future where innovation, responsibility, and excellence converge seamlessly.</p>
                        </div>
                    </div>
                    
                    <div className="about-vision-mission__image">
                        <img src="assets/images/about/overview-pattern.png" alt="Building" />
                    </div>
                    
                    <div className="about-vision-mission__mission">
                        <h3 className="about-vision-mission__title">Mission</h3>
                        <div className="about-vision-mission__content">
                            <p>At Ashtech Group, our mission is to redefine excellence by delivering innovative, sustainable, and value-driven solutions across all our business verticals.</p>
                            <p>Guided by our ethos of "Innovation with Integrity," we are dedicated to exceeding customer expectations, fostering environmental stewardship, and empowering communities through cutting-edge products and services.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Timeline Section */}
            <section className="about-history">
                <div className="about-history__image-container">
                    <img src="assets/images/about/history-1.jpg" alt="Ashtech Manufacturing" className="about-history__image" id="historyImage" />
                </div>
                
                <div className="about-history__content-box">
                    <h3 className="about-history__title" id="historyTitle">Fly Ash Supply</h3>
                    <p className="about-history__description" id="historyDescription">
                        Combining innovation in materials and precision in delivery, Ashtech's Ready-Mix Concrete and Fly Ash Bricks manufacturing vertical delivers 10 million cubic metres of concrete and 100 million eco-friendly bricks and AAC blocks.
                    </p>
                </div>
                
                <div className="about-history__timeline-wrapper">
                    <div className="about-history__timeline">
                        <div className="about-history__timeline-line"></div>
                        <div className="about-history__timeline-progress" id="timelineProgress"></div>
                        
                        <div className="about-history__timeline-item active" data-year="1992" data-title="Fly Ash Supply" data-description="Combining innovation in materials and precision in delivery, Ashtech's Ready-Mix Concrete and Fly Ash Bricks manufacturing vertical delivers 10 million cubic metres of concrete and 100 million eco-friendly bricks and AAC blocks." data-image="assets/images/about/history-1.jpg">
                            <p className="about-history__timeline-year">1992</p>
                            <div className="about-history__timeline-dot"></div>
                            <p className="about-history__timeline-label">Fly Ash<br />Supply</p>
                        </div>
                        
                        <div className="about-history__timeline-item" data-year="2004" data-title="Logistics" data-description="Ashtech's Logistics vertical ensures seamless transportation and supply chain management across all business divisions, maintaining efficiency and reliability in delivery." data-image="assets/images/about/history-2.jpg">
                            <p className="about-history__timeline-year">2004</p>
                            <div className="about-history__timeline-dot"></div>
                            <p className="about-history__timeline-label">Logistics<br />&nbsp;</p>
                        </div>
                        
                        <div className="about-history__timeline-item" data-year="2006" data-title="Ready-Mix Concrete & Bricks Manufacturing" data-description="Combining innovation in materials and precision in delivery, Ashtech's Ready-Mix Concrete and Fly Ash Bricks manufacturing vertical delivers 10 million cubic metres of concrete and 100 million eco-friendly bricks and AAC blocks." data-image="assets/images/about/history-3.jpg">
                            <p className="about-history__timeline-year">2006</p>
                            <div className="about-history__timeline-dot"></div>
                            <p className="about-history__timeline-label">Ready-Mix Concrete<br />& Bricks Manufacturing</p>
                        </div>
                        
                        <div className="about-history__timeline-item" data-year="2012" data-title="Fly Ash Processing" data-description="Advanced fly ash processing facilities established to deliver high-quality processed fly ash for sustainable construction applications across India." data-image="assets/images/about/history-4.jpg">
                            <p className="about-history__timeline-year">2012</p>
                            <div className="about-history__timeline-dot"></div>
                            <p className="about-history__timeline-label">Fly Ash<br />Processing</p>
                        </div>
                        
                        <div className="about-history__timeline-item" data-year="2020" data-title="Large Scale Infrastructure Projects" data-description="Expanded capabilities to undertake large-scale infrastructure projects, delivering world-class construction solutions for highways, bridges, and urban development." data-image="assets/images/about/history-5.jpg">
                            <p className="about-history__timeline-year">2020</p>
                            <div className="about-history__timeline-dot"></div>
                            <p className="about-history__timeline-label">Large Scale<br />Infrastructure Projects</p>
                        </div>
                        
                        <div className="about-history__timeline-item" data-year="2021" data-title="Pre-Engineered Buildings" data-description="Introduction of pre-engineered building solutions offering rapid construction, cost efficiency, and superior structural integrity for industrial and commercial spaces." data-image="assets/images/about/history-6.jpg">
                            <p className="about-history__timeline-year">2021</p>
                            <div className="about-history__timeline-dot"></div>
                            <p className="about-history__timeline-label">Pre-Engineered<br />Buildings</p>
                        </div>
                        
                        <div className="about-history__timeline-item" data-year="2021" data-title="Power Infrastructure" data-description="Venturing into power infrastructure development, providing comprehensive solutions for energy generation and distribution projects." data-image="assets/images/about/history-7.jpg">
                            <p className="about-history__timeline-year">2021</p>
                            <div className="about-history__timeline-dot"></div>
                            <p className="about-history__timeline-label">Power<br />Infrastructure</p>
                        </div>
                        
                        <div className="about-history__timeline-item" data-year="2024" data-title="Management Consultancy" data-description="Launched management consultancy services leveraging decades of industry expertise to guide construction and infrastructure projects toward excellence." data-image="assets/images/about/history-8.jpg">
                            <p className="about-history__timeline-year">2024</p>
                            <div className="about-history__timeline-dot"></div>
                            <p className="about-history__timeline-label">Management<br />Consultancy</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="about-leadership">
                <div className="project-overview__decoration"></div>
                <div className="about-leadership__container">
                    <div className="about-leadership__header">
                        <p className="about-leadership__label animate-text">Leadership</p>
                        <h2 className="about-leadership__title animate-text">The Legacy Continues with Our Leadership Team</h2>
                    </div>

                    {/* Main Director */}
                    <div className="about-leadership__main">
                        <div className="about-leadership__main-image">
                            <img src="assets/images/about/director-sumit.jpg" alt="Mr. Sumit Agarwal" />
                        </div>
                        <div className="about-leadership__main-content">
                            <div className="about-leadership__main-text">
                                <p>The launch of our flagship residential project is about setting a new benchmark for luxury lifestyle in the NCR. We see a clear demand for premium homes that deliver on both high-end finishes and superior construction quality.</p>
                                <p>By investing ₹1,800 crore in our Greater Noida West venture, we're putting our capital and reputation where our vision is, aiming to redefine 'world-class' through thoughtful design, exclusive amenities, and homes that truly reflect the evolving aspirations of modern urban families.</p>
                            </div>
                            <div className="about-leadership__main-info">
                                <p className="about-leadership__main-name">Mr. Sumit Agarwal</p>
                                <p className="about-leadership__main-position">Director</p>
                            </div>
                        </div>
                    </div>

                    {/* Core Team */}
                    <div className="about-leadership__team">
                        <div className="about-leadership__team-member">
                            <div className="about-leadership__team-image">
                                <img src="assets/images/about/team-1.jpg" alt="Sangeeta Tiwari" />
                            </div>
                            <div className="about-leadership__team-info">
                                <p className="about-leadership__team-name">Sangeeta Tiwari</p>
                                <p className="about-leadership__team-position">Brand and Marketing Head</p>
                            </div>
                        </div>
                        <div className="about-leadership__team-member">
                            <div className="about-leadership__team-image">
                                <img src="assets/images/about/team-2.jpg" alt="Mr. Sunny Chug" />
                            </div>
                            <div className="about-leadership__team-info">
                                <p className="about-leadership__team-name">Mr. Sunny Chug</p>
                                <p className="about-leadership__team-position">VP (Finance)</p>
                            </div>
                        </div>
                        <div className="about-leadership__team-member">
                            <div className="about-leadership__team-image">
                                <img src="assets/images/about/team-3.jpg" alt="Mr. Rahul Bhargava" />
                            </div>
                            <div className="about-leadership__team-info">
                                <p className="about-leadership__team-name">Mr. Rahul Bhargava</p>
                                <p className="about-leadership__team-position">AVP (Sales)</p>
                            </div>
                        </div>
                        <div className="about-leadership__team-member">
                            <div className="about-leadership__team-image">
                                <img src="assets/images/about/team-4.jpg" alt="Mr. Shyam Bisht" />
                            </div>
                            <div className="about-leadership__team-info">
                                <p className="about-leadership__team-name">Mr. Shyam Bisht</p>
                                <p className="about-leadership__team-position">AGM (Procurement)</p>
                            </div>
                        </div>
                        <div className="about-leadership__team-member">
                            <div className="about-leadership__team-image">
                                <img src="assets/images/about/team-5.jpg" alt="Mr. Aditya Yadav" />
                            </div>
                            <div className="about-leadership__team-info">
                                <p className="about-leadership__team-name">Mr. Aditya Yadav</p>
                                <p className="about-leadership__team-position">General Manager (Architect)</p>
                            </div>
                        </div>
                        <div className="about-leadership__team-member">
                            <div className="about-leadership__team-image">
                                <img src="assets/images/about/team-6.jpg" alt="Mr. Dilip Kumar Jain" />
                            </div>
                            <div className="about-leadership__team-info">
                                <p className="about-leadership__team-name">Mr. Dilip Kumar Jain</p>
                                <p className="about-leadership__team-position">General Manager (Accounts)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Director's Message Section */}
            <section className="about-director-message">
                <div className="about-director-message__background"></div>
                <div className="about-director-message__container">
                    <div className="about-director-message__header">
                        <p className="about-director-message__label animate-text">Director's Message</p>
                        <h2 className="about-director-message__title animate-text">Crafting a New Legacy</h2>
                    </div>

                    <div className="about-director-message__content">
                        <div className="about-director-message__text-wrapper">
                            <div className="about-director-message__text">
                                <p className="animate-text">For over thirty years, Ashtech has operated on a simple principle: trust through quality. We take immense pride in having engineered the very foundation of India's growth, from our materials to major infrastructure projects.</p>
                                <p className="animate-text">Today, we transition to an exciting and personal new chapter by entering the world of luxury residential real estate.</p>
                                <p className="animate-text">Our flagship project, Presidential Towers in Greater Noida West, is our promise made visible. This isn't just a structure; it's our decades of construction mastery and a ₹1,800 crore commitment to quality control, innovative design, and sustainability.</p>
                                <p className="animate-text">We are leveraging everything we know to craft truly world-class homes, elevating the standards of sophisticated living in the NCR. Thank you for trusting the Ashtech name. We are ready to build your future.</p>
                            </div>
                            <div className="about-director-message__signature">
                                <p className="about-director-message__name">Mr. Sumit Agarwal</p>
                                <p className="about-director-message__position">Director, Ashtech Group</p>
                            </div>
                        </div>
                        <div className="about-director-message__image">
                            <img src="assets/images/about/director-updated.jpg" alt="Mr. Sumit Agarwal" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="about-projects">
                <div className="project-overview__decoration"></div>
                <div className="about-projects__container">
                    <div className="about-projects__header">
                        <p className="about-projects__label animate-text">Projects</p>
                        <h2 className="about-projects__title animate-text">Experience the New Benchmark of Luxury Living</h2>
                    </div>
                    <div className="about-projects__content">
                        <p className="about-projects__description animate-text">Explore Ashtech Presidential Towers — a limited collection of residences crafted to reflect excellence, well-being, and timeless sophistication.</p>
                        <div className="about-projects__button">
                            <a href="project.html" className="btn btn--primary">
                                <span>View Our Project</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M1 1L7 8.5L1 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
