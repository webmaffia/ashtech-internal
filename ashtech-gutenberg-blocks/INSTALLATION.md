# Ashtech Gutenberg Blocks - Installation Guide

## Prerequisites

Before you begin, make sure you have:
- WordPress 5.8 or higher installed
- Node.js 14+ and npm installed on your development machine
- Access to your WordPress installation directory

## Step 1: Setup WordPress

If you don't have WordPress installed yet:

1. Download WordPress from https://wordpress.org/download/
2. Extract it to your server directory (e.g., `D:\Server\htdocs\ashtech-wordpress`)
3. Create a database for WordPress
4. Run the WordPress installation by visiting your site URL
5. Complete the 5-minute installation

## Step 2: Install the Plugin

1. Copy the `ashtech-gutenberg-blocks` folder to your WordPress plugins directory:
   ```
   wp-content/plugins/ashtech-gutenberg-blocks/
   ```

2. Navigate to the plugin directory in your terminal:
   ```bash
   cd wp-content/plugins/ashtech-gutenberg-blocks
   ```

3. Install npm dependencies:
   ```bash
   npm install
   ```

4. Build the blocks:
   ```bash
   npm run build
   ```

## Step 3: Copy Assets

You need to copy all the assets (CSS, images, JS) from your original project to the plugin:

1. Copy the entire `assets` folder from your original project to:
   ```
   wp-content/plugins/ashtech-gutenberg-blocks/assets/
   ```

   This should include:
   - `assets/css/main.css` - Your compiled main stylesheet
   - `assets/images/landing/` - All landing page images
   - `assets/js/landing-animations.js` - Animation scripts

2. Make sure the following images are in the correct locations:
   - Logo: `assets/images/landing/logo.svg`
   - Footer logo: `assets/images/landing/footer-logo.svg`
   - Values graphic: `assets/images/landing/values-graphic.svg`
   - Building image: `assets/images/landing/building.png`
   - NRI image: `assets/images/landing/nri.png`
   - Testimonial background: `assets/images/landing/testimonial-bg.jpg`
   - Award laurels: `assets/images/landing/award-laurel-left.svg`, `award-laurel-right.svg`
   - Social icons: All social media SVG icons
   - Feature icons: All NRI feature icons
   - Contact icons: Location, phone, email icons

## Step 4: Activate the Plugin

1. Log in to your WordPress admin panel
2. Go to **Plugins** → **Installed Plugins**
3. Find "Ashtech Gutenberg Blocks" and click **Activate**

## Step 5: Create a New Page

1. Go to **Pages** → **Add New**
2. Give your page a title (e.g., "Home")
3. Click the **+** button to add blocks
4. You'll see a new category called "Ashtech Blocks"
5. Add blocks in this order:
   - Ashtech Banner
   - Ashtech Overview
   - Ashtech Values
   - Ashtech Projects
   - Ashtech NRI Desk
   - Ashtech Awards
   - Ashtech Testimonials
   - Ashtech Footer

6. Customize the content in each block as needed
7. Publish the page

## Step 6: Set as Homepage (Optional)

1. Go to **Settings** → **Reading**
2. Under "Your homepage displays", select "A static page"
3. Choose your newly created page as the homepage
4. Save changes

## Development Mode

If you want to make changes to the blocks:

1. Run development mode with hot reload:
   ```bash
   npm start
   ```

2. Make your changes to the block files
3. When done, build for production:
   ```bash
   npm run build
   ```

## Troubleshooting

### Images not showing
- Check that all image paths are correct in the plugin assets folder
- Verify file permissions (should be readable by web server)

### Styles not applying
- Make sure `assets/css/main.css` is copied from your original project
- Clear WordPress cache if using a caching plugin
- Hard refresh your browser (Ctrl+F5)

### Slider not working
- Ensure jQuery and Slick Slider are loading (check browser console)
- The plugin automatically enqueues these libraries

### Block not appearing in editor
- Make sure you ran `npm run build`
- Check browser console for JavaScript errors
- Try clearing WordPress transients

## File Structure

```
ashtech-gutenberg-blocks/
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── images/
│   │   └── landing/
│   └── js/
│       └── landing-animations.js
├── src/
│   └── blocks/
│       ├── banner/
│       ├── overview/
│       ├── values/
│       ├── projects/
│       ├── nri/
│       ├── awards/
│       ├── testimonials/
│       └── footer/
├── build/ (generated)
├── ashtech-gutenberg-blocks.php
├── package.json
├── webpack.config.js
└── README.md
```

## Support

For issues or questions, refer to:
- WordPress Codex: https://codex.wordpress.org/
- Gutenberg Handbook: https://developer.wordpress.org/block-editor/
- @wordpress/scripts documentation: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/

