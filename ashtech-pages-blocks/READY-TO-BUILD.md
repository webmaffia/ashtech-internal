# ✅ READY TO BUILD - Standard Gutenberg Setup

## 🎯 Setup Changed to edit.js + save.js

**Perfect for frequently updating content!**

---

## 📦 What Changed

### **Old Setup (Template-based):**
```
❌ Content in PHP template files
❌ Need developer to update content
❌ No revision history
```

### **New Setup (Database-based):** ✅
```
✅ Content in WordPress database
✅ Anyone can update through editor
✅ Full revision history
✅ Easy content management
```

---

## 🚀 Installation (Copy-Paste These Commands)

### **Open Terminal/PowerShell:**

```bash
cd D:\Server\htdocs\ashtech-internal\ashtech-pages-blocks
```

### **Install Dependencies:**

```bash
npm install
```

**Wait for it to complete...** (~2 minutes)

### **Build Blocks:**

```bash
npm run build
```

**Wait for compilation...** (~1 minute)

### **Activate:**

```
WordPress Admin → Plugins → Activate "Ashtech Pages Blocks"
```

**Done!** ✅

---

## ✅ What Happens During Build

```
npm run build
↓
Webpack compiles:
- home-page/index.js + edit.js + save.js → build/home-page/index.js
- project-page/index.js + edit.js + save.js → build/project-page/index.js
- contact-page/index.js + edit.js + save.js → build/contact-page/index.js
- (and 6 more blocks)
↓
Creates build/ folder with compiled JavaScript
↓
WordPress loads these compiled files
↓
Blocks work!
```

---

## 📋 File Structure

### **Source Files (You Edit These):**

```
home-page/
├── block.json        ← Attributes configuration
├── index.js          ← Block registration
├── edit.js           ← Editing interface
└── save.js           ← Your complete HTML (with editable fields)
```

### **Build Output (Auto-Generated):**

```
build/
└── home-page/
    └── index.js      ← Compiled block (WordPress loads this)
```

---

## 🎯 Usage After Build

### **Content Editing** (NO BUILD NEEDED):

```
1. WordPress Editor
2. Click text field
3. Type new content
4. Update page
5. Done! ✅
```

**Changes go to database, not code!**

### **Adding New Editable Fields** (BUILD NEEDED):

```
1. Edit block.json (add attribute)
2. Edit edit.js (add RichText field)
3. Edit save.js (add RichText.Content)
4. npm run build
5. Refresh editor
6. New field appears! ✅
```

---

## 📝 What's Editable Now

### **Contact Block** (Example):
- Hero Title
- Hero Subtitle
- Sales Phone
- Sales Email
- Corporate Address
- Corporate Phone
- Corporate Email
- Office Image

**8 fields editable through WordPress!**

### **Other Blocks:**
- Each has 2-6 editable fields
- Can add more fields anytime
- Just edit the files and rebuild

---

## 🎨 Your HTML in save.js

Your save.js files have your COMPLETE HTML:

```jsx
export default function Save({ attributes }) {
    const { heroTitle, salesPhone, salesEmail } = attributes;
    
    return (
        <div {...useBlockProps.save()}>
            {/* Your exact HTML structure */}
            <section className="contact-enquiry">
                <div className="contact-enquiry__card">
                    <h3>Sales Enquiry</h3>
                    {/* Editable field */}
                    <a href={`tel:${salesPhone}`}>
                        <RichText.Content value={salesPhone} />
                    </a>
                    {/* More of your HTML */}
                </div>
            </section>
        </div>
    );
}
```

**Complete HTML + Editable Fields!** ✅

---

## 🔧 Development Commands

```bash
# Build once (production)
npm run build

# Development mode (auto-rebuild on file changes)
npm start

# Format code
npm run format

# Check JavaScript
npm run lint:js

# Check CSS
npm run lint:css
```

---

## ✅ Verification Steps

### **1. After `npm install`:**
```
Check: node_modules/ folder exists
Should have 1000+ packages
```

### **2. After `npm run build`:**
```
Check: build/ folder exists
Should have 9 subfolders (one per block)
Each should have index.js file
```

### **3. After Activation:**
```
Pages → Add New → (+) → Search "Ashtech"
Should see all 9 blocks ✅
```

### **4. After Inserting Block:**
```
Should see editable fields
Click to edit → Works ✅
```

### **5. After Publishing:**
```
View page → See complete HTML
All sections, buttons, images ✅
```

---

## 🎉 Benefits of This Setup

### **For Content Team:**
- ✅ Edit everything in WordPress
- ✅ No code knowledge needed
- ✅ Visual interface
- ✅ Real-time preview
- ✅ Undo/redo
- ✅ Revision history

### **For Developers:**
- ✅ Standard Gutenberg approach
- ✅ Easy to maintain
- ✅ Easy to add fields
- ✅ Clean code separation
- ✅ Version controlled

### **For Business:**
- ✅ Fast content updates
- ✅ No developer bottleneck
- ✅ Lower costs
- ✅ Better workflow

---

## 🎯 Summary

**What you have:**
- ✅ 9 blocks with edit.js (editing) + save.js (output)
- ✅ Complete HTML in save.js files
- ✅ Editable fields in edit.js
- ✅ Ready to build with npm
- ✅ Content stored in database
- ✅ Perfect for frequent updates

**What to do:**
```bash
npm install
npm run build
```

Then activate and use! 🚀

---

## 📚 Key Files

| File | What It Does | Edit When |
|------|--------------|-----------|
| block.json | Defines attributes | Adding fields |
| index.js | Registers block | Rarely |
| edit.js | Editing interface | Adding edit fields |
| save.js | Frontend HTML | Changing layout |

---

## 🚀 Next Steps

```bash
# Run these commands:
cd ashtech-pages-blocks
npm install
npm run build

# Then in WordPress:
Plugins → Activate → Use blocks!
```

**All content will be editable through WordPress!** ✨

---

**Your plugin is ready to build!** 🎉

