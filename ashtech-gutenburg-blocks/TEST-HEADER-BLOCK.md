# 🔍 Header Block Troubleshooting

## ✅ What's Been Done:
1. ✅ Header block created in `src/blocks/header/`
2. ✅ Added to `webpack.config.js`
3. ✅ Compiled successfully (all files in `build/blocks/header/`)
4. ✅ Registered in plugin PHP (`header` in $blocks array)

## 🔍 Troubleshooting Steps:

### Step 1: Verify Plugin is Active
1. Go to **WordPress Admin** → **Plugins**
2. Make sure **"Ashtech Gutenberg Blocks"** is **activated**
3. If not, click "Activate"

### Step 2: Clear WordPress Cache
If you have a caching plugin:
1. Go to caching plugin settings
2. Click "Clear Cache" or "Purge All"

### Step 3: Hard Refresh Browser
- **Windows**: `Ctrl + Shift + R` or `Ctrl + F5`
- **Mac**: `Cmd + Shift + R`

### Step 4: Check Block Category
In WordPress editor:
1. Click **(+)** to add block
2. Look for **"Ashtech Blocks"** category (should see a separate category)
3. Click on it to expand
4. Look for "Ashtech Header"

### Step 5: Search for Header
1. Click **(+)** to add block
2. In search box, type: **"header"**
3. You should see **"Ashtech Header"**

### Step 6: Check All Blocks
1. Click **(+)** to add block
2. Search: **"ashtech"**
3. You should see ALL 9 blocks:
   - Ashtech Header
   - Ashtech Banner
   - Ashtech Overview
   - Ashtech Values
   - Ashtech Projects
   - Ashtech NRI
   - Ashtech Awards
   - Ashtech Testimonials
   - Ashtech Footer

## 🚨 If Still Not Showing:

### Check PHP Errors:
1. Enable WordPress debug mode
2. Edit `wp-config.php`
3. Add/change these lines:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```
4. Check `wp-content/debug.log` for errors

### Verify Plugin Path:
Make sure plugin is installed at:
```
/wp-content/plugins/ashtech-gutenberg-blocks/
```

NOT at:
```
/wp-content/plugins/ashtech-gutenberg-blocks/ashtech-gutenberg-blocks/
```

### Re-activate Plugin:
1. **Plugins** → Find "Ashtech Gutenberg Blocks"
2. Click **"Deactivate"**
3. Wait 2 seconds
4. Click **"Activate"**
5. Try again

### Check Browser Console:
1. Open page editor
2. Press **F12** (Developer Tools)
3. Click **"Console"** tab
4. Look for any JavaScript errors (red text)
5. Look for errors mentioning "ashtech" or "header"

## 📋 Quick Verification Script

Create a test page and check if blocks are registered:

1. Go to **Pages** → **Add New**
2. Title: "Test Blocks"
3. Click **(+)** button
4. Search: "ashtech"
5. **Count how many blocks you see**

**Expected:** 9 blocks
**You see:** ___ blocks

If you see 8 blocks, then header is missing.
If you see 9 blocks, then header IS there! Look for "Ashtech Header"

## 🔧 Manual Fix:

If header block still missing, try this:

### 1. Check File Permissions
Make sure all files in plugin directory are readable:
```bash
# On server
chmod -R 755 /wp-content/plugins/ashtech-gutenberg-blocks/
```

### 2. Rebuild Plugin (Again)
```bash
cd wp-content/plugins/ashtech-gutenberg-blocks
npm run build
```

Look for this in output:
```
assets by chunk 6.49 KiB (name: blocks/header/index)
```

If you see this, header IS being compiled.

### 3. Verify Build Files Exist
Check that these files exist:
```
/build/blocks/header/block.json
/build/blocks/header/index.js
/build/blocks/header/index.css
/build/blocks/header/index.asset.php
```

All should exist. If not, rebuild failed.

## 🎯 Alternative: Check from WordPress

Add this code to your theme's `functions.php` temporarily:

```php
add_action('init', function() {
    $registered_blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
    error_log('Registered blocks: ' . print_r(array_keys($registered_blocks), true));
});
```

Then check `wp-content/debug.log` and search for "ashtech/header"

## 📸 Screenshot Evidence

Take screenshots of:
1. **Plugins page** - showing plugin is active
2. **Block inserter** - showing available blocks
3. **Browser console** - showing any errors
4. **Search results** - when searching "ashtech"

This will help diagnose the issue!

## ✅ What Header Block Should Look Like:

When you find it:
- **Icon**: Align center icon
- **Name**: "Ashtech Header"
- **Description**: "Fixed header with logo and menu"
- **Category**: Ashtech Blocks

---

**Try these steps and let me know what you see!** 🔍

