# Ashtech Gutenberg Blocks

> **Professional WordPress Plugin** - Custom Gutenberg blocks built with React.js for Ashtech Presidential Towers

[![WordPress](https://img.shields.io/badge/WordPress-5.8+-blue.svg)](https://wordpress.org/)
[![React](https://img.shields.io/badge/React-18+-61dafb.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-GPL--2.0+-red.svg)](LICENSE)

Convert your landing page HTML into fully editable, content-manageable WordPress Gutenberg blocks!

## 🎯 Overview

This plugin transforms the Ashtech Presidential Towers landing page into **8 custom Gutenberg blocks**, making it easy for content editors to update the website without touching any code. Built with modern React.js and WordPress best practices.

### ✨ What Makes This Special?

- 🎨 **Pixel-Perfect**: Maintains exact design from original HTML
- 🔧 **No-Code Editing**: Content editors can update everything visually
- ⚡ **Modern Stack**: React.js, WordPress Block Editor API, @wordpress/scripts
- 📱 **Fully Responsive**: Mobile and desktop optimized
- 🎭 **Animations Preserved**: All SVG animations and transitions included
- 🔌 **WordPress Native**: Integrates seamlessly with WordPress ecosystem

## 📦 Blocks Included

| Block | Purpose | Editable Elements |
|-------|---------|-------------------|
| 🏠 **Banner** | Hero section with animated SVG | Title, scroll text |
| 📋 **Overview** | Company introduction | Label, title, description, CTA |
| ⭐ **Values** | Core company values | 6 values with titles & descriptions |
| 🏗️ **Projects** | Project showcase | Label, title, description, 2 CTAs |
| 🌍 **NRI Desk** | NRI services | Title, description, 4 features, CTA |
| 🏆 **Awards** | Recognition display | Title, description, 4 awards |
| 💬 **Testimonials** | Client reviews slider | Title, 3 testimonials with ratings |
| 📞 **Footer** | Site footer | Contact info, links, social media |

## 🚀 Quick Start

### Prerequisites

- WordPress 5.8 or higher
- Node.js 14+ and npm
- PHP 7.4+

### Installation

```bash
# 1. Copy plugin to WordPress
cp -r ashtech-gutenberg-blocks /path/to/wordpress/wp-content/plugins/

# 2. Navigate to plugin directory
cd /path/to/wordpress/wp-content/plugins/ashtech-gutenberg-blocks

# 3. Install dependencies
npm install

# 4. Build blocks
npm run build

# 5. Copy assets from your original project
# (Copy assets/ folder containing CSS, images, and JS)
```

### Windows Quick Setup

```bash
# Run the automated setup
setup.bat

# Copy assets
copy-assets.bat
```

### Activate Plugin

1. Go to WordPress Admin → Plugins
2. Find "Ashtech Gutenberg Blocks"
3. Click "Activate"

### Create Your Page

1. Pages → Add New
2. Click **+** to add blocks
3. Find "Ashtech Blocks" category
4. Add blocks in this order:
   - Ashtech Banner
   - Ashtech Overview  
   - Ashtech Values
   - Ashtech Projects
   - Ashtech NRI Desk
   - Ashtech Awards
   - Ashtech Testimonials
   - Ashtech Footer
5. Customize content
6. Publish!

## 📖 Documentation

- **[QUICK-START.md](QUICK-START.md)** - 5-minute setup guide
- **[INSTALLATION.md](INSTALLATION.md)** - Detailed installation instructions
- **[BLOCKS-DOCUMENTATION.md](BLOCKS-DOCUMENTATION.md)** - Complete block reference
- **[PROJECT-SUMMARY.md](PROJECT-SUMMARY.md)** - Full project overview
- **[STRUCTURE.txt](STRUCTURE.txt)** - Directory structure guide

## 🛠️ Development

### Commands

```bash
# Development mode (hot reload)
npm start

# Production build
npm run build

# Code quality
npm run lint:js        # Lint JavaScript
npm run lint:css       # Lint CSS
npm run format         # Format code

# Maintenance
npm run packages-update  # Update dependencies
```

### Project Structure

```
ashtech-gutenberg-blocks/
├── src/blocks/          # Source files (React.js)
│   ├── banner/
│   ├── overview/
│   └── ...
├── build/               # Compiled files (auto-generated)
├── assets/              # Static assets (CSS, images, JS)
└── *.php                # WordPress plugin files
```

### Making Changes

1. Edit files in `src/blocks/[block-name]/`
2. Run `npm start` for live development
3. Changes auto-compile and reload
4. Build for production: `npm run build`

## 🎨 Features

### Content Management
- ✅ Visual inline editing (RichText)
- ✅ Inspector Controls for complex data
- ✅ Real-time editor preview
- ✅ Default content included
- ✅ Block validation

### Design & UX
- ✅ Responsive layouts
- ✅ SVG animations preserved
- ✅ Smooth transitions
- ✅ Accessible markup
- ✅ Mobile-first approach

### WordPress Integration
- ✅ Custom block category
- ✅ Block icons & descriptions
- ✅ Searchable keywords
- ✅ Alignment support
- ✅ Wide/Full width options
- ✅ Asset management

### Performance
- ✅ Code splitting per block
- ✅ Lazy loading
- ✅ Minified production builds
- ✅ Optimized assets
- ✅ Efficient rendering

## 🔧 Technology Stack

**Frontend**
- React.js 18+
- JSX
- WordPress Block Editor API
- RichText Component
- InspectorControls

**Build Tools**
- @wordpress/scripts
- webpack
- Babel
- PostCSS

**WordPress**
- PHP 7.4+
- WordPress 5.8+
- Gutenberg Block API

**Libraries**
- jQuery (for Slick Slider)
- Slick Carousel

## 📋 Requirements

### Production Server
- WordPress 5.8+
- PHP 7.4+
- MySQL 5.7+ or MariaDB 10.3+
- Apache/Nginx
- HTTPS recommended

### Development
- Node.js 14+
- npm 6+
- Git (recommended)

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🎓 Learning Resources

### WordPress
- [Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [WordPress Codex](https://codex.wordpress.org/)
- [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)

### React
- [React Documentation](https://react.dev/)
- [JSX Guide](https://react.dev/learn/writing-markup-with-jsx)

## 🤝 Contributing

This is a custom project for Ashtech Presidential Towers. For modifications:

1. Create a branch
2. Make your changes
3. Test thoroughly
4. Update documentation
5. Submit for review

## 📄 License

GPL-2.0+ - See LICENSE file for details

## 🆘 Support

### Common Issues

**Images not showing?**
- Verify assets folder is copied correctly
- Check file permissions
- Clear WordPress cache

**Blocks not appearing?**
- Run `npm run build`
- Check browser console for errors
- Refresh WordPress editor

**Slider not working?**
- Ensure jQuery is loaded
- Check for JavaScript conflicts
- Verify Slick Slider is enqueued

**Styles not applying?**
- Copy main.css from original project
- Clear browser cache (Ctrl+F5)
- Check asset URLs in browser devtools

### Getting Help

1. Check documentation files
2. Review browser console errors
3. Verify file structure matches STRUCTURE.txt
4. Test with default WordPress theme
5. Disable other plugins to check conflicts

## 🎉 Credits

**Developed for:** Ashtech Presidential Towers  
**Technology:** WordPress, React.js, Gutenberg  
**Build System:** @wordpress/scripts  

## 📊 Stats

- **8** Custom Blocks
- **48** Source Files
- **100%** Design Accuracy
- **Fully** Responsive
- **Zero** Dependencies on external block libraries

---

**Made with ❤️ for WordPress and React**

[Get Started →](QUICK-START.md) | [Read Docs →](BLOCKS-DOCUMENTATION.md) | [View Structure →](STRUCTURE.txt)

