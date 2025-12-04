import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { heroTitle, mainContent } = attributes;
    const assetsUrl = window.ashtechBlocksData ? window.ashtechBlocksData.assetsUrl : 'assets/';

    return (
        <div {...useBlockProps()}>
            {/* Hero Banner Section */}
            <section className="project-hero contactbg">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText
                        tagName="h1"
                        className="project-hero__title"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('Terms & Conditions', 'ashtech-pages-blocks')}
                    />
                </div>
            </section>

            {/* Terms and Conditions Content */}
            <section className="privacy-policy">
                <div className="privacy-policy__container">
                    <p className="privacy-policy__updated">Last updated: July 23, 2021</p>

                    <div className="privacy-policy__intro">
                        <p>Please read these terms and conditions carefully before using Our Service.</p>
                    </div>

                    <div className="privacy-policy__section">
                        <h2 className="privacy-policy__heading">Interpretation and Definitions</h2>
                        
                        <h3 className="privacy-policy__subheading">Interpretation</h3>
                        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

                        <h3 className="privacy-policy__subheading">Definitions</h3>
                        <p>For the purposes of these Terms and Conditions:</p>
                        <ul className="privacy-policy__list">
                            <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                            <li><strong>Country</strong> refers to: Georgia, United States</li>
                            <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to ASHRAE Example Website, 180 Technology Parkway, Peachtree Corners, GA 30092.</li>
                            <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                            <li><strong>Service</strong> refers to the Website.</li>
                            <li><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
                            <li><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
                            <li><strong>Website</strong> refers to ASHRAE Example Website, accessible from https://ashrae.website/</li>
                            <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                        </ul>
                    </div>

                    <div className="privacy-policy__section">
                        <h2 className="privacy-policy__heading">Acknowledgment</h2>
                        <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                        <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                        <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                    </div>

                    <div className="privacy-policy__section">
                        <h2 className="privacy-policy__heading">Links to Other Websites</h2>
                        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
                        <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.</p>
                    </div>

                    <div className="privacy-policy__section">
                        <h2 className="privacy-policy__heading">Termination</h2>
                        <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                        <p>Upon termination, Your right to use the Service will cease immediately.</p>
                    </div>

                    <div className="privacy-policy__section">
                        <h2 className="privacy-policy__heading">Limitation of Liability</h2>
                        <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service.</p>
                    </div>

                    <div className="privacy-policy__section">
                        <h2 className="privacy-policy__heading">Governing Law</h2>
                        <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service.</p>
                    </div>

                    <div className="privacy-policy__section">
                        <h2 className="privacy-policy__heading">Contact Us</h2>
                        <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
                        <ul className="privacy-policy__list privacy-policy__list--contact">
                            <li>By email: <a href="mailto:info@ashrae.org">info@ashrae.org</a></li>
                            <li>By phone number: <a href="tel:8005274723">800-527-4723</a></li>
                        </ul>
                    </div>

                    <RichText
                        tagName="div"
                        className="privacy-policy__custom-content"
                        value={mainContent}
                        onChange={(value) => setAttributes({ mainContent: value })}
                        placeholder={__('Add custom terms content...', 'ashtech-pages-blocks')}
                    />
                </div>
            </section>
        </div>
    );
}
