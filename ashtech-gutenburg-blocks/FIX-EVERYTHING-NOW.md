# 🚨 FIX EVERYTHING - Complete Setup Guide

## Your Issues:
1. ❌ Templates showing (WordPress headers/footers visible)
2. ❌ CSS not loading (no styling)
3. ❌ Images not showing
4. ❌ Only plain HTML appears

---

## ✅ Complete Fix (3 Steps)

### STEP 1: Copy Assets to WordPress Theme

**Run this command:**
```powershell
cd D:\Server\htdocs\ashtech-internal\ashtech-gutenburg-blocks
.\COPY-ASSETS-TO-THEME.ps1
```

**When prompted, enter your theme name** (e.g., `twentytwentyfour`, `astra`, etc.)

**Don't know your theme name?** Open this folder and look:
```
D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\themes\
```
You'll see folders like: `twentytwentyfour`, `twentytwentythree`, `astra`, etc.
That's your theme name!

---

### STEP 2: Update Theme Name in Plugin

**Open:** `ashtech-gutenberg-blocks.php`

**Find line 46** (search for "your-theme-name"):
```php
get_site_url() . '/wp-content/themes/your-theme-name/assets/css/main.css',
```

**Replace `your-theme-name` with your ACTUAL theme:**
```php
get_site_url() . '/wp-content/themes/twentytwentyfour/assets/css/main.css',
```
(Replace `twentytwentyfour` with YOUR theme name)

**Find line 71** and do the same thing:
```php
get_site_url() . '/wp-content/themes/your-theme-name/assets/js/main.js',
```
Change to:
```php
get_site_url() . '/wp-content/themes/twentytwentyfour/assets/js/main.js',
```

**Also find line 237** (in the image fix function):
```php
'src="' . $site_url . '/wp-content/themes/your-theme-name/assets/',
```
Change to:
```php
'src="' . $site_url . '/wp-content/themes/twentytwentyfour/assets/',
```

**And line 242**:
```php
'href="' . $site_url . '/wp-content/themes/your-theme-name/assets/',
```
Change to:
```php
'href="' . $site_url . '/wp-content/themes/twentytwentyfour/assets/',
```

**Save the file!**

---

### STEP 3: Rebuild and Copy Plugin

```powershell
cd D:\Server\htdocs\ashtech-internal\ashtech-gutenburg-blocks
npm run build
.\COPY-TO-WORDPRESS-NOW.ps1
```

---

### STEP 4: Activate in WordPress

1. Go to WordPress Admin → **Plugins**
2. **Deactivate** "Ashtech Gutenberg Blocks"
3. **Activate** it again
4. **Clear browser cache** (Ctrl + Shift + Delete)

---

### STEP 5: Test with New Page

1. Go to **Pages** → **Add New**
2. **Delete all default content** (remove all blocks)
3. Click **+** → Search **"landing banner"**
4. Add the block
5. **Publish** the page
6. **View** the page

**Expected result:**
- ✅ No WordPress header/footer
- ✅ Full styling appears
- ✅ Images load correctly
- ✅ Looks exactly like your HTML pages

---

## 🔍 Quick Verification

After setup, check these files exist:

**1. Assets in theme:**
```
D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\themes\YOUR-THEME\assets\css\main.css
D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\themes\YOUR-THEME\assets\js\main.js
D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\themes\YOUR-THEME\assets\images\
```

**2. Plugin in WordPress:**
```
D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\plugins\ashtech-gutenberg-blocks\
```

**3. Blank template:**
```
D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\plugins\ashtech-gutenberg-blocks\templates\blank-template.php
```

---

## 🆘 Troubleshooting

### If CSS still not loading:

**Check browser console (F12):**
- Look for 404 errors
- Note which files are missing
- Verify the URL path matches your theme name

### If images not showing:

**Right-click image → Inspect:**
- Look at the image `src` URL
- Make sure it points to: `/wp-content/themes/YOUR-THEME/assets/images/...`
- If wrong, you need to update line 237 in the PHP file

### If WordPress theme still showing:

- Make sure blank template file exists
- Try setting page template manually:
  - Edit page → Page Attributes → Template → Select "Ashtech Blank Template"

---

## 📋 Complete File Checklist

After all steps, you should have:

- ✅ `ashtech-gutenberg-blocks.php` - Theme name updated (4 places)
- ✅ `templates/blank-template.php` - Exists
- ✅ WordPress theme assets - Copied to theme folder
- ✅ Plugin built - `build` folder exists
- ✅ Plugin copied - In WordPress plugins folder
- ✅ Plugin activated - In WordPress

---

## 🎯 What Each Fix Does

1. **Blank Template** → Removes WordPress headers/footers
2. **Assets in Theme** → Makes CSS/JS/images accessible
3. **Updated Paths** → Tells WordPress where to find assets
4. **Image Path Fix** → Converts relative paths to absolute URLs

---

## ✅ Success Looks Like:

When you view your page:
- Full screen content (no sidebars/headers)
- Complete styling from main.css
- All images loading
- Exact replica of your HTML pages

---

**Follow all 5 steps in order and it will work!** 🚀

**Theme name is the KEY - make sure you update it in ALL 4 places in the PHP file!**

