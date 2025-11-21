# Quick Start Guide

## 5-Minute Setup

### Prerequisites
- WordPress installed
- Node.js installed
- Plugin folder copied to `wp-content/plugins/`

### Setup Steps

**1. Run Setup Script (Windows)**
```bash
cd wp-content/plugins/ashtech-gutenberg-blocks
setup.bat
```

**OR manually:**
```bash
npm install
npm run build
```

**2. Copy Assets**
Copy your `assets` folder from the original project to:
```
wp-content/plugins/ashtech-gutenberg-blocks/assets/
```

Required structure:
```
assets/
├── css/
│   └── main.css
├── images/
│   └── landing/
│       ├── logo.svg
│       ├── footer-logo.svg
│       ├── values-graphic.svg
│       ├── building.png
│       ├── nri.png
│       ├── testimonial-bg.jpg
│       ├── award-laurel-*.svg
│       ├── icon-*.svg
│       └── social-*.svg
└── js/
    └── landing-animations.js
```

**3. Activate Plugin**
1. Go to WordPress Admin → Plugins
2. Find "Ashtech Gutenberg Blocks"
3. Click "Activate"

**4. Create Page**
1. Pages → Add New
2. Add blocks in this order:
   - Ashtech Banner
   - Ashtech Overview
   - Ashtech Values
   - Ashtech Projects
   - Ashtech NRI Desk
   - Ashtech Awards
   - Ashtech Testimonials
   - Ashtech Footer
3. Publish!

## Block Overview

| Block | Purpose | Key Features |
|-------|---------|--------------|
| Banner | Hero section | Animated SVG, responsive |
| Overview | Company intro | CTA button, gradient |
| Values | Core values | 6 values, central graphic |
| Projects | Showcase work | Dual CTA, background image |
| NRI Desk | NRI services | 4 features, split layout |
| Awards | Recognition | 4 awards, laurel decorations |
| Testimonials | Reviews | Slider, 3 testimonials |
| Footer | Site footer | Links, contact, social |

## Common Commands

```bash
# Development mode (hot reload)
npm start

# Production build
npm run build

# Lint JavaScript
npm run lint:js

# Lint CSS
npm run lint:css

# Format code
npm run format
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not showing | Check assets folder paths |
| Styles not applying | Copy main.css, clear cache |
| Slider not working | Check jQuery/Slick loaded |
| Block not in editor | Run npm run build |

## File Locations

- **Plugin files**: `wp-content/plugins/ashtech-gutenberg-blocks/`
- **Assets**: `wp-content/plugins/ashtech-gutenberg-blocks/assets/`
- **Block source**: `src/blocks/`
- **Built files**: `build/` (auto-generated)

## Next Steps

1. ✅ Setup complete
2. 📝 Customize block content
3. 🎨 Adjust styles if needed
4. 🚀 Publish your page
5. 📊 Test on different devices

## Need Help?

- See `INSTALLATION.md` for detailed setup
- See `BLOCKS-DOCUMENTATION.md` for block details
- Check browser console for errors
- Verify file permissions

## Development Workflow

1. Make changes to block files in `src/blocks/`
2. Changes auto-rebuild if running `npm start`
3. Refresh WordPress editor to see changes
4. For production: `npm run build`

That's it! Your landing page is now converted to Gutenberg blocks! 🎉

