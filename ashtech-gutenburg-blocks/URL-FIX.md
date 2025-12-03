# URL Duplication Fix

## Issue
URLs were being duplicated like:
```
http://localhost/wordpress-6.8.3/wordpresshttp://localhost/wordpress-6.8.3/wordpress/wp-content/plugins/...
```

## ✅ Fixed!

Updated the path replacement filter to:
1. Check if content is already processed (avoid double replacement)
2. Handle multiple attribute types (src, href, url)
3. Only process Ashtech blocks
4. Use smarter string replacement

## How It Works Now

**Before Processing:**
```html
<img src="/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/nri.png" />
```

**After Processing:**
```html
<img src="http://localhost/wordpress-6.8.3/wordpress/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/nri.png" />
```

**Key Points:**
- ✅ Only replaces once (checks if already has full URL)
- ✅ Works with any WordPress installation path
- ✅ Handles src, href, and url() attributes
- ✅ No more duplicates!

## To Apply the Fix

If you've already activated the plugin and have the duplicate URL issue:

### Option 1: Re-save the Page (Easiest)
1. Go to the page with blocks
2. Click "Edit"
3. Don't change anything
4. Click "Update"
5. View the page - URLs should be fixed!

### Option 2: Clear and Rebuild
1. Delete the page
2. Create a new page
3. Add blocks again
4. Publish

### Option 3: Clear All Caches
```bash
# Clear WordPress cache
# Clear browser cache (Ctrl+Shift+Del)
# Hard refresh (Ctrl+F5)
```

## Testing

Check if URLs are correct:

1. **View Page Source**
   - Right-click page → View Page Source
   - Search for "nri.png"
   - URL should appear only once in the path

2. **Check Browser Console**
   - F12 → Console
   - Should see no errors
   - All images should load (status 200)

3. **Check Network Tab**
   - F12 → Network
   - Filter: Img
   - All images should be green (loaded successfully)

## Expected URLs

Your images should load from:
```
http://localhost/wordpress-6.8.3/wordpress/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/[filename]
```

NOT:
```
http://localhost/wordpress-6.8.3/wordpresshttp://localhost/...
```

## How the Fix Works Technically

```php
// 1. Check if already processed
if (strpos($block_content, ASHTECH_BLOCKS_URL) !== false) {
    return $block_content; // Skip - already has full URL
}

// 2. Replace paths
$block_content = str_replace(
    'src="/wp-content/plugins/ashtech-gutenberg-blocks/',
    'src="' . ASHTECH_BLOCKS_URL, // Full plugin URL
    $block_content
);
```

This ensures:
- First render: Replaces `/wp-content/...` with full URL
- Second render: Sees full URL already there, skips replacement
- Result: No duplicates!

## If Still Having Issues

### Check Your WordPress URL
```
Settings → General
WordPress Address (URL): http://localhost/wordpress-6.8.3/wordpress
Site Address (URL): http://localhost/wordpress-6.8.3/wordpress
```

Make sure they match your actual installation path.

### Debug Mode
Add to `wp-config.php`:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Check `/wp-content/debug.log` for errors.

### Manual Check
View the page source and search for image URLs. They should:
- ✅ Start with http:// or https://
- ✅ Have the protocol only once
- ✅ Point to correct plugin directory
- ❌ NOT have double http://

## Files Updated

- ✅ `ashtech-gutenberg-blocks.php` - Main plugin file
  - Improved `ashtech_fix_block_image_paths()` function
  - Added URL availability to JavaScript
  - Added duplicate prevention

## Success Indicators

You'll know it's fixed when:
- ✅ Images load correctly
- ✅ No 404 errors in console
- ✅ URLs in page source are correct
- ✅ No duplicate protocol/domain in URLs
- ✅ All blocks display properly

## Prevention

This fix prevents:
- ❌ Double URL concatenation
- ❌ Multiple filter applications
- ❌ Protocol duplication
- ❌ Domain duplication

## Need More Help?

Check these files:
- [IMAGE-FIX.md](IMAGE-FIX.md) - General image troubleshooting
- [CHECKLIST.md](CHECKLIST.md) - Setup verification
- [IMAGE-FIX-SUMMARY.txt](IMAGE-FIX-SUMMARY.txt) - Quick reference

---

**Status:** Fixed! ✅  
**Version:** 1.0.1  
**Date:** 2025-11-21

