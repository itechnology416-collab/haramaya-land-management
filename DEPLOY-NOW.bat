@echo off
cls
echo ========================================
echo   HARAMAYA LAND MANAGEMENT SYSTEM
echo        DEPLOYMENT READY!
echo ========================================
echo.

echo ✅ Your project is built and ready to deploy!
echo ✅ Files are in the 'dist' folder
echo.

echo 🚀 DEPLOYMENT OPTIONS:
echo.
echo 1. VERCEL (Recommended - Fastest)
echo    - Go to: https://vercel.com
echo    - Sign up/Login
echo    - Click "New Project"
echo    - Drag the 'dist' folder
echo    - Add environment variables
echo    - Deploy!
echo.

echo 2. NETLIFY (Alternative)
echo    - Go to: https://netlify.com  
echo    - Sign up/Login
echo    - Drag the 'dist' folder
echo    - Add environment variables
echo    - Deploy!
echo.

echo 📋 ENVIRONMENT VARIABLES TO ADD:
echo    VITE_SUPABASE_URL=https://qsrbmlhbskxjemlpggjf.supabase.co
echo    VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcmJtbGhic2t4amVtbHBnZ2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1Mzk4MTEsImV4cCI6MjA4MjExNTgxMX0.Do9FtBOJix5Oqh9xh0ko1JKaRi6q8S0R2F-rXeQxkTU
echo.

echo 🌐 Choose your deployment platform:
echo.
set /p choice="Press 1 for Vercel, 2 for Netlify, or any key to see more options: "

if "%choice%"=="1" (
    echo Opening Vercel...
    start https://vercel.com
    echo.
    echo 📋 Steps:
    echo 1. Sign up/Login to Vercel
    echo 2. Click "New Project"
    echo 3. Drag your 'dist' folder to upload
    echo 4. Add the environment variables shown above
    echo 5. Click Deploy!
    echo.
    echo Your site will be live at: https://your-project-name.vercel.app
) else if "%choice%"=="2" (
    echo Opening Netlify...
    start https://netlify.com
    echo.
    echo 📋 Steps:
    echo 1. Sign up/Login to Netlify
    echo 2. Drag your 'dist' folder to the deploy area
    echo 3. Go to Site Settings ^> Environment Variables
    echo 4. Add the environment variables shown above
    echo 5. Redeploy if needed
    echo.
    echo Your site will be live at: https://your-project-name.netlify.app
) else (
    echo.
    echo 📖 More deployment options:
    echo.
    echo 🔧 CLI DEPLOYMENT (if you have the tools):
    echo    npm install -g vercel netlify-cli
    echo    vercel login ^&^& vercel --prod
    echo    netlify login ^&^& netlify deploy --prod --dir=dist
    echo.
    echo 📱 MOBILE/TABLET DEPLOYMENT:
    echo    - Upload 'dist' folder to Google Drive
    echo    - Access from mobile and drag to Vercel/Netlify
    echo.
    echo 🌐 OTHER PLATFORMS:
    echo    - GitHub Pages (requires Git)
    echo    - Railway (git push)
    echo    - Surge.sh (surge dist)
    echo.
    echo 📋 VISUAL GUIDE:
    echo    Open 'deployment-guide.html' in your browser
)

echo.
echo 🎉 Your Haramaya Land Management System is ready!
echo 📊 Features included:
echo    ✅ Bilingual support (English/Afaan Oromoo)
echo    ✅ Responsive design
echo    ✅ Supabase integration
echo    ✅ Contact forms
echo    ✅ News system
echo    ✅ All 8 pages functional
echo.

echo 📞 Need help? Contact: haramayaifo@gmail.com
echo.
pause