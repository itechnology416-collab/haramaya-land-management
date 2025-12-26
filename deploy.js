#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting deployment to Vercel and Netlify...\n');

// Check if required files exist
const requiredFiles = ['vercel.json', 'netlify.toml', 'package.json'];
for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
        console.error(`❌ Required file ${file} not found!`);
        process.exit(1);
    }
}

try {
    // Build the project
    console.log('📦 Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully!\n');

    // Check if dist directory exists
    if (!fs.existsSync('dist')) {
        console.error('❌ Build directory "dist" not found!');
        process.exit(1);
    }

    // Deploy to Vercel
    console.log('🔵 Deploying to Vercel...');
    try {
        execSync('vercel --prod', { stdio: 'inherit' });
        console.log('✅ Vercel deployment completed!\n');
    } catch (error) {
        console.error('❌ Vercel deployment failed:', error.message);
        console.log('💡 Make sure you have Vercel CLI installed and are logged in');
        console.log('   npm install -g vercel && vercel login\n');
    }

    // Deploy to Netlify
    console.log('🟠 Deploying to Netlify...');
    try {
        execSync('netlify deploy --prod --dir=dist', { stdio: 'inherit' });
        console.log('✅ Netlify deployment completed!\n');
    } catch (error) {
        console.error('❌ Netlify deployment failed:', error.message);
        console.log('💡 Make sure you have Netlify CLI installed and are logged in');
        console.log('   npm install -g netlify-cli && netlify login\n');
    }

    console.log('🎉 Deployment process completed!');
    console.log('📊 Check your platform dashboards for deployment status');

} catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
}