# Haramaya Land Management System

A modern, bilingual (English/Afaan Oromoo) web application for land administration and management in Haramaya Woreda, Ethiopia.

## 🚀 Features

- **Bilingual Support**: Full English and Afaan Oromoo translations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Smooth animations with Framer Motion
- **Database Integration**: Supabase backend for data management
- **Service Management**: Land registration, tax calculation, permits
- **News & Gallery**: Community updates and photo gallery
- **Contact System**: Feedback forms and contact information

## 🛠 Tech Stack

- **Frontend**: React 18.3.1 + Vite 6.0.5
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 12.23.26
- **Icons**: Lucide React 0.468.0
- **Routing**: React Router DOM 6.20.0
- **Backend**: Supabase 2.89.0
- **Deployment**: Railway (configured)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd haramaya-land-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🏗 Build & Deploy

### Local Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploy to Both Platforms
```bash
# Deploy to both Vercel and Netlify
npm run deploy:both

# Or deploy individually
npm run deploy:vercel
npm run deploy:netlify
```

### One-Click Deploy

**Vercel:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/haramaya-land-management)

**Netlify:**
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/haramaya-land-management)

### Automated Deployment
- **GitHub Actions** configured for automatic deployment
- Deploys to both platforms on every push to `main` branch
- See `DEPLOYMENT.md` for detailed setup instructions

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   └── SectionHeader.jsx
│   ├── Layout.jsx       # Main layout wrapper
│   ├── Navbar.jsx       # Navigation with language toggle
│   └── Footer.jsx       # Footer component
├── pages/               # Page components
│   ├── Home.jsx         # Landing page
│   ├── About.jsx        # Mission & Vision
│   ├── Services.jsx     # Service offerings
│   ├── News.jsx         # News & Gallery
│   ├── History.jsx      # History & Leadership
│   ├── Contact.jsx      # Contact form
│   ├── ContactInfo.jsx  # Contact information
│   └── Feedback.jsx     # Feedback form
├── lib/
│   └── utils.js         # Utility functions
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 🌐 Pages Overview

1. **Home** - Hero section, quick services, latest news
2. **About** - Mission, vision, and organizational structure
3. **Services** - Land registration, tax, permits, surveying
4. **News** - Latest updates and photo gallery
5. **History** - Timeline and key personnel
6. **Contact** - Contact form and information
7. **Feedback** - Community feedback system

## 🎨 Design System

### Colors
- **Brand Green**: `#1b5e20` - Primary government color
- **Brand Gold**: `#d4af37` - Accent color
- **Brand Light**: `#f0fdf4` - Background tint

### Typography
- **Primary**: Inter (sans-serif)
- **Accent**: Playfair Display (serif)

## 🔧 Configuration

### Tailwind Config
Custom brand colors and utilities are defined in `tailwind.config.js`

### Vite Config
React plugin and build optimizations in `vite.config.js`

### Railway Deployment
Configured in `railway.toml` for automatic deployment

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌍 Internationalization

The app supports two languages:
- **English (en)**: Default language
- **Afaan Oromoo (or)**: Local language

Language switching is available in the navbar and persists across pages.

## 🗄 Database Schema

### Required Supabase Tables

1. **news**
   - id, title, content, type, date, created_at

2. **contact_submissions**
   - id, full_name, email, subject, message, created_at

3. **feedback**
   - id, name, email, message, created_at

## 🚀 Performance

- Lazy loading for images
- Code splitting with React Router
- Optimized animations with Framer Motion
- Efficient Tailwind CSS purging

## 🔒 Security

- Environment variables for sensitive data
- Input validation on forms
- Supabase RLS (Row Level Security) recommended

## 📄 License

This project is developed for Haramaya Woreda Land Administration Office.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support or questions:
- Email: haramayaifo@gmail.com
- Phone: 0900 201 691 / 0915 707 761