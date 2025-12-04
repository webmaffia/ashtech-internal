# PowerShell script to copy plugin to WordPress

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Copying Ashtech Blocks to WordPress  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$source = "D:\Server\htdocs\ashtech-internal\ashtech-gutenburg-blocks"
$dest = "D:\Server\htdocs\wordpress-6.8.3\wordpress\wp-content\plugins\ashtech-gutenberg-blocks"

# Check if source exists
if (-not (Test-Path $source)) {
    Write-Host "ERROR: Source folder not found!" -ForegroundColor Red
    Write-Host "Looking for: $source" -ForegroundColor Yellow
    exit 1
}

# Check if build folder exists
if (-not (Test-Path "$source\build")) {
    Write-Host "ERROR: Build folder not found!" -ForegroundColor Red
    Write-Host "Please run 'npm run build' first!" -ForegroundColor Yellow
    exit 1
}

Write-Host "Source: $source" -ForegroundColor Green
Write-Host "Destination: $dest" -ForegroundColor Green
Write-Host ""

# Remove old plugin if exists
if (Test-Path $dest) {
    Write-Host "Removing old plugin..." -ForegroundColor Yellow
    Remove-Item $dest -Recurse -Force
    Write-Host "✓ Old plugin removed" -ForegroundColor Green
}

# Copy new plugin
Write-Host "Copying new plugin..." -ForegroundColor Yellow
Copy-Item $source $dest -Recurse -Force

# Verify copy
if (Test-Path "$dest\build") {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✓ PLUGIN COPIED SUCCESSFULLY!        " -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Go to WordPress Admin → Plugins" -ForegroundColor White
    Write-Host "2. Deactivate 'Ashtech Gutenberg Blocks'" -ForegroundColor White
    Write-Host "3. Activate it again" -ForegroundColor White
    Write-Host "4. Clear browser cache (Ctrl + Shift + Delete)" -ForegroundColor White
    Write-Host "5. Try adding blocks!" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "ERROR: Copy failed!" -ForegroundColor Red
    Write-Host "Please copy manually" -ForegroundColor Yellow
    exit 1
}

