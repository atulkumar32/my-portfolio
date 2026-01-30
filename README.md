# Atul Maurya - Full Stack Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, and a fully dynamic project showcase.

## 🚀 Features

### Core Features
- **Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Dark/Light Mode Toggle** - Theme preference saved in localStorage
- **Smooth Animations** - Powered by Framer Motion
- **SEO Optimized** - Meta tags, structured data, and performance optimized
- **Fast Loading** - Optimized images and code splitting

### Pages
1. **Home** - Hero section, stats, featured projects, testimonials
2. **About** - Detailed about section, education, timeline, work process
3. **Projects** - Dynamic project grid with filtering and search
4. **Skills** - Technical skills with progress bars and services
5. **Contact** - Contact form with validation and contact information

### Interactive Elements
- **Sticky Navigation** with active page indicators
- **Mobile Hamburger Menu** with smooth animations
- **Project Modal** with detailed project information
- **Testimonials Slider** with auto-rotation
- **Stats Counter** with animated numbers
- **Back to Top Button** with smooth scroll
- **Contact Form** with validation and success states

### Technical Features
- **Component-based Architecture** - Reusable and maintainable code
- **JSON-based Data Management** - Easy to update content
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first styling with custom components
- **Intersection Observer** - Scroll-triggered animations
- **Performance Optimized** - Image optimization and lazy loading

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd atul-kumar-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update your personal details in `data/portfolio.json`:
- Name, title, and contact information
- Social media links
- Skills and experience levels
- Stats and achievements

### Projects
Add or modify projects in `data/projects.json`:
- Project details and descriptions
- Technologies used
- Live demo and GitHub links
- Project images and categories

### Styling
- **Colors:** Modify the color palette in `tailwind.config.js`
- **Fonts:** Update font families in `app/layout.tsx`
- **Components:** Customize component styles in `app/globals.css`

### Content
- **Resume:** Replace the resume file and update the link in portfolio.json
- **Images:** Add project images to the public folder or use external URLs
- **Testimonials:** Update client testimonials in portfolio.json

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── about/            # About page components
│   ├── contact/          # Contact page components
│   ├── home/             # Home page components
│   ├── projects/         # Projects page components
│   ├── skills/           # Skills page components
│   ├── BackToTop.tsx     # Back to top button
│   ├── Footer.tsx        # Footer component
│   ├── Navbar.tsx        # Navigation component
│   ├── StatsCounter.tsx  # Animated stats
│   ├── TechStack.tsx     # Technology badges
│   └── ThemeProvider.tsx # Theme context
├── data/                 # JSON data files
│   ├── portfolio.json    # Personal information
│   └── projects.json     # Projects data
├── public/               # Static assets
└── README.md            # This file
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds on push

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- **Lighthouse Score:** 95+ across all metrics
- **Core Web Vitals:** Optimized for LCP, FID, and CLS
- **Image Optimization:** Next.js automatic image optimization
- **Code Splitting:** Automatic route-based code splitting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Contact

**Atul Maurya**
- Email: atul.maurya.dev@example.com
- LinkedIn: [linkedin.com/in/atul-maurya-b49968338](https://www.linkedin.com/in/atul-maurya-b49968338/)
- GitHub: [github.com/atulmaurya](https://github.com/atulmaurya)

---

Built with ❤️ using Next.js and Tailwind CSS