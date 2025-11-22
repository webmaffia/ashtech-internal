# 🎯 How to Add Header & Footer to Your Landing Page

## ✅ Header Block Created!

I've created a new **Header block** with:
- ✅ Fixed position header
- ✅ Logo (uploadable via Media Library)
- ✅ Menu button with text and icon
- ✅ Fully responsive
- ✅ Self-contained styles

## 📦 Available Blocks Now

### Layout Blocks:
1. **Header** - Fixed top navigation (NEW! ✨)
2. **Footer** - Complete footer with links, contact, social

### Content Blocks:
3. **Banner** - Hero section
4. **Overview** - Introduction section
5. **Values** - Core values with graphic
6. **Projects** - Projects showcase
7. **NRI** - NRI Desk section
8. **Awards** - Awards and recognition
9. **Testimonials** - Client testimonials slider

## 🚀 How to Build Your Landing Page

### Step 1: Rebuild Plugin

```bash
cd wp-content/plugins/ashtech-gutenberg-blocks
npm run build
```

Or Windows:
```
rebuild.bat
```

### Step 2: Create a New Page

1. **Go to WordPress Admin**
2. **Pages → Add New**
3. **Enter page title**: "Landing Page" (or your choice)
4. **Select Template**: 
   - Choose "Ashtech Blank" (no theme header/footer)
   - OR "Ashtech Full Width" (includes theme header/footer but no wrappers)

### Step 3: Add Header Block

1. **Click (+) to add block**
2. **Search**: "Ashtech Header"
3. **Add it**
4. **Customize**:
   - Click block
   - Right sidebar → "Header Settings"
   - Upload your logo
   - Change menu text if needed
   - Upload custom menu icon (optional)

### Step 4: Add Content Blocks

**Add blocks in this order:**

1. **Banner** (Hero section)
   - Full-width banner
   - Title and scroll indicator

2. **Overview** (Introduction)
   - Welcome message
   - Description

3. **Values** (Core Values)
   - Central graphic
   - 6 value points

4. **Projects** (Showcase)
   - Project information
   - Background image
   - Building graphic

5. **NRI** (NRI Desk)
   - NRI services
   - Features list
   - Call to action

6. **Awards** (Recognition)
   - Award laurels
   - Achievement text

7. **Testimonials** (Social Proof)
   - Client quotes
   - Star ratings
   - Auto-playing slider

### Step 5: Add Footer Block

1. **Click (+) at the bottom**
2. **Search**: "Ashtech Footer"
3. **Add it**
4. **Customize**:
   - Logo
   - Description
   - Links
   - Contact info
   - Social media icons

### Step 6: Publish!

1. **Click "Publish"** (top right)
2. **View your page**
3. **Done!** 🎉

## 🎨 Complete Page Structure

```
┌─────────────────────────────────┐
│      HEADER (Fixed Top)         │ ← Always visible
├─────────────────────────────────┤
│         BANNER (Hero)           │
├─────────────────────────────────┤
│        OVERVIEW (Intro)         │
├─────────────────────────────────┤
│      VALUES (Core Values)       │
├─────────────────────────────────┤
│     PROJECTS (Showcase)         │
├─────────────────────────────────┤
│        NRI (NRI Desk)           │
├─────────────────────────────────┤
│       AWARDS (Recognition)      │
├─────────────────────────────────┤
│   TESTIMONIALS (Testimonials)   │
├─────────────────────────────────┤
│     FOOTER (Bottom Info)        │
└─────────────────────────────────┘
```

## ⚙️ Header Block Features

### What You Can Customize:

#### Logo:
- **Upload** your own logo
- **Change** anytime via Inspector Controls
- **Supports** SVG, PNG, JPG
- **Default**: Ashtech logo

#### Menu Button:
- **Edit text** directly in block ("Menu" by default)
- **Upload icon** via Inspector Controls
- **Default**: Figma menu icon
- **Hover effect** included

### Header Behavior:

- **Fixed position** - Stays at top when scrolling
- **Z-index: 999** - Always on top
- **Centered** - Responsive max-width
- **White text** - Visible on dark backgrounds
- **Responsive** - Adjusts on mobile

## 📱 Responsive Behavior

### Desktop:
```
┌────────────────────────────────────────────┐
│  [Logo]                        [Menu] [≡]  │ ← Fixed header
├────────────────────────────────────────────┤
│                                            │
│            BANNER CONTENT                  │
│                                            │
└────────────────────────────────────────────┘
```

### Mobile:
```
┌─────────────────────────┐
│ [Logo]      [Menu] [≡]  │ ← Smaller, fixed
├─────────────────────────┤
│                         │
│    BANNER CONTENT       │
│                         │
└─────────────────────────┘
```

## 🎯 Page Template Options

### Option 1: Ashtech Blank (Recommended for Landing Page)
```
Benefits:
✅ No theme header/footer
✅ No theme wrappers
✅ Clean, full control
✅ Perfect for landing pages

Use when:
- Creating standalone landing page
- Want complete design control
- No need for theme navigation
```

### Option 2: Ashtech Full Width
```
Benefits:
✅ Includes theme header/footer
✅ No content wrappers
✅ Full width blocks
✅ Keeps site navigation

Use when:
- Want consistent site navigation
- Need theme header/footer
- Landing page part of main site
```

### Option 3: Default Template
```
Benefits:
✅ Full theme integration
✅ Sidebar support
✅ Theme styles

Use when:
- Standard page
- Not a landing page
- Want all theme features
```

## 🔧 Header Customization

### Via Inspector Controls (Right Sidebar):

1. **Click Header block**
2. **Open Inspector Controls** (⚙️)
3. **See "Header Settings" panel**

#### Logo Section:
```
Logo
[Upload Logo] or [Change Logo]
[Remove Logo]
```

#### Menu Icon Section:
```
Menu Icon
[Upload Icon] or [Change Icon]
```

### Via Direct Editing:

- **Click menu text** to edit inline
- **Type** new text
- **See changes** immediately

## 💡 Pro Tips

### Tip 1: Logo Size
```
Recommended logo dimensions:
- Width: 300-400px
- Height: 45-60px
- Format: SVG (best) or PNG
- Background: Transparent
```

### Tip 2: Header Color
```
The header has:
- No background (transparent)
- White text
- Works on dark backgrounds

If your banner is light:
- Customize header styles
- Or add dark overlay to banner
```

### Tip 3: Menu Button
```
The menu button is visual only in blocks.
To make it functional:
1. Add navigation menu (WordPress Menus)
2. Or add custom JavaScript
3. Or link to separate menu page
```

### Tip 4: Multiple Headers
```
Usually use ONE header per page.
But you can:
- Have different headers on different pages
- Customize per page
- Upload different logos
```

## 🎨 Styling Header

### Default Colors:
- **Text**: White (#FFFFFF)
- **Background**: Transparent
- **Hover**: 80% opacity

### To Change Colors:
1. Edit `header/style.scss`
2. Find `.header__menu-text`
3. Change `color` value
4. Rebuild: `npm run build`

### Example - Dark Text:
```scss
.header__menu-text {
  color: #0C0D0D;  // Dark instead of white
}
```

## 📊 Complete Landing Page Setup

### Quick Start (5 Steps):

1. **Rebuild**
```bash
npm run build
```

2. **Create Page**
- Pages → Add New
- Title: "Landing Page"
- Template: "Ashtech Blank"

3. **Add Blocks**
- Header
- Banner
- Overview
- Values
- Projects
- NRI
- Awards
- Testimonials
- Footer

4. **Customize**
- Upload images
- Edit text
- Adjust settings

5. **Publish**
- Click "Publish"
- View page
- Done!

## 🚨 Troubleshooting

### Header Not Showing?

**Solution 1: Rebuild**
```bash
cd wp-content/plugins/ashtech-gutenberg-blocks
npm run build
```

**Solution 2: Clear Cache**
- Clear WordPress cache
- Clear browser cache (Ctrl+Shift+R)
- Refresh editor

**Solution 3: Check Registration**
- Verify header is in blocks array
- Check `ashtech-gutenberg-blocks.php`
- Should see 'header' in $blocks array

### Header Not Fixed?

**Check:**
- Are you using "Ashtech Blank" or "Ashtech Full Width" template?
- Default template might have theme conflicts
- Header CSS should have `position: fixed`

**Solution:**
- Select "Ashtech Blank" template
- Or add custom CSS to override theme

### Logo Not Uploading?

**Check:**
- File size (keep under 2MB)
- File format (SVG, PNG, JPG)
- WordPress upload permissions

**For SVG:**
- Plugin already enables SVG uploads
- Should work automatically
- If not, check server MIME types

### Header Overlaps Content?

**This is normal!**
The header is fixed (position: fixed).

**Solutions:**
1. Banner should be full height
2. Add padding-top to first content block
3. Or use transparent header on banner

## ✅ Verification Checklist

After setup, verify:

### Header:
- [ ] Logo displays correctly
- [ ] Menu button shows
- [ ] Text is readable
- [ ] Fixed at top
- [ ] Responsive on mobile

### Content Blocks:
- [ ] All blocks added
- [ ] Proper order
- [ ] Images loaded
- [ ] Text customized
- [ ] Styles applied

### Footer:
- [ ] All sections filled
- [ ] Links work
- [ ] Social icons show
- [ ] Contact info correct
- [ ] Background shows

### Overall:
- [ ] Page published
- [ ] No errors
- [ ] Looks like frontend
- [ ] Mobile responsive

## 🎯 Example Landing Page

### Full Block List:
```
1. Ashtech Header           ← Logo + Menu
2. Ashtech Banner           ← Hero section
3. Ashtech Overview         ← Introduction
4. Ashtech Values           ← Core values (6 items)
5. Ashtech Projects         ← Showcase
6. Ashtech NRI              ← NRI services
7. Ashtech Awards           ← Recognition (3 awards)
8. Ashtech Testimonials     ← Reviews (3 testimonials)
9. Ashtech Footer           ← Footer info
```

### Time to Build:
- **Setup**: 5 minutes
- **Customization**: 15-30 minutes
- **Total**: ~30-35 minutes

## 📝 Summary

### What You Have:
- ✅ **Header block** - Fixed navigation
- ✅ **7 content blocks** - Full landing page sections
- ✅ **Footer block** - Complete footer
- ✅ **9 total blocks** - Complete landing page

### How to Use:
1. **Rebuild** plugin (`npm run build`)
2. **Create page** with "Ashtech Blank" template
3. **Add blocks** in order (Header → Content → Footer)
4. **Customize** each block
5. **Publish** and enjoy!

### What's Included:
- ✅ Full responsive styles
- ✅ Image upload capability
- ✅ Text editing (WYSIWYG)
- ✅ Inspector controls
- ✅ Self-contained blocks
- ✅ Production-ready

---

**Status:** ✅ HEADER & FOOTER READY!  
**Total Blocks:** 9 complete blocks  
**Next Step:** `npm run build` and create your page!  
**Result:** Professional landing page in minutes! 🎉

## 🎊 You're All Set!

Just rebuild and start building your landing page! 🚀✨

