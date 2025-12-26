# Deployment Guide

This project is configured to deploy to both **Vercel** and **Netlify** simultaneously.

## 🚀 Quick Deploy

### Option 1: One-Click Deploy

**Vercel:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/haramaya-land-management)

**Netlify:**
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/haramaya-land-management)

### Option 2: Manual Deploy

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to both platforms:**
   ```bash
   npm run deploy:both
   ```

## 🔧 Platform Setup

### Vercel Setup

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   npm run deploy:vercel
   ```

4. **Environment Variables:**
   Add these in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

### Netlify Setup

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   npm run deploy:netlify
   ```

4. **Environment Variables:**
   Already configured in `netlify.toml` or add in Netlify dashboard

## 🤖 Automated Deployment (GitHub Actions)

### Setup GitHub Secrets

Add these secrets in your GitHub repository settings:

**For Vercel:**
- `VERCEL_TOKEN` - Get from Vercel dashboard
- `VERCEL_ORG_ID` - Found in Vercel project settings
- `VERCEL_PROJECT_ID` - Found in Vercel project settings

**For Netlify:**
- `NETLIFY_AUTH_TOKEN` - Get from Netlify dashboard
- `NETLIFY_SITE_ID` - Found in Netlify site settings

**For Supabase:**
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### Automatic Deployment

Once configured, every push to `main` branch will automatically:
1. Build the project
2. Deploy to Vercel
3. Deploy to Netlify

## 📁 Build Configuration

### Vercel (`vercel.json`)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node Version:** 18.x
- **SPA Routing:** Configured

### Netlify (`netlify.toml`)
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Node Version:** 18
- **Redirects:** SPA routing configured
- **Headers:** Security headers included

## 🌍 Environment Variables

### Production URLs
- **Vercel:** `https://your-project.vercel.app`
- **Netlify:** `https://your-project.netlify.app`

### Required Environment Variables
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## 🔍 Monitoring

### Vercel
- Analytics available in dashboard
- Function logs and performance metrics
- Real-time deployment status

### Netlify
- Build logs and deploy previews
- Form handling and analytics
- Branch deploys for testing

## 🛠 Troubleshooting

### Common Issues

1. **Build Fails:**
   - Check environment variables
   - Verify Node.js version (18+)
   - Run `npm ci` to clean install

2. **Routing Issues:**
   - Ensure SPA redirects are configured
   - Check `vercel.json` and `netlify.toml`

3. **Environment Variables:**
   - Prefix with `VITE_` for client-side access
   - Set in both platform dashboards

### Build Commands

```bash
# Local development
npm run dev

# Production build
npm run build

# Preview build
npm run preview

# Deploy to Vercel only
npm run deploy:vercel

# Deploy to Netlify only
npm run deploy:netlify

# Deploy to both platforms
npm run deploy:both
```

## 📊 Performance

Both platforms provide:
- **CDN:** Global content delivery
- **SSL:** Automatic HTTPS certificates
- **Compression:** Gzip/Brotli compression
- **Caching:** Optimized asset caching

## 🔐 Security

Security headers configured in `netlify.toml`:
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## 📈 Analytics

Enable analytics in platform dashboards:
- **Vercel Analytics:** Real-time visitor data
- **Netlify Analytics:** Server-side analytics

---

**Need help?** Check the platform documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)