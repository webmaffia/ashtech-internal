# ✅ SIMPLE MANUAL COPY - Everything in Plugin

## Plugin is 100% Self-Contained!

All assets (CSS, JS, images) are now **inside the plugin** - no theme folder needed!

---

## 📋 MANUAL COPY STEPS (Simple!)

### STEP 1: Copy Plugin Folder

**Copy this folder:**
```
D:\Server\htdocs\ashtech-internal\ashtech-gutenburg-blocks\
```

**To this location:**
```
D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\plugins\
```

**Rename it to:** `ashtech-gutenberg-blocks` (remove the 'u')

**Final path should be:**
```
D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\plugins\ashtech-gutenberg-blocks\
```

---

### STEP 2: Verify Files Are There

Check that these exist in WordPress:

```
wordpress/wp-content/plugins/ashtech-gutenberg-blocks/
├── ashtech-gutenberg-blocks.php  ✅ Main plugin file
├── build/                        ✅ Compiled blocks (45 blocks)
├── assets/                       ✅ CSS, JS, Images (all here!)
│   ├── css/main.css
│   ├── js/main.js
│   ├── images/
│   └── scss/
├── templates/                    ✅ Page templates
│   ├── full-width-template.php
│   └── blank-template.php
└── src/                          ✅ Source files
```

---

### STEP 3: Activate Plugin

1. **Login to WordPress Admin**
2. Go to **Plugins** → **Installed Plugins**
3. Find **"Ashtech Gutenberg Blocks"**
4. Click **Activate**

If already active:
- Click **Deactivate**
- Then **Activate** again

---

### STEP 4: Create Page and Select Template

1. **Pages** → **Add New**
2. Give it a title (e.g., "Home")
3. **On right sidebar** → Find **"Template"** dropdown
4. Select **"Ashtech Full Width (No Wrappers)"** ← IMPORTANT!
5. Delete any default blocks

---

### STEP 5: Add Blocks

1. Click **+** button
2. Search for **"landing"** or **"ashtech"**
3. Add blocks:
   - Landing Banner
   - Landing Overview
   - Landing Values
   - etc.

---

### STEP 6: Publish and View

1. Click **Publish** button
2. Click **Publish** again
3. Click **View Page**

---

## ✅ What You Should See:

- ✅ Full styling from main.css
- ✅ All images loading from plugin
- ✅ WordPress header and footer
- ✅ No theme wrappers/containers
- ✅ Full-width content
- ✅ Looks exactly like your HTML!

---

## 📂 Plugin Structure (Self-Contained):

```
ashtech-gutenberg-blocks/
├── assets/              ← ALL YOUR ASSETS HERE!
│   ├── css/
│   │   └── main.css     ← Your complete stylesheet
│   ├── js/
│   │   └── main.js      ← Your JavaScript
│   ├── images/          ← ALL your images
│   │   ├── landing/
│   │   ├── about/
│   │   ├── project/
│   │   ├── nri/
│   │   ├── career/
│   │   ├── contact/
│   │   └── resources/
│   └── scss/            ← Source SCSS files
│
├── build/               ← Compiled blocks
│   └── blocks/
│       └── (45 blocks)
│
├── templates/           ← Page templates
│   ├── full-width-template.php
│   └── blank-template.php
│
└── ashtech-gutenberg-blocks.php  ← Main plugin file
```

---

## 🎯 Key Benefits:

✅ **Everything in one place** - Just copy the plugin folder  
✅ **No theme dependency** - Works with any WordPress theme  
✅ **Easy to update** - Just copy updated plugin folder  
✅ **Portable** - Can move to any WordPress installation  

---

## 🆘 Troubleshooting:

### If CSS Not Loading:

1. **Clear browser cache** (Ctrl + Shift + Delete)
2. **Check path**: Right-click page → Inspect → Check CSS file URL
3. Should be: `/wp-content/plugins/ashtech-gutenberg-blocks/assets/css/main.css`

### If Images Not Showing:

1. **Check console** (F12) for 404 errors
2. **Right-click missing image** → Inspect → Check src URL
3. Should start with: `/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/...`

### If Template Not Showing:

1. **Verify template file exists**:
   ```
   wordpress/wp-content/plugins/ashtech-gutenberg-blocks/templates/full-width-template.php
   ```

2. **Deactivate and reactivate** plugin

3. **Check template dropdown** - should show "Ashtech Full Width (No Wrappers)"

---

## 💡 Quick Test:

After copying plugin:

1. Create page
2. Select "Ashtech Full Width" template
3. Add "Landing Banner" block
4. Publish and view
5. Press **F12** → Check **Console** tab for any errors
6. Press **F12** → Check **Network** tab to see if CSS/JS loaded

---

## ✨ That's It!

Just **copy the plugin folder** to WordPress and it will work!

No theme modifications needed.  
No separate asset copying needed.  
Everything is self-contained!

---

**Copy `ashtech-gutenburg-blocks` folder to WordPress `wp-content/plugins/` now!** 🚀

