# 📐 Page Templates Guide - Full Width Options

## 🎯 3 Full-Width Templates Included

Your plugin now includes **3 custom page templates** for different layout needs!

---

## 📋 Available Templates

### 1. **Ashtech Full Width (No Header/Footer)** 🎯
**File:** `templates/template-fullwidth.php`

**Use For:** Complete custom pages where your block includes everything

**Features:**
- ✅ No header
- ✅ No footer
- ✅ 100% full width
- ✅ No margins or padding
- ✅ Perfect for landing pages

**Best For:**
- Home page (block includes everything)
- Standalone landing pages
- Pages with complete custom design

---

### 2. **Ashtech Full Width with Menu** 🎯
**File:** `templates/template-fullwidth-with-menu.php`

**Use For:** Pages that need navigation but custom footer

**Features:**
- ✅ Custom header with logo and menu
- ✅ Sliding menu navigation
- ✅ No footer
- ✅ Full width content
- ✅ Your menu from HTML

**Best For:**
- Internal pages
- Pages that need navigation
- When block includes its own footer

---

### 3. **Ashtech Full Width with Header & Footer** 🎯
**File:** `templates/template-fullwidth-with-header-footer.php`

**Use For:** Complete pages with consistent header/footer

**Features:**
- ✅ Custom header with logo and menu
- ✅ Sliding menu navigation
- ✅ Custom footer with all links
- ✅ Full width content area
- ✅ Complete from your HTML

**Best For:**
- Most pages (Project, About, Contact, etc.)
- Pages needing consistent navigation
- Professional page layout

---

## 🚀 How to Use Templates

### Step 1: Create a Page

1. WordPress Admin → **Pages → Add New**
2. Enter page title (e.g., "Contact Us")

### Step 2: Select Template

1. In the **Page** sidebar (right side)
2. Find **"Template"** dropdown
3. Select one of:
   - Ashtech Full Width (No Header/Footer)
   - Ashtech Full Width with Menu
   - Ashtech Full Width with Header & Footer

### Step 3: Add Your Block

1. Click **(+)** button
2. Search "Ashtech"
3. Insert your block (e.g., "Contact Page")

### Step 4: Publish

1. Click **"Publish"**
2. View page → Full width layout! ✨

---

## 💡 Template Selection Guide

### Which Template Should I Use?

| Page Type | Recommended Template | Why |
|-----------|---------------------|-----|
| **Home** | No Header/Footer | Block includes everything |
| **Project** | With Header & Footer | Needs navigation |
| **NRI Corner** | With Header & Footer | Needs navigation |
| **About Us** | With Header & Footer | Needs navigation |
| **Resources** | With Header & Footer | Needs navigation |
| **Career** | With Header & Footer | Needs navigation |
| **Contact** | With Header & Footer | Needs navigation |
| **Terms** | With Header & Footer | Needs navigation |
| **Privacy** | With Header & Footer | Needs navigation |

---

## 📐 Template Comparison

### Template 1: No Header/Footer

```
┌────────────────────────┐
│                        │
│   YOUR BLOCK CONTENT   │
│   (Full control)       │
│                        │
└────────────────────────┘
```

**Best when:** Block has its own header/footer

---

### Template 2: With Menu Only

```
┌────────────────────────┐
│   HEADER WITH MENU     │
├────────────────────────┤
│                        │
│   YOUR BLOCK CONTENT   │
│                        │
└────────────────────────┘
```

**Best when:** Need navigation, custom footer

---

### Template 3: With Header & Footer

```
┌────────────────────────┐
│   HEADER WITH MENU     │
├────────────────────────┤
│                        │
│   YOUR BLOCK CONTENT   │
│                        │
├────────────────────────┤
│   FOOTER WITH LINKS    │
└────────────────────────┘
```

**Best for:** Most pages (recommended)

---

## 🎨 What Each Template Includes

### Template 1: No Header/Footer ✅

**HTML:**
```html
<!DOCTYPE html>
<html>
<head>
    <?php wp_head(); ?>
</head>
<body>
    <!-- YOUR BLOCK CONTENT ONLY -->
    <?php the_content(); ?>
    <?php wp_footer(); ?>
</body>
</html>
```

**Perfect for pages where your block has everything!**

---

### Template 2: With Menu ✅

**HTML:**
```html
<!DOCTYPE html>
<html>
<head>
    <?php wp_head(); ?>
</head>
<body>
    <!-- HEADER -->
    <header class="header">
        <a href="/" class="header__logo">
            <img src="assets/images/landing/logo.svg">
        </a>
        <div class="header__menu">Menu</div>
    </header>

    <!-- SLIDING MENU -->
    <div class="side-menu">
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/project">Project</a></li>
                <!-- More menu items -->
            </ul>
        </nav>
    </div>

    <!-- YOUR BLOCK CONTENT -->
    <?php the_content(); ?>

    <?php wp_footer(); ?>
</body>
</html>
```

**Includes your header and menu from HTML!**

---

### Template 3: With Header & Footer ✅

**HTML:**
```html
<!DOCTYPE html>
<html>
<head>
    <?php wp_head(); ?>
</head>
<body>
    <!-- HEADER -->
    <header class="header">
        <!-- Your header HTML -->
    </header>

    <!-- SLIDING MENU -->
    <div class="side-menu">
        <!-- Your menu HTML -->
    </div>

    <!-- YOUR BLOCK CONTENT -->
    <?php the_content(); ?>

    <!-- FOOTER -->
    <footer class="landing-footer">
        <!-- Your complete footer HTML -->
    </footer>

    <?php wp_footer(); ?>
</body>
</html>
```

**Complete page with your header and footer!**

---

## 🔧 Step-by-Step Example

### Creating a Contact Page with Full Layout:

```
1. Pages → Add New
2. Title: "Contact Us"
3. 
4. In Page Settings (Right sidebar):
   - Template → "Ashtech Full Width with Header & Footer"
   
5. In Content Area:
   - Click (+)
   - Search "Contact Page"
   - Insert block
   
6. Edit Content:
   - Click phone numbers → Edit
   - Click emails → Edit
   - Click addresses → Edit
   
7. Publish
```

**Result:** 
- ✅ Header with logo and menu
- ✅ Complete contact page content
- ✅ Footer with links
- ✅ Full width
- ✅ Your exact HTML

---

## 🎨 Styling

All templates load:
- ✅ Your `assets/css/main.css`
- ✅ Plugin `style.css`
- ✅ All your CSS classes work
- ✅ Responsive design maintained

---

## 📱 Features

### All Templates Include:

✅ **Smooth Scrolling**
```css
html { scroll-behavior: smooth; }
```

✅ **Full Width**
```css
body, #content { 
    margin: 0; 
    padding: 0; 
    width: 100%; 
}
```

✅ **No Admin Bar Gap**
```css
body.admin-bar { margin-top: 0 !important; }
```

✅ **Responsive**
- Your existing CSS handles responsiveness
- Media queries work as before

---

## 🎯 Quick Reference

### Where Templates Are:

```
ashtech-pages-blocks/
└── templates/
    ├── template-fullwidth.php                        ← Blank
    ├── template-fullwidth-with-menu.php              ← Header only
    └── template-fullwidth-with-header-footer.php     ← Complete
```

### How to Select:

```
Edit Page → Page Settings (right sidebar) → Template → Select
```

### Menu URLs:

Templates link to:
- `/` → Home
- `/project` → Project page
- `/nri-corner` → NRI page
- `/about` → About page
- `/resources` → Resources page
- `/career` → Career page
- `/contact` → Contact page

**Create pages with these slugs for menu to work!**

---

## 💡 Pro Tips

### Tip 1: Match Page Names to Menu

Create pages with slugs matching menu links:
```
- home (or set as front page)
- project
- nri-corner
- about
- resources
- career
- contact
```

### Tip 2: Use Appropriate Template

```
Home page → No Header/Footer (block is complete)
Other pages → With Header & Footer (navigation needed)
```

### Tip 3: Test on Mobile

All templates are responsive using your existing CSS!

---

## ✅ Verification

After creating a page:

### Check Template Applied:
```
Edit Page → Look for "Template: Ashtech Full Width..."
```

### Check Header Shows (if using template 2 or 3):
```
View page → Should see Ashtech logo and menu
```

### Check Footer Shows (if using template 3):
```
Scroll to bottom → Should see footer with links
```

### Check Full Width:
```
View page → Content spans full width, no sidebars
```

---

## 🎉 Summary

You now have **3 flexible templates**:

1. **Blank** → No header/footer (custom landing pages)
2. **With Menu** → Header only (custom footer in block)
3. **Complete** → Header & footer (standard pages)

**All templates:**
- ✅ Full width
- ✅ No margins
- ✅ Your exact HTML
- ✅ All assets loaded
- ✅ Your CSS applied
- ✅ Responsive

---

## 🚀 Ready to Use!

```
1. Activate plugin (if not done)
2. Pages → Add New
3. Select template from dropdown
4. Insert block
5. Publish
6. Enjoy full-width pages! 🎉
```

---

**Your plugin now has everything you need!** ✨

- ✅ 9 blocks
- ✅ 3 templates
- ✅ 200+ assets
- ✅ Complete documentation

**Start creating your pages!** 🚀

