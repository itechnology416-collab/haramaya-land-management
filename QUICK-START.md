# 🚀 Quick Start Guide - No Git Required

Since Git is not installed, here are your **immediate deployment options**:

## 🎯 Option 1: Manual Deployment (Easiest)

### Step 1: Build Your Project
```cmd
cd "C:\Users\Administrator\Pictures\haramaya land managemnt website\haramaya land managemnt website"
npm run build
```

### Step 2: Deploy via Drag & Drop

**Vercel (Recommended):**
1. Go to https://vercel.com
2. Sign up with email or GitHub
3. Click "New Project" 
4. Drag your `dist` folder to upload
5. Add environment variables:
   - `VITE_SUPABASE_URL` = `https://qsrbmlhbskxjemlpggjf.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcmJtbGhic2t4amVtbHBnZ2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1Mzk4MTEsImV4cCI6MjA4MjExNTgxMX0.Do9FtBOJix5Oqh9xh0ko1JKaRi6q8S0R2F-rXeQxkTU`
6. Deploy!

**Netlify:**
1. Go to https://netlify.com
2. Sign up with email or GitHub
3. Drag your `dist` folder to the deploy area
4. Add same environment variables in Site Settings
5. Deploy!

## 🔧 Option 2: Install Git First

### Manual Git Installation:
1. **Download:** https://git-scm.com/download/win
2. **Run installer** with default settings
3. **Restart** your command prompt
4. **Test:** `git --version`

### Or try Windows Package Manager:
```cmd
winget install --id Git.Git -e --source winget
```

## 🚀 Option 3: CLI Deployment

### Install CLI tools:
```cmd
npm install -g vercel netlify-cli
```

### Deploy to Vercel:
```cmd
vercel login
vercel --prod
```

### Deploy to Netlify:
```cmd
netlify login
netlify deploy --prod --dir=dist
```

## 📱 Your Live URLs Will Be:
- **Vercel:** `https://your-project-name.vercel.app`
- **Netlify:** `https://your-project-name.netlify.app`

## 🎉 Recommended Quick Path:

1. **Build:** `npm run build`
2. **Go to:** https://vercel.com
3. **Drag:** your `dist` folder
4. **Add:** environment variables
5. **Done!** Your site is live in 2 minutes

---

**Need help?** Open `deployment-guide.html` in your browser for visual instructions!