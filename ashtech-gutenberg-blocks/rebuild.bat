@echo off
echo ========================================
echo Rebuilding Ashtech Gutenberg Blocks
echo ========================================
echo.

echo Compiling React components...
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo Build completed successfully!
    echo ========================================
    echo.
    echo Next steps:
    echo 1. Refresh your WordPress editor
    echo 2. Clear browser cache (Ctrl+Shift+Del)
    echo 3. Images should now appear in the editor!
    echo.
) else (
    echo.
    echo ERROR: Build failed!
    echo Please check for errors above.
    echo.
)

pause

