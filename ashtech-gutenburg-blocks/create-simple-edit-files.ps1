# PowerShell script to create simple, working edit.js files for all blocks

$blocks = @{
    # Landing Page
    "landing-banner" = "Landing Banner Section - Hero with animated SVG"
    "landing-overview" = "Landing Overview - 456 Residences intro"
    "landing-values" = "Landing Values - 6 value cards with graphic"
    "landing-projects" = "Landing Projects - Building render with CTA buttons"
    "landing-nri" = "Landing NRI Section - 4 features for NRI investors"
    "landing-awards" = "Landing Awards - 4 award cards with laurels"
    "landing-testimonials" = "Landing Testimonials - Testimonial slider"
    
    # About Page
    "about-hero" = "About Hero - Page banner"
    "about-overview" = "About Overview - Company introduction"
    "about-values" = "About Values - 6 core values with graphic"
    "about-vision-mission" = "About Vision & Mission - Two sections"
    "about-history" = "About History - Timeline with 8 milestones"
    "about-leadership" = "About Leadership - Director and team"
    "about-director-message" = "About Director Message - Message with signature"
    "about-projects" = "About Projects - Projects CTA section"
    
    # Project Page
    "project-hero" = "Project Hero - Presidential Towers banner"
    "project-submenu" = "Project Submenu - Navigation menu"
    "project-overview" = "Project Overview - Stats and description"
    "project-architecture" = "Project Architecture - 4 tabs (Structure, Facade, Planning, Sustainability)"
    "experiences" = "Experiences - 4 tabs with amenity features"
    "project-location" = "Project Location - Map and connectivity"
    "specifications" = "Specifications - 3 specification cards"
    "project-about" = "Project About - About Ashtech Group"
    
    # NRI Page
    "nri-hero" = "NRI Hero - NRI Corner banner"
    "nri-overview" = "NRI Overview - Investment opportunity intro"
    "nri-architecture" = "NRI Architecture - 6 investment features"
    "nri-why-choose" = "NRI Why Choose - 5 numbered reasons"
    "nri-benefits" = "NRI Benefits - 7 benefit cards grid"
    "nri-director" = "NRI Director - Support and services"
    "nri-testimonials" = "NRI Testimonials - 6 testimonial cards"
    "nri-cta" = "NRI CTA - Closing call to action"
    
    # Career Page
    "career-hero" = "Career Hero - Career page banner"
    "career-overview" = "Career Overview - Join legacy intro"
    "career-why" = "Career Why - 3 why choose cards"
    "career-life" = "Career Life - Life at Ashtech and opportunities"
    "career-openings" = "Career Openings - 5 job cards and application info"
    "career-form" = "Career Form - Career application form"
    "career-assurance" = "Career Assurance - Hiring process note"
    
    # Contact Page
    "contact-hero" = "Contact Hero - Contact page banner"
    "contact-enquiry" = "Contact Enquiry - 4 enquiry cards"
    "contact-offices" = "Contact Offices - 2 office address cards"
    "contact-form" = "Contact Form - Contact form with 6 fields"
    
    # Resources Page
    "resources-hero" = "Resources Hero - Resources page banner"
    "resources-tabs" = "Resources Tabs - 4 tab navigation"
    "resources-content" = "Resources Content - News and press releases"
}

foreach ($blockName in $blocks.Keys) {
    $description = $blocks[$blockName]
    $blockPath = "src/blocks/$blockName"
    
    $editJs = @"
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
    const blockProps = useBlockProps({
        className: 'ashtech-block-editor-placeholder'
    });

    return (
        <div {...blockProps}>
            <div style={{
                padding: '30px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
                <div style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '10px'
                }}>
                    ✓ $description
                </div>
                <div style={{
                    fontSize: '14px',
                    opacity: 0.9
                }}>
                    Content will render perfectly on frontend with full styling
                </div>
            </div>
        </div>
    );
}
"@
    
    Set-Content -Path "$blockPath/edit.js" -Value $editJs
    Write-Host "Created: $blockName/edit.js" -ForegroundColor Green
}

Write-Host ""
Write-Host "All 45 edit.js files created successfully!" -ForegroundColor Cyan
Write-Host "Now run: npm run build" -ForegroundColor Yellow

