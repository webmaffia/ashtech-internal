# Ashtech Gutenberg Blocks - Documentation

## Available Blocks

### 1. Ashtech Banner
**Purpose:** Hero banner section with animated SVG background

**Attributes:**
- `title` (string): Main banner title
- `scrollText` (string): Scroll indicator text

**Features:**
- Includes desktop and mobile responsive SVG animations
- Full-width hero section
- Animated building line drawings

**Usage:**
Add this block at the top of your page to create an impactful hero section.

---

### 2. Ashtech Overview
**Purpose:** Company overview section with call-to-action

**Attributes:**
- `label` (string): Section label
- `title` (string): Section title
- `description` (string): Company description
- `buttonText` (string): CTA button text

**Features:**
- Animated text reveals
- Decorative elements
- Gradient overlay

**Usage:**
Use this block to introduce your company and services.

---

### 3. Ashtech Values
**Purpose:** Display core company values with interactive graphic

**Attributes:**
- `label` (string): Section label
- `title` (string): Section title
- `values` (array): Array of 6 values, each with:
  - `title` (string): Value name
  - `description` (string): Value description

**Features:**
- 6 values displayed (3 left, 3 right)
- Central animated graphic
- Editable via Inspector Controls

**Usage:**
Showcase your company's core principles and values.

---

### 4. Ashtech Projects
**Purpose:** Showcase ongoing projects with imagery

**Attributes:**
- `label` (string): Section label
- `title` (string): Section title
- `description` (string): Project description
- `button1Text` (string): Primary button text
- `button2Text` (string): Secondary button text

**Features:**
- Background building image
- Two call-to-action buttons
- Full-width section with overlay

**Usage:**
Highlight your current projects and developments.

---

### 5. Ashtech NRI Desk
**Purpose:** NRI services section with features grid

**Attributes:**
- `label` (string): Section label
- `title` (string): Section title
- `description` (string): Service description
- `buttonText` (string): CTA button text
- `features` (array): Array of 4 features, each with:
  - `icon` (string): Icon filename
  - `text` (string): Feature text

**Features:**
- Split layout with image and content
- 4 feature icons with text
- Editable via Inspector Controls

**Usage:**
Promote NRI-specific services and benefits.

---

### 6. Ashtech Awards
**Purpose:** Display awards and recognition

**Attributes:**
- `label` (string): Section label
- `title` (string): Section title
- `description` (string): Section description
- `awards` (array): Array of 4 awards, each with:
  - `text` (string): Award name

**Features:**
- Grid layout (2x2)
- Laurel wreath decorations
- Editable via Inspector Controls

**Usage:**
Showcase company achievements and accolades.

---

### 7. Ashtech Testimonials
**Purpose:** Client testimonials with slider

**Attributes:**
- `label` (string): Section label
- `title` (string): Section title
- `testimonials` (array): Array of 3 testimonials, each with:
  - `quote` (string): Client quote
  - `name` (string): Client name
  - `role` (string): Client role/position

**Features:**
- Slick slider integration
- Auto-play functionality
- Previous/Next navigation
- 5-star rating display
- Background image
- Editable via Inspector Controls

**Usage:**
Build trust with client testimonials and reviews.

---

### 8. Ashtech Footer
**Purpose:** Site footer with links and contact information

**Attributes:**
- `description` (string): Company description
- `address` (string): Company address
- `phone` (string): Contact phone
- `email` (string): Contact email
- `copyright` (string): Copyright text
- `legal` (string): Legal links text

**Features:**
- Logo and social media links
- Quick links navigation
- Contact information with icons
- Copyright and legal notices

**Usage:**
Add as the last block on your page for complete site footer.

---

## Customization

### Editing Block Content

All blocks support inline editing through the WordPress block editor:

1. Click on the block to select it
2. Click on any text to edit it directly
3. Use the toolbar for text formatting
4. Use Inspector Controls (right sidebar) for advanced options

### Inspector Controls

Some blocks have Inspector Controls for editing structured data:
- **Values Block**: Edit all 6 values
- **NRI Desk Block**: Edit all 4 features
- **Awards Block**: Edit all 4 awards
- **Testimonials Block**: Edit all 3 testimonials

To access Inspector Controls:
1. Select the block
2. Look at the right sidebar in the editor
3. Expand the settings panel

### Styling

All blocks use the existing CSS from your `assets/css/main.css` file. To modify styles:

1. Edit your SCSS files in the original project
2. Recompile the CSS
3. Replace `assets/css/main.css` in the plugin folder
4. Clear cache and refresh

### Adding New Blocks

To add a new custom block:

1. Create a new folder in `src/blocks/[block-name]/`
2. Add these files:
   - `block.json` - Block configuration
   - `index.js` - Block registration
   - `edit.js` - Editor component
   - `save.js` - Frontend output
   - `style.scss` - Frontend styles
   - `editor.scss` - Editor-only styles

3. Update `webpack.config.js` to include the new block
4. Update `ashtech-gutenberg-blocks.php` to register the block
5. Run `npm run build`

## Best Practices

1. **Always use the blocks in order** for the intended layout
2. **Copy all assets** before activating the plugin
3. **Test in editor** before publishing
4. **Use Inspector Controls** for bulk content updates
5. **Keep backups** before making major changes
6. **Clear cache** after updates

## Block Alignment

Most blocks support these alignment options:
- Default (content width)
- Wide width
- Full width

To change alignment:
1. Select the block
2. Click the alignment button in the toolbar
3. Choose your preferred width

## Animation Classes

Blocks use these animation classes:
- `.animate-text` - Left to right animation
- `.animate-text-rtl` - Right to left animation

These are handled by `landing-animations.js` automatically.

## Performance Tips

1. **Optimize images** before uploading
2. **Use WebP format** where possible
3. **Enable caching** plugins for production
4. **Minify CSS/JS** in production
5. **Use a CDN** for static assets

