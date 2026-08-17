import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import brain from "@/assets/brain-dither.png";
import isoEmbed from "@/assets/iso-embed.png";
import isoShip from "@/assets/iso-ship.png";
import proofHalftone from "@/assets/proof-halftone.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tejas Narasimha — Full-Stack Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Tejas Narasimha, a Full-Stack Software Engineer specializing in React, Next.js, TypeScript, NestJS, PostgreSQL, and AI-native web applications.",
      },
      { property: "og:title", content: "Tejas Narasimha — Full-Stack Software Engineer" },
      {
        property: "og:description",
        content:
          "Full-stack engineer with hands-on experience building live client web apps, e-commerce platforms, REST APIs, and AI prototypes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SOCIAL_LINKS = {
  github: "https://github.com/tejas2004-ai",
  linkedin: "https://linkedin.com/in/tejas-n-2988a2278",
  email: "tejasnarasimha2004@gmail.com",
  phone: "+91 93453 40095",
  location: "Tamil Nadu, India",
  hitasoftLive: "https://hitasoft-website.vercel.app/",
  hasumaneLive: "https://hasumane.com",
  voiceDemoLive: "https://restaurant-voice-demo.vercel.app/call.html",
};

function ArrowButton({
  label,
  href = "#contact",
  tone = "primary",
  onClick,
  target,
}: {
  label: string;
  href?: string;
  tone?: "primary" | "outline" | "ink";
  onClick?: () => void;
  target?: string;
}) {
  const base =
    "inline-flex h-11 items-stretch rounded-sm text-sm font-medium transition-all duration-150 hover:opacity-90 active:scale-[0.99] cursor-pointer";
  const tones = {
    primary: "bg-primary text-primary-foreground shadow-sm",
    ink: "bg-ink text-ink-foreground shadow-sm",
    outline: "border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
  } as const;
  const divider = {
    primary: "border-primary-foreground/25",
    ink: "border-ink-foreground/25",
    outline: "border-border",
  } as const;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${base} ${tones[tone]}`}>
        <span className="grid place-items-center px-5">{label}</span>
        <span className={`grid place-items-center border-l px-3 ${divider[tone]}`}>→</span>
      </button>
    );
  }

  return (
    <a href={href} target={target} rel={target ? "noopener noreferrer" : undefined} className={`${base} ${tones[tone]}`}>
      <span className="grid place-items-center px-5">{label}</span>
      <span className={`grid place-items-center border-l px-3 ${divider[tone]}`}>→</span>
    </a>
  );
}

function ChapterBar({ label, index, dark }: { label: string; index: string; dark?: boolean }) {
  return (
    <div className="mb-16 flex items-center justify-between">
      <span className={`mono-label ${dark ? "text-ink-foreground/60" : "text-primary"}`}>
        {label}
      </span>
      <span className={`mono-label ${dark ? "text-ink-foreground/40" : "text-muted-foreground"}`}>
        [ {index} ]
      </span>
    </div>
  );
}

function StepBadge({ n, dark }: { n: string; dark?: boolean }) {
  return (
    <span
      className={`mono-label grid h-6 w-6 place-items-center rounded-full border ${
        dark ? "border-ink-foreground/30 text-ink-foreground/70" : "border-border text-primary"
      }`}
    >
      {n}
    </span>
  );
}

const capabilities = [
  {
    n: "01",
    tag: "frontend",
    title: ["Interactive Web", "& Motion UIs."],
    body: "Engineering high-performance web frontends with React, Next.js 15, TypeScript, GSAP, and Tailwind CSS with sub-second load times and 95+ Lighthouse scores.",
  },
  {
    n: "02",
    tag: "backend",
    title: ["NestJS & Node.js", "REST APIs."],
    body: "Building robust, type-safe API architectures with NestJS, Express, and FastAPI featuring secure auth, transactional workflows, and role-based permissions.",
  },
  {
    n: "03",
    tag: "database",
    title: ["PostgreSQL, Prisma", "& Data Modeling."],
    body: "Relational data schema design, indexing, connection pooling, and ORM integration across PostgreSQL, Prisma, Supabase, and Redis.",
  },
  {
    n: "04",
    tag: "devops",
    title: ["Docker, Dokploy", "& Cloud Delivery."],
    body: "Packaging microservices in Docker containers, configuring Dokploy and Vercel automated CI/CD pipelines for reliable zero-downtime releases.",
  },
];

const projects = [
  {
    id: "01",
    title: "HitaSoft Corporate Platform",
    client: "Client Project · Digimaxx",
    tag: "Full-Stack · Next.js · GSAP",
    description:
      "A unified corporate digital platform connecting services, academy programmes, careers, case studies, and interactive enquiry journeys with high-performance GSAP motion and responsive architecture.",
    highlights: [
      "Modular Next.js component system",
      "GSAP smooth scroll & micro-interactions",
      "Optimized conversion & inquiry funnels",
      "95+ Lighthouse Performance score",
    ],
    tech: ["Next.js", "React", "TypeScript", "GSAP", "Tailwind CSS", "Vercel"],
    liveUrl: "https://hitasoft-website.vercel.app/",
    githubUrl: "https://github.com/tejas2004-ai",
    metric: "95+ Lighthouse Score",
    image: isoShip,
  },
  {
    id: "02",
    title: "HasuMane E-commerce Platform",
    client: "Client Platform · Digimaxx",
    tag: "E-commerce · NestJS · PostgreSQL",
    description:
      "A complete live dairy commerce storefront and back-office management platform supporting customer subscriptions, order fulfillment, admin inventory tracking, authentication, and metrics reporting.",
    highlights: [
      "NestJS type-safe RESTful API architecture",
      "PostgreSQL schema modeling via Prisma ORM",
      "Containerized Docker & Dokploy deployment",
      "Automated subscription & recurring orders",
    ],
    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma ORM", "Docker", "Dokploy"],
    liveUrl: "https://hasumane.com",
    githubUrl: "https://github.com/tejas2004-ai",
    metric: "100% Automated Orders",
    image: isoEmbed,
  },
  {
    id: "03",
    title: "Restaurant Voice AI Demo",
    client: "AI Prototype",
    tag: "Voice UI · Web Audio · AI",
    description:
      "A real-time voice-first restaurant ordering experience focused on making food ordering calls and service requests conversational and immediate, with instant audio waveform visual feedback.",
    highlights: [
      "Low-latency voice stream interaction",
      "Real-time visual waveform state feedback",
      "Dynamic cart & order summary synchronization",
    ],
    tech: ["Next.js", "Web Audio API", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://restaurant-voice-demo.vercel.app/call.html",
    githubUrl: "https://github.com/tejas2004-ai",
    metric: "Instant Voice Response",
    image: proofHalftone,
  },
];

const stackCategories = [
  {
    name: "Frontend & Interfaces",
    tag: "frontend",
    skills: [
      { name: "React.js & Next.js 15", desc: "Server components, App Router, SSR, SEO optimization" },
      { name: "TypeScript", desc: "Strict type safety, interfaces, scalable codebases" },
      { name: "Tailwind CSS & Radix UI", desc: "Modern utility styling, accessible headless components" },
      { name: "GSAP & Motion", desc: "Timeline animations, scroll-triggered interactive storytelling" },
    ],
  },
  {
    name: "Backend & APIs",
    tag: "backend",
    skills: [
      { name: "NestJS & Node.js", desc: "Modular architecture, dependency injection, RESTful APIs" },
      { name: "Express.js & FastAPI", desc: "Lightweight microservices, Python async endpoints" },
      { name: "REST API Architecture", desc: "JWT authentication, route middleware, input validation" },
      { name: "Python", desc: "Data processing, script automation, algorithmic logic" },
    ],
  },
  {
    name: "Databases & Cloud",
    tag: "data-cloud",
    skills: [
      { name: "PostgreSQL", desc: "Relational data modeling, indexing, foreign keys" },
      { name: "Prisma & Drizzle ORM", desc: "Schema migrations, type-safe queries, relations" },
      { name: "Supabase & Firebase", desc: "Realtime databases, cloud storage, auth services" },
      { name: "Docker & Dokploy", desc: "Containerized service deployment, self-hosted orchestration" },
    ],
  },
  {
    name: "AI, Tools & Workflow",
    tag: "tooling",
    skills: [
      { name: "AI Integration & n8n", desc: "Prompt engineering, LLM APIs (Claude/ChatGPT), workflow automation" },
      { name: "Git & GitHub", desc: "Version control, branch workflows, pull requests" },
      { name: "Vercel & Cloudflare", desc: "Edge deployments, CDN caching, custom domains" },
      { name: "VS Code & Postman", desc: "API testing, automated linting, debugging" },
    ],
  },
];

const principles = [
  {
    n: "01",
    tag: "live-software",
    title: "Working software over theory.",
    body: "Delivering real, production-ready applications with clean code, verified builds, and live deployments that solve practical business problems.",
  },
  {
    n: "02",
    tag: "clean-stack",
    title: "Type safety from database to UI.",
    body: "Using TypeScript, Prisma, and NestJS to guarantee end-to-end data integrity, preventing runtime errors and enabling rapid fearless refactoring.",
  },
  {
    n: "03",
    tag: "speed-dx",
    title: "Obsession with performance & UX.",
    body: "Optimized bundle sizes, responsive layouts across all devices, smooth 60fps micro-animations, and accessible semantic markup.",
  },
  {
    n: "04",
    tag: "reliability",
    title: "Containerized & deployable by default.",
    body: "Structuring applications with Docker and clean environment configurations so releases are reproducible, automated, and maintainable.",
  },
];

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "Digimaxx (India)",
    period: "Present",
    location: "Remote / Hybrid",
    desc: "Developing full-stack features for HasuMane (dairy e-commerce platform) using React, Next.js, NestJS, PostgreSQL, and Prisma ORM. Engineered the HitaSoft corporate platform with GSAP motion and responsive UI. Set up Docker, Dokploy, and Vercel deployment workflows.",
  },
  {
    role: "Web Development Intern",
    company: "Airobosoft Products and Services",
    period: "2024",
    location: "Bengaluru, India",
    desc: "Built responsive user-interface components and integrated REST APIs using React, JavaScript, HTML5, CSS3, and Node.js. Collaborated in an agile team environment to investigate defects, optimize frontend loading speed, and deliver production bug fixes.",
  },
  {
    role: "B.E. Computer Science and Engineering",
    company: "SRM TRP Engineering College",
    period: "2023 — 2027 (Expected)",
    location: "Trichy, Tamil Nadu",
    desc: "Pursuing Bachelor of Engineering in Computer Science & Engineering (CGPA: 7.1/10). Deep focus on Data Structures, Algorithms, Relational Databases, System Design, and building live open-source web projects.",
  },
];

function Index() {
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState("all");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", projectType: "Full-Stack Web App" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => (filter === "ai" ? p.tag.includes("AI") || p.tag.includes("Voice") : p.tag.includes("Next.js") || p.tag.includes("Full-Stack") || p.tag.includes("E-commerce")));

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1300px] items-center justify-between px-6">
          <a href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
            <img src={brain} alt="Tejas Narasimha" width={28} height={28} className="h-7 w-7" />
            <span>tejas<span className="text-primary">.dev</span></span>
            <span className="mono-label hidden rounded border border-border bg-muted px-1.5 py-0.5 text-[9px] text-muted-foreground sm:inline-block">
              FULL-STACK SDE
            </span>
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-8 text-sm font-medium text-foreground/80 md:flex">
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a href="#projects" className="transition-colors hover:text-primary">Projects</a>
            <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
            <a href="#experience" className="transition-colors hover:text-primary">Experience</a>
            <a href="#principles" className="transition-colors hover:text-primary">Principles</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="mono-label hidden items-center gap-1.5 rounded-sm border border-border bg-card px-3 py-2 text-xs text-foreground/80 transition-colors hover:border-primary hover:text-primary sm:flex"
              title="Click to copy email address"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${copied ? "bg-emerald-500 animate-ping" : "bg-primary"}`} />
              {copied ? "COPIED TO CLIPBOARD" : "COPY EMAIL"}
            </button>
            <ArrowButton label="Get in Touch" href="#contact" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="dot-grid border-b border-border relative overflow-hidden">
        <div className="mx-auto max-w-[1150px] px-6 py-24 text-center md:py-36">
          <div className="mx-auto mb-10 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-border bg-card py-1.5 pl-2 pr-4 text-sm shadow-sm">
            <span className="flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Full-Time / SDE Roles
            </span>
            <span className="text-foreground/80 font-medium">Full-Stack &amp; AI Systems Engineer</span>
            <a href="#projects" className="text-primary hover:underline font-mono text-xs">
              Live Projects →
            </a>
          </div>

          <h1 className="text-[2.6rem] font-bold leading-[0.94] tracking-[-0.04em] sm:text-[4rem] md:text-[5.75rem] lg:text-[6.5rem]">
            Full-stack engineer &amp;
            <span className="mt-1 flex flex-wrap items-center justify-center gap-2 md:gap-4">
              <img
                src={brain}
                alt="AI mark"
                width={100}
                height={100}
                className="h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20"
              />
              <span className="text-foreground">builder of </span>
              <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                production
              </span>
              <span>web apps.</span>
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Hi, I'm <strong className="text-foreground font-semibold">Tejas Narasimha</strong>. Computer Science Engineering student and full-stack developer with hands-on experience delivering live client web applications, e-commerce architectures, REST APIs, and AI prototypes using React, Next.js, TypeScript, NestJS, and PostgreSQL.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ArrowButton label="View Live Projects" href="#projects" />
            <ArrowButton label="Technical Stack" href="#skills" tone="outline" />
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-border pt-10 sm:grid-cols-4 max-w-4xl mx-auto">
            {[
              ["Live Clients", "HitaSoft & HasuMane"],
              ["Full-Stack", "React · Next.js · NestJS"],
              ["PostgreSQL", "Prisma & Relational DBs"],
              ["Docker", "Containerized Deployments"],
            ].map(([stat, label]) => (
              <div key={label} className="p-3 text-center">
                <div className="text-xl font-bold tracking-tight text-foreground md:text-2xl">{stat}</div>
                <div className="mono-label mt-1 text-[11px] text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 01: What I Do (Dark Ink Section) */}
      <section id="about" className="bg-ink text-ink-foreground relative">
        <div className="mx-auto max-w-[1300px] px-6 py-28">
          <ChapterBar label="⟩ chapter 01 — engineering profile" index="01 / 05" dark />

          <div className="flex justify-center">
            <img
              src={brain}
              alt="Tejas dither logo"
              width={160}
              height={160}
              loading="lazy"
              className="h-36 w-36 sm:h-44 sm:w-44"
            />
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <h2 className="text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl">
              Shipping live applications.{" "}
              <span className="text-primary">From clean databases to responsive UI.</span>
            </h2>
            <p className="self-end text-base text-ink-foreground/70 leading-relaxed">
              I have delivered real-world client platforms including <strong className="text-ink-foreground">HasuMane</strong> (dairy e-commerce with NestJS &amp; PostgreSQL) and the <strong className="text-ink-foreground">HitaSoft</strong> corporate platform (Next.js &amp; GSAP). I build with type safety, maintainability, and clean architecture.
            </p>
          </div>

          {/* Featured Highlights Cards */}
          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            {/* Left Card: Full-Stack Client Work */}
            <div className="rounded-sm bg-primary p-10 text-primary-foreground flex flex-col justify-between">
              <div>
                <div className="mono-label text-primary-foreground/70 mb-2">PROVEN TRACK RECORD</div>
                <h3 className="text-3xl font-bold tracking-tight">Full-Stack Client Application Delivery</h3>
                <p className="mt-4 max-w-md text-sm text-primary-foreground/85 leading-relaxed">
                  Hands-on engineering across live production codebases: writing REST APIs in NestJS, structuring PostgreSQL databases with Prisma ORM, crafting interactive React/Next.js interfaces, and deploying via Docker and Vercel.
                </p>
                <div className="mt-10 grid grid-cols-3 border border-primary-foreground/25">
                  {[
                    ["HasuMane", "E-commerce platform"],
                    ["HitaSoft", "Corporate platform"],
                    ["SRM TRP", "B.E. Computer Science"],
                  ].map(([a, b], i) => (
                    <div
                      key={b}
                      className={`p-4 ${i > 0 ? "border-l border-primary-foreground/25" : ""}`}
                    >
                      <div className="text-base font-bold">{a}</div>
                      <div className="mono-label mt-1 text-[10px] text-primary-foreground/75">{b}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-primary-foreground/20 flex items-center justify-between">
                <span className="mono-label text-xs text-primary-foreground/80">
                  Live Code · End-to-End Ownership
                </span>
                <ArrowButton label="Contact Me" href="#contact" tone="ink" />
              </div>
            </div>

            {/* Right Card: Technical Specialization */}
            <div className="rounded-sm border border-ink-foreground/15 bg-background p-10 text-foreground flex flex-col justify-between">
              <div>
                <div className="mono-label text-primary mb-2">CORE CAPABILITIES</div>
                <h3 className="text-3xl font-bold tracking-tight">Modern Web Architecture &amp; APIs</h3>
                <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
                  Focusing on type-safe development, robust data modeling, automated linting, accessible UI components, and containerized deployment workflows.
                </p>

                <dl className="mt-8 divide-y divide-border border-y border-border">
                  {[
                    ["Frontend Ecosystem", "React 19, Next.js 15, TypeScript, Tailwind, GSAP"],
                    ["Backend & APIs", "NestJS, Node.js, Express.js, FastAPI, REST"],
                    ["Databases & ORM", "PostgreSQL, Prisma ORM, Supabase, Firebase"],
                    ["Deployment & DevOps", "Docker, Dokploy, Vercel, Git, GitHub Actions"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 text-sm gap-1">
                      <dt className="font-semibold text-foreground">{label}</dt>
                      <dd className="mono-label text-xs text-muted-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-8">
                <ArrowButton label="Explore Projects" href="#projects" />
              </div>
            </div>
          </div>

          {/* Comparison / Mindset Block */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-sm border border-dashed border-ink-foreground/20 bg-background p-8 text-foreground">
              <p className="mono-label text-muted-foreground flex items-center">
                <span className="mr-2 inline-grid h-5 w-5 place-items-center border border-border text-xs">
                  ×
                </span>
                Tutorial-Only Development
              </p>
              <h4 className="mt-4 text-xl font-bold tracking-tight text-muted-foreground line-through decoration-1">
                Toy todo apps with mock data that fail in real production.
              </h4>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                {[
                  "No real users, no business logic, no edge case handling",
                  "Unstructured database schemas with zero relational integrity",
                  "Missing authentication, deployment configurations, and automated verification",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <span className="text-red-500">×</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-sm border border-ink-foreground/15 bg-background p-8 text-foreground">
              <p className="mono-label flex items-center gap-2 text-primary">
                <img src={brain} alt="" width={18} height={18} loading="lazy" className="h-4 w-4" />
                Tejas Engineering Standard
              </p>
              <h4 className="mt-4 text-xl font-bold tracking-tight">
                Live client apps, relational schemas, and containerized deployments.
              </h4>
              <ul className="mt-6 space-y-2.5 text-sm text-foreground/80">
                {[
                  "Delivering live e-commerce and corporate platforms for clients",
                  "Full-stack type safety with TypeScript, NestJS, and Prisma ORM",
                  "Containerized with Docker and verified with automated HTML/lint checks",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 02: Featured Projects & Portfolio */}
      <section id="projects" className="mx-auto max-w-[1300px] px-6 py-28">
        <ChapterBar label="⟩ chapter 02 — selected projects" index="02 / 05" />

        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Selected <span className="text-primary">work.</span>
          </h2>
          <div className="self-end space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Real projects delivered for clients and technical prototypes built with modern full-stack architectures.
            </p>
            <div className="flex gap-2">
              {[
                { label: "All Work", key: "all" },
                { label: "Client Platforms", key: "client" },
                { label: "AI & Prototypes", key: "ai" },
              ].map((btn) => (
                <button
                  key={btn.key}
                  onClick={() => setFilter(btn.key)}
                  className={`mono-label rounded-sm px-3 py-1.5 text-xs transition-colors cursor-pointer ${
                    filter === btn.key
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-10">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="group relative rounded-sm border border-border bg-card p-6 md:p-10 transition-all hover:border-primary/60 hover:shadow-lg"
            >
              <div className="grid gap-8 lg:grid-cols-12 items-center">
                {/* Visual Preview */}
                <div className="lg:col-span-5">
                  <div className="dot-grid relative grid h-64 place-items-center overflow-hidden rounded-sm border border-border bg-background p-6">
                    <span className="mono-label absolute left-4 top-4 rounded bg-background/90 px-2 py-1 text-[10px] text-muted-foreground border border-border">
                      PRJ #{project.id}
                    </span>
                    <span className="mono-label absolute right-4 top-4 flex items-center gap-1.5 rounded bg-primary/10 px-2 py-1 text-[10px] text-primary border border-primary/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {project.metric}
                    </span>
                    <img
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      loading="lazy"
                      className="h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="mono-label text-primary">{project.client}</span>
                      <span className="mono-label text-muted-foreground">0{idx + 1} / 0{filteredProjects.length}</span>
                    </div>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {project.description}
                    </p>

                    {/* Feature bullet badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.highlights.map((hl) => (
                        <span
                          key={hl}
                          className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-background px-2.5 py-1 text-xs text-foreground/80"
                        >
                          <span className="h-1 w-1 rounded-full bg-primary" />
                          {hl}
                        </span>
                      ))}
                    </div>

                    {/* Tech tag list */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="mono-label rounded border border-border/80 bg-muted/60 px-2 py-0.5 text-[10px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                    <ArrowButton label="Visit Live Website" href={project.liveUrl} target="_blank" tone="primary" />
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono-label text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <span>GITHUB REPO</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Chapter 03: Technical Skills & Tooling */}
      <section id="skills" className="mx-auto max-w-[1300px] px-6 py-28 border-t border-border">
        <ChapterBar label="⟩ chapter 03 — technical stack" index="03 / 05" />

        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Technical <span className="text-primary">stack.</span>
          </h2>
          <p className="self-end text-muted-foreground leading-relaxed">
            Languages, frameworks, databases, and tooling I use on a daily basis to build and deploy production software.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stackCategories.map((cat, idx) => (
            <div
              key={cat.name}
              className="flex flex-col rounded-sm border border-border bg-card p-7 transition-all hover:border-primary/60 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="mono-label flex items-center gap-2.5 text-foreground/70">
                  <StepBadge n={`0${idx + 1}`} />
                  {cat.tag}
                </span>
                <span className="mono-label text-muted-foreground">/ 0{idx + 1}</span>
              </div>

              <h3 className="mono-label mt-6 text-sm font-semibold tracking-tight text-primary">
                {cat.name}
              </h3>

              <div className="mt-6 space-y-4 flex-1">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    <div className="text-sm font-semibold text-foreground">{skill.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{skill.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chapter 04: Experience & Education */}
      <section id="experience" className="mx-auto max-w-[1300px] px-6 py-28 border-t border-border">
        <ChapterBar label="⟩ chapter 04 — experience &amp; education" index="04 / 05" />

        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Career <span className="text-primary">trajectory.</span>
          </h2>
          <p className="self-end text-muted-foreground leading-relaxed">
            Hands-on professional internship experience building live web platforms combined with strong computer science fundamentals.
          </p>
        </div>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {experiences.map((exp, i) => (
            <div key={exp.company} className="py-8 grid gap-6 md:grid-cols-12 items-baseline">
              <div className="md:col-span-3">
                <span className="mono-label text-xs text-primary font-semibold">{exp.period}</span>
                <div className="mono-label text-[11px] text-muted-foreground mt-1">{exp.location}</div>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-bold tracking-tight text-foreground">{exp.role}</h3>
                <p className="text-sm text-primary font-medium mt-0.5">{exp.company}</p>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm leading-relaxed text-foreground/80">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chapter 05: Engineering Principles */}
      <section id="principles" className="mx-auto max-w-[1300px] px-6 py-28 border-t border-border">
        <ChapterBar label="⟩ chapter 05 — engineering principles" index="05 / 05" />

        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Four rules <span className="text-primary">I build by.</span>
          </h2>
          <p className="self-end text-muted-foreground leading-relaxed">
            The engineering discipline and principles that guide every pull request, database schema, and architectural decision I make.
          </p>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-sm border border-border md:grid-cols-2">
          {principles.map((p, i) => (
            <div
              key={p.n}
              className={`p-10 ${i === 0 ? "bg-primary text-primary-foreground" : "bg-card text-foreground"} ${
                i % 2 === 1 ? "md:border-l border-border" : ""
              } ${i > 1 ? "border-t border-border" : ""}`}
            >
              <span
                className={`mono-label flex items-center gap-3 ${
                  i === 0 ? "text-primary-foreground/80" : "text-foreground/70"
                }`}
              >
                <span
                  className={`grid h-6 w-6 place-items-center rounded-full border ${
                    i === 0 ? "border-primary-foreground/40 text-primary-foreground" : "border-border text-primary"
                  }`}
                >
                  {p.n}
                </span>
                {p.tag}
              </span>
              <h3 className="mt-8 text-2xl font-bold tracking-tight">{p.title}</h3>
              <p
                className={`mt-4 max-w-md text-sm leading-relaxed ${
                  i === 0 ? "text-primary-foreground/85" : "text-muted-foreground"
                }`}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Contact & Inquiry Section */}
      <section id="contact" className="dot-grid border-t border-border bg-card/40">
        <div className="mx-auto max-w-[1200px] px-6 py-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="mono-label text-primary">GET IN TOUCH</span>
            <h2 className="mt-4 text-4xl font-bold leading-[0.95] tracking-[-0.04em] md:text-6xl text-foreground">
              Let's connect &amp; build.{" "}
              <span className="text-primary">Reach out today.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
              Open for full-time Software Development Engineer (SDE) roles, full-stack client development, and technical collaborations.
            </p>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-12">
            {/* Left Contact Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-sm border border-border bg-background p-8">
                <div className="mono-label text-xs text-muted-foreground">DIRECT CONTACT</div>
                
                {/* Email */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase font-mono">Email</div>
                    <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-sm text-primary font-mono hover:underline">
                      {SOCIAL_LINKS.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="mono-label rounded border border-border bg-card px-3 py-1.5 text-[11px] text-foreground hover:bg-accent cursor-pointer"
                  >
                    {copied ? "COPIED" : "COPY"}
                  </button>
                </div>

                {/* Phone */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-xs text-muted-foreground uppercase font-mono">Phone</div>
                  <a href="tel:+919345340095" className="text-sm font-semibold text-foreground hover:text-primary">
                    {SOCIAL_LINKS.phone}
                  </a>
                </div>

                {/* Location */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-xs text-muted-foreground uppercase font-mono">Location &amp; Education</div>
                  <div className="text-sm text-foreground font-medium mt-0.5">Tamil Nadu, India</div>
                  <div className="text-xs text-muted-foreground mt-0.5">SRM TRP Engineering College (2023–2027)</div>
                </div>

                {/* Social Profiles */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-xs text-muted-foreground uppercase font-mono">Social &amp; Code Repositories</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { name: "GitHub", href: SOCIAL_LINKS.github },
                      { name: "LinkedIn", href: SOCIAL_LINKS.linkedin },
                    ].map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mono-label rounded-sm border border-border bg-card px-3 py-1.5 text-xs text-foreground/80 hover:border-primary hover:text-primary transition-colors"
                      >
                        {s.name} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Box */}
              <div className="rounded-sm bg-ink text-ink-foreground p-8">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="mono-label text-xs text-ink-foreground/80">STATUS: OPEN FOR NEW OPPORTUNITIES</span>
                </div>
                <p className="mt-4 text-xs text-ink-foreground/70 leading-relaxed">
                  Actively interviewing for full-time SDE roles, full-stack engineering internships, and high-impact web development projects.
                </p>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-sm border border-border bg-background p-8 md:p-10">
                {formSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary mb-4 text-xl font-bold">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Message Dispatched!</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                      Thank you for reaching out, <strong className="text-foreground">{formData.name}</strong>. I've received your note and will reply directly to <strong className="text-foreground">{formData.email}</strong> promptly.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", email: "", message: "", projectType: "Full-Stack Web App" });
                      }}
                      className="mt-6 mono-label text-xs text-primary underline cursor-pointer"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="mono-label text-xs text-primary">SEND A DIRECT MESSAGE</div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="mono-label text-[11px] text-muted-foreground block mb-2">
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Hiring Manager / Client"
                          className="w-full rounded-sm border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="mono-label text-[11px] text-muted-foreground block mb-2">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full rounded-sm border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mono-label text-[11px] text-muted-foreground block mb-2">
                        INQUIRY TYPE
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full rounded-sm border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                      >
                        <option>Full-Time SDE Opportunity</option>
                        <option>Full-Stack Web Development</option>
                        <option>Frontend &amp; Next.js Engineering</option>
                        <option>Backend &amp; NestJS / PostgreSQL</option>
                        <option>General Connect / Mentorship</option>
                      </select>
                    </div>

                    <div>
                      <label className="mono-label text-[11px] text-muted-foreground block mb-2">
                        MESSAGE *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Tejas, I saw your work on HitaSoft and HasuMane and would like to discuss..."
                        className="w-full rounded-sm border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex h-11 items-stretch rounded-sm bg-primary text-primary-foreground font-medium text-sm transition-opacity hover:opacity-90 cursor-pointer"
                    >
                      <span className="grid place-items-center flex-1">Send Message to Tejas Narasimha</span>
                      <span className="grid place-items-center border-l border-primary-foreground/25 px-4">→</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1300px] px-6 py-16">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
                <img src={brain} alt="Tejas Narasimha" width={28} height={28} loading="lazy" className="h-7 w-7" />
                <span>tejas<span className="text-primary">.dev</span></span>
              </div>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
                Tejas Narasimha — Full-Stack Software Engineer. Building responsive web platforms, backend APIs, and modern digital experiences with React, Next.js, TypeScript, NestJS, and PostgreSQL.
              </p>
            </div>

            <div>
              <p className="mono-label text-muted-foreground">NAVIGATION</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {["About", "Projects", "Skills", "Experience", "Principles"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="transition-colors hover:text-primary">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mono-label text-muted-foreground">CONNECT</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li>
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                    GitHub (tejas2004-ai)
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="transition-colors hover:text-primary">
                    {SOCIAL_LINKS.email}
                  </a>
                </li>
                <li>
                  <a href="tel:+919345340095" className="transition-colors hover:text-primary">
                    {SOCIAL_LINKS.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Tejas Narasimha. All rights reserved.</span>
            <div className="flex gap-6 font-mono text-[11px]">
              <span className="text-foreground/70">SRM TRP ENGINEERING COLLEGE</span>
              <span>BUILT WITH TANSTACK &amp; TAILWIND</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
