# 📋 MANUAL INSTALLATION GUIDE

## Complete Step-by-Step Instructions

---

## STEP 1: Copy Assets to WordPress Theme

### 1.1 Find Your WordPress Theme Name

Navigate to:
```
D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\themes\
```

Look for folders like:
- `twentytwentyfour`
- `twentytwentythree`
- `astra`
- `generatepress`
- etc.

**Write down your active theme folder name!**

---

### 1.2 Copy Assets Folder

**From:**
```
D:\Server\htdocs\ashtech-internal\assets\
```

**To:**
```
D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\themes\YOUR-THEME-NAME\assets\
```

**What to copy:**
- The entire `assets` folder (CSS, JS, images, SCSS)

**Result:** You should have:
```
wordpress/wp-content/themes/YOUR-THEME-NAME/assets/
├── css/
│   └── main.css
├── js/
│   └── main.js
├── images/
│   └── (all your images)
└── scss/
    └── (all SCSS files)
```

---

## STEP 2: Update Plugin Configuration

### 2.1 Open This File in Your Editor:
```
D:\Server\htdocs\ashtech-internal\ashtech-gutenburg-blocks\ashtech-gutenberg-blocks.php
```

### 2.2 Find and Replace These Lines:

**Line 46:** (CSS path)
```php
// BEFORE:
get_site_url() . '/wp-content/themes/your-theme-name/assets/css/main.css',

// AFTER: (replace with YOUR theme name)
get_site_url() . '/wp-content/themes/twentytwentyfour/assets/css/main.css',
```

**Line 71:** (JS path)
```php
// BEFORE:
get_site_url() . '/wp-content/themes/your-theme-name/assets/js/main.js',

// AFTER: (replace with YOUR theme name)
get_site_url() . '/wp-content/themes/twentytwentyfour/assets/js/main.js',
```

**Line 237:** (Image src path)
```php
// BEFORE:
'src="' . $site_url . '/wp-content/themes/your-theme-name/assets/',

// AFTER: (replace with YOUR theme name)
'src="' . $site_url . '/wp-content/themes/twentytwentyfour/assets/',
```

**Line 242:** (Image href path)
```php
// BEFORE:
'href="' . $site_url . '/wp-content/themes/your-theme-name/assets/',

// AFTER: (replace with YOUR theme name)
'href="' . $site_url . '/wp-content/themes/twentytwentyfour/assets/',
```

**Save the file!**

---

## STEP 3: Build the Plugin

### 3.1 Open PowerShell in Plugin Folder

Navigate to:
```
D:\Server\htdocs\ashtech-internal\ashtech-gutenburg-blocks\
```

### 3.2 Run Build Command

```powershell
npm run build
```

Wait for it to complete. You should see:
```
✓ Built successfully
```

This creates the `build` folder with all compiled blocks.

---

## STEP 4: Copy Plugin to WordPress

### 4.1 Copy Entire Plugin Folder

**From:**
```
D:\Server\htdocs\ashtech-internal\ashtech-gutenburg-blocks\
```

**To:**
```
D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\plugins\ashtech-gutenberg-blocks\
```

**Important Notes:**
- Copy the ENTIRE folder
- Rename from `ashtech-gutenburg-blocks` to `ashtech-gutenberg-blocks` (remove the 'u')
- If folder already exists in WordPress, delete it first
- Make sure the `build` folder is included in the copy

### 4.2 Verify Files Copied

Check that these exist in WordPress:
```
wordpress/wp-content/plugins/ashtech-gutenberg-blocks/
├── ashtech-gutenberg-blocks.php  ← Main plugin file
├── build/                        ← All compiled blocks
│   └── blocks/
│       ├── landing-banner/
│       ├── landing-overview/
│       └── (all 45 blocks)
├── templates/                    ← Page templates
│   ├── full-width-template.php
│   └── blank-template.php
├── package.json
└── webpack.config.js
```

---

## STEP 5: Activate Plugin in WordPress

### 5.1 Login to WordPress Admin

Go to:
```
http://localhost/wordpress (or your WordPress URL)
```

### 5.2 Navigate to Plugins

- Click **Plugins** in left sidebar
- Or go to: **Plugins** → **Installed Plugins**

### 5.3 Find and Activate

- Look for **"Ashtech Gutenberg Blocks"**
- Click **Activate**

If already activated:
- Click **Deactivate**
- Then click **Activate** again (to reload changes)

---

## STEP 6: Use the Plugin

### 6.1 Create New Page

1. Go to **Pages** → **Add New**
2. Give it a title (e.g., "Home")

### 6.2 Select Template (Important!)

On the right sidebar:
1. Find **Template** dropdown
2. Select **"Ashtech Full Width (No Wrappers)"**

### 6.3 Delete Default Blocks

- Delete any default blocks WordPress added
- Start with a clean page

### 6.4 Add Ashtech Blocks

1. Click **+** button
2. Search for **"landing"** or **"ashtech"**
3. You'll see all your blocks:
   - Landing Banner
   - Landing Overview
   - Landing Values
   - etc.
4. Add the blocks you want

### 6.5 Publish

1. Click **Publish** button (top right)
2. Click **Publish** again to confirm
3. Click **View Page**

---

## ✅ Expected Results

### What You Should See:

- ✅ WordPress header and footer (from your theme)
- ✅ Full-width content (no sidebars or containers)
- ✅ All your CSS styling applied
- ✅ All images loading correctly
- ✅ Content looks exactly like your HTML pages
- ✅ No errors in browser console (press F12 to check)

### What You Should NOT See:

- ❌ Theme content wrappers
- ❌ Sidebars
- ❌ Default WordPress container padding
- ❌ Missing images (404 errors)
- ❌ Unstyled content

---

## 🔍 Troubleshooting

### If CSS Not Loading:

1. **Check browser console** (F12):
   - Look for 404 errors on CSS files
   - Note the path it's trying to load

2. **Verify theme name** in PHP file:
   - Lines 46, 71, 237, 242
   - Must match your actual theme folder name

3. **Verify assets exist**:
   ```
   wordpress/wp-content/themes/YOUR-THEME/assets/css/main.css
   ```

### If Images Not Showing:

1. **Right-click missing image** → **Inspect**
2. **Look at the src URL** - should be:
   ```
   /wp-content/themes/YOUR-THEME/assets/images/...
   ```
3. **If path is wrong**, update line 237 in PHP file

### If Theme Wrappers Showing:

1. **Make sure you selected the template**:
   - Edit page → Template → "Ashtech Full Width (No Wrappers)"

2. **Check template file exists**:
   ```
   wordpress/wp-content/plugins/ashtech-gutenberg-blocks/templates/full-width-template.php
   ```

### If Blocks Don't Appear:

1. **Plugin activated?** Check Plugins page
2. **Build folder exists?** Check plugin folder has `build` directory
3. **Clear browser cache** (Ctrl + Shift + Delete)
4. **Refresh WordPress** (Ctrl + F5)

---

## 📂 Complete File Structure (For Reference)

```
wordpress-6.8.3/
└── wordpress/
    └── wp-content/
        ├── themes/
        │   └── your-theme/
        │       └── assets/           ← YOUR CSS/JS/IMAGES
        │           ├── css/
        │           │   └── main.css
        │           ├── js/
        │           │   └── main.js
        │           └── images/
        │               └── (all images)
        │
        └── plugins/
            └── ashtech-gutenberg-blocks/  ← PLUGIN
                ├── ashtech-gutenberg-blocks.php
                ├── build/
                │   └── blocks/
                │       └── (45 blocks)
                ├── templates/
                │   ├── full-width-template.php
                │   └── blank-template.php
                └── package.json
```

---

## 🎯 Quick Checklist

Before testing, verify:

- [ ] Assets copied to theme folder
- [ ] Theme name updated in PHP file (4 places)
- [ ] Plugin built (`npm run build` completed)
- [ ] Plugin folder copied to WordPress
- [ ] Plugin activated in WordPress
- [ ] Page created with correct template selected
- [ ] Browser cache cleared

---

## 💡 Pro Tips

1. **Always use the template**: Select "Ashtech Full Width (No Wrappers)" template on every page with Ashtech blocks

2. **Check console for errors**: Press F12 before viewing page to see any JS/CSS loading errors

3. **Test with one block first**: Add just "Landing Banner" first to verify everything works

4. **Keep backups**: Before copying to WordPress, backup your existing plugins folder

5. **Update workflow**: When you make changes:
   - Edit source files
   - Run `npm run build`
   - Copy updated files to WordPress
   - Refresh WordPress page (Ctrl + F5)

---

## 📞 Need Help?

If something doesn't work:

1. **Check file paths** - most issues are wrong theme names
2. **Check browser console** (F12) - shows what's failing
3. **Verify assets exist** - navigate to the files manually
4. **Clear all caches** - browser and WordPress

---

**That's it! Follow these steps in order and your blocks will work perfectly!** 🚀

