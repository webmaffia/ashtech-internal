# 📦 Building Plugin in WordPress

## 🎯 Current Situation:
- ✅ HTML project: `D:\Server\htdocs\ashtech-internal\`
- ✅ WordPress project: `???` (your WordPress installation)
- ✅ You copy plugin folder to WordPress and build there

## ⚠️ IMPORTANT: Updated Files

Make sure you copy these **UPDATED** files to WordPress:

### Critical File (MUST COPY):
```
webpack.config.js  ← NOW INCLUDES HEADER BLOCK!
```

### All Files to Copy:
```
ashtech-gutenberg-blocks/
├── ashtech-gutenberg-blocks.php  ← Main plugin file
├── package.json                   ← Dependencies
├── package-lock.json             
├── webpack.config.js              ← UPDATED! Has header entry
├── src/                           ← All block source files
│   └── blocks/
│       ├── header/                ← NEW BLOCK!
│       ├── banner/
│       ├── overview/
│       ├── values/
│       ├── projects/
│       ├── nri/
│       ├── awards/
│       ├── testimonials/
│       └── footer/
├── assets/                        ← Images, CSS, JS
│   ├── css/
│   ├── images/
│   └── js/
└── templates/                     ← Page templates
    ├── ashtech-blank.php
    └── ashtech-full-width.php
```

## 📋 Step-by-Step Process:

### Step 1: Copy Plugin to WordPress

**Option A: Manual Copy**
1. Navigate to your HTML project folder
2. Copy the ENTIRE `ashtech-gutenberg-blocks` folder
3. Paste into your WordPress: `wp-content/plugins/`

**Option B: Use Script**
1. Edit `COPY-TO-WORDPRESS.bat`
2. Change this line to your WordPress path:
   ```batch
   set "WP_PLUGINS_DIR=C:\path\to\wordpress\wp-content\plugins"
   ```
3. Run the script: `COPY-TO-WORDPRESS.bat`

### Step 2: Build in WordPress

Open terminal/command prompt:

```bash
# Navigate to WordPress plugins directory
cd C:\path\to\wordpress\wp-content\plugins\ashtech-gutenberg-blocks

# Install dependencies (first time only)
npm install

# Build the plugin
npm run build
```

### Step 3: Verify Build Output

After running `npm run build`, you should see:

```
assets by chunk 6.49 KiB (name: blocks/header/index)  ← HEADER IS HERE!
assets by chunk 12.1 KiB (name: blocks/banner/index)
assets by chunk 18.8 KiB (name: blocks/footer/index)
... etc
```

**Look for:** `blocks/header/index` in the output!

### Step 4: Check Build Files

Verify these files exist in WordPress:

```
wp-content/plugins/ashtech-gutenberg-blocks/
└── build/
    └── blocks/
        ├── header/                    ← CHECK THIS!
        │   ├── block.json
        │   ├── index.js
        │   ├── index.css
        │   └── index.asset.php
        ├── banner/
        ├── overview/
        ├── values/
        ├── projects/
        ├── nri/
        ├── awards/
        ├── testimonials/
        └── footer/
```

**If `header/` folder is missing or empty, the build failed!**

### Step 5: Activate Plugin

1. Go to **WordPress Admin**
2. Go to **Plugins**
3. Find **"Ashtech Gutenberg Blocks"**
4. Click **"Activate"** (or **"Deactivate"** then **"Activate"** if already active)

### Step 6: Test Header Block

1. Create/Edit a page
2. Click **(+)** to add block
3. Search: **"ashtech"** or **"header"**
4. You should see **"Ashtech Header"**!

## 🚨 Troubleshooting:

### Issue 1: Header Not in Build Output

If you don't see `blocks/header/index` when building:

**Check:** Is `webpack.config.js` in WordPress folder updated?

It should have this line:
```javascript
'blocks/header/index': path.resolve(__dirname, 'src/blocks/header/index.js'),
```

**Fix:** Copy the updated `webpack.config.js` from your HTML project!

### Issue 2: Build Folder Empty

If `build/blocks/header/` is missing:

1. Delete `node_modules/.cache` in WordPress plugin folder
2. Run: `npm run build` again
3. Check output for errors

### Issue 3: npm install Fails

If you get errors during `npm install`:

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Install again
npm install
```

### Issue 4: wp-scripts Not Found

If you get error: `'wp-scripts' is not recognized`

**This means:** You didn't run `npm install` first!

**Fix:**
```bash
cd wp-content/plugins/ashtech-gutenberg-blocks
npm install
npm run build
```

### Issue 5: Header Block Not Showing in WordPress

Even after successful build:

1. **Clear WordPress cache** (if you have caching plugin)
2. **Hard refresh browser**: `Ctrl + Shift + R`
3. **Deactivate & Reactivate plugin**
4. **Check browser console** (F12) for JavaScript errors

## 📝 Quick Checklist:

Before building in WordPress, verify you copied:

- [ ] `ashtech-gutenberg-blocks.php` (main file)
- [ ] `package.json` (dependencies)
- [ ] `webpack.config.js` (**WITH header entry!**)
- [ ] `src/blocks/header/` (all 6 files)
- [ ] `src/blocks/` (all other blocks)
- [ ] `assets/` (images, CSS, JS)
- [ ] `templates/` (page templates)

## 🎯 Verification Commands:

Run these in WordPress plugin directory:

```bash
# Check if header source files exist
ls src/blocks/header/

# Should show:
# block.json  edit.js  editor.scss  index.js  save.js  style.scss

# Check if webpack config has header
grep -n "header" webpack.config.js

# Should show line with:
# 'blocks/header/index': path.resolve(...)

# Build and check for header
npm run build | grep "header"

# Should show:
# assets by chunk 6.49 KiB (name: blocks/header/index)

# Check if header build files exist
ls build/blocks/header/

# Should show:
# block.json  index.js  index.css  index.asset.php  style-index.css
```

## ✅ Success Criteria:

You'll know it worked when:

1. ✅ Build output shows: `blocks/header/index`
2. ✅ `build/blocks/header/` folder has 5-7 files
3. ✅ WordPress editor shows "Ashtech Header" in block inserter
4. ✅ You can add the header block to a page

## 🎉 After Successful Build:

You'll have **9 working blocks**:
1. Ashtech Header ← NEW!
2. Ashtech Banner
3. Ashtech Overview
4. Ashtech Values
5. Ashtech Projects
6. Ashtech NRI
7. Ashtech Awards
8. Ashtech Testimonials
9. Ashtech Footer

---

**Need Help?**
- Make sure you copied the **UPDATED** `webpack.config.js`
- Run `npm install` before `npm run build`
- Check build output for `blocks/header/index`
- Verify `build/blocks/header/` folder exists and has files

