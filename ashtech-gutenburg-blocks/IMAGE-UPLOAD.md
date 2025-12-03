# Image Upload Feature

## ✅ You Can Now Upload/Change Images!

I've added **WordPress Media Library integration** to all blocks with images. You can now upload and change images directly from the WordPress editor!

## 📸 Blocks with Image Upload

| Block | Images You Can Upload |
|-------|----------------------|
| **NRI Desk** | Main NRI image |
| **Projects** | Building image |
| **Values** | Center graphic |
| **Testimonials** | Background image |

## 🚀 How to Upload/Change Images

### Method 1: Click the Image in Editor

1. **In WordPress Editor**, click on any block
2. **Click the image** you want to change
3. **"Upload Image"** or **"Change Image"** button will appear
4. Click the button
5. **WordPress Media Library** opens
6. Either:
   - **Upload new image** (drag & drop or click "Upload files")
   - **Select from library** (choose existing image)
7. Click **"Select"**
8. Image updates immediately! ✨

### Method 2: During Block Insert

When you first add a block:
1. Block shows **default image (faded)**
2. **"Upload [Image Name]"** button appears on top
3. Click to open Media Library
4. Upload or select image
5. Done!

## 📋 Step-by-Step Example

### Changing NRI Desk Image:

1. **Add** or edit the "Ashtech NRI Desk" block
2. You'll see the current NRI image
3. **Hover over the image**
4. **"Change Image"** button appears (top-left)
5. **Click** the button
6. **Media Library** opens
7. **Upload** your new image or **select** existing
8. **Click "Select"**
9. ✅ New image appears!

### Changing Projects Building Image:

1. Edit "Ashtech Projects" block
2. Find the building image (right side)
3. **"Change"** button appears (top-right of image)
4. Click → Media Library opens
5. Upload/select building image
6. Done! Building image updated

## 🎨 Image Upload Buttons

You'll see these buttons in the editor:

**When NO custom image:**
```
[Upload NRI Image]        - Primary button (blue)
[Upload Building Image]   - Primary button (blue)
[Upload Graphic]          - Primary button (blue)
```

**When image is uploaded:**
```
[Change Image]   - Secondary button (appears on hover)
[Change]         - Secondary button (appears on hover)
```

## 💡 Features

✅ **Drag & Drop** - Drag images directly into Media Library
✅ **Image Preview** - See image before selecting
✅ **Image Editing** - Crop/edit in WordPress
✅ **Default Fallback** - Default images still work if you don't upload
✅ **Saved with Block** - Your images save with the page

## 📐 Recommended Image Sizes

| Block | Recommended Size | Format |
|-------|-----------------|--------|
| **NRI Desk** | 800x600px | JPG/PNG |
| **Projects Building** | 1000x800px | PNG (with transparency) |
| **Values Graphic** | 600x600px | SVG/PNG |
| **Testimonials Background** | 1200x800px | JPG |

## 🔄 Replacing Images

### To Replace an Image:

1. Click the block
2. Click **"Change Image"** button
3. Upload new image
4. Old image is replaced automatically

### To Remove Custom Image (Use Default):

Currently, once uploaded, you need to:
1. Delete the block
2. Add it again
3. Don't upload - use default

Or manually remove via database (advanced).

## 🎯 Default Images

If you **DON'T** upload an image, the block uses defaults:

- **NRI**: `assets/images/landing/nri.png`
- **Building**: `assets/images/landing/building.png`  
- **Values**: `assets/images/landing/values-graphic.svg`
- **Testimonials**: `assets/images/landing/testimonial-bg.jpg`

Default images show **faded (50% opacity)** in editor to indicate they're defaults.

## 🔧 After Upload

1. **Save** your page (Update/Publish)
2. **View** the page
3. Your new images appear on the frontend!

## 🛠️ Build Required!

After I made these changes, you need to **rebuild**:

```bash
cd wp-content/plugins/ashtech-gutenberg-blocks
npm run build
```

Or Windows:
```
rebuild.bat
```

Then:
1. **Refresh** WordPress editor (F5)
2. **Image upload buttons** will appear!

## 📱 Media Library Tips

### Uploading Multiple Images:
1. Open Media Library
2. Select **"Upload files"** tab
3. Drag multiple images at once
4. They're added to your library

### Organizing Images:
1. Create folders (with Media Library Organizer plugin)
2. Tag images for easy finding
3. Use descriptive filenames

### Image Optimization:
1. Compress images before upload
2. Use tools like TinyPNG or Squoosh
3. Recommended max file size: 500KB

## ✨ What This Means

**Before:**
- ❌ Couldn't change images
- ❌ Hardcoded paths
- ❌ Needed developer to update

**After:**
- ✅ Upload any image
- ✅ Change anytime
- ✅ No coding required!
- ✅ Use WordPress Media Library
- ✅ Content editors can manage

## 🎓 For Content Editors

You can now:
1. **Change** the NRI desk photo
2. **Upload** different building images
3. **Update** the values graphic
4. **Customize** testimonial backgrounds
5. **Manage** everything visually!

No developer needed! 🎉

## 🐛 Troubleshooting

### Button Not Appearing?
- Did you rebuild? (`npm run build`)
- Refresh editor (F5)
- Clear browser cache

### Can't Upload?
- Check file size (max usually 10MB)
- Check file type (JPG, PNG, GIF, SVG)
- Check WordPress upload limits

### Image Not Showing?
- Save the page after upload
- Refresh frontend
- Check image URL in page source

### Want to Use Default Again?
- Currently: Delete block and re-add
- Or: Contact developer to add "Remove" button

## 📊 Storage

- Images stored in WordPress Media Library
- Found at: `wp-content/uploads/YEAR/MONTH/`
- Image URLs saved in block attributes
- Backed up with WordPress backups

## 🔒 Permissions

Make sure your user role can:
- Upload files
- Access Media Library
- Edit pages

Default: Editor and Administrator roles can do this.

---

**Status:** ✅ Image Upload Active  
**Blocks Updated:** 4 blocks (NRI, Projects, Values, Testimonials)  
**Next Step:** Run `npm run build` and start uploading! 📸

