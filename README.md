# ConTrac Website

Beautiful, modern website for the ConTrac (Contracts Tracker) app, designed with Liquid Glass aesthetics.

## 🚀 Quick Start

This website is ready to deploy to GitHub Pages, Cloudflare Pages, Netlify, or any static hosting service.

## 📁 Structure

```
contra-website/
├── contra/
│   ├── index.html      # Main ConTrac page
│   ├── contra.css      # Stylesheet
│   └── contra.js       # JavaScript
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## 🌐 Deployment

### ⚠️ Important: Zoho Sites Limitation

**Zoho Sites does NOT support direct uploading of static HTML/CSS/JS files.** It's a page builder platform, not a traditional web host.

### ✅ Recommended: GitHub Pages + Custom Domain

**Best solution:** Use GitHub Pages and point your custom domain to it.

1. **Enable GitHub Pages:**
   - Push this repository to GitHub
   - Go to Settings → Pages
   - Select branch: `main` and folder: `/ (root)` or `/contra`

2. **Configure Custom Domain:**
   - See `GITHUB_PAGES_DOMAIN_SETUP.md` for complete guide
   - Add custom domain in GitHub Pages settings
   - Configure DNS at your domain registrar
   - Your site will be live at: `https://contra.puneethjoseph.in/` (or your chosen domain)

3. **Advantages:**
   - ✅ Free hosting
   - ✅ Supports static files directly
   - ✅ Automatic HTTPS
   - ✅ Easy updates (just `git push`)
   - ✅ No limitations

### Alternative Hosting Options

If not using GitHub Pages, consider:
- **Cloudflare Pages** - Free, fast CDN
- **Netlify** - Free, great for static sites
- **Vercel** - Free, excellent performance
- **Traditional web hosting** - cPanel, FTP access

See `GIT_BASED_DEPLOYMENT.md` for details on all options.

## 📝 Features

- **Liquid Glass Design**: Modern glassmorphism effects
- **Responsive**: Works on all devices
- **No Build Required**: Pure HTML/CSS/JS
- **Fast Loading**: Optimized for performance
- **SEO Ready**: Meta tags and semantic HTML

## 🔧 Customization

- Update colors in `contra/contra.css` (CSS variables)
- Update content in `contra/index.html`
- Add App Store links when app is published

## 📚 Documentation

For detailed deployment instructions, see:
- `GIT_BASED_DEPLOYMENT.md` - Git-based deployment guide
- `DEPLOYMENT_STEPS.md` - General deployment steps

## 📄 License

All rights reserved. Built for ConTrac - Contracts Tracker.

