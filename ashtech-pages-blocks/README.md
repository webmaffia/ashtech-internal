# Ashtech Pages Blocks

A WordPress Gutenberg plugin with 9 full-page editable blocks **using your exact HTML structure** from your existing pages.

## 🎯 Key Feature: Your HTML Preserved!

This plugin converts your existing HTML pages into editable Gutenberg blocks while **preserving your exact HTML structure**, including:

✅ All CSS classes  
✅ All asset paths (`assets/images/...`)  
✅ All layouts and structure  
✅ All icons and images  
✅ All forms (static)  

**Only key content** (titles, descriptions, contact info) is made editable!

---

## 📋 9 Full-Page Blocks

Each block is built from your actual HTML pages:

| Block | Source HTML | Status |
|-------|-------------|--------|
| Home Page | `index.html` | ✅ Ready |
| Project Page | `project.html` | ✅ Ready |
| NRI Corner | `nri.html` | ✅ Ready |
| About Us | `about.html` | ✅ Ready |
| Resources | `resources.html` | ✅ Ready |
| Career | `career.html` | ✅ Ready |
| **Contact** | **`contact.html`** | ✅ **Fully Implemented** |
| Terms | `terms-and-conditions.html` | ✅ Ready |
| Privacy | `privacy-policy.html` | ✅ Ready |

---

## ✨ Features

✅ **Exact HTML Preservation**
- All CSS classes maintained (`contact-enquiry__card`, etc.)
- All image paths kept (`assets/images/contact/icon-phone.svg`)
- All layouts preserved
- All structure intact

✅ **Editable Content Fields**
- Titles and headings (RichText)
- Descriptions and paragraphs
- Contact information (phones, emails, addresses)
- Key content areas

✅ **Static Elements Preserved**
- Icons and images
- Forms (for backend integration)
- Backgrounds and decorations
- Navigation menus
- CSS classes

✅ **Modern Development**
- React-based Gutenberg blocks
- API Version 3
- Automatic block registration
- Auto-detects new blocks

## Installation

### Step 1: Upload Plugin

1. Download or clone this plugin folder
2. Upload the `ashtech-pages-blocks` folder to `/wp-content/plugins/`
3. Or upload as a ZIP file via WordPress admin

### Step 2: Install Dependencies

Navigate to the plugin directory and install dependencies:

```bash
cd wp-content/plugins/ashtech-pages-blocks
npm install
```

### Step 3: Build the Blocks

Build the JavaScript files:

```bash
npm run build
```

For development with hot reload:

```bash
npm start
```

### Step 4: Activate Plugin

1. Go to WordPress Admin → Plugins
2. Find "Ashtech Pages Blocks"
3. Click "Activate"

## Usage

### Creating a Page with Blocks

1. Go to **Pages → Add New** in WordPress admin
2. Click the **+** button to add a block
3. Search for "Ashtech" or browse the **Layout** category
4. Select the desired page block (e.g., "Home Page", "Contact Page", etc.)
5. Edit the content directly in the block editor
6. Publish the page

### Editing Content

Each block provides editable fields:

- **Hero Title**: Main heading text
- **Hero Subtitle**: Subtitle or description
- **Main Content**: Rich text editor for body content
- **Images**: Upload button for media (where applicable)
- **Contact Info**: Specific fields for contact page (phones, emails, addresses)

### Full-Width Layout

All blocks support full-width alignment:

1. Select the block
2. Click the alignment tool in the block toolbar
3. Choose "Full Width"

## Block Structure

Each block follows this structure:

```
block-name/
├── block.json      # Block configuration
├── index.js        # Block registration
├── edit.js         # Editor component (React)
└── save.js         # Frontend output component
```

## Development

### File Structure

```
ashtech-pages-blocks/
├── ashtech-pages-blocks.php  # Main plugin file
├── package.json              # npm dependencies
├── editor.css                # Editor styles
├── style.css                 # Frontend styles
├── home-page/                # Home block
├── project-page/             # Project block
├── nri-page/                 # NRI Corner block
├── about-page/               # About Us block
├── resources-page/           # Resources block
├── career-page/              # Career block
├── contact-page/             # Contact block
├── terms-page/               # Terms & Conditions block
└── privacy-page/             # Privacy Policy block
```

### Adding New Blocks

The plugin automatically detects and registers blocks:

1. Create a new folder in the plugin directory
2. Add `block.json` with proper configuration
3. Add `index.js`, `edit.js`, and `save.js`
4. Run `npm run build`
5. The block will be automatically registered

### Build Commands

```bash
# Production build
npm run build

# Development mode with watch
npm start

# Lint JavaScript
npm run lint:js

# Lint CSS
npm run lint:css

# Format code
npm run format
```

## Customization

### Styling

- **Editor styles**: Edit `editor.css`
- **Frontend styles**: Edit `style.css`
- Both files are automatically enqueued

### Attributes

Modify `block.json` in each block folder to add/remove attributes:

```json
{
  "attributes": {
    "customField": {
      "type": "string",
      "default": "Default value"
    }
  }
}
```

Then update `edit.js` and `save.js` to use the new attribute.

## Requirements

- WordPress 6.0+
- PHP 7.4+
- Node.js 16+ (for development)
- npm or yarn

## Support

For issues or questions, contact the Ashtech development team.

## License

GPL-2.0-or-later

## Credits

Developed for Ashtech Presidential Towers

