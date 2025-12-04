# PowerShell script to fix all edit.js files with correct rendering approach

$blocks = @(
    "landing-banner", "landing-overview", "landing-values", "landing-projects", "landing-nri", "landing-awards", "landing-testimonials",
    "about-hero", "about-overview", "about-values", "about-vision-mission", "about-history", "about-leadership", "about-director-message", "about-projects",
    "project-hero", "project-submenu", "project-overview", "project-architecture", "experiences", "project-location", "specifications", "project-about",
    "nri-hero", "nri-overview", "nri-architecture", "nri-why-choose", "nri-benefits", "nri-director", "nri-testimonials", "nri-cta",
    "career-hero", "career-overview", "career-why", "career-life", "career-openings", "career-form", "career-assurance",
    "contact-hero", "contact-enquiry", "contact-offices", "contact-form",
    "resources-hero", "resources-tabs", "resources-content"
)

$editTemplate = @"
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <div style={{
                padding: '20px',
                background: '#f9f9f9',
                border: '1px solid #ddd',
                borderRadius: '4px'
            }}>
                <p style={{
                    margin: 0,
                    fontSize: '14px',
                    color: '#666'
                }}>
                    ✓ Block Preview - Content will render on frontend
                </p>
            </div>
        </div>
    );
}
"@

foreach ($block in $blocks) {
    $editPath = "src/blocks/$block/edit.js"
    Set-Content -Path $editPath -Value $editTemplate
    Write-Host "Fixed: $block/edit.js" -ForegroundColor Green
}

Write-Host "`nAll 45 edit.js files fixed!" -ForegroundColor Cyan
Write-Host "Now run: npm run build" -ForegroundColor Yellow

