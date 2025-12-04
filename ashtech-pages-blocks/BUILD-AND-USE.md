# 🚀 BUILD AND USE - Final Setup

## ✅ Now Using Standard Gutenberg Approach

**edit.js + save.js + index.js = Perfect for frequently updating content!**

---

## 🎯 Why This Setup

### **Your Need:**
> "Content gets updated very frequently"

### **Solution:**
✅ All content stored in WordPress database  
✅ Edit everything through Gutenberg interface  
✅ No code changes needed for content updates  
✅ Revision history for all changes  
✅ Non-technical team can update content  

---

## 📦 Installation (3 Commands)

### **Step 1: Install Dependencies**

```bash
cd ashtech-pages-blocks
npm install
```

**This installs:**
- @wordpress/scripts (build tools)
- @wordpress/blocks
- @wordpress/block-editor
- @wordpress/components
- All dependencies

**Time:** ~2 minutes

---

### **Step 2: Build Blocks**

```bash
npm run build
```

**This creates:**
```
build/
├── home-page/index.js          ← Compiled from index.js + edit.js + save.js
├── project-page/index.js
├── contact-page/index.js
├── career-page/index.js
├── nri-page/index.js
├── about-page/index.js
├── resources-page/index.js
├── terms-page/index.js
└── privacy-page/index.js
```

**Time:** ~1 minute

---

### **Step 3: Activate Plugin**

```
WordPress Admin → Plugins → "Ashtech Pages Blocks" → Activate
```

**Time:** 10 seconds

---

## ✅ Verification

After activation:

```
1. Pages → Add New
2. Click (+)
3. Search "Ashtech"
```

**You should see all 9 blocks!** ✅

---

## 🎯 How It Works Now

### **File Structure:**

```
home-page/
├── block.json        ← Configuration & attributes
├── index.js          ← Imports and registers block
├── edit.js           ← Editor interface (what you see when editing)
├── save.js           ← Frontend output (your complete HTML)
```

### **Build Process:**

```
index.js + edit.js + save.js
         ↓
    npm run build
         ↓
  build/home-page/index.js (compiled)
         ↓
   WordPress loads this
         ↓
    Blocks work!
```

---

## 📝 Editing Content

### **After Build:**

```
1. Insert "Contact Page" block

2. See editable fields:
   - Hero Title [Click to edit]
   - Hero Subtitle [Click to edit]
   - Sales Phone [Click to edit]
   - Sales Email [Click to edit]
   - Corporate Address [Click to edit]
   - Corporate Phone [Click to edit]
   - Corporate Email [Click to edit]
   - Upload Image [Click to upload]

3. Edit any field → Auto-saves to database ✅

4. Publish → HTML from save.js renders with your data ✅
```

---

## 🔄 Workflow

### **For Content Updates** (NO BUILD NEEDED):

```
WordPress Editor → Edit fields → Update → Done!
```

**Content stored in database, not in code!** ✅

### **For Design/Layout Updates** (BUILD NEEDED):

```
Edit save.js → npm run build → Refresh editor
```

**Only needed when changing HTML structure or adding fields!**

---

## 💡 Adding More Editable Fields

### **Example: Make Awards Editable**

**1. Update home-page/block.json:**
```json
{
  "attributes": {
    "award1": {
      "type": "string",
      "default": "National Infrastructure Excellence Award 2023"
    }
  }
}
```

**2. Update home-page/edit.js:**
```jsx
<RichText
    tagName="p"
    value={attributes.award1}
    onChange={(value) => setAttributes({ award1: value })}
    placeholder="Enter award name..."
/>
```

**3. Update home-page/save.js:**
```jsx
<p className="landing-awards__item-text">
    <RichText.Content value={award1} />
</p>
```

**4. Build:**
```bash
npm run build
```

**Done!** Award name is now editable! ✅

---

## 📊 Current Setup

| File | Purpose | When to Edit |
|------|---------|--------------|
| **block.json** | Attributes & config | Adding new fields |
| **index.js** | Block registration | Rarely |
| **edit.js** | Editor interface | Adding new edit fields |
| **save.js** | Frontend HTML | Changing design/layout |

---

## 🎨 Asset Paths

Your save.js files use:
```jsx
<img src="assets/images/landing/logo.svg" />
```

**These paths work as relative paths from your WordPress site.**

If images don't load, update to absolute paths:
```jsx
<img src={`${window.location.origin}/wp-content/plugins/ashtech-pages-blocks/assets/images/landing/logo.svg`} />
```

---

## ✅ What's Complete

**Setup:**
- ✅ package.json configured
- ✅ webpack.config.js created
- ✅ All block.json updated
- ✅ All index.js updated
- ✅ All edit.js have editing interfaces
- ✅ All save.js have complete HTML
- ✅ Assets folder included (200+ files)
- ✅ PHP registration updated

**Ready to:**
- ✅ npm install
- ✅ npm run build
- ✅ Activate plugin
- ✅ Start using!

---

## 🚀 Commands

```bash
# Install dependencies (first time only)
npm install

# Build blocks (after any code changes)
npm run build

# Development mode (auto-rebuilds on changes)
npm start

# After build, in WordPress:
# Plugins → Activate → Pages → Insert blocks → Edit content!
```

---

## 🎯 Advantages

### ✅ **Standard Approach:**
- Official WordPress Gutenberg method
- Well-documented
- Community support
- Future-proof

### ✅ **Content in Database:**
- All editable content in WordPress
- Revision history
- Easy backups
- Export/import friendly

### ✅ **Easy Updates:**
- Content editors can update anytime
- No developer needed for content
- Changes tracked in WordPress
- Rollback to previous versions

### ✅ **Your Complete HTML:**
- save.js has your full HTML structure
- All buttons, images, sections included
- Just with editable fields where you want them

---

## 🎉 Summary

**You now have:**
- ✅ Standard edit.js + save.js setup
- ✅ All content editable through WordPress
- ✅ Complete HTML in save.js files
- ✅ Ready to build and use
- ✅ Perfect for frequent content updates

**Next step:**

```bash
npm install
npm run build
```

Then activate and start editing content through WordPress! 🚀

