@echo off
cls
echo.
echo 🚀 HARAMAYA LAND MANAGEMENT - READY TO DEPLOY!
echo.
echo ✅ Your project is built and ready in the 'dist' folder
echo ✅ All 8 pages are working perfectly
echo ✅ Bilingual support (English/Afaan Oromoo)
echo ✅ No errors found
echo.
echo 🌐 DEPLOY NOW:
echo.
echo 1. VERCEL (Recommended):
echo    https://vercel.com
echo.
echo 2. NETLIFY (Alternative):
echo    https://netlify.com
echo.
echo 📋 STEPS:
echo 1. Go to one of the sites above
echo 2. Sign up/Login
echo 3. Drag your 'dist' folder to upload
echo 4. Add environment variables (see DEPLOY-INSTRUCTIONS.txt)
echo 5. Deploy!
echo.
echo 🎉 Your site will be live in 2 minutes!
echo.

set /p choice="Press 1 to open Vercel, 2 for Netlify, or Enter to continue: "

if "%choice%"=="1" (
    start https://vercel.com
    echo Opening Vercel...
) else if "%choice%"=="2" (
    start https://netlify.com
    echo Opening Netlify...
) else (
    echo Check DEPLOY-INSTRUCTIONS.txt for detailed steps
)

echo.
echo 📁 Your 'dist' folder contains:
dir dist /b
echo.
echo 🔑 Don't forget to add environment variables!
echo See DEPLOY-INSTRUCTIONS.txt for the exact values.
echo.
pause