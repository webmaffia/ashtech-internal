const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
    ...defaultConfig,
    entry: {
        // Landing Page blocks
        'blocks/landing-banner/index': './src/blocks/landing-banner/index.js',
        'blocks/landing-overview/index': './src/blocks/landing-overview/index.js',
        'blocks/landing-values/index': './src/blocks/landing-values/index.js',
        'blocks/landing-projects/index': './src/blocks/landing-projects/index.js',
        'blocks/landing-nri/index': './src/blocks/landing-nri/index.js',
        'blocks/landing-awards/index': './src/blocks/landing-awards/index.js',
        'blocks/landing-testimonials/index': './src/blocks/landing-testimonials/index.js',
        
        // About Page blocks
        'blocks/about-hero/index': './src/blocks/about-hero/index.js',
        'blocks/about-overview/index': './src/blocks/about-overview/index.js',
        'blocks/about-values/index': './src/blocks/about-values/index.js',
        'blocks/about-vision-mission/index': './src/blocks/about-vision-mission/index.js',
        'blocks/about-history/index': './src/blocks/about-history/index.js',
        'blocks/about-leadership/index': './src/blocks/about-leadership/index.js',
        'blocks/about-director-message/index': './src/blocks/about-director-message/index.js',
        'blocks/about-projects/index': './src/blocks/about-projects/index.js',
        
        // Project Page blocks
        'blocks/project-hero/index': './src/blocks/project-hero/index.js',
        'blocks/project-submenu/index': './src/blocks/project-submenu/index.js',
        'blocks/project-overview/index': './src/blocks/project-overview/index.js',
        'blocks/project-architecture/index': './src/blocks/project-architecture/index.js',
        'blocks/experiences/index': './src/blocks/experiences/index.js',
        'blocks/project-location/index': './src/blocks/project-location/index.js',
        'blocks/specifications/index': './src/blocks/specifications/index.js',
        'blocks/project-about/index': './src/blocks/project-about/index.js',
        
        // NRI Page blocks
        'blocks/nri-hero/index': './src/blocks/nri-hero/index.js',
        'blocks/nri-overview/index': './src/blocks/nri-overview/index.js',
        'blocks/nri-architecture/index': './src/blocks/nri-architecture/index.js',
        'blocks/nri-why-choose/index': './src/blocks/nri-why-choose/index.js',
        'blocks/nri-benefits/index': './src/blocks/nri-benefits/index.js',
        'blocks/nri-director/index': './src/blocks/nri-director/index.js',
        'blocks/nri-testimonials/index': './src/blocks/nri-testimonials/index.js',
        'blocks/nri-cta/index': './src/blocks/nri-cta/index.js',
        
        // Career Page blocks
        'blocks/career-hero/index': './src/blocks/career-hero/index.js',
        'blocks/career-overview/index': './src/blocks/career-overview/index.js',
        'blocks/career-why/index': './src/blocks/career-why/index.js',
        'blocks/career-life/index': './src/blocks/career-life/index.js',
        'blocks/career-openings/index': './src/blocks/career-openings/index.js',
        'blocks/career-form/index': './src/blocks/career-form/index.js',
        'blocks/career-assurance/index': './src/blocks/career-assurance/index.js',
        
        // Contact Page blocks
        'blocks/contact-hero/index': './src/blocks/contact-hero/index.js',
        'blocks/contact-enquiry/index': './src/blocks/contact-enquiry/index.js',
        'blocks/contact-offices/index': './src/blocks/contact-offices/index.js',
        'blocks/contact-form/index': './src/blocks/contact-form/index.js',
        
        // Resources Page blocks
        'blocks/resources-hero/index': './src/blocks/resources-hero/index.js',
        'blocks/resources-tabs/index': './src/blocks/resources-tabs/index.js',
        'blocks/resources-content/index': './src/blocks/resources-content/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
};
