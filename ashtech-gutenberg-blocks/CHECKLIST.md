# WordPress Setup Checklist

## ✅ Assets Status

### Images (27 files) ✓
- [x] award-laurel-left.svg
- [x] award-laurel-right.svg
- [x] banner-bg.jpg
- [x] building.png
- [x] footer-logo.svg
- [x] logo.svg
- [x] nri.png
- [x] testimonial-bg.jpg
- [x] values-graphic.svg
- [x] All icon files (9 files)
- [x] All social icons (5 files)

### CSS ✓
- [x] main.css

### JavaScript ✓
- [x] landing-animations.js

## 🔧 Setup Steps

### 1. WordPress Installation
- [ ] WordPress 5.8+ installed
- [ ] Database configured
- [ ] Admin account created
- [ ] Can access wp-admin

### 2. Plugin Installation
- [ ] Plugin folder copied to `wp-content/plugins/`
- [ ] Assets folder copied (images, CSS, JS)
- [ ] Run `npm install`
- [ ] Run `npm run build`

### 3. Plugin Activation
- [ ] Go to Plugins → Installed Plugins
- [ ] Find "Ashtech Gutenberg Blocks"
- [ ] Click "Activate"
- [ ] No errors shown

### 4. Create Page
- [ ] Go to Pages → Add New
- [ ] See "Ashtech Blocks" category in block inserter
- [ ] Add all 8 blocks in order:
  1. [ ] Ashtech Banner
  2. [ ] Ashtech Overview
  3. [ ] Ashtech Values
  4. [ ] Ashtech Projects
  5. [ ] Ashtech NRI Desk
  6. [ ] Ashtech Awards
  7. [ ] Ashtech Testimonials
  8. [ ] Ashtech Footer

### 5. Verify Images
- [ ] Images load in editor
- [ ] Save page
- [ ] Preview page
- [ ] Images load on frontend
- [ ] No 404 errors in console

### 6. Test Functionality
- [ ] Testimonials slider works
- [ ] Banner SVG animation plays
- [ ] Scroll animations work
- [ ] Buttons display correctly
- [ ] All text is editable

### 7. Responsive Check
- [ ] Desktop view looks correct
- [ ] Mobile view looks correct
- [ ] Tablet view looks correct
- [ ] Images are responsive

## 🐛 If Images Not Loading

**Already Fixed!** The plugin now includes automatic path fixing.

But if still having issues:

1. **Clear Cache**
   ```
   - Clear WordPress cache (if using caching plugin)
   - Clear browser cache (Ctrl+Shift+Del)
   - Hard refresh (Ctrl+F5)
   ```

2. **Check Console**
   ```
   - Open browser DevTools (F12)
   - Check Console for errors
   - Check Network tab for 404s
   ```

3. **Verify Paths**
   ```
   The plugin automatically converts:
   /wp-content/plugins/ashtech-gutenberg-blocks/
   
   To your actual plugin URL, e.g.:
   http://localhost/wordpress/wp-content/plugins/ashtech-gutenberg-blocks/
   ```

4. **Check File Permissions**
   ```
   All files in assets/ should be readable
   ```

## 📱 Testing URLs

### Development
- [ ] Test on: `http://localhost/[wordpress-folder]/`
- [ ] Test on: `http://127.0.0.1/[wordpress-folder]/`

### Production
- [ ] Test on actual domain
- [ ] Test with HTTPS
- [ ] Test with CDN (if applicable)

## 🎯 Performance Checklist

- [ ] Images optimized (compressed)
- [ ] CSS/JS minified (done automatically)
- [ ] Caching plugin installed (optional)
- [ ] HTTPS enabled (production)
- [ ] PHP 8.0+ for better performance

## 🔐 Security Checklist

- [ ] WordPress updated to latest
- [ ] Strong admin password
- [ ] File permissions correct (755 for directories, 644 for files)
- [ ] Security plugin installed (optional)
- [ ] Regular backups configured

## 📊 Final Verification

### Visual Check
- [ ] Layout matches original design
- [ ] Colors are correct
- [ ] Typography is correct
- [ ] Spacing is correct
- [ ] All sections visible

### Functionality Check
- [ ] All links work
- [ ] Forms work (if any)
- [ ] Slider navigates
- [ ] Animations play
- [ ] Mobile menu works (if applicable)

### Content Check
- [ ] All text is present
- [ ] All images are present
- [ ] All icons are present
- [ ] Contact info is correct
- [ ] Social links are correct

## 🚀 Go Live Checklist

- [ ] Test on staging environment
- [ ] All content proofread
- [ ] All links tested
- [ ] Mobile tested
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] SEO plugin configured
- [ ] Google Analytics added
- [ ] Favicon added
- [ ] SSL certificate installed
- [ ] DNS configured
- [ ] Backup created

## 📞 Support

If you encounter any issues:

1. Check [IMAGE-FIX.md](IMAGE-FIX.md) for image troubleshooting
2. Check [INSTALLATION.md](INSTALLATION.md) for setup details
3. Check [BLOCKS-DOCUMENTATION.md](BLOCKS-DOCUMENTATION.md) for block help
4. Check browser console for errors
5. Check WordPress debug.log

## ✨ Current Status

**Assets:** ✅ All copied (28 files)
**Plugin:** ✅ Ready to install
**Documentation:** ✅ Complete
**Image Fix:** ✅ Automatic path correction enabled

**Next Step:** Install WordPress and activate the plugin!

---

**Last Updated:** 2025-11-21  
**Version:** 1.0.0  
**Status:** Ready for Production ✅

