# PowerShell script to copy assets to WordPress theme

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Copy Assets to WordPress Theme       " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# IMPORTANT: Update this with your actual theme name!
$themeName = Read-Host "Enter your WordPress theme name (e.g., twentytwentyfour, astra, etc.)"

if ([string]::IsNullOrWhiteSpace($themeName)) {
    Write-Host "ERROR: Theme name cannot be empty!" -ForegroundColor Red
    Write-Host ""
    Write-Host "To find your theme name:" -ForegroundColor Yellow
    Write-Host "  Go to: D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\themes\" -ForegroundColor White
    Write-Host "  Look for your active theme folder" -ForegroundColor White
    exit 1
}

$source = "D:\Server\htdocs\ashtech-internal\assets"
$dest = "D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\themes\$themeName\assets"

Write-Host "Source: $source" -ForegroundColor White
Write-Host "Destination: $dest" -ForegroundColor White
Write-Host ""

# Check if source exists
if (-not (Test-Path $source)) {
    Write-Host "ERROR: Source assets folder not found!" -ForegroundColor Red
    Write-Host "Looking for: $source" -ForegroundColor Yellow
    exit 1
}

# Check if theme exists
$themeDir = "D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\themes\$themeName"
if (-not (Test-Path $themeDir)) {
    Write-Host "ERROR: Theme folder not found!" -ForegroundColor Red
    Write-Host "Looking for: $themeDir" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Available themes:" -ForegroundColor Yellow
    Get-ChildItem "D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\themes\" -Directory | ForEach-Object { Write-Host "  - $($_.Name)" -ForegroundColor White }
    exit 1
}

# Remove old assets if exists
if (Test-Path $dest) {
    Write-Host "Removing old assets..." -ForegroundColor Yellow
    Remove-Item $dest -Recurse -Force
}

# Copy assets
Write-Host "Copying assets..." -ForegroundColor Yellow
Copy-Item $source $dest -Recurse -Force

# Verify
$cssPath = Join-Path $dest "css\main.css"
if (Test-Path $cssPath) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  SUCCESS - ASSETS COPIED!              " -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Assets location:" -ForegroundColor Cyan
    Write-Host "  $dest" -ForegroundColor White
    Write-Host ""
    Write-Host "NEXT STEPS:" -ForegroundColor Cyan
    Write-Host "1. Open: ashtech-gutenberg-blocks.php" -ForegroundColor White
    Write-Host "2. Find lines 46 and 71" -ForegroundColor White
    Write-Host "3. Replace 'your-theme-name' with: $themeName" -ForegroundColor Yellow
    Write-Host "4. Save the file" -ForegroundColor White
    Write-Host "5. Run: npm run build" -ForegroundColor White
    Write-Host "6. Run: .\COPY-TO-WORDPRESS-NOW.ps1" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "ERROR: Copy verification failed!" -ForegroundColor Red
    Write-Host "CSS file not found at: $cssPath" -ForegroundColor Yellow
    exit 1
}
