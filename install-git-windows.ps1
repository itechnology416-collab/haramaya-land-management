# Git Installation Script for Windows
# Run this script as Administrator for best results

Write-Host "🔧 Installing Git for Windows..." -ForegroundColor Green
Write-Host ""

# Method 1: Try Winget first
Write-Host "Method 1: Trying Windows Package Manager (winget)..." -ForegroundColor Yellow
try {
    $wingetResult = winget install --id Git.Git -e --source winget --accept-package-agreements --accept-source-agreements
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Git installed successfully via winget!" -ForegroundColor Green
        Write-Host "Please restart your PowerShell/Command Prompt" -ForegroundColor Yellow
        exit 0
    }
} catch {
    Write-Host "❌ Winget installation failed or not available" -ForegroundColor Red
}

# Method 2: Try Chocolatey
Write-Host ""
Write-Host "Method 2: Trying Chocolatey..." -ForegroundColor Yellow
try {
    $chocoCheck = Get-Command choco -ErrorAction SilentlyContinue
    if ($chocoCheck) {
        choco install git -y
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Git installed successfully via Chocolatey!" -ForegroundColor Green
            Write-Host "Please restart your PowerShell/Command Prompt" -ForegroundColor Yellow
            exit 0
        }
    } else {
        Write-Host "❌ Chocolatey not found" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ Chocolatey installation failed" -ForegroundColor Red
}

# Method 3: Download and install manually
Write-Host ""
Write-Host "Method 3: Manual download and installation..." -ForegroundColor Yellow
Write-Host ""
Write-Host "📥 Downloading Git for Windows..." -ForegroundColor Cyan

$gitUrl = "https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe"
$downloadPath = "$env:TEMP\Git-installer.exe"

try {
    # Download Git installer
    Invoke-WebRequest -Uri $gitUrl -OutFile $downloadPath -UseBasicParsing
    Write-Host "✅ Download completed!" -ForegroundColor Green
    
    # Run installer
    Write-Host "🚀 Running Git installer..." -ForegroundColor Cyan
    Write-Host "Please follow the installation wizard (use default settings)" -ForegroundColor Yellow
    
    Start-Process -FilePath $downloadPath -Wait
    
    # Clean up
    Remove-Item $downloadPath -Force -ErrorAction SilentlyContinue
    
    Write-Host ""
    Write-Host "✅ Git installation completed!" -ForegroundColor Green
    Write-Host "🔄 Please restart your PowerShell/Command Prompt" -ForegroundColor Yellow
    Write-Host "Then test with: git --version" -ForegroundColor Cyan
    
} catch {
    Write-Host "❌ Manual installation failed: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    Write-Host "🌐 Please manually download Git from:" -ForegroundColor Yellow
    Write-Host "https://git-scm.com/download/win" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "📋 After Git is installed, you can:" -ForegroundColor Green
Write-Host "1. Initialize repository: git init" -ForegroundColor White
Write-Host "2. Add files: git add ." -ForegroundColor White
Write-Host "3. Commit: git commit -m 'Initial commit'" -ForegroundColor White
Write-Host "4. Deploy to GitHub, Vercel, and Netlify" -ForegroundColor White

Read-Host "Press Enter to exit"