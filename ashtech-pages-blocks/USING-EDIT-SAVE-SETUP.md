# 🎯 Using edit.js + save.js Setup

## ✅ Setup Complete - Original Gutenberg Approach

You're now using the **standard WordPress Gutenberg approach** where:
- `edit.js` = What you see in the editor
- `save.js` = What gets saved to database and shown on frontend
- `index.js` = Registers the block

**Perfect for frequently updating content!**

---

## 🎯 Why This Is Better For You

### **Your Requirement:** Content updates frequently

### **Template Approach (Old):**
```
Content in PHP files → Hard to edit → Need developer
```

### **Edit/Save Approach (New):** ✅
```
Content in WordPress → Easy to edit → Anyone can update
```

**All content is now editable through WordPress interface!**

---

## 📁 File Structure

```
ashtech-pages-blocks/
│
├── package.json              ← npm dependencies
├── webpack.config.js         ← Build configuration
├── ashtech-pages-blocks.php  ← Plugin registration
│
├── home-page/
│   ├── block.json            ← Block config
│   ├── index.js              ← Registers block
│   ├── edit.js               ← EDITOR interface
│   ├── save.js               ← FRONTEND output (your HTML)
│   └── template.php          ← Not used (can delete)
│
└── (8 other blocks with same structure)
```

---

## 🔄 How It Works

### **Step 1: Edit in WordPress**
```
User opens editor → edit.js loads → Shows editable fields
```

### **Step 2: User Edits Content**
```
User types in fields → Data saves to WordPress database
```

### **Step 3: User Publishes**
```
User clicks Publish → save.js generates HTML → Saves to database
```

### **Step 4: Frontend Display**
```
Page loads → WordPress outputs saved HTML → Your complete page shows!
```

**All content stored in WordPress database!** ✅

---

## 🛠️ Installation Steps

### **Step 1: Install Dependencies**

```bash
cd ashtech-pages-blocks
npm install
```

This installs:
- @wordpress/scripts (build tools)
- @wordpress/blocks
- @wordpress/block-editor  
- @wordpress/components
- @wordpress/i18n

### **Step 2: Build Blocks**

```bash
npm run build
```

This creates:
```
build/
├── home-page/index.js        ← Compiled block
├── project-page/index.js
├── contact-page/index.js
└── (6 more blocks)
```

### **Step 3: Activate Plugin**

```
WordPress Admin → Plugins → Activate "Ashtech Pages Blocks"
```

**Done!** Blocks are now functional! ✅

---

## ✏️ Editing Content (The Power of This Setup)

### **Example: Update Contact Phone**

**Old Way (Template):**
```
1. Open template.php
2. Find PHP code
3. Change number in code
4. Upload file
5. Hard to track changes
```

**New Way (Edit/Save):** ✅
```
1. Edit page in WordPress
2. Click phone number field
3. Type new number
4. Click Update
5. Done! All tracked in revisions!
```

---

## 🎨 What's Editable

### **Home Page Block:**
- Hero title
- Overview content
- (Can add more fields in edit.js)

### **Contact Page Block:**
- Hero title & subtitle
- Sales phone & email
- Customer phone & email
- Corporate address, phone, email
- Site address & email
- Office images

### **Project Page Block:**
- Hero title & subtitle
- Overview title & content
- (Can add more fields)

### **ALL Blocks:**
Every block can have as many editable fields as you need!

---

## 🔧 Adding More Editable Fields

### **Example: Make Project Description Editable**

**1. Update block.json:**
```json
{
  "attributes": {
    "projectDescription": {
      "type": "string",
      "default": "Discover Ashtech Presidential Towers..."
    }
  }
}
```

**2. Update edit.js:**
```jsx
<RichText
    tagName="p"
    value={attributes.projectDescription}
    onChange={(value) => setAttributes({ projectDescription: value })}
    placeholder="Enter description..."
/>
```

**3. Update save.js:**
```jsx
<p className="landing-projects__description">
    <RichText.Content value={projectDescription} />
</p>
```

**4. Rebuild:**
```bash
npm run build
```

**Done!** Now that field is editable! ✅

---

## 📊 Current Editable Fields

| Block | Editable Fields | Can Add More? |
|-------|----------------|---------------|
| Home | 2 | ✅ Yes |
| Project | 3 | ✅ Yes |
| NRI | 4 | ✅ Yes |
| About | 6 | ✅ Yes |
| Resources | 1 | ✅ Yes |
| Career | 4 | ✅ Yes |
| **Contact** | **9** | ✅ Yes |
| Terms | 2 | ✅ Yes |
| Privacy | 2 | ✅ Yes |

**You can make ANY content editable!**

---

## 🎯 Advantages of This Setup

### ✅ **Content in Database**
- All content stored in WordPress
- Revision history
- Easy backups
- Version control

### ✅ **Non-Technical Editing**
- Edit through WordPress interface
- No code knowledge needed
- WYSIWYG editing
- Live preview

### ✅ **Flexible**
- Add new editable fields anytime
- Remove fields if needed
- Customize per block

### ✅ **Standard WordPress**
- Uses official Gutenberg API
- Compatible with plugins
- Future-proof
- Well documented

---

## 🚀 Development Workflow

### **When You Need to Update:**

**1. Add New Editable Field:**
```
Edit block.json → Edit edit.js → Edit save.js → npm run build
```

**2. Change Design/Layout:**
```
Edit save.js (HTML/CSS) → npm run build
```

**3. Update Content:**
```
Just edit in WordPress! No build needed!
```

---

## 📦 Build Commands

```bash
# Build for production (one time)
npm run build

# Development with auto-rebuild (watches for changes)
npm start

# Format code
npm run format

# Lint JavaScript
npm run lint:js

# Lint CSS
npm run lint:css
```

---

## 🎨 Asset Paths in save.js

Your save.js files have hardcoded paths:
```jsx
<img src="assets/images/landing/logo.svg" />
```

**These work because:**
- Relative to WordPress site root
- Your assets are in plugin folder
- WordPress serves them correctly

**Alternative (if paths don't work):**
Use WordPress's asset system or PHP to inject correct URLs.

---

## ✅ What's Ready Now

**Current Status:**
- ✅ package.json configured
- ✅ webpack.config.js created
- ✅ All block.json files updated
- ✅ All edit.js files have editing interfaces
- ✅ All save.js files have complete HTML
- ✅ All index.js files register blocks

**Next Step:**
```bash
npm install
npm run build
```

---

## 🎯 After Build

**You'll have:**
```
build/
├── home-page/
│   └── index.js              ← Compiled block
├── project-page/
│   └── index.js
├── contact-page/
│   └── index.js
└── (6 more)
```

**WordPress loads these compiled files!**

---

## 💡 Key Benefits

### **For Content Editors:**
- ✅ Edit everything in WordPress
- ✅ No code changes needed
- ✅ Visual editing
- ✅ Preview before publish
- ✅ Revision history

### **For Developers:**
- ✅ Standard Gutenberg approach
- ✅ Easy to add fields
- ✅ Clean separation of concerns
- ✅ Maintainable code

### **For Frequent Updates:**
- ✅ Content in database (not code)
- ✅ Non-technical team can edit
- ✅ Fast updates
- ✅ No deployment needed for content changes

---

## 🚀 Quick Start

```bash
# 1. Install
cd ashtech-pages-blocks
npm install

# 2. Build
npm run build

# 3. Activate
WordPress → Plugins → Activate

# 4. Use
Pages → Add New → Insert blocks → Edit content → Publish
```

---

## 🎉 Summary

**Old Setup:**
- template.php (PHP) → Hard to edit
- Content in code → Needs developer

**New Setup:** ✅
- edit.js (editing interface) → Easy to use
- save.js (saves to database) → Content in WordPress
- Non-technical users can edit → No developer needed!

**Perfect for frequently updating content!** ✨

---

**Now run:** `npm install && npm run build` 🚀

