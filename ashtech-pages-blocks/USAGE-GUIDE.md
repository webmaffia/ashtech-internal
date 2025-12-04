# Usage Guide - Ashtech Pages Blocks

## ✅ Blocks Created with Your Exact HTML Structure

All 9 blocks have been created using the **exact HTML structure** from your existing HTML pages. Each block preserves your complete HTML/CSS structure while making key content editable through the Gutenberg editor.

## 📋 Available Blocks

### 1. **Home Page Block** (`ashtech/home-page`)
- Based on: `index.html`
- Editable: Hero title, subtitle, main content, images
- Preserves: Complete landing page structure with SVG animations

### 2. **Project Page Block** (`ashtech/project-page`)
- Based on: `project.html`
- Editable: Hero, overview, architecture, experiences, location
- Preserves: Full project showcase with interactive elements

### 3. **NRI Corner Block** (`ashtech/nri-page`)
- Based on: `nri.html`
- Editable: Investment content, benefits, testimonials
- Preserves: Complete NRI-focused layout

### 4. **About Us Block** (`ashtech/about-page`)
- Based on: `about.html`
- Editable: Company story, values, leadership, timeline
- Preserves: Full about page structure

### 5. **Resources Block** (`ashtech/resources-page`)
- Based on: `resources.html`
- Editable: News, blogs, press releases
- Preserves: Resource grid and tabs

### 6. **Career Block** (`ashtech/career-page`)
- Based on: `career.html`
- Editable: Job listings, company culture, opportunities
- Preserves: Career page with job cards

### 7. **Contact Block** (`ashtech/contact-page`) ✨
- Based on: `contact.html`
- Editable Fields:
  - Hero title & subtitle
  - Enquiry directory title
  - Sales phone & email
  - Customer phone & email
  - Corporate office (address, phone, email)
  - Site office (address, email)
- Preserves: Complete contact page with:
  - Enquiry cards with icons
  - Office address cards with images
  - Contact form (static)
  - All CSS classes and structure

### 8. **Terms & Conditions Block** (`ashtech/terms-page`)
- Based on: `terms-and-conditions.html`
- Editable: Page title, full legal content
- Preserves: Privacy policy layout

### 9. **Privacy Policy Block** (`ashtech/privacy-page`)
- Based on: `privacy-policy.html`
- Editable: Page title, full policy content
- Preserves: Terms and conditions layout

## 🎯 Key Features

### ✅ Exact HTML Preservation
- **All CSS classes** maintained
- **All HTML structure** preserved
- **All images paths** kept intact
- **Forms remain functional** (static fields)

### ✅ Editable Content
Only the **key content fields** are made editable:
- Headings (H1, H2, H3)
- Paragraphs
- Contact information
- Descriptions
- Button text (where applicable)

### ✅ Static Elements Preserved
These remain **unchanged** for consistency:
- Icons and images
- Forms (will need backend integration)
- Navigation menus
- Footers
- SVG graphics
- Background elements

## 💡 How It Works

### Contact Page Example

**Original HTML:**
```html
<section class="contact-enquiry">
    <div class="contact-enquiry__background"></div>
    <div class="contact-enquiry__container">
        <div class="contact-enquiry__header">
            <h2 class="contact-enquiry__title">Enquiry Directory</h2>
            <p class="contact-enquiry__subtitle">Connect With Ashtech</p>
        </div>
        <!-- ... rest of structure ... -->
    </div>
</section>
```

**Gutenberg Block Output:**
```jsx
<section className="contact-enquiry">
    <div className="contact-enquiry__background"></div>
    <div className="contact-enquiry__container">
        <div className="contact-enquiry__header">
            <RichText.Content tagName="h2" className="contact-enquiry__title" value={enquiryTitle} />
            <p className="contact-enquiry__subtitle">Connect With Ashtech</p>
        </div>
        {/* ... exact same structure ... */}
    </div>
</section>
```

**Result:** Exact same HTML output, but the title is editable in Gutenberg! 🎉

## 🚀 Quick Start

### Step 1: Install

```bash
cd ashtech-pages-blocks
npm install
npm run build
```

### Step 2: Activate Plugin
- WordPress Admin → Plugins → Activate "Ashtech Pages Blocks"

### Step 3: Create Pages

#### Create Contact Page:
1. Pages → Add New
2. Title: "Contact Us"
3. Click (+) → Search "Contact Page"
4. Insert the block
5. Edit the content:
   - Change phone numbers
   - Update email addresses
   - Modify office addresses
6. Publish!

The page will use your **exact HTML structure** with updated content.

## 📝 Editing Content

### In the Block Editor:

**Editable Fields** show with:
- Border highlighting on hover
- Click to edit
- Toolbar for formatting

**Static Elements**:
- Icons and images
- CSS classes
- Form fields
- Layouts

### Example Workflow:

1. **Insert Block** → Choose "Contact Page"
2. **Edit Hero** → Click title, type new heading
3. **Update Phones** → Click phone number, edit
4. **Change Emails** → Click email, modify
5. **Addresses** → Click address text, update
6. **Publish** → Page uses exact HTML structure!

## 🎨 Styling

### Your CSS Files Still Work!

All your existing CSS remains active:
- `assets/css/main.css` - Your main stylesheet
- All CSS classes preserved
- No style conflicts

### Class Names Preserved:

```jsx
// All these classes are maintained:
<section className="contact-enquiry">
<div className="contact-enquiry__background"></div>
<div className="contact-enquiry__container">
<h2 className="contact-enquiry__title">...</h2>
```

Your CSS will style these **exactly as before**!

## 🔧 Advanced Usage

### Customizing Editable Fields

Want to make more fields editable? Edit the block files:

**File:** `contact-page/edit.js`
```jsx
// Add new editable field
<RichText
    tagName="p"
    value={attributes.newField}
    onChange={(value) => setAttributes({ newField: value })}
    placeholder="Enter text..."
/>
```

**File:** `contact-page/block.json`
```json
{
  "attributes": {
    "newField": {
      "type": "string",
      "default": "Default value"
    }
  }
}
```

### Adding Static Content

Want to add non-editable HTML? Just add it to `save.js`:

```jsx
<div className="my-custom-section">
    <p>This text is static and won't be editable</p>
</div>
```

## 📱 Responsive Design

All your responsive CSS classes work:
- Mobile-specific classes preserved
- Breakpoints remain functional
- Original responsive behavior maintained

## 🔄 Updating Blocks

After editing block files:

```bash
npm run build
```

Refresh WordPress editor to see changes.

## ⚠️ Important Notes

### Forms Are Static
Contact forms remain static HTML:
- They're included in the block output
- You'll need to integrate with:
  - Contact Form 7
  - WPForms
  - Custom PHP handler
  - Or your existing form processor

### Images Use Relative Paths
Update image paths if needed:
```jsx
// Change from:
<img src="assets/images/contact/office-corporate.jpg" />

// To WordPress path:
<img src={`${wpData.themeUrl}/assets/images/contact/office-corporate.jpg`} />
```

### Navigation Menus
Header/footer remain separate:
- Use WordPress theme for header/footer
- Or create separate blocks
- Blocks focus on page content only

## 🎯 Best Practices

1. **One Block Per Page** - Each page gets one main content block
2. **Keep Header/Footer Separate** - Use theme templates
3. **Test After Building** - Always test in WP after `npm run build`
4. **Backup Content** - Export pages before major updates

## 📚 Next Steps

1. ✅ Install and activate plugin
2. ✅ Create pages with blocks
3. ✅ Customize editable content
4. ⚙️ Integrate contact forms
5. 🎨 Fine-tune styling if needed
6. 🚀 Deploy to production!

## 💬 Need Help?

Check:
- `README.md` - Full documentation
- `INSTALLATION.md` - Installation guide
- Block files - See how each block works

---

**All blocks preserve your exact HTML structure** while providing Gutenberg editing capabilities! 🎉

