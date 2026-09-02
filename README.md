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
├── .github/workflows/ci.yml # Lint, typecheck, test, build on push/PR
├── src/
│   ├── app/
│   │   ├── api/projects/route.ts # GitHub sync API route
│   │   ├── layout.tsx        # Root layout with theme provider
│   │   ├── page.tsx          # Main home page
│   │   └── globals.css       # Global styles and Tailwind imports
│   ├── components/
│   │   ├── Navbar.tsx            # Sidebar navigation with mobile menu
│   │   ├── ThemeProvider.tsx     # next-themes provider wrapper
│   │   ├── ThemeSlider.tsx       # Custom light/dark intensity control
│   │   ├── SectionWrapper.tsx    # Reusable section container
│   │   ├── IntroScreen.tsx       # Name intro animation on first load
│   │   ├── HeroSection.tsx       # Landing/hero section
│   │   ├── AboutSection.tsx      # About me section
│   │   ├── ProjectCard.tsx / ProjectModal.tsx / ProjectsSection.tsx
│   │   ├── ResearchSection.tsx / ResearchAreaCard.tsx / WorkModal.tsx
│   │   ├── ExperienceSection.tsx / ExperienceCard.tsx
│   │   ├── ResumeSection.tsx / EducationCard.tsx / SkillBadge.tsx
│   │   ├── ContactSection.tsx / ContactMethod.tsx
│   │   └── Footer.tsx            # Footer component
│   ├── data/
│   │   ├── featuredRepos.ts     # GitHub allowlist and overrides
│   │   ├── research.ts          # Research area content
│   │   └── resume.ts            # Skills and education data
│   ├── lib/
│   │   ├── github.ts            # Server-side GitHub API helper
│   │   └── github.test.ts       # Unit tests for the helper
│   └── types/
│       └── github.ts            # GitHub response/project types
├── package.json
├── tsconfig.json
├── vitest.config.ts
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
- `npm run typecheck` - Run the TypeScript compiler in check-only mode
- `npm test` - Run the Vitest test suite once
- `npm run test:watch` - Run tests in watch mode

## Testing & CI

- Unit tests live alongside the code they cover (`*.test.ts` / `*.test.tsx`) and use [Vitest](https://vitest.dev/) with [Testing Library](https://testing-library.com/) for component tests.
- A GitHub Actions workflow (`.github/workflows/ci.yml`) runs lint, type checking, tests, and a production build on every push and pull request to `main`.

## SEO

- Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to your deployed domain so OpenGraph/Twitter card metadata, `sitemap.xml`, and `robots.txt` resolve to real absolute URLs instead of `http://localhost:3000`.
- `src/app/sitemap.ts` and `src/app/robots.ts` are generated automatically by Next.js from that URL — no manual XML/txt files to maintain.

## Security Notes

- `.env.local` is git-ignored and must never be committed. Copy `.env.example` to `.env.local` and fill in your own values.
- If a GitHub token is ever exposed (committed, pasted into a chat, shared in a screenshot, etc.), revoke/rotate it immediately from your [GitHub tokens page](https://github.com/settings/tokens) — treat any token that left your local machine as compromised.
- The GitHub sync API route only reads public repository metadata; it never accepts user input, so there is no injection surface there.

## Notes

- Project cards are synced live from the GitHub repositories listed in `src/data/featuredRepos.ts`.
- The resume download link points to `/Vishesh_Raju_Resume.pdf` in the `public/` folder — replace that file with your own resume, or update the `href` in `DownloadButton.tsx`.
- GitHub and external links are generated from GitHub data or your manual overrides.

## License

This project is open source and available under the MIT License.
