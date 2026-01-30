# Deployment Guide - Atul Maurya Portfolio

This guide will help you deploy your portfolio to Netlify and other platforms.

## 🚀 Netlify Deployment (Recommended)

### Method 1: Git Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Atul Maurya Portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/atul-maurya-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Build settings will be auto-detected from `netlify.toml`:
     - **Build command:** `npm run build`
     - **Publish directory:** `out`
   - Click "Deploy site"

3. **Custom Domain (Optional):**
   - Go to Site settings > Domain management
   - Add your custom domain
   - Configure DNS settings as instructed

### Method 2: Manual Deploy

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder to Netlify
   - Your site will be live instantly

## 🌐 Other Deployment Options

### Vercel (Alternative)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts and your site will be live**

### GitHub Pages

1. **Update next.config.js for GitHub Pages:**
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/your-repo-name',
     assetPrefix: '/your-repo-name/',
     // ... rest of config
   }
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   git add out/ -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix out origin gh-pages
   ```

## 🔧 Pre-Deployment Checklist

### ✅ Content Updates
- [ ] Update personal information in `data/portfolio.json`
- [ ] Add your actual projects to `data/projects.json`
- [ ] Replace demo images with your project screenshots
- [ ] Update contact information (email, phone, social links)
- [ ] Add your resume file to `public/` folder
- [ ] Update meta descriptions and SEO tags

### ✅ Technical Checks
- [ ] Test all pages locally (`npm run dev`)
- [ ] Check responsive design on mobile/tablet
- [ ] Test dark/light mode toggle
- [ ] Verify all links work correctly
- [ ] Test contact form functionality
- [ ] Check project filtering and search
- [ ] Test scheduling modal

### ✅ Performance Optimization
- [ ] Optimize images (use WebP format when possible)
- [ ] Check Lighthouse scores
- [ ] Minimize bundle size
- [ ] Enable compression

## 📱 Post-Deployment

### Domain Setup
1. **Custom Domain:** Configure your domain in Netlify settings
2. **SSL Certificate:** Automatically provided by Netlify
3. **DNS Configuration:** Update your domain's DNS settings

### Analytics Setup
1. **Google Analytics:** Add tracking code to `app/layout.tsx`
2. **Netlify Analytics:** Enable in site settings
3. **Search Console:** Submit sitemap for SEO

### Monitoring
1. **Uptime Monitoring:** Set up monitoring alerts
2. **Performance:** Regular Lighthouse audits
3. **Error Tracking:** Consider adding error tracking service

## 🔄 Continuous Deployment

With Git integration, your site will automatically redeploy when you:
- Push changes to your main branch
- Update content in JSON files
- Add new projects or modify existing ones

## 🛠️ Troubleshooting

### Common Issues:

1. **Build Fails:**
   - Check Node.js version (use Node 18+)
   - Clear cache: `rm -rf .next node_modules && npm install`
   - Check for TypeScript errors: `npm run lint`

2. **Images Not Loading:**
   - Ensure images are in `public/` folder
   - Check image paths in JSON files
   - Verify remote image URLs are accessible

3. **Routing Issues:**
   - Ensure `netlify.toml` is configured correctly
   - Check for trailing slashes in URLs

4. **Performance Issues:**
   - Optimize images and reduce file sizes
   - Enable compression in Netlify settings
   - Use CDN for static assets

## 📞 Support

If you encounter any issues during deployment:
- Check the [Netlify documentation](https://docs.netlify.com/)
- Review build logs in Netlify dashboard
- Test locally first with `npm run build`

---

**Your portfolio is now ready for production! 🎉**

Live URL will be: `https://your-site-name.netlify.app`