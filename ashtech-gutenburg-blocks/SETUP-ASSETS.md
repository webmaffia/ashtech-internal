# 🚨 CRITICAL: Setup Assets Path

## Problem

Your blocks are showing HTML but without CSS/images because WordPress doesn't know where your assets folder is.

---

## ✅ Solution: Copy Assets to WordPress Theme

### Step 1: Locate Your Assets Folder

Your assets are here:
```
D:\Server\htdocs\ashtech-internal\assets\
```

This folder contains:
- `css/main.css` (your styles)
- `js/main.js` (your JavaScript)
- `images/` (all your images)
- `scss/` (source files)

---

### Step 2: Copy Assets to WordPress Theme

**Copy the ENTIRE `assets` folder to your WordPress theme:**

```
From: D:\Server\htdocs\ashtech-internal\assets

To: D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\themes\YOUR-THEME-NAME\assets
```

**Replace `YOUR-THEME-NAME` with your actual theme folder name!**

To find your theme name:
1. Go to: `D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\themes\`
2. Look for your active theme folder (e.g., `twentytwentyfour`, `astra`, etc.)

---

### Step 3: Update Plugin PHP File

Open: `ashtech-gutenberg-blocks.php`

**Find these lines (lines 46 and 71):**
```php
get_site_url() . '/wp-content/themes/your-theme-name/assets/css/main.css'
```

**Replace `your-theme-name` with your ACTUAL theme folder name!**

Example:
```php
get_site_url() . '/wp-content/themes/twentytwentyfour/assets/css/main.css'
```

Do this for BOTH lines (CSS and JS paths).

---

### Step 4: Rebuild and Copy Plugin

```powershell
cd D:\Server\htdocs\ashtech-internal\ashtech-gutenburg-blocks
npm run build
.\COPY-TO-WORDPRESS-NOW.ps1
```

---

## 🎯 Quick PowerShell Script to Copy Assets

Save this as `COPY-ASSETS.ps1`:

```powershell
# UPDATE THESE PATHS:
$themeName = "twentytwentyfour"  # ← CHANGE THIS to your theme name!

$source = "D:\Server\htdocs\ashtech-internal\assets"
$dest = "D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\themes\$themeName\assets"

# Copy assets
if (Test-Path $source) {
    Write-Host "Copying assets..." -ForegroundColor Yellow
    
    if (Test-Path $dest) {
        Remove-Item $dest -Recurse -Force
    }
    
    Copy-Item $source $dest -Recurse -Force
    Write-Host "✓ Assets copied successfully!" -ForegroundColor Green
    Write-Host "Location: $dest" -ForegroundColor Cyan
} else {
    Write-Host "ERROR: Source not found: $source" -ForegroundColor Red
}
```

---

## 🔍 How to Find Your Theme Name

**Method 1: WordPress Admin**
1. Login to WordPress
2. Go to **Appearance** → **Themes**
3. Look at the active theme name

**Method 2: File Explorer**
```
Navigate to: D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\themes\
Look for folders like:
- twentytwentyfour
- astra
- generatepress
- oceanwp
etc.
```

---

## ✅ Verification Checklist

After copying assets and updating paths:

- [ ] Assets folder copied to WordPress theme
- [ ] Theme name updated in `ashtech-gutenberg-blocks.php` (line 46 and 71)
- [ ] Plugin rebuilt with `npm run build`
- [ ] Plugin copied to WordPress
- [ ] WordPress plugin deactivated and reactivated
- [ ] Test page created with blocks
- [ ] CSS styles showing correctly
- [ ] Images displaying
- [ ] No theme headers/footers visible

---

## 📋 File Structure Should Look Like:

```
wordpress/
└── wp-content/
    ├── themes/
    │   └── your-theme-name/
    │       └── assets/           ← COPY HERE
    │           ├── css/
    │           │   └── main.css
    │           ├── js/
    │           │   └── main.js
    │           ├── images/
    │           │   └── (all images)
    │           └── scss/
    │
    └── plugins/
        └── ashtech-gutenberg-blocks/
            └── (plugin files)
```

---

## 🆘 Still Not Working?

1. **Check browser console** (F12) for 404 errors on CSS/JS files
2. **Verify asset paths** - right-click → inspect → check file URLs
3. **Make sure theme name** in PHP file matches actual theme folder
4. **Clear browser cache** completely (Ctrl + Shift + Delete)
5. **Try different browser** to rule out caching issues

---

**Update the theme name, copy assets, and rebuild!** 🚀

