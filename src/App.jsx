import { createElement, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa'
import './App.css'

const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const experiences = [
  {
    company: 'Singapore Ecommerce',
    role: 'Full-Stack Developer',
    period: 'Sept 2025 - March 2026',
    summary:
      'Built AI-assisted support and commerce workflows across web, mobile, and messaging channels.',
    highlights: [
      'Designed n8n automation flows for AI-led business operations and support routing.',
      'Delivered a React Native mobile app shipped to both Google Play and the App Store.',
      'Integrated UChat support across Telegram, Instagram, and Facebook for multi-channel engagement.',
    ],
  },
  {
    company: 'PLSP - IS',
    role: 'Full-Stack Developer Intern',
    period: 'Feb - June 2025',
    summary:
      'Contributed to a learning management platform spanning mobile, backend, and deployment workflows.',
    highlights: [
      'Built a cross-platform LMS using Flutter and Node.js for students and faculty.',
      'Implemented JWT authentication and Firebase Cloud Messaging notifications.',
      'Supported end-to-end testing, production deployment, and release hardening.',
    ],
  },
]

const projects = [
  {
    name: 'Health AI',
    description:
      'AI nutrition companion that combines personalized health tracking, smart recommendations, and scalable backend services.',
    stack: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'OpenRouter', 'Firebase'],
    href: 'https://healthai.sgecentre.com/',
  },
  {
    name: 'Surfload',
    description:
      'WiFi loading app focused on fast transactions, smooth device workflows, and dependable service delivery.',
    stack: ['Flutter', 'Dart', 'Node.js'],
    href: 'https://play.google.com/store/apps/details?id=surfload.aplickqo'
  },
  {
    name: 'GSGL - Great Sleep Great Life',
    description:
      'Corporate website and admin panel with a maintainable content workflow and production-focused delivery pipeline.',
    stack: ['TypeScript', 'GraphQL', 'Docker', 'CI/CD'],
    href: null,
  },
  {
    name: 'Campusly',
    description:
      'Capstone LMS built to unify coursework, notifications, and student access in one mobile-first experience.',
    stack: ['Flutter', 'Node.js', 'Firebase', 'REST APIs'],
    href: 'https://drive.google.com/drive/folders/1B62-sKBeN3gJ3kQfc4fYRK6MyVQhdbQK?usp=sharing',
  },
]

const skillGroups = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Dart', 'SQL', 'HTML', 'CSS'] },
  { title: 'Mobile', items: ['Flutter', 'React Native', 'Expo'] },
  { title: 'Frontend', items: ['React', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'GraphQL'] },
  { title: 'Databases', items: ['PostgreSQL', 'Firebase'] },
  { title: 'Cloud / DevOps', items: ['AWS S3', 'Docker', 'CI/CD', 'Git'] },
  { title: 'AI & Automation', items: ['n8n', 'UChat', 'OpenRouter'] },
]

const certifications = [
  'TESDA NC II - Servicing Consumer Electronics',
  'Web Development trainings, 2022-2025',
  'Power BI trainings, 2022-2025',
  'AI for MSMEs trainings, 2022-2025',
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/triggeredxhub',
    icon: FaGithub,
  },
  {
    label: 'Email',
    href: 'mailto:josenathanielantonio.dev@gmail.com',
    icon: FaEnvelope,
  },
  {
    label: 'Phone',
    href: 'tel:+639766166787',
    icon: FaPhoneAlt,
  },
]

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const MotionArticle = motion.article
const MotionAside = motion.aside
const MotionDiv = motion.div
const MotionNav = motion.nav
const MotionSection = motion.section

function Section({ eyebrow, title, description, children, id }) {
  return (
    <MotionSection
      id={id}
      className="scroll-mt-24 border-t border-black/10 py-16 first:border-t-0 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/55">{eyebrow}</p>
          <h2 className="max-w-lg text-3xl font-semibold tracking-[-0.04em] text-black md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-xl text-base leading-8 text-black/72 md:text-lg">{description}</p>
          ) : null}
        </div>
        <div>{children}</div>
      </div>
    </MotionSection>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || 'Website visitor'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\n${formData.message || ''}`,
    )

    return `mailto:josenathanielantonio.dev@gmail.com?subject=${subject}&body=${body}`
  }, [formData])

  function handleInputChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  // Keep the contact form static-host friendly by routing submissions to mailto.
  function handleSubmit(event) {
    event.preventDefault()
    window.location.href = mailtoHref
  }

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#A7D8F0] selection:text-black">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.28em] text-black">
            Jose Antonio
          </a>

          <button
            type="button"
            className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black transition hover:border-black md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            Menu
          </button>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-black/70 transition hover:text-black"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-[#A7D8F0] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
        </div>

        <MotionNav
          id="mobile-navigation"
          initial={false}
          animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
          className="overflow-hidden border-t border-black/10 bg-white md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-black/10 py-3 text-sm font-medium text-black/75 last:border-b-0"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </MotionNav>
      </header>

      <main className="relative overflow-hidden pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top_left,_rgba(230,244,251,0.95),_rgba(255,255,255,0)_52%),radial-gradient(circle_at_top_right,_rgba(167,216,240,0.4),_rgba(255,255,255,0)_36%)]" />

        <section id="hero" className="relative mx-auto max-w-6xl px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/75 shadow-[0_14px_40px_rgba(10,10,10,0.04)]">
                <span className="h-2 w-2 rounded-full bg-[#A7D8F0]" aria-hidden="true" />
                San Pablo City, Laguna, PH
              </div>

              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-black/55">
                  Junior Full-Stack Developer
                </p>
                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-black md:text-7xl lg:text-[5.6rem]">
                  Jose Nathaniel P. Antonio
                </h1>
                <p className="max-w-2xl text-xl font-light leading-9 text-black/72 md:text-2xl">
                  Full-Stack &amp; Mobile Developer crafting polished products, scalable APIs,
                  and automation systems that move real teams forward.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#A7D8F0] hover:text-black"
                >
                  View Work
                  <FaArrowRight />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-black/15 bg-[#E6F4FB] px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:border-black"
                >
                  Contact
                </a>
              </div>

              <div className="grid gap-4 border-t border-black/10 pt-8 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-semibold tracking-[-0.05em]">2+</p>
                  <p className="mt-2 text-sm leading-7 text-black/65">Years building web, mobile, and backend products.</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-[-0.05em]">4</p>
                  <p className="mt-2 text-sm leading-7 text-black/65">Core shipped products across mobile, web, and admin systems.</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-[-0.05em]">AI</p>
                  <p className="mt-2 text-sm leading-7 text-black/65">Feature integrations, workflow automation, and support tooling.</p>
                </div>
              </div>
            </div>

            <MotionAside
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_24px_80px_rgba(10,10,10,0.08)]"
            >
              <div className="rounded-[1.5rem] border border-black/10 bg-[#E6F4FB] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/55">Focus</p>
                <div className="mt-6 space-y-5">
                  {[
                    'Cross-platform mobile apps with Flutter and React Native',
                    'Node.js backends, REST APIs, and production-ready integrations',
                    'AI features and automation workflows using n8n, UChat, and OpenRouter',
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-black" aria-hidden="true" />
                      <p className="text-base leading-8 text-black/75">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3 border-t border-black/10 pt-6">
                  {socialLinks.map(({ href, icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={label === 'GitHub' ? '_blank' : undefined}
                      rel={label === 'GitHub' ? 'noreferrer' : undefined}
                      aria-label={label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black transition duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
                    >
                      {createElement(icon)}
                    </a>
                  ))}
                </div>
              </div>
            </MotionAside>
          </MotionDiv>
        </section>

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Section
            id="about"
            eyebrow="About"
            title="Building practical products with strong mobile and backend foundations."
            description="I build product-focused software with a clean frontend sensibility and a backend mindset for reliability, scale, and maintainability."
          >
            <div className="space-y-6 rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_16px_60px_rgba(10,10,10,0.05)]">
              <p className="text-lg leading-9 text-black/74">
                Full-stack developer with expertise in cross-platform mobile development using
                Flutter and React Native, backed by Node.js services and production-ready API design.
              </p>
              <p className="text-lg leading-9 text-black/74">
                Shipped production apps to Google Play and the App Store, built AI-powered
                features, created automation workflows with n8n and UChat, and delivered scalable
                REST APIs that support real operational needs.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['Mobile-first', 'Production apps', 'AI workflows', 'Scalable APIs'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-[#E6F4FB] px-4 py-2 text-sm font-medium text-black"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Section>

          <Section
            id="experience"
            eyebrow="Experience"
            title="Recent roles focused on shipping, integration, and operational impact."
            description="Each role combined hands-on product delivery with deployment, integrations, and end-to-end ownership."
          >
            <div className="space-y-6">
              {experiences.map((experience) => (
                <MotionArticle
                  key={`${experience.company}-${experience.period}`}
                  whileHover={{ y: -4 }}
                  className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_16px_60px_rgba(10,10,10,0.05)]"
                >
                  <div className="flex flex-col gap-4 border-b border-black/10 pb-6 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/50">
                        {experience.role}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-black">
                        {experience.company}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-black/60">{experience.period}</p>
                  </div>

                  <p className="mt-6 text-base leading-8 text-black/72">{experience.summary}</p>

                  <div className="mt-6 space-y-4">
                    {experience.highlights.map((highlight) => (
                      <div key={highlight} className="flex gap-4">
                        <span className="mt-3 h-px w-8 bg-[#A7D8F0]" aria-hidden="true" />
                        <p className="text-base leading-8 text-black/72">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </MotionArticle>
              ))}
            </div>
          </Section>

          <Section
            id="projects"
            eyebrow="Projects"
            title="Selected work across health, education, commerce, and business platforms."
            description="A compact set of projects that show range across mobile apps, backend systems, and operational tooling."
          >
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <MotionArticle
                  key={project.name}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="group rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_16px_60px_rgba(10,10,10,0.05)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/45">
                      Project {index + 1}
                    </p>
                    <span className="h-10 w-10 rounded-full border border-black/10 bg-[#E6F4FB]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-black">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-black/72">{project.description}</p>
                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/65 transition group-hover:border-black/20 group-hover:bg-[#E6F4FB]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-black bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#A7D8F0] hover:text-black"
                      >
                        Visit Project
                        <FaArrowRight aria-hidden="true" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => window.alert('Public release upcoming')}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-[#E6F4FB] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition duration-300 hover:-translate-y-0.5 hover:border-black"
                      >
                        Coming soon
                      </button>
                    )}
                  </div>
                </MotionArticle>
              ))}
            </div>
          </Section>

          <Section
            id="skills"
            eyebrow="Skills"
            title="A stack shaped by product delivery, mobile execution, and backend depth."
            description="Grouped by the technologies and workflows I rely on most often in production work."
          >
            <div className="grid gap-5 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(10,10,10,0.04)]"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-black">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/10 bg-[#E6F4FB] px-4 py-2 text-sm font-medium text-black"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="education"
            eyebrow="Education"
            title="Academic foundation in information technology with hands-on product work."
          >
            <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_16px_60px_rgba(10,10,10,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/50">
                Pamantasan ng Lungsod ng San Pablo
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-black">
                BS Information Technology
              </h3>
              <p className="mt-4 text-base leading-8 text-black/72">Graduated July 2025.</p>
            </div>
          </Section>

          <Section
            id="certifications"
            eyebrow="Certifications"
            title="Training across electronics, web development, analytics, and AI adoption."
          >
            <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_16px_60px_rgba(10,10,10,0.05)]">
              <div className="space-y-4">
                {certifications.map((item) => (
                  <div key={item} className="flex gap-4 border-b border-black/10 pb-4 last:border-b-0 last:pb-0">
                    <span className="mt-3 h-2 w-2 rounded-full bg-[#A7D8F0]" aria-hidden="true" />
                    <p className="text-base leading-8 text-black/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section
            id="contact"
            eyebrow="Contact"
            title="Open to junior full-stack, mobile, and product engineering opportunities."
            description="Reach out for freelance work, early-career roles, or collaborations involving mobile apps, APIs, and automation systems."
          >
            <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="rounded-[2rem] border border-black/10 bg-[#E6F4FB] p-8 shadow-[0_16px_60px_rgba(10,10,10,0.05)]">
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <FaEnvelope className="mt-1 text-black" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">Email</p>
                      <a
                        href="mailto:josenathanielantonio.dev@gmail.com"
                        className="mt-2 inline-block text-base leading-8 text-black hover:underline"
                      >
                        josenathanielantonio.dev@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <FaPhoneAlt className="mt-1 text-black" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">Phone</p>
                      <a href="tel:+639766166787" className="mt-2 inline-block text-base leading-8 text-black hover:underline">
                        +63 976 616 6787
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <FaMapMarkerAlt className="mt-1 text-black" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">Location</p>
                      <p className="mt-2 text-base leading-8 text-black">San Pablo City, Laguna, PH</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {socialLinks.map(({ href, icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={label === 'GitHub' ? '_blank' : undefined}
                      rel={label === 'GitHub' ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:border-black"
                    >
                      {createElement(icon, { 'aria-hidden': true })}
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <form
                className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_16px_60px_rgba(10,10,10,0.05)]"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-5">
                  <div>
                    <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-black/55" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-base text-black outline-none transition placeholder:text-black/35 focus:border-black focus:ring-2 focus:ring-[#A7D8F0]"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-black/55" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-base text-black outline-none transition placeholder:text-black/35 focus:border-black focus:ring-2 focus:ring-[#A7D8F0]"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-black/55" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-base text-black outline-none transition placeholder:text-black/35 focus:border-black focus:ring-2 focus:ring-[#A7D8F0]"
                      placeholder="Tell me about the role, project, or collaboration."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#A7D8F0] hover:text-black"
                  >
                    Send Message
                    <FaArrowRight />
                  </button>
                </div>
              </form>
            </div>
          </Section>
        </div>
      </main>

      <footer className="border-t border-black/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-black/55 md:flex-row md:items-center md:justify-between md:px-8">
          <p>&copy; 2026 Jose Nathaniel P. Antonio</p>
          <p>Built with React, Vite, Tailwind CSS, and Framer Motion.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
