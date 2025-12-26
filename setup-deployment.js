#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('🚀 Haramaya Land Management - Deployment Setup\n');

async function question(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

function checkCommand(command) {
    try {
        execSync(`${command} --version`, { stdio: 'ignore' });
        return true;
    } catch {
        return false;
    }
}

async function setupDeployment() {
    try {
        console.log('🔍 Checking system requirements...\n');
        
        // Check Node.js
        if (!checkCommand('node')) {
            console.log('❌ Node.js not found! Please install from https://nodejs.org/');
            rl.close();
            return;
        }
        console.log('✅ Node.js found');

        // Check Git
        const hasGit = checkCommand('git');
        if (!hasGit) {
            console.log('⚠️  Git not found');
            console.log('📋 You can still deploy manually without Git');
            console.log('💡 To install Git: https://git-scm.com/download/win\n');
            
            const continueWithoutGit = await question('Continue without Git? (y/n): ');
            if (continueWithoutGit.toLowerCase() !== 'y') {
                console.log('Please install Git and run this script again.');
                rl.close();
                return;
            }
        } else {
            console.log('✅ Git found');
        }

        console.log('\n📦 Installing deployment dependencies...\n');
        
        // Check if CLIs are installed
        const installVercel = await question('Install Vercel CLI? (y/n): ');
        if (installVercel.toLowerCase() === 'y') {
            console.log('Installing Vercel CLI...');
            try {
                execSync('npm install -g vercel', { stdio: 'inherit' });
                console.log('✅ Vercel CLI installed');
            } catch {
                console.log('❌ Failed to install Vercel CLI');
            }
        }

        const installNetlify = await question('Install Netlify CLI? (y/n): ');
        if (installNetlify.toLowerCase() === 'y') {
            console.log('Installing Netlify CLI...');
            try {
                execSync('npm install -g netlify-cli', { stdio: 'inherit' });
                console.log('✅ Netlify CLI installed');
            } catch {
                console.log('❌ Failed to install Netlify CLI');
            }
        }

        // Build the project
        console.log('\n🔨 Building the project...');
        try {
            execSync('npm run build', { stdio: 'inherit' });
            console.log('✅ Build completed successfully!');
        } catch {
            console.log('❌ Build failed. Please check for errors.');
            rl.close();
            return;
        }

        console.log('\n🎉 Setup completed!');
        console.log('\n📋 Deployment options:');
        
        if (hasGit) {
            console.log('🔄 Automated (with Git):');
            console.log('  - Push to GitHub and connect to Vercel/Netlify');
            console.log('  - Use GitHub Actions for CI/CD');
        }
        
        console.log('🖱️  Manual (drag & drop):');
        console.log('  - Open deployment-guide.html for step-by-step instructions');
        console.log('  - Drag the "dist" folder to Vercel or Netlify');
        
        console.log('💻 CLI (if installed):');
        console.log('  - Run: vercel --prod');
        console.log('  - Run: netlify deploy --prod --dir=dist');
        
        console.log('🚀 Quick deploy scripts:');
        console.log('  - Windows: deploy-direct.bat');
        console.log('  - PowerShell: deploy-direct.ps1');

        // Open deployment guide
        const openGuide = await question('\nOpen deployment guide in browser? (y/n): ');
        if (openGuide.toLowerCase() === 'y') {
            const guidePath = require('path').resolve('deployment-guide.html');
            console.log(`Opening: ${guidePath}`);
            try {
                execSync(`start ${guidePath}`, { stdio: 'ignore' });
            } catch {
                console.log('Please manually open deployment-guide.html in your browser');
            }
        }

    } catch (error) {
        console.error('❌ Setup failed:', error.message);
    } finally {
        rl.close();
    }
}

setupDeployment();