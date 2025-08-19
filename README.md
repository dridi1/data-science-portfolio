# Data Science Portfolio

A modern, responsive data science portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features multilingual support, dark/light mode, interactive data visualizations, and a complete showcase of data science projects and skills.

## 🚀 Features

### Modern Tech Stack
- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** for responsive, utility-first styling
- **Framer Motion** for smooth animations and transitions

### User Experience
- 🌍 **Multilingual Support** - English and French with next-intl
- 🌙 **Dark/Light Mode** - Theme switching with persistent preferences
- 📱 **Responsive Design** - Mobile-first approach that works on all devices
- ⚡ **Fast Loading** - Optimized for performance and SEO

### Interactive Components
- 📊 **Data Visualizations** - Interactive charts using Recharts
- 🎨 **Animated UI** - Smooth scroll animations and hover effects
- 📝 **Contact Form** - Form validation with react-hook-form
- 🧭 **Smooth Navigation** - Seamless scrolling between sections

### Professional Sections
- **Hero Section** - Introduction with call-to-action
- **About Section** - Professional background and statistics
- **Skills Section** - Technical competencies with progress bars
- **Experience Section** - Work history timeline
- **Data Visualization** - Interactive charts and KPIs
- **Projects Section** - Showcase of data science projects
- **Contact Section** - Professional contact form

## 🛠️ Technologies Used

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts

### Internationalization
- next-intl
- English/French translations

### Form Handling
- react-hook-form
- Client-side validation

### Icons & UI
- Lucide React (icons)
- Custom animations
- Responsive grid layouts

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dridi1/data-science-portfolio.git
cd data-science-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── layout.tsx      # Root layout with metadata
│   │   └── page.tsx        # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/             # Layout components
│   │   ├── header.tsx      # Navigation header
│   │   ├── footer.tsx      # Footer component
│   │   └── language-switcher.tsx
│   ├── providers/          # Context providers
│   │   └── theme-provider.tsx
│   ├── sections/           # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   ├── data-visualization.tsx
│   │   ├── projects.tsx
│   │   └── contact.tsx
│   └── ui/                 # Reusable UI components
│       └── chart.tsx
├── messages/               # Translation files
│   ├── en.json
│   └── fr.json
├── lib/                    # Utilities
├── i18n.ts                 # Internationalization config
└── middleware.ts           # Next.js middleware
```

## 🌍 Internationalization

The website supports English and French languages:

- **English**: `/en` or `/` (default)
- **French**: `/fr`

Language switching is available in the navigation header. All content is translated including:
- Navigation menu
- Section headings and content
- Form labels and messages
- Button text and CTAs

## 🎨 Customization

### Colors
The design uses a modern color palette defined in `tailwind.config.ts`:
- **Primary**: Blue gradient (#3b82f6 to #1d4ed8)
- **Accent**: Purple gradient (#a855f7 to #7c3aed)
- **Dark mode**: Automatic system preference detection

### Content
Update the content in:
- `src/messages/en.json` and `src/messages/fr.json` for text
- Component files for structure and data
- `src/components/sections/` for individual sections

### Styling
- Tailwind CSS utilities for responsive design
- Custom components in `src/app/globals.css`
- Dark mode support with CSS variables

## 📊 Data Visualizations

Interactive charts showcase:
- Technical skills proficiency (bar chart)
- Project success rates (pie chart)
- Key performance indicators
- Data science methodology workflow

Charts are built with Recharts and are fully responsive.

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### SEO
Metadata is configured in `src/app/[locale]/layout.tsx` with:
- Open Graph tags
- Twitter Card metadata
- Structured data
- Multi-language support

## 📱 Responsive Design

The portfolio is designed mobile-first with breakpoints:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large: 1280px+

## ⚡ Performance

Optimizations include:
- Static generation for fast loading
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Minimal JavaScript bundle size

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub repository
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform supporting Node.js:
- Netlify
- Railway
- DigitalOcean App Platform

Build command: `npm run build`
Start command: `npm run start`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or collaborations:
- Email: contact@datascience-portfolio.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS