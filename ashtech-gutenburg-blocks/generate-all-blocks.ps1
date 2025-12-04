# PowerShell script to generate all Gutenberg blocks structure

$blocks = @(
    # Landing Page (7 blocks)
    "landing-banner",
    "landing-overview", 
    "landing-values",
    "landing-projects",
    "landing-nri",
    "landing-awards",
    "landing-testimonials",
    
    # About Page (8 blocks)
    "about-hero",
    "about-overview",
    "about-values",
    "about-vision-mission",
    "about-history",
    "about-leadership",
    "about-director-message",
    "about-projects",
    
    # Project Page (8 blocks)
    "project-hero",
    "project-submenu",
    "project-overview",
    "project-architecture",
    "experiences",
    "project-location",
    "specifications",
    "project-about",
    
    # NRI Page (8 blocks)
    "nri-hero",
    "nri-overview",
    "nri-architecture",
    "nri-why-choose",
    "nri-benefits",
    "nri-director",
    "nri-testimonials",
    "nri-cta",
    
    # Career Page (7 blocks)
    "career-hero",
    "career-overview",
    "career-why",
    "career-life",
    "career-openings",
    "career-form",
    "career-assurance",
    
    # Contact Page (4 blocks)
    "contact-hero",
    "contact-enquiry",
    "contact-offices",
    "contact-form",
    
    # Resources Page (3 blocks)
    "resources-hero",
    "resources-tabs",
    "resources-content"
)

foreach ($block in $blocks) {
    $blockPath = "src/blocks/$block"
    
    # Create block directory if it doesn't exist
    if (-not (Test-Path $blockPath)) {
        New-Item -ItemType Directory -Path $blockPath -Force | Out-Null
        Write-Host "Created directory: $blockPath" -ForegroundColor Green
    }
    
    # Convert kebab-case to Title Case for display name
    $displayName = ($block -split '-' | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1) }) -join ' '
    
    # block.json
    $blockJson = @"
{
  "apiVersion": 2,
  "name": "ashtech/$block",
  "title": "$displayName",
  "category": "ashtech-blocks",
  "icon": "admin-customizer",
  "description": "Ashtech $displayName block",
  "supports": {
    "html": false
  },
  "textdomain": "ashtech-blocks",
  "editorScript": "file:./index.js",
  "editorStyle": "file:./editor.css",
  "style": "file:./style.css"
}
"@
    
    # index.js
    $indexJs = @"
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './style.scss';
import './editor.scss';

registerBlockType('ashtech/$block', {
    edit: Edit,
    save,
});
"@
    
    # edit.js
    $editJs = @"
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <p style={{padding: '20px', background: '#f0f0f0', border: '2px dashed #999'}}>
                $displayName Block - Editor View
            </p>
        </div>
    );
}
"@
    
    # save.js (placeholder - will be filled with exact HTML)
    $saveJs = @"
export default function save() {
    return (
        <div className="$block">
            <p>$displayName Block Content</p>
        </div>
    );
}
"@
    
    # style.scss
    $styleScss = @"
/* Frontend styles for $block block */
.$block {
    /* Styles will be loaded from main.css */
}
"@
    
    # editor.scss
    $editorScss = @"
/* Editor styles for $block block */
.$block {
    /* Editor specific styles */
}
"@
    
    # Write files
    Set-Content -Path "$blockPath/block.json" -Value $blockJson
    Set-Content -Path "$blockPath/index.js" -Value $indexJs
    Set-Content -Path "$blockPath/edit.js" -Value $editJs
    Set-Content -Path "$blockPath/save.js" -Value $saveJs
    Set-Content -Path "$blockPath/style.scss" -Value $styleScss
    Set-Content -Path "$blockPath/editor.scss" -Value $editorScss
    
    Write-Host "Generated block: $block" -ForegroundColor Cyan
}

Write-Host "`nAll 45 blocks structure generated successfully!" -ForegroundColor Green
Write-Host "Next: Update save.js files with exact HTML content" -ForegroundColor Yellow

