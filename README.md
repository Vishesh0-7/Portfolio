# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean, minimal, and professional design
- 🌓 Light/Dark mode toggle
- 📱 Fully responsive (mobile + desktop)
- ⚡ Built with Next.js 14 App Router
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 🎭 Smooth animations and transitions

## Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with theme provider
│   │   ├── page.tsx         # Main home page
│   │   └── globals.css      # Global styles and Tailwind imports
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation bar with mobile menu
│   │   ├── ThemeToggle.tsx      # Dark mode toggle button
│   │   ├── ThemeProvider.tsx    # Theme provider wrapper
│   │   ├── SectionWrapper.tsx   # Reusable section container
│   │   ├── HeroSection.tsx      # Landing/hero section
│   │   ├── AboutSection.tsx     # About me section
│   │   ├── ProjectCard.tsx      # Project card component
│   │   ├── ProjectsSection.tsx  # Projects grid section
│   │   ├── ExperienceSection.tsx # Work experience timeline
│   │   ├── ResumeSection.tsx    # Resume download section
│   │   ├── ContactSection.tsx   # Contact information
│   │   └── Footer.tsx           # Footer component
│   └── data/
│       └── projects.ts          # Project data array
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
└── .gitignore
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Update Content

1. **Personal Information:**
   - Edit name and tagline in `src/components/HeroSection.tsx`
   - Update navbar logo in `src/components/Navbar.tsx`
   - Modify footer in `src/components/Footer.tsx`

2. **About Section:**
   - Edit bio text in `src/components/AboutSection.tsx`
   - Update interests/skills icons and labels

3. **Projects:**
   - Modify project data in `src/data/projects.ts`
   - Add or remove projects from the array
   - Update technologies, links, and descriptions

4. **Experience:**
   - Edit experience data in `src/components/ExperienceSection.tsx`
   - Update roles, organizations, and accomplishments

5. **Contact:**
   - Update email and social links in `src/components/ContactSection.tsx`

### Styling

- All components use Tailwind CSS utility classes
- Colors can be customized in `tailwind.config.ts`
- Dark mode colors are defined in `src/app/globals.css`

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Theme:** next-themes
- **Font:** Inter (Google Fonts)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Notes

- All content is placeholder data - replace with your own information
- Resume download link points to `/resume.pdf` - add your resume to the public folder
- Project thumbnails are gray placeholders - replace with actual images/videos
- GitHub and external links are dummy URLs - update with real links

## License

This project is open source and available under the MIT License.
