@echo off
REM ============================================
REM Copy Plugin to WordPress Installation
REM ============================================

echo.
echo ========================================
echo   Copy Ashtech Blocks to WordPress
echo ========================================
echo.

REM === CONFIGURE THESE PATHS ===
REM Change this to your WordPress plugins directory
set "WP_PLUGINS_DIR=C:\path\to\wordpress\wp-content\plugins"

REM Current plugin directory
set "PLUGIN_DIR=%~dp0"

echo Source: %PLUGIN_DIR%
echo Destination: %WP_PLUGINS_DIR%\ashtech-gutenberg-blocks\
echo.

REM Check if WordPress plugins directory exists
if not exist "%WP_PLUGINS_DIR%" (
    echo ERROR: WordPress plugins directory not found!
    echo Please edit this script and set the correct path to:
    echo    wp-content/plugins/
    echo.
    echo Current path: %WP_PLUGINS_DIR%
    pause
    exit /b 1
)

REM Create plugin directory in WordPress if it doesn't exist
if not exist "%WP_PLUGINS_DIR%\ashtech-gutenberg-blocks" (
    echo Creating plugin directory...
    mkdir "%WP_PLUGINS_DIR%\ashtech-gutenberg-blocks"
)

REM Copy all files EXCEPT node_modules and build
echo.
echo Copying plugin files...
echo.

REM Copy PHP file
xcopy /Y "%PLUGIN_DIR%ashtech-gutenberg-blocks.php" "%WP_PLUGINS_DIR%\ashtech-gutenberg-blocks\"

REM Copy package files
xcopy /Y "%PLUGIN_DIR%package.json" "%WP_PLUGINS_DIR%\ashtech-gutenberg-blocks\"
xcopy /Y "%PLUGIN_DIR%package-lock.json" "%WP_PLUGINS_DIR%\ashtech-gutenberg-blocks\"
xcopy /Y "%PLUGIN_DIR%webpack.config.js" "%WP_PLUGINS_DIR%\ashtech-gutenberg-blocks\"

REM Copy src directory
xcopy /E /I /Y "%PLUGIN_DIR%src" "%WP_PLUGINS_DIR%\ashtech-gutenberg-blocks\src\"

REM Copy assets directory  
xcopy /E /I /Y "%PLUGIN_DIR%assets" "%WP_PLUGINS_DIR%\ashtech-gutenberg-blocks\assets\"

REM Copy templates directory
xcopy /E /I /Y "%PLUGIN_DIR%templates" "%WP_PLUGINS_DIR%\ashtech-gutenberg-blocks\templates\"

echo.
echo ========================================
echo   Files copied successfully!
echo ========================================
echo.
echo NEXT STEPS:
echo.
echo 1. Open terminal in WordPress plugins directory:
echo    cd %WP_PLUGINS_DIR%\ashtech-gutenberg-blocks
echo.
echo 2. Install dependencies:
echo    npm install
echo.
echo 3. Build the plugin:
echo    npm run build
echo.
echo 4. Activate plugin in WordPress admin
echo.
echo ========================================
pause

