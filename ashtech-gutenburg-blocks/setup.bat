@echo off
echo ========================================
echo Ashtech Gutenberg Blocks - Setup
echo ========================================
echo.

echo Step 1: Installing npm dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm install failed!
    pause
    exit /b 1
)
echo.

echo Step 2: Building blocks...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)
echo.

echo ========================================
echo Setup completed successfully!
echo ========================================
echo.
echo Next steps:
echo 1. Copy your assets folder to this directory
echo 2. Activate the plugin in WordPress admin
echo 3. Create a new page and add the blocks
echo.
echo For detailed instructions, see INSTALLATION.md
echo.
pause

