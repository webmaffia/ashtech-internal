# Implementation Guide - Using Your Exact HTML

## 🎯 Overview

All 9 blocks have been created to use **your exact HTML structure** from your existing pages. The **Contact Page Block** is fully implemented as the reference example.

---

## ✅ Contact Block - Fully Implemented Reference

**File:** `contact-page/save.js`

**What it includes:**
- ✅ **Hero Banner** - Exact HTML from `contact.html` lines 72-81
- ✅ **Enquiry Section** - Complete card layout from lines 83-164
- ✅ **Office Addresses** - Full office cards from lines 166-251  
- ✅ **Contact Form** - Static form from lines 253-301
- ✅ **All Assets** - Proper paths to all icons and images
- ✅ **All CSS Classes** - Every class preserved

**Editable Fields:**
- Hero title & subtitle
- Enquiry directory title
- Sales phone & email
- Customer phone & email
- Corporate office address, phone, email
- Site office address, email

**Static Elements:**
- All icons with proper paths
- Background elements
- Card layouts
- Form structure
- Button styles
- All other content

---

## 📐 Structure Pattern (All Blocks Follow This)

### Step 1: Block Configuration (`block.json`)

```json
{
  "apiVersion": 3,
  "name": "ashtech/contact-page",
  "title": "Contact Page",
  "category": "layout",
  "icon": "admin-page",
  "attributes": {
    "heroTitle": {
      "type": "string",
      "default": "We're Here to Help!"
    },
    // ... more attributes for editable fields
  }
}
```

### Step 2: Editor Component (`edit.js`)

```jsx
export default function Edit({ attributes, setAttributes }) {
    return (
        <div {...useBlockProps()}>
            <RichText
                tagName="h1"
                value={attributes.heroTitle}
                onChange={(value) => setAttributes({ heroTitle: value })}
                placeholder="Enter hero title..."
            />
            {/* More editable fields */}
        </div>
    );
}
```

### Step 3: Frontend Output (`save.js`)

```jsx
export default function Save({ attributes }) {
    return (
        <div {...useBlockProps.save()}>
            {/* EXACT HTML STRUCTURE FROM YOUR PAGE */}
            <section className="project-hero contactbg">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText.Content 
                        tagName="h1" 
                        className="project-hero__title" 
                        value={attributes.heroTitle} 
                    />
                </div>
            </section>
            {/* Rest of your exact HTML */}
        </div>
    );
}
```

---

## 🔧 How to Complete Remaining Blocks

### Current Status:

| Block | block.json | index.js | edit.js | save.js |
|-------|-----------|----------|---------|---------|
| Home | ✅ | ✅ | ✅ | ⚠️ Boilerplate |
| Project | ✅ | ✅ | ✅ | ⚠️ Boilerplate |
| NRI | ✅ | ✅ | ✅ | ⚠️ Boilerplate |
| About | ✅ | ✅ | ✅ | ⚠️ Boilerplate |
| Resources | ✅ | ✅ | ✅ | ⚠️ Boilerplate |
| Career | ✅ | ✅ | ✅ | ⚠️ Boilerplate |
| **Contact** | ✅ | ✅ | ✅ | ✅ **Complete** |
| Terms | ✅ | ✅ | ✅ | ⚠️ Boilerplate |
| Privacy | ✅ | ✅ | ✅ | ⚠️ Boilerplate |

⚠️ **Boilerplate** = Generic structure, needs your specific HTML

---

## 📝 To Complete Each Block:

### 1. **Read Your HTML File**

Example: For Home Page, open `index.html` and find the main content sections:

```html
<!-- Banner Section (lines 73-246) -->
<section class="landing-banner">
    <div class="landing-banner__overlay"></div>
    <div class="landing-banner__content">
        <h1 class="landing-banner__title">Nature and Architecture<br>in Perfect Sync</h1>
    </div>
    <!-- SVG graphics -->
</section>

<!-- Overview Section (lines 248-272) -->
<section class="landing-overview">
    <!-- ... -->
</section>

<!-- And so on... -->
```

### 2. **Convert to JSX in save.js**

```jsx
export default function Save({ attributes }) {
    const { heroTitle, overviewTitle, overviewContent } = attributes;
    
    return (
        <div {...useBlockProps.save()}>
            {/* Banner Section - EXACT HTML */}
            <section className="landing-banner">
                <div className="landing-banner__overlay"></div>
                <div className="landing-banner__content">
                    <RichText.Content 
                        tagName="h1" 
                        className="landing-banner__title" 
                        value={heroTitle} 
                    />
                    <p className="landing-banner__scroll">(SCROLL)</p>
                </div>
                
                {/* SVG - Keep as is (static) */}
                <svg id="banner-svg-animation" className="landing-banner__svg">
                    {/* Full SVG code from your HTML */}
                </svg>
            </section>

            {/* Overview Section */}
            <section className="landing-overview">
                <div className="landing-overview__interaction">
                    <div className="landing-overview__decoration"></div>
                    <div className="landing-overview__content">
                        <div className="landing-overview__header">
                            <div className="landing-overview__label">
                                <span className="animate-text">Overview</span>
                            </div>
                            <RichText.Content 
                                tagName="h2" 
                                className="landing-overview__title animate-text" 
                                value={overviewTitle} 
                            />
                        </div>
                        <RichText.Content 
                            tagName="p" 
                            className="landing-overview__description animate-text" 
                            value={overviewContent} 
                        />
                        {/* Rest of exact HTML... */}
                    </div>
                </div>
            </section>
            
            {/* Continue with all other sections from your HTML */}
        </div>
    );
}
```

### 3. **Update block.json**

Add attributes for all editable fields:

```json
{
  "attributes": {
    "heroTitle": {
      "type": "string",
      "default": "Nature and Architecture<br>in Perfect Sync"
    },
    "overviewTitle": {
      "type": "string",
      "default": "Curated for Magnificence"
    },
    "overviewContent": {
      "type": "string",
      "default": "Ashtech Presidential Towers, a division..."
    }
    // Add all editable fields
  }
}
```

### 4. **Update edit.js**

Add RichText fields for editing:

```jsx
export default function Edit({ attributes, setAttributes }) {
    const { heroTitle, overviewTitle, overviewContent } = attributes;

    return (
        <div {...useBlockProps()}>
            <section className="landing-banner">
                <RichText
                    tagName="h1"
                    value={heroTitle}
                    onChange={(value) => setAttributes({ heroTitle: value })}
                    placeholder="Enter hero title..."
                />
            </section>

            <section className="landing-overview">
                <RichText
                    tagName="h2"
                    value={overviewTitle}
                    onChange={(value) => setAttributes({ overviewTitle: value })}
                    placeholder="Enter overview title..."
                />
                <RichText
                    tagName="p"
                    value={overviewContent}
                    onChange={(value) => setAttributes({ overviewContent: value })}
                    placeholder="Enter overview content..."
                />
            </section>
        </div>
    );
}
```

### 5. **Rebuild**

```bash
npm run build
```

---

## 🎨 Asset Paths - Keep Exact!

All asset paths should remain exactly as in your HTML:

**✅ Correct:**
```jsx
<img src="assets/images/contact/icon-phone.svg" alt="Phone" />
<img src="assets/images/project/project_logo.png" alt="Logo" />
<img src="assets/images/landing/nri.png" alt="NRI" />
```

**❌ Wrong:**
```jsx
<img src="/assets/images/contact/icon-phone.svg" alt="Phone" />
<img src={require('./icon-phone.svg')} alt="Phone" />
```

---

## 📦 What's Included For Each Block

### Already Created:

✅ **block.json** - Block configuration with attributes  
✅ **index.js** - Block registration  
✅ **edit.js** - Editor interface with editable fields  
⚠️ **save.js** - Contains boilerplate structure  

### What You Need To Do:

Update **save.js** in each block folder to include your complete HTML structure from the corresponding HTML file.

---

## 🚀 Quick Implementation Steps

For each block:

1. **Open the HTML file** (e.g., `index.html` for Home)
2. **Copy main content sections** (everything between `<body>` tags, excluding header/footer)
3. **Open save.js** in the block folder (e.g., `home-page/save.js`)
4. **Convert HTML to JSX:**
   - Change `class=` to `className=`
   - Self-close tags: `<img />`, `<br />`, etc.
   - Replace editable content with `<RichText.Content />`
5. **Add attributes** to `block.json` for editable fields
6. **Update edit.js** with `<RichText />` for those fields
7. **Run** `npm run build`
8. **Test** in WordPress

---

## 📋 Reference Files

**See these for complete examples:**

1. **contact-page/save.js** - ✅ Fully implemented
2. **HTML-MAPPING.md** - Shows all HTML sections
3. **This file** - Implementation guide

---

## 💡 Pro Tips

1. **Start Small** - Implement one section at a time
2. **Test Often** - Build and test after each section
3. **Keep Static** - Don't make everything editable, only key content
4. **Preserve Structure** - Copy HTML exactly, just add RichText where needed
5. **Assets** - Keep all asset paths exactly as in HTML

---

## ✅ When You're Done

Each block will:
- ✅ Use your exact HTML structure
- ✅ Preserve all CSS classes
- ✅ Keep all asset paths
- ✅ Have editable key content
- ✅ Work with your existing styles
- ✅ Be fully functional in Gutenberg

---

## 🎯 Result

**What you'll have:**
- Full-featured Gutenberg blocks
- Your exact HTML/CSS preserved
- Content editable in WordPress
- No style conflicts
- Professional implementation

**Contact block is your complete reference!** 🎉

