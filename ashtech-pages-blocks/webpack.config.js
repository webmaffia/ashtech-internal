const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
    ...defaultConfig,
    entry: {
        'home-page/index': './home-page/index.js',
        'project-page/index': './project-page/index.js',
        'nri-page/index': './nri-page/index.js',
        'about-page/index': './about-page/index.js',
        'resources-page/index': './resources-page/index.js',
        'career-page/index': './career-page/index.js',
        'contact-page/index': './contact-page/index.js',
        'terms-page/index': './terms-page/index.js',
        'privacy-page/index': './privacy-page/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'build'),
    },
};

