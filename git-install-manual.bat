@echo off
echo ========================================
echo  Manual Git Installation
echo ========================================
echo.

echo The winget installation failed. Let's try manual installation:
echo.

echo 1. Opening Git download page...
start https://git-scm.com/download/win

echo.
echo 2. Download instructions:
echo    - Click "64-bit Git for Windows Setup"
echo    - Save the file to Downloads
echo    - Run the installer
echo    - Use default settings (just keep clicking Next)
echo    - Restart Command Prompt after installation
echo.

echo 3. Alternative download links:
echo    - Direct: https://github.com/git-for-windows/git/releases/latest
echo    - Mirror: https://git-scm.com/download/win
echo.

echo 4. After installation, test with:
echo    git --version
echo.

echo 5. Then initialize your project:
echo    git init
echo    git add .
echo    git commit -m "Initial commit"
echo.

pause