# Ashtech Presidential Towers - Project Page

## Overview
A comprehensive project page for Ashtech Presidential Towers has been created with all sections from the Figma design.

## Files Created

### HTML
- `project.html` - Main project page with all sections

### SCSS Files (in assets/scss/sections/)
1. `_project-hero.scss` - Hero banner section with SVG animation
2. `_project-submenu.scss` - Sticky navigation submenu
3. `_project-overview.scss` - Project overview section with stats
4. `_project-architecture.scss` - Architecture and landscape section
5. `_project-experiences.scss` - Experiences and privileges section
6. `_project-location.scss` - Location and connectivity section with map
7. `_project-specifications.scss` - Technical specifications cards
8. `_project-about.scss` - About Ashtech Group section

### JavaScript
- `assets/js/project-animations.js` - Animations and interactive features

## Sections Implemented

1. **Hero Banner**
   - Full-screen hero with animated SVG illustration
   - Elegant typography with fade-in animations

2. **Sub Menu Bar**
   - Sticky navigation with smooth scroll to sections
   - Active section highlighting
   - Responsive menu layout

3. **Overview**
   - Two-column layout with title and description
   - Stats grid showing: 5.6 acres, 3-side open plot, 5 towers, 456 residences
   - Background SVG decoration with parallax effect

4. **Architecture & Landscape**
   - Image and text content layout
   - Hover effects on images
   - Information about Studio Symbiosis design

5. **Experiences & Privileges**
   - 6-item grid showcasing amenities
   - Icon-based design with staggered animations
   - Includes: Wellness Pavilion, Resident Lounge, Children's Play Area, Infinity Pool, Landscaped Gardens, Sports Facilities

6. **Location & Connectivity**
   - Map visualization
   - 6 connectivity points with icons
   - Accessibility information for key locations

7. **Specifications**
   - 3 specification cards:
     - Residences (Italian marble, VRV AC, modular kitchens, etc.)
     - Structure & Safety (Aluminium facade, security, TQ Cert)
     - Sustainability (Passive cooling, cross-ventilation, natural light)
   - Card hover effects with image scaling

8. **About Ashtech Group**
   - Company legacy information
   - Call-to-action button
   - Background SVG decoration

## Features Implemented

### Responsive Design
- Desktop: Full-width layouts with multi-column grids
- Tablet (max-width: 1200px): Adjusted columns and padding
- Mobile (max-width: 768px): Single-column layouts, stacked content

### Animations
- Scroll-triggered fade-in animations for text elements
- SVG line drawing animations on hero banner
- Staggered animations for stats, experiences grid, and accessibility items
- Parallax effects on background SVG patterns
- Smooth scroll to sections via submenu
- Image hover effects with scaling
- Button hover animations

### Interactive Elements
- Sticky submenu with scroll-based styling
- Active section highlighting in submenu
- Smooth scroll navigation
- Interactive cards with hover states
- Mobile-friendly touch interactions

## Design System
- Colors: Uses Ashtech brand colors (Maroon #720C10, Beige #F4EAD7)
- Typography: Chronicle Display and Montserrat fonts
- Consistent spacing and layout patterns
- Matching design language with homepage

## Usage

1. **View the page:**
   - Open `project.html` in a web browser
   - Or use: `npm run server` to start a local server

2. **Edit styles:**
   - Modify SCSS files in `assets/scss/sections/`
   - Run `npm run sass` to compile
   - Or use `npm run sass:watch` for auto-compilation

3. **Edit animations:**
   - Modify `assets/js/project-animations.js`
   - Refresh browser to see changes

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive breakpoints at 768px, 1200px, and 1440px
- Smooth scrolling with fallback for reduced motion preference

## Performance Optimizations
- CSS animations using GPU-accelerated transforms
- Intersection Observer for scroll animations
- Lazy-loaded animation triggers
- Optimized SVG paths

## Next Steps (Optional Enhancements)
1. Add actual images for sections (currently using placeholders)
2. Add real map integration (Google Maps/Mapbox)
3. Add form functionality for "Schedule a Visit" buttons
4. Add lightbox/modal for specification images
5. Add image gallery section
6. Add virtual tour integration
7. Add loading states and skeleton screens
8. Add 360° view for residences

## Notes
- Header and Footer are reused from index.html
- All sections are fully responsive
- Animations are similar to homepage for consistency
- Smooth scroll behavior is implemented with fallback
- All colors and variables follow the existing design system

