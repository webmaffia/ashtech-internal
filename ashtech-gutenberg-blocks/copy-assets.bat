@echo off
echo ========================================
echo Ashtech Gutenberg Blocks - Copy Assets
echo ========================================
echo.

set SOURCE_DIR=..\..\..\assets
set DEST_DIR=assets

echo Source directory: %SOURCE_DIR%
echo Destination directory: %DEST_DIR%
echo.

if not exist "%SOURCE_DIR%" (
    echo ERROR: Source assets folder not found!
    echo Please ensure assets folder exists at: %SOURCE_DIR%
    echo.
    echo You can manually specify the source by editing this script.
    pause
    exit /b 1
)

echo Copying assets folder...
xcopy "%SOURCE_DIR%" "%DEST_DIR%" /E /I /Y /Q

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo Assets copied successfully!
    echo ========================================
    echo.
    echo Files copied to: %DEST_DIR%
    echo.
) else (
    echo.
    echo ERROR: Failed to copy assets!
    echo.
)

pause

