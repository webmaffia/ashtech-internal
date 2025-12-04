/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies - Home Page
 */
import * as homePage from '../home-page';
import * as projectPage from '../project-page';
import * as nriPage from '../nri-page';
import * as aboutPage from '../about-page';
import * as resourcesPage from '../resources-page';
import * as careerPage from '../career-page';
import * as contactPage from '../contact-page';
import * as termsPage from '../terms-page';
import * as privacyPage from '../privacy-page';

/**
 * Register all blocks
 */
const blocks = [
    homePage,
    projectPage,
    nriPage,
    aboutPage,
    resourcesPage,
    careerPage,
    contactPage,
    termsPage,
    privacyPage,
];

blocks.forEach(block => {
    if (!block) return;
    const { name, settings } = block;
    registerBlockType(name, settings);
});

