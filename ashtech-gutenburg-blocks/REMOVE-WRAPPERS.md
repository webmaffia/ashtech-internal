# Remove WordPress Theme Wrappers

## Problem
WordPress themes wrap your content in tags with classes like:
```html
<main class="site-main content-area">
  <article class="post-123 page">
    <div class="entry-content">
      <!-- Your Ashtech blocks here -->
    </div>
  </article>
</main>
```

## ✅ Solutions Provided

### Option 1: Use Custom Page Template (RECOMMENDED)

I've created 2 custom page templates:

#### 1. **Ashtech Full Width (No Wrappers)**
- Keeps theme header and footer
- Removes wrapper classes
- Clean output for your blocks

#### 2. **Ashtech Blank (No Header/Footer)**
- Completely clean HTML
- No theme header/footer
- Only your blocks output
- Perfect for landing pages

### How to Use Templates

1. Edit your page in WordPress
2. Look for **Page Attributes** panel on the right
3. Click **Template** dropdown
4. Select either:
   - "Ashtech Full Width (No Wrappers)" or
   - "Ashtech Blank (No Header/Footer)"
5. Update/Publish the page

### Option 2: Automatic Filters (Already Active)

I've added filters that automatically:
- ✅ Remove post classes when Ashtech blocks are detected
- ✅ Clean up body classes
- ✅ Override wrapper styling with CSS

These work automatically when your page has Ashtech blocks!

## Result

### Before (with theme wrappers):
```html
<body class="page page-id-123 page-template-default site theme-name">
  <main class="site-main content-area container">
    <article class="post-123 page type-page">
      <div class="entry-content">
        <section class="landing-banner">...</section>
        <section class="landing-overview">...</section>
      </div>
    </article>
  </main>
</body>
```

### After (clean output):
```html
<body>
  <section class="landing-banner">...</section>
  <section class="landing-overview">...</section>
  <section class="landing-values">...</section>
  <!-- etc -->
</body>
```

## Testing

1. **View Page Source** (Right-click → View Page Source)
2. Search for your theme's wrapper classes
3. They should be removed or have no styling

## Custom CSS Applied

The plugin automatically adds this CSS when Ashtech blocks are present:

```css
.site-main,
.content-area,
main[class] {
    margin: 0 !important;
    padding: 0 !important;
}

.entry-content {
    margin: 0 !important;
    padding: 0 !important;
    max-width: none !important;
}
```

## If You Still See Wrappers

### Check Your Theme

Some themes add wrappers that can't be removed via filters. Use the **Blank Template**:
- Page → Template → "Ashtech Blank (No Header/Footer)"

### Or Add Custom CSS

If specific classes remain, add this to your theme's Custom CSS:

```css
/* Target specific theme wrappers */
.your-theme-wrapper {
    margin: 0 !important;
    padding: 0 !important;
    background: none !important;
}
```

## Templates Location

```
wp-content/plugins/ashtech-gutenberg-blocks/templates/
├── ashtech-full-width.php  (with header/footer)
└── ashtech-blank.php       (completely clean)
```

## For Developers

### Customize Templates

Edit the template files to fit your needs:
- `templates/ashtech-full-width.php`
- `templates/ashtech-blank.php`

### Disable Auto Filters

If you want to manually control wrappers, remove these from `ashtech-gutenberg-blocks.php`:
- `ashtech_remove_main_classes()`
- `ashtech_remove_body_classes()`
- `ashtech_remove_content_wrapper()`

## Benefits

✅ Clean HTML output
✅ No theme interference
✅ Full control over styling
✅ Better performance (less CSS)
✅ Easier to debug
✅ Professional landing page look

## Which Option to Use?

| Scenario | Use |
|----------|-----|
| Want theme header/footer | **Ashtech Full Width** template |
| Pure landing page | **Ashtech Blank** template |
| Multiple pages, auto-detect | **Automatic filters** (already active) |
| Need header but clean output | **Ashtech Full Width** + filters |

## Troubleshooting

### Template not showing?
- Make sure you're editing a **Page** (not Post)
- Check plugin is activated
- Refresh the editor

### Still seeing wrappers?
- Try the **Blank template** instead
- View page source to see actual output
- Your theme may use JavaScript to add wrappers

### Need theme header but clean content?
- Use **Ashtech Full Width** template
- The automatic filters will handle the rest

---

**Quick Start:**
1. Edit your page
2. Template → "Ashtech Blank (No Header/Footer)"
3. Publish
4. View page - completely clean! ✨

