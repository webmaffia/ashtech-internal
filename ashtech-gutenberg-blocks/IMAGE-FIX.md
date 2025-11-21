# Image Loading Fix Guide

## Issue
Images in Gutenberg blocks are not loading because of hardcoded paths.

## ✅ Quick Fix

### Option 1: Update Main Plugin File (Recommended)

Add this filter to automatically replace image paths:

```php
// Add to ashtech-gutenberg-blocks.php after the existing code

/**
 * Filter block content to fix image paths
 */
function ashtech_fix_block_image_paths($block_content, $block) {
    if (strpos($block['blockName'], 'ashtech/') === 0) {
        // Replace hardcoded paths with dynamic plugin URL
        $block_content = str_replace(
            '/wp-content/plugins/ashtech-gutenberg-blocks/assets/',
            ASHTECH_BLOCKS_URL . 'assets/',
            $block_content
        );
    }
    return $block_content;
}
add_filter('render_block', 'ashtech_fix_block_image_paths', 10, 2);
```

### Option 2: Update Block Files

Update each block's `save.js` to use window location:

**Before:**
```javascript
<img src="/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/logo.svg" />
```

**After:**
```javascript
<img src={`${window.location.origin}/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/logo.svg`} />
```

## 🔍 Troubleshooting Steps

### Step 1: Verify Assets Are Copied

Check if images exist:
```bash
# Should see all images
ls ashtech-gutenberg-blocks/assets/images/landing/
```

Required images:
- logo.svg
- footer-logo.svg
- values-graphic.svg
- building.png
- nri.png
- testimonial-bg.jpg
- award-laurel-left.svg
- award-laurel-right.svg
- All icon-*.svg files
- All social-*.svg files

### Step 2: Check File Permissions

Images should be readable:
```bash
# Windows - check properties
# Linux/Mac
chmod -R 755 ashtech-gutenberg-blocks/assets/
```

### Step 3: Verify WordPress Path

Check your WordPress installation path:
- Root: `http://yoursite.com/`
- Subdirectory: `http://yoursite.com/wordpress/`
- Localhost: `http://localhost/ashtech-wordpress/`

If WordPress is NOT at root, update paths in blocks.

### Step 4: Check Browser Console

1. Open page in browser
2. Press F12 (Developer Tools)
3. Go to Console tab
4. Look for 404 errors on images
5. Note the attempted path

### Step 5: Inspect Network Tab

1. F12 → Network tab
2. Reload page
3. Filter by "Img"
4. Check failed requests
5. See actual URL being requested

## 🔧 Manual Path Fix

If using localhost or subdirectory, update paths in all blocks:

### Find and Replace

In all `save.js` files, replace:

```javascript
// FROM
src="/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/

// TO (for localhost example)
src="http://localhost/your-wordpress-folder/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/
```

Or use relative path:

```javascript
// TO (relative)
src="../wp-content/plugins/ashtech-gutenberg-blocks/assets/images/
```

## 🎯 Best Solution: Use PHP Filter (Recommended)

Add this to `ashtech-gutenberg-blocks.php`:

```php
/**
 * Fix image URLs in block output
 */
function ashtech_fix_image_urls($content) {
    // Get the correct plugin URL
    $plugin_url = plugins_url('', __FILE__);
    
    // Replace all hardcoded plugin paths
    $content = str_replace(
        [
            '/wp-content/plugins/ashtech-gutenberg-blocks/',
            'src="/assets/',
            'src="assets/'
        ],
        [
            $plugin_url . '/',
            'src="' . $plugin_url . '/assets/',
            'src="' . $plugin_url . '/assets/'
        ],
        $content
    );
    
    return $content;
}
add_filter('the_content', 'ashtech_fix_image_urls', 999);
```

## ✅ Verification

After applying fix:

1. Clear WordPress cache (if using caching plugin)
2. Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
3. Hard refresh (Ctrl+F5 or Cmd+Shift+R)
4. Check if images load

## 🌐 For Different Environments

### Localhost XAMPP
```
http://localhost/ashtech-wordpress/wp-content/plugins/...
```

### Localhost WAMP
```
http://localhost:8080/ashtech-wordpress/wp-content/plugins/...
```

### Production
```
https://yourdomain.com/wp-content/plugins/...
```

### WordPress in Subdirectory
```
https://yourdomain.com/blog/wp-content/plugins/...
```

## 📝 Common Issues

### Issue: All images 404
**Cause:** Assets folder not copied  
**Fix:** Run `copy-assets.bat` or manually copy assets folder

### Issue: Some images load, some don't
**Cause:** Missing specific image files  
**Fix:** Check which images are missing and copy them

### Issue: Images load in editor but not frontend
**Cause:** Different paths in edit.js vs save.js  
**Fix:** Make sure both files use same paths

### Issue: Images load on frontend but not editor
**Cause:** Editor using different path or cache  
**Fix:** Clear browser cache, refresh editor

### Issue: Broken image icon shown
**Cause:** Image path is wrong or file doesn't exist  
**Fix:** Check browser console for actual URL being requested

## 🚀 After Fix Checklist

- [ ] Assets folder copied with all images
- [ ] File permissions correct (readable)
- [ ] PHP filter added (or paths updated)
- [ ] WordPress cache cleared
- [ ] Browser cache cleared
- [ ] Page hard refreshed
- [ ] Images loading in editor
- [ ] Images loading on frontend
- [ ] Mobile responsive images working

## 💡 Pro Tips

1. **Use Developer Tools:** Always check browser console first
2. **Relative Paths:** Consider using relative paths for portability
3. **CDN:** For production, consider using a CDN for images
4. **WebP Format:** Convert images to WebP for better performance
5. **Lazy Loading:** Add lazy loading for better page speed

## 🆘 Still Not Working?

1. Check WordPress installation path
2. Verify plugin is activated
3. Check PHP error logs
4. Try with a default WordPress theme
5. Disable other plugins temporarily
6. Rebuild blocks: `npm run build`
7. Re-upload plugin folder

## 📞 Debug Information to Collect

If still having issues, provide:
- WordPress URL (e.g., http://localhost/wordpress/)
- Plugin path as shown in browser console 404 error
- Output of: `echo ASHTECH_BLOCKS_URL;` in PHP
- Browser console screenshot
- Network tab screenshot

---

**Most Common Fix:** Add the PHP filter to automatically replace paths!

