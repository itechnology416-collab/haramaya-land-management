@echo off
echo ===================================================
echo   Haramaya Land Management System - Recovery Mode
echo ===================================================
echo.
echo We are having trouble running the 'vite' command automatically.
echo This script will fix the missing files and start the server manually.
echo.

echo 1. Ensuring all libraries are installed...
call "C:\Program Files\nodejs\npm.cmd" install
echo.

echo 2. Starting the server directly...
echo    Please wait for the link (e.g., http://localhost:5173)...
echo.

REM Direct execution of the Vite script using absolute Node path
"C:\Program Files\nodejs\node.exe" "node_modules\vite\bin\vite.js"

echo.
echo If the server stopped, read the error above.
pause
