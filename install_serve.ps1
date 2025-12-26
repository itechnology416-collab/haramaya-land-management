# PowerShell script to set execution policy and install serve for Railway deployment
# Run this script from the project root.

# 1. Allow script execution for the current user (only needed once)
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force

# 2. Install the static server as a dev dependency
npm install -D serve

# 3. Verify installation
npm list serve

Write-Host "✅ serve installed. You can now update package.json scripts and redeploy."
