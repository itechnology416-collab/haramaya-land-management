# Haramaya Land Management - Direct Deployment Script
# This script works without Git

Write-Host "========================================" -ForegroundColor Green
Write-Host " Haramaya Land Management Deployment" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Check Node.js
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Build the project
Write-Host "Building the project..." -ForegroundColor Yellow
try {
    npm run build
    Write-Host "Build completed successfully!" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Build failed!" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host " Deployment Options" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Install CLI tools and deploy"
Write-Host "2. Manual deployment (drag & drop)"
Write-Host "3. Show deployment URLs"
Write-Host "4. Exit"
Write-Host ""

$choice = Read-Host "Choose an option (1-4)"

switch ($choice) {
    "1" {
        Write-Host ""
        Write-Host "Installing CLI tools..." -ForegroundColor Yellow
        
        # Install Vercel CLI
        Write-Host "Installing Vercel CLI..." -ForegroundColor Yellow
        try {
            npm install -g vercel
            Write-Host "Vercel CLI installed!" -ForegroundColor Green
        } catch {
            Write-Host "Failed to install Vercel CLI" -ForegroundColor Red
        }
        
        # Install Netlify CLI
        Write-Host "Installing Netlify CLI..." -ForegroundColor Yellow
        try {
            npm install -g netlify-cli
            Write-Host "Netlify CLI installed!" -ForegroundColor Green
        } catch {
            Write-Host "Failed to install Netlify CLI" -ForegroundColor Red
        }
        
        Write-Host ""
        Write-Host "CLI tools installed! You can now run:" -ForegroundColor Green
        Write-Host "- vercel login && vercel --prod" -ForegroundColor Cyan
        Write-Host "- netlify login && netlify deploy --prod --dir=dist" -ForegroundColor Cyan
    }
    
    "2" {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host " Manual Deployment Instructions" -ForegroundColor Cyan
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Your project is built in the 'dist' folder." -ForegroundColor Green
        Write-Host ""
        Write-Host "VERCEL (Drag & Drop):" -ForegroundColor Yellow
        Write-Host "1. Go to https://vercel.com"
        Write-Host "2. Sign up/Login"
        Write-Host "3. Click 'New Project'"
        Write-Host "4. Drag the 'dist' folder to upload"
        Write-Host "5. Add environment variables in Settings"
        Write-Host ""
        Write-Host "NETLIFY (Drag & Drop):" -ForegroundColor Yellow
        Write-Host "1. Go to https://netlify.com"
        Write-Host "2. Sign up/Login"
        Write-Host "3. Drag the 'dist' folder to the deploy area"
        Write-Host "4. Add environment variables in Site Settings"
        Write-Host ""
        Write-Host "Environment Variables needed:" -ForegroundColor Red
        Write-Host "- VITE_SUPABASE_URL=https://qsrbmlhbskxjemlpggjf.supabase.co"
        Write-Host "- VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    
    "3" {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host " Deployment Platforms" -ForegroundColor Cyan
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Vercel: https://vercel.com" -ForegroundColor Green
        Write-Host "Netlify: https://netlify.com" -ForegroundColor Green
        Write-Host "Railway: https://railway.app" -ForegroundColor Green
        Write-Host "GitHub Pages: https://pages.github.com" -ForegroundColor Green
        Write-Host ""
        Write-Host "Your built files are in the 'dist' folder" -ForegroundColor Yellow
    }
    
    "4" {
        Write-Host "Goodbye!" -ForegroundColor Green
        exit 0
    }
    
    default {
        Write-Host "Invalid option selected" -ForegroundColor Red
    }
}

Write-Host ""
Read-Host "Press Enter to exit"