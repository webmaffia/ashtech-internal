# HTML to Gutenberg Block Mapping

## ✅ Complete Mapping - All 9 Pages

This document shows how each HTML page maps to its Gutenberg block.

---

## 1. **Home Page Block** (`ashtech/home-page`)

**Source:** `index.html`

**Main Sections:**
- Banner Section (`.landing-banner`) - Lines 73-246
- Overview Section (`.landing-overview`) - Lines 248-272
- Values Section (`.landing-values`) - Lines 274-314
- Projects Section (`.landing-projects`) - Lines 316-343
- NRI Desk Section (`.landing-nri`) - Lines 345-395
- Awards Section (`.landing-awards`) - Lines 397-437
- Testimonials Section (`.landing-testimonials`) - Lines 439-588

**Assets Used:**
- `assets/images/landing/logo.svg`
- `assets/images/landing/values-graphic.svg`
- `assets/images/landing/building.png`
- `assets/images/landing/nri.png`
- `assets/images/landing/icon-*.svg` (various icons)
- `assets/images/landing/testimonial-bg.jpg`

---

## 2. **Project Page Block** (`ashtech/project-page`)

**Source:** `project.html`

**Main Sections:**
- Hero Banner (`.project-hero`) - Lines 72-81
- Sub Menu (`.project-submenu`) - Lines 83-98
- Overview (`.project-overview`) - Lines 100-153
- Architecture (`.project-architecture`) - Lines 155-202
- Experiences (`.experiences`) - Lines 204-438
- Location (`.project-location`) - Lines 440-542
- Specifications (`.specifications`) - Lines 544-606
- About (`.project-about`) - Lines 608-626

**Assets Used:**
- `assets/images/project/project_logo.png`
- `assets/images/project/ease-vehicular.svg`
- `assets/images/project/overview-*.svg`
- `assets/images/project/wellness-*.svg`
- `assets/images/project/movement-*.svg`
- `assets/images/project/culture-*.svg`
- `assets/images/project/spec-*.jpg`
- `assets/images/project/location-*.svg`

---

## 3. **NRI Corner Block** (`ashtech/nri-page`)

**Source:** `nri.html`

**Main Sections:**
- Hero Banner (`.project-hero.nribg`) - Lines 74-83
- Overview (`.nri-overview`) - Lines 85-110
- Architecture (`.nri-architecture`) - Lines 112-170
- Why Choose (`.nri-why-choose`) - Lines 172-225
- Benefits (`.nri-benefits`) - Lines 227-304
- Director Message (`.nri-director`) - Lines 306-363
- Testimonials (`.nri-testimonials`) - Lines 365-493
- CTA (`.nri-cta`) - Lines 495-517

**Assets Used:**
- `assets/images/nri/tick.svg`
- `assets/images/nri/nri-benefits.jpg`
- `assets/images/nri/nri-benefit-*.svg`
- `assets/images/nri/nri-director.png`
- `assets/images/nri/nri-quote.svg`
- `assets/images/nri/nri-avatar.png`
- `assets/images/landing/icon-*.svg` (shared)

---

## 4. **About Us Block** (`ashtech/about-page`)

**Source:** `about.html`

**Main Sections:**
- Hero Banner (`.project-hero.aboutbg`) - Lines 72-81
- Overview (`.about-overview`) - Lines 83-96
- Values (`.about-values`) - Lines 98-138
- Vision & Mission (`.about-vision-mission`) - Lines 140-163
- History Timeline (`.about-history`) - Lines 165-234
- Leadership (`.about-leadership`) - Lines 236-320
- Director's Message (`.about-director-message`) - Lines 322-350
- Projects (`.about-projects`) - Lines 352-372

**Assets Used:**
- `assets/images/about/values-graphic.svg`
- `assets/images/about/overview-pattern.png`
- `assets/images/about/history-*.jpg`
- `assets/images/about/director-sumit.jpg`
- `assets/images/about/team-*.jpg`
- `assets/images/about/director-updated.jpg`

---

## 5. **Resources Block** (`ashtech/resources-page`)

**Source:** `resources.html`

**Main Sections:**
- Hero Banner (`.project-hero.resourcesbg`) - Lines 72-78
- Tabs Navigation (`.resources-tabs`) - Lines 80-91
- Highlights Tab (`.resources-content__tab`) - Lines 96-123
- Blogs Tab (`.resources-content__tab`) - Lines 125-151
- Video Gallery Tab (`.resources-content__tab`) - Lines 153-179
- Press & Media Tab (`.resources-content__tab`) - Lines 181-365

**Assets Used:**
- `assets/images/resources/featured-news.jpg`
- `assets/images/resources/news-*.jpg`

---

## 6. **Career Block** (`ashtech/career-page`)

**Source:** `career.html`

**Main Sections:**
- Hero Banner (`.project-hero.careerbg`) - Lines 72-81
- Overview (`.career-overview`) - Lines 83-98
- Why Choose Us (`.career-why`) - Lines 100-141
- Life at Ashtech (`.career-life`) - Lines 143-169
- Job Openings (`.career-openings`) - Lines 171-322
- Career Form (`.career-form`) - Lines 324-376
- Assurance (`.career-assurance`) - Lines 378-390

**Assets Used:**
- `assets/images/career/why-*.jpg`
- `assets/images/career/life-at-ashtech.jpg`
- `assets/images/career/icon-*.svg`

---

## 7. **Contact Block** (`ashtech/contact-page`) ✅

**Source:** `contact.html`

**Main Sections:**
- Hero Banner (`.project-hero.contactbg`) - Lines 72-81
- Contact Enquiry (`.contact-enquiry`) - Lines 83-164
- Office Addresses (`.contact-offices`) - Lines 166-251
- Contact Form (`.contact-form`) - Lines 253-301

**Assets Used:**
- `assets/images/contact/icon-phone.svg`
- `assets/images/contact/icon-email.svg`
- `assets/images/contact/office-corporate.jpg`
- `assets/images/contact/office-site.jpg`
- `assets/images/contact/icon-location.svg`
- `assets/images/contact/icon-phone-office.svg`
- `assets/images/contact/icon-email-office.svg`
- `assets/images/contact/icon-arrow.svg`
- `assets/images/contact/icon-arrow-submit.svg`
- `assets/images/contact/icon-upload.svg`

**Status:** ✅ **FULLY IMPLEMENTED**

---

## 8. **Terms Page Block** (`ashtech/terms-page`)

**Source:** `terms-and-conditions.html`

**Main Sections:**
- Hero Banner (`.project-hero.contactbg`) - Lines 72-77
- Terms Content (`.privacy-policy`) - Lines 79-197

**Assets:** None (text-heavy page)

---

## 9. **Privacy Policy Block** (`ashtech/privacy-page`)

**Source:** `privacy-policy.html`

**Main Sections:**
- Hero Banner (`.project-hero.contactbg`) - Lines 72-78
- Privacy Content (`.privacy-policy`) - Lines 81-244

**Assets:** None (text-heavy page)

---

## Asset Path Pattern

All assets follow this pattern:
```
assets/images/{page-name}/{asset-file}
```

**Examples:**
- `assets/images/landing/logo.svg` (Home)
- `assets/images/project/project_logo.png` (Project)
- `assets/images/contact/icon-phone.svg` (Contact)
- `assets/images/career/why-1.jpg` (Career)

---

## Implementation Status

| Block | HTML Mapped | Assets Mapped | Status |
|-------|-------------|---------------|--------|
| Home | ✅ | ✅ | Ready to implement |
| Project | ✅ | ✅ | Ready to implement |
| NRI | ✅ | ✅ | Ready to implement |
| About | ✅ | ✅ | Ready to implement |
| Resources | ✅ | ✅ | Ready to implement |
| Career | ✅ | ✅ | Ready to implement |
| **Contact** | ✅ | ✅ | ✅ **IMPLEMENTED** |
| Terms | ✅ | ✅ | Ready to implement |
| Privacy | ✅ | ✅ | Ready to implement |

---

## Next Steps

For each block, the save.js file needs to:
1. Use exact HTML structure from source
2. Convert HTML classes to className (JSX)
3. Make key content editable with RichText
4. Keep all assets paths intact
5. Preserve all CSS classes
6. Maintain layout structure

---

## Example Conversion

**Original HTML:**
```html
<section class="project-hero">
    <div class="project-hero__overlay"></div>
    <div class="project-hero__content">
        <h1 class="project-hero__title">Page Title</h1>
    </div>
</section>
```

**Gutenberg JSX:**
```jsx
<section className="project-hero">
    <div className="project-hero__overlay"></div>
    <div className="project-hero__content">
        <RichText.Content 
            tagName="h1" 
            className="project-hero__title" 
            value={heroTitle} 
        />
    </div>
</section>
```

---

This mapping ensures ALL blocks use your exact HTML structure! 🎉

