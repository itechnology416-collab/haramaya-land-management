@echo off
echo ========================================
echo  Git Installation for Windows
echo ========================================
echo.

echo Checking if Git is already installed...
git --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Git is already installed!
    git --version
    pause
    exit /b 0
)

echo Git is not installed. Let's install it!
echo.

echo Opening Git download page in your browser...
echo Please download and install Git from the official website.
echo.
echo After installation:
echo 1. Restart your command prompt
echo 2. Test with: git --version
echo 3. Run: git init in your project folder
echo.

start https://git-scm.com/download/win

echo.
echo Alternative: If you have winget (Windows 10/11):
echo winget install --id Git.Git -e --source winget
echo.

pause