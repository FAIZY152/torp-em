# 🚀 Codex Prompt — Premium Developer Portfolio

---

## CONTEXT & GOAL

I have uploaded:
1. **Reference portfolio screenshots** — analyze the layout, section structure, UI/UX patterns, card designs, typography hierarchy, spacing, and interaction patterns from every image.
2. **My resume (PDF)** — extract ALL data: name, title, bio, skills, experience, education, projects, certifications, contact info, social links. Use this as the ONLY data source — do not invent anything.
3. **My profile image** — located at `/public/profile-img` (use the actual filename from the public folder). Display it in the hero section exactly how the reference portfolio presents the profile photo (circular crop, floating effect, or whatever style the reference uses).

Build me a **complete, production-ready personal portfolio website** that:
- **Mirrors the exact UI/UX structure and layout** of the reference portfolio images (same sections, same scroll flow, same component placement)
- Uses a **completely new color palette**: primary `#C9F31D` (electric lime-yellow) + `#1DB954` (vibrant green) as accents, on a deep dark background (`#0A0A0A` or `#0D0D0D`). NO blue, purple, or the original palette from the reference.
- Feels **premium, bold, and unforgettable** — not a generic template

---

## TECH STACK (REQUIRED)

```
Next.js 14 (App Router)
TypeScript
Tailwind CSS
shadcn/ui components where appropriate
Framer Motion — for scroll animations, page transitions, staggered reveals
GSAP + ScrollTrigger — for advanced scroll-driven effects, text reveals, parallax
Lucide React — icons
next/image — optimized images
```

---

## DESIGN SYSTEM

### Color Palette
```css
--bg-primary: #0A0A0A;
--bg-secondary: #111111;
--bg-card: #161616;
--accent-yellow: #C9F31D;
--accent-green: #1DB954;
--accent-glow: rgba(201, 243, 29, 0.15);
--text-primary: #F5F5F5;
--text-secondary: #A0A0A0;
--text-muted: #555555;
--border: rgba(255,255,255,0.06);
```

### Typography
- Display/Headings: `Syne` or `Cabinet Grotesk` (bold, geometric)
- Body: `DM Sans` or `Outfit`
- Mono/Code: `JetBrains Mono`
- Load via `next/font/google`

### Design Language
- Dark background with lime-yellow + green as the ONLY accent colors
- Glowing borders: `border: 1px solid rgba(201,243,29,0.2)` with `box-shadow: 0 0 20px rgba(201,243,29,0.08)`
- Cards: `background: #161616` with subtle gradient overlays and hover glow lift
- Noise texture overlay on hero background (CSS grain filter or SVG feTurbulence)
- Asymmetric section layouts — not everything centered
- Numbers and stats in large `#C9F31D` display text
- Skill tags with `bg: rgba(201,243,29,0.1)` + `border: 1px solid rgba(201,243,29,0.3)`

---

## FILE & COMPONENT STRUCTURE

```
/app
  layout.tsx          — fonts, metadata, global styles
  page.tsx            — imports all sections in order

/components
  /layout
    Navbar.tsx        — sticky nav with blur, active link highlight in accent color
    Footer.tsx        — links, copyright, social icons

  /sections
    Hero.tsx          — full-screen intro
    About.tsx         — bio + stats
    Skills.tsx        — skills grid with icons
    Experience.tsx    — timeline or card layout
    Projects.tsx      — project cards grid
    Education.tsx     — education cards
    Certifications.tsx — cert badges (if in resume)
    Contact.tsx       — contact form + social links

  /ui
    AnimatedText.tsx  — GSAP text reveal / split text
    FloatingBadge.tsx — skill icons floating around profile image
    SectionHeading.tsx — reusable styled heading
    SkillCard.tsx
    ExperienceCard.tsx
    ProjectCard.tsx
    StatCounter.tsx   — animated number counters

/public
  profile-img.*       — (already present)
```

---

## SECTION-BY-SECTION INSTRUCTIONS

### 1. NAVBAR
Analyze the reference navbar and replicate its structure. Use:
- Sticky with `backdrop-blur-md` + `bg-black/80`
- Logo/name on left, nav links on right
- Active state: underline or dot in `#C9F31D`
- Mobile: hamburger menu with slide-in drawer (Framer Motion `AnimatePresence`)
- Smooth scroll to sections on click

### 2. HERO SECTION
Replicate the reference hero layout exactly. Include:
- **Name** in large display font (animate in with GSAP `SplitText` or letter stagger)
- **Title/Role** with typewriter or highlight animation in `#C9F31D`
- **Short bio** line from resume
- **CTA buttons**: "Download CV" + "Contact Me" — styled with accent colors
- **Profile image** from `/public/profile-img.*`:
  - Place it exactly as the reference shows (side-by-side or centered with decorative ring)
  - Add a glowing border ring: `border: 2px solid #C9F31D` + `box-shadow: 0 0 40px rgba(201,243,29,0.25)`
  - **Floating skill icons** orbiting or positioned around the image: pull the TOP 6–8 skills from the resume and display their logos/icons as floating badges using Framer Motion `animate` with gentle y-axis float loop
- Background: dark with subtle animated gradient mesh or particle dots in `#C9F31D` at 5% opacity
- Scroll indicator arrow at the bottom

### 3. ABOUT SECTION
Replicate the reference about section layout. Include:
- Bio paragraph from resume
- **Stats row** (e.g., Years of Experience, Projects Completed, Technologies — pull real numbers from resume): each stat animates up with `CountUp` on scroll into view using Framer Motion `useInView`
- Any secondary image or decorative element from the reference

### 4. SKILLS SECTION
Replicate the reference skills grid. Include:
- Extract ALL skills from resume, grouped by category (e.g., Frontend, Backend, Tools, Design)
- Each skill card: icon + name + optional proficiency bar
- Cards have hover effect: lift + `#C9F31D` glow border
- Staggered entrance animation with Framer Motion `variants` + `staggerChildren`
- Section heading style must match the reference

### 5. EXPERIENCE SECTION
Replicate the reference experience layout (timeline or card). Include:
- All jobs/roles from resume: company, role, date range, bullet points
- Timeline line in `#1DB954` (green) with dot markers in `#C9F31D`
- GSAP ScrollTrigger: line draws down as user scrolls
- Each entry fades + slides in from the side

### 6. PROJECTS SECTION
Replicate the reference project cards. Include:
- All projects from resume: title, description, tech stack tags, links
- Card layout: dark card, image/mockup area (use placeholder if no image), tech stack badges, GitHub + Live links
- Hover: card lifts, image scales slightly, glow border appears
- Filter tabs by category if the reference shows them

### 7. EDUCATION SECTION
Replicate the reference education layout. Include:
- All education from resume: institution, degree, year
- Clean card or timeline style

### 8. CERTIFICATIONS (if present in resume)
- Badge-style cards with cert name, issuer, year
- `#C9F31D` accent border

### 9. CONTACT SECTION
Replicate the reference contact section. Include:
- Contact form: Name, Email, Message fields — styled dark inputs with `#C9F31D` focus border
- Social links (LinkedIn, GitHub, etc.) from resume — icon buttons with hover glow
- Email address displayed
- Subtle background decoration matching the reference

### 10. FOOTER
- Name/logo, nav links, social icons, copyright
- Simple, clean, consistent with the dark theme

---

## ANIMATION REQUIREMENTS

### Framer Motion
```tsx
// Page load: stagger hero elements
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }

// Scroll reveal for all sections
const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
<motion.div ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} variants={container}>

// Floating badges around profile image
animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
```

### GSAP
```tsx
// Hero text split reveal on mount
gsap.from(chars, { opacity: 0, y: 50, stagger: 0.03, duration: 0.6, ease: "power3.out" })

// Experience timeline line draw
gsap.fromTo(".timeline-line", { scaleY: 0 }, {
  scaleY: 1, transformOrigin: "top",
  scrollTrigger: { trigger: ".experience-section", scrub: true }
})

// Horizontal skill scroll (if reference shows it)
gsap.to(".skills-track", { x: "-50%", ease: "none",
  scrollTrigger: { trigger: ".skills-section", scrub: 1 }
})
```

---

## QUALITY REQUIREMENTS

- **Fully responsive**: Mobile-first. Stack columns on mobile, side-by-side on desktop. Match reference's responsive behavior.
- **Performance**: Use `next/image` with proper `width`/`height`. Lazy load below-the-fold sections.
- **Accessibility**: Semantic HTML (`<section>`, `<article>`, `<nav>`). Alt text on all images. Focus states visible.
- **No placeholder data**: Every single piece of content — name, title, bio, skills, jobs, projects, education — must come from the uploaded resume PDF. Read it carefully and use it all.
- **Profile image**: Must render in production. Use `next/image` with `fill` or explicit dimensions. Add a fallback if path is uncertain.
- **Clean code**: Typed props interfaces, no `any`, consistent naming, comments on complex animations.

---

## FINAL OUTPUT CHECKLIST

Before finishing, verify:
- [ ] All resume data is populated (nothing says "Lorem ipsum" or "Your Name")
- [ ] Profile image renders correctly with floating skill badges around it
- [ ] Color palette is ONLY dark bg + `#C9F31D` yellow + `#1DB954` green (no blue, no purple)
- [ ] Every section from the reference images is present in the same order
- [ ] Framer Motion animations work on scroll (stagger, fade, slide)
- [ ] GSAP ScrollTrigger is used for at least: timeline draw + hero text reveal
- [ ] Navbar smooth scrolls and highlights active section
- [ ] Fully responsive on 375px, 768px, 1280px, 1440px
- [ ] `next/image` used for all images
- [ ] No TypeScript errors
- [ ] `npm run build` passes cleanly

---

Start by reading ALL uploaded images carefully to understand the exact layout of each section, then read the resume PDF to extract all content. Then build component by component in the order listed above.
