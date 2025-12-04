# Quick Installation Guide

## Prerequisites

- WordPress 6.0 or higher
- PHP 7.4 or higher  
- Node.js 16+ and npm (for building)

## Installation Steps

### 1. Upload Plugin

```bash
# Option A: Clone directly into WordPress plugins directory
cd /path/to/wordpress/wp-content/plugins/
git clone <repository-url> ashtech-pages-blocks

# Option B: Upload folder manually
# Copy the ashtech-pages-blocks folder to wp-content/plugins/
```

### 2. Install Dependencies

```bash
cd ashtech-pages-blocks
npm install
```

This will install:
- @wordpress/scripts (build tools)
- @wordpress/blocks (block registration)
- @wordpress/block-editor (editor components)
- @wordpress/components (UI components)
- @wordpress/i18n (internationalization)

### 3. Build JavaScript Files

```bash
# For production (optimized)
npm run build

# For development (with watch mode)
npm start
```

This creates compiled JavaScript files in each block folder.

### 4. Activate Plugin

1. Go to WordPress Admin Dashboard
2. Navigate to **Plugins → Installed Plugins**
3. Find **Ashtech Pages Blocks**
4. Click **Activate**

## Verification

After activation, verify the plugin is working:

1. Go to **Pages → Add New**
2. Click the **+** (Add block) button
3. Search for "Ashtech" in the block inserter
4. You should see all 9 blocks:
   - Home Page
   - Project Page
   - NRI Corner Page
   - About Us Page
   - Resources Page
   - Career Page
   - Contact Page
   - Terms and Conditions Page
   - Privacy Policy Page

## Creating Pages

### Quick Setup

1. **Create Home Page:**
   - Pages → Add New
   - Add "Home Page" block
   - Edit content
   - Set as homepage: Settings → Reading → Static page

2. **Create Other Pages:**
   - Repeat for each page type
   - Add the corresponding block
   - Customize content

### Content Editing

Each block provides:
- ✏️ **Editable text fields** - Click to edit any text
- 🖼️ **Image uploads** - Click "Upload Image" buttons
- 📝 **Rich text** - Format text with bold, italic, links
- 📐 **Full-width support** - Use alignment tools

## Troubleshooting

### Blocks Not Showing?

1. Check plugin is activated
2. Verify build completed: `npm run build`
3. Clear WordPress cache
4. Check browser console for errors

### Build Errors?

1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again
4. Run `npm run build`

### Styling Issues?

The plugin includes two CSS files:
- `editor.css` - For block editor
- `style.css` - For frontend

Both are automatically enqueued.

## File Structure

```
ashtech-pages-blocks/
│
├── ashtech-pages-blocks.php  ← Main plugin file
├── package.json              ← Dependencies
├── editor.css                ← Editor styling
├── style.css                 ← Frontend styling
├── README.md                 ← Documentation
├── INSTALLATION.md           ← This file
│
├── home-page/
│   ├── block.json
│   ├── index.js
│   ├── edit.js
│   └── save.js
│
├── project-page/
│   ├── block.json
│   ├── index.js
│   ├── edit.js
│   └── save.js
│
├── nri-page/
│   ├── block.json
│   ├── index.js
│   ├── edit.js
│   └── save.js
│
├── about-page/
│   ├── block.json
│   ├── index.js
│   ├── edit.js
│   └── save.js
│
├── resources-page/
│   ├── block.json
│   ├── index.js
│   ├── edit.js
│   └── save.js
│
├── career-page/
│   ├── block.json
│   ├── index.js
│   ├── edit.js
│   └── save.js
│
├── contact-page/
│   ├── block.json
│   ├── index.js
│   ├── edit.js
│   └── save.js
│
├── terms-page/
│   ├── block.json
│   ├── index.js
│   ├── edit.js
│   └── save.js
│
└── privacy-page/
    ├── block.json
    ├── index.js
    ├── edit.js
    └── save.js
```

## Auto-Registration

The plugin automatically registers all blocks by scanning for `block.json` files. To add a new block:

1. Create new folder
2. Add block.json
3. Add index.js, edit.js, save.js
4. Run `npm run build`
5. Block appears automatically!

## Development Mode

For active development:

```bash
npm start
```

This watches for file changes and rebuilds automatically.

## Production Deployment

Before deploying:

```bash
npm run build
```

Then upload only these folders:
- The plugin folder (with build files)
- Exclude: node_modules, .git, src files

## Support

For questions or issues:
- Check README.md for detailed documentation
- Review block.json files for configuration
- Inspect edit.js and save.js for component logic

---

**Plugin Version:** 1.0.0  
**WordPress Version:** 6.0+  
**PHP Version:** 7.4+

