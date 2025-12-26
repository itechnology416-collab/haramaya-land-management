@echo off
echo Installing Git for Windows...
echo.
echo Please choose one of the following options:
echo.
echo Option 1: Download Git manually
echo 1. Go to https://git-scm.com/download/win
echo 2. Download Git for Windows
echo 3. Run the installer with default settings
echo 4. Restart your command prompt
echo.
echo Option 2: Install via Chocolatey (if you have it)
echo choco install git
echo.
echo Option 3: Install via Winget (Windows 10/11)
echo winget install --id Git.Git -e --source winget
echo.
echo After installation, restart your command prompt and run:
echo git --version
echo.
pause