@echo off
echo ========================================
echo  Haramaya Land Management Deployment
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js found!
echo.

echo Building the project...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo Build completed successfully!
echo.

echo ========================================
echo  Deployment Options
echo ========================================
echo.
echo 1. Deploy to Vercel (requires Vercel CLI)
echo 2. Deploy to Netlify (requires Netlify CLI)
echo 3. Deploy to both platforms
echo 4. Manual deployment instructions
echo 5. Exit
echo.

set /p choice="Choose an option (1-5): "

if "%choice%"=="1" goto deploy_vercel
if "%choice%"=="2" goto deploy_netlify
if "%choice%"=="3" goto deploy_both
if "%choice%"=="4" goto manual_instructions
if "%choice%"=="5" goto end

:deploy_vercel
echo.
echo Deploying to Vercel...
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Vercel CLI not found!
    echo Install it with: npm install -g vercel
    pause
    goto end
)
call vercel --prod
goto end

:deploy_netlify
echo.
echo Deploying to Netlify...
netlify --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Netlify CLI not found!
    echo Install it with: npm install -g netlify-cli
    pause
    goto end
)
call netlify deploy --prod --dir=dist
goto end

:deploy_both
echo.
echo Deploying to both platforms...
echo.
echo Checking Vercel CLI...
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo WARNING: Vercel CLI not found! Skipping Vercel deployment.
    echo Install it with: npm install -g vercel
) else (
    echo Deploying to Vercel...
    call vercel --prod
)

echo.
echo Checking Netlify CLI...
netlify --version >nul 2>&1
if %errorlevel% neq 0 (
    echo WARNING: Netlify CLI not found! Skipping Netlify deployment.
    echo Install it with: npm install -g netlify-cli
) else (
    echo Deploying to Netlify...
    call netlify deploy --prod --dir=dist
)
goto end

:manual_instructions
echo.
echo ========================================
echo  Manual Deployment Instructions
echo ========================================
echo.
echo Your project has been built in the 'dist' folder.
echo.
echo VERCEL:
echo 1. Go to https://vercel.com
echo 2. Sign up/Login
echo 3. Click "New Project"
echo 4. Upload the 'dist' folder
echo 5. Set environment variables:
echo    - VITE_SUPABASE_URL
echo    - VITE_SUPABASE_ANON_KEY
echo.
echo NETLIFY:
echo 1. Go to https://netlify.com
echo 2. Sign up/Login
echo 3. Drag and drop the 'dist' folder
echo 4. Set environment variables in Site Settings
echo.
echo ALTERNATIVE - Use GitHub:
echo 1. Install Git from https://git-scm.com/download/win
echo 2. Create GitHub repository
echo 3. Push your code
echo 4. Connect to Vercel/Netlify via GitHub
echo.
pause
goto end

:end
echo.
echo Deployment process completed!
pause