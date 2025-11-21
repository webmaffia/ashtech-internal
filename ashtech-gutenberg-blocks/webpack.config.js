const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
    ...defaultConfig,
    entry: {
        'blocks/banner/index': path.resolve(__dirname, 'src/blocks/banner/index.js'),
        'blocks/overview/index': path.resolve(__dirname, 'src/blocks/overview/index.js'),
        'blocks/values/index': path.resolve(__dirname, 'src/blocks/values/index.js'),
        'blocks/projects/index': path.resolve(__dirname, 'src/blocks/projects/index.js'),
        'blocks/nri/index': path.resolve(__dirname, 'src/blocks/nri/index.js'),
        'blocks/awards/index': path.resolve(__dirname, 'src/blocks/awards/index.js'),
        'blocks/testimonials/index': path.resolve(__dirname, 'src/blocks/testimonials/index.js'),
        'blocks/footer/index': path.resolve(__dirname, 'src/blocks/footer/index.js'),
    },
};

