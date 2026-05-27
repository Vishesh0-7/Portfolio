# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean, minimal, and professional design
- 🌓 Light/Dark mode toggle
- 📱 Fully responsive (mobile + desktop)
- ⚡ Built with Next.js 14 App Router
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 🎭 Framer Motion-powered transitions
- 🔗 GitHub-synced featured projects

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
│   ├── data/
│   │   ├── featuredRepos.ts     # GitHub allowlist and overrides
│   │   ├── projects.ts          # Legacy project data/model
│   │   └── resume.ts            # Skills and education data
│   ├── lib/
│   │   └── github.ts            # Server-side GitHub API helper
│   └── types/
│       └── github.ts            # GitHub response/project types
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
   - Edit the allowlist in `src/data/featuredRepos.ts`
   - Add or remove repository names from `featuredRepos`
   - Use `featuredRepoOverrides` to set custom titles, categories, pinned state, or demo links
   - Set `GITHUB_USERNAME` and optional `GITHUB_TOKEN` in `.env.local`

4. **Experience:**
   - Edit experience data in `src/components/ExperienceSection.tsx`
   - Update roles, organizations, and accomplishments

5. **Contact:**
   - Update email and social links in `src/components/ContactSection.tsx`

### Styling

- All components use Tailwind CSS utility classes
- Colors can be customized in `tailwind.config.ts`
- Dark mode colors are defined in `src/app/globals.css`

### GitHub Projects Sync

The Projects section now fetches selected repositories from GitHub.

1. Create a `.env.local` file in the project root.
2. Add the following values:

```env
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=your-github-personal-access-token
```

3. Edit `src/data/featuredRepos.ts` and list only the repositories you want to show.
4. Optionally configure `featuredRepoOverrides` in the same file for:
   - `displayName`
   - `demoUrl`
   - `pinned`
   - `category`
5. Restart the dev server after changing env vars.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Theme:** next-themes
- **Motion:** Framer Motion
- **Font:** Inter (Google Fonts)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Required Packages

Install the motion library used by the updated UI:

```bash
npm install framer-motion
```

## Notes

- Project cards are now synced from the selected GitHub repositories
- Resume download link points to `/resume.pdf` - add your resume to the public folder
- GitHub and external links are generated from GitHub data or your manual overrides

## License

This project is open source and available under the MIT License.
