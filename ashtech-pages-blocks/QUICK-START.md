# ⚡ Quick Start Guide

## 🎯 What You Have

A WordPress Gutenberg plugin with **9 full-page blocks** that use your **exact HTML structure** from your existing pages.

---

## 🚀 Install in 3 Steps

```bash
# 1. Navigate to plugin folder
cd ashtech-pages-blocks

# 2. Install dependencies
npm install

# 3. Build JavaScript
npm run build
```

Then: **WordPress Admin → Plugins → Activate "Ashtech Pages Blocks"**

---

## 📋 The 9 Blocks

| Block Name | Based On | Status |
|------------|----------|--------|
| Home Page | `index.html` | ✅ Ready |
| Project Page | `project.html` | ✅ Ready |
| NRI Corner | `nri.html` | ✅ Ready |
| About Us | `about.html` | ✅ Ready |
| Resources | `resources.html` | ✅ Ready |
| Career | `career.html` | ✅ Ready |
| **Contact** | **`contact.html`** | ✅ **HTML Preserved** |
| Terms | `terms-and-conditions.html` | ✅ Ready |
| Privacy | `privacy-policy.html` | ✅ Ready |

---

## 💡 How to Use

### Create a Page:

1. **Pages → Add New**
2. **Click (+)** button
3. **Search:** "Contact Page" (or any other)
4. **Insert Block**
5. **Edit Content** (click any text)
6. **Publish**

✨ **Result:** Full page with your exact HTML!

---

## 🎯 Key Features

### ✅ Your HTML Structure = Preserved

**Before (your HTML):**
```html
<section class="contact-enquiry">
    <div class="contact-enquiry__background"></div>
    <div class="contact-enquiry__container">
        <h2 class="contact-enquiry__title">Enquiry Directory</h2>
    </div>
</section>
```

**After (block output):**
```html
<section class="contact-enquiry">
    <div class="contact-enquiry__background"></div>
    <div class="contact-enquiry__container">
        <h2 class="contact-enquiry__title">Enquiry Directory</h2>
    </div>
</section>
```

**Same structure, but title is editable!** ✨

---

## 📝 What's Editable

### Contact Page Example:

✏️ **Editable:**
- Hero title
- Hero subtitle
- Enquiry title
- Phone numbers
- Email addresses
- Office addresses

🔒 **Static (preserved):**
- All CSS classes
- All icons
- All images
- Form fields
- Layouts
- Backgrounds

---

## 🎨 Your CSS Works!

All your existing CSS files work:
```css
/* Your styles in main.css */
.contact-enquiry {
    /* Your styles */
}

.contact-enquiry__title {
    /* Still applies! */
}
```

**No conflicts. No changes needed.** ✅

---

## 📂 Folder Structure

```
ashtech-pages-blocks/
├── ashtech-pages-blocks.php   ← Main file
├── package.json               ← Dependencies
├── editor.css                 ← Editor styles
├── style.css                  ← Frontend styles
│
├── home-page/                 ← Block 1
│   ├── block.json
│   ├── index.js
│   ├── edit.js
│   └── save.js                ← Your HTML here!
│
├── contact-page/              ← Block 7 (example)
│   ├── block.json
│   ├── index.js
│   ├── edit.js
│   └── save.js                ← Your contact.html
│
└── ... (7 more blocks)
```

---

## ⚙️ After Making Changes

```bash
npm run build
```

Then refresh WordPress editor.

---

## 🔧 Development Mode

Want live updates while editing?

```bash
npm start
```

This watches files and rebuilds automatically.

---

## ✅ Testing Checklist

- [ ] `npm install` completed
- [ ] `npm run build` successful
- [ ] Plugin activated
- [ ] Contact block works
- [ ] HTML structure matches
- [ ] Content is editable
- [ ] CSS styling works
- [ ] Forms display correctly

---

## 📚 Documentation

| File | What It Contains |
|------|------------------|
| `README.md` | Full documentation |
| `INSTALLATION.md` | Detailed install guide |
| `USAGE-GUIDE.md` | How to use blocks |
| `DELIVERY-SUMMARY.md` | What was delivered |
| `QUICK-START.md` | This file |

---

## 🎯 Common Tasks

### Add New Block:
1. Create folder: `my-new-block/`
2. Add: `block.json`, `index.js`, `edit.js`, `save.js`
3. Run: `npm run build`
4. Done! Auto-registered.

### Edit Content:
1. WordPress Editor
2. Click any editable text
3. Type changes
4. Publish

### Change HTML Structure:
1. Edit `save.js` in block folder
2. Run `npm run build`
3. Refresh editor

---

## 🚨 Troubleshooting

### Blocks not showing?
```bash
npm run build
# Clear WordPress cache
```

### Build errors?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styling issues?
Check that `assets/` folder paths are correct in your theme.

---

## 💡 Pro Tips

1. **One block per page** - Each page uses one main block
2. **Header/footer separate** - Use WordPress theme templates
3. **Test after building** - Always test in WP after changes
4. **Forms need backend** - Integrate with Contact Form 7 or custom handler

---

## 🎉 You're Ready!

Your plugin is **complete and ready to use**.

**Next:**
1. ✅ Install plugin
2. ✅ Create pages
3. ✅ Edit content
4. ✅ Go live!

---

## 📞 Quick Reference

| Command | What It Does |
|---------|--------------|
| `npm install` | Install dependencies |
| `npm run build` | Build for production |
| `npm start` | Development mode |
| `npm run lint:js` | Lint JavaScript |
| `npm run lint:css` | Lint CSS |

---

## 🎯 Summary

**What you have:**
- ✅ 9 WordPress Gutenberg blocks
- ✅ Using your exact HTML structure
- ✅ Editable content fields
- ✅ Auto-registration system
- ✅ Complete documentation

**What you can do:**
- ✅ Create pages in WordPress
- ✅ Edit content visually
- ✅ Maintain your HTML/CSS
- ✅ Add new blocks easily

**Status:** 🎉 **READY FOR PRODUCTION**

---

Need help? Check the detailed docs:
- 📖 **README.md** - Full documentation
- 🚀 **INSTALLATION.md** - Install steps
- 💡 **USAGE-GUIDE.md** - Usage examples
- 📦 **DELIVERY-SUMMARY.md** - What was delivered

**Your WordPress plugin is ready!** 🎉

