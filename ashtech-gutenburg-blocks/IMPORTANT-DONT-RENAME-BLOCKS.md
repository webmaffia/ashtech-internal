# ⚠️ IMPORTANT - DON'T RENAME BLOCKS!

## What Happened

You modified the configuration files to reference different block names, but the actual block folders in `src/blocks/` still had their original names. This caused WordPress to look for blocks that didn't exist, resulting in the error:

> "This block has encountered an error and cannot preview"

## The Problem

### Your Changes:
- **PHP file** looked for: `header`, `banner`, `overview`, `projects`, etc.
- **Webpack** looked for: `blocks/header/index`, `blocks/banner/index`, etc.
- **Actual folders** are: `landing-banner`, `landing-overview`, `landing-projects`, etc.

### Result:
❌ WordPress couldn't find the blocks because the names didn't match!

---

## ✅ Fixed!

I've reverted the configuration files back to match your actual block structure:

### Correct Block Names (DO NOT CHANGE):

**Landing Page:**
- `landing-banner`
- `landing-overview`
- `landing-values`
- `landing-projects`
- `landing-nri`
- `landing-awards`
- `landing-testimonials`

**About Page:**
- `about-hero`
- `about-overview`
- `about-values`
- `about-vision-mission`
- `about-history`
- `about-leadership`
- `about-director-message`
- `about-projects`

**Project Page:**
- `project-hero`
- `project-submenu`
- `project-overview`
- `project-architecture`
- `experiences`
- `project-location`
- `specifications`
- `project-about`

**NRI Page:**
- `nri-hero`
- `nri-overview`
- `nri-architecture`
- `nri-why-choose`
- `nri-benefits`
- `nri-director`
- `nri-testimonials`
- `nri-cta`

**Career Page:**
- `career-hero`
- `career-overview`
- `career-why`
- `career-life`
- `career-openings`
- `career-form`
- `career-assurance`

**Contact Page:**
- `contact-hero`
- `contact-enquiry`
- `contact-offices`
- `contact-form`

**Resources Page:**
- `resources-hero`
- `resources-tabs`
- `resources-content`

---

## 🔒 Files That MUST Match Block Names

These 3 files must always reference the EXACT block folder names:

1. **`ashtech-gutenberg-blocks.php`** - PHP registration
2. **`webpack.config.js`** - Build configuration  
3. **Block folders** in `src/blocks/`

If you change one, you MUST change all three!

---

## ✅ Current Status

- ✅ All configuration files fixed
- ✅ Build completed successfully
- ✅ All 45 blocks compiled
- ✅ Ready to use in WordPress

---

## 🚀 Next Steps

1. **Copy plugin to WordPress** (if not already there)
2. **Go to WordPress** → Plugins → Deactivate → Activate (refresh)
3. **Test blocks** - they should now work!

---

## 💡 Rule of Thumb

**NEVER modify these files unless you know what you're doing:**
- `ashtech-gutenberg-blocks.php`
- `webpack.config.js`
- `package.json`

**If you want to rename blocks, you must:**
1. Rename the folder in `src/blocks/`
2. Update the name in `ashtech-gutenberg-blocks.php`
3. Update the entry in `webpack.config.js`
4. Run `npm run build` again

But honestly, **it's easier to just keep the current names!** 😊

