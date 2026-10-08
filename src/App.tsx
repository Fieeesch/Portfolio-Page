import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { cv, Language, PortfolioItem, profile, projects, publications, ui } from "./content";

type Page = "home" | "projects" | "publications" | "about" | "detail";

function formatPortfolioDate(
  value: string,
  language: Language,
  monthStyle: "short" | "long" = "long",
) {
  const match = /^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/.exec(value);
  if (!match) return value;

  const [, year, month, day] = match;
  if (!month) return year;

  const date = new Date(Number(year), Number(month) - 1, day ? Number(day) : 1);
  const locale = language === "de" ? "de-DE" : "en-GB";

  if (!day) {
    return new Intl.DateTimeFormat(locale, {
      month: monthStyle,
      year: "numeric",
    }).format(date);
  }

  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: monthStyle,
    year: "numeric",
  }).format(date);
}

function ButtonLink({
  children,
  onClick,
  secondary = false,
  href,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  href?: string;
}) {
  const className = `button-link ${secondary ? "button-secondary" : "button-primary"}`;
  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

function GitHubLogo() {
  return (
    <svg className="social-logo" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.6 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInLogo() {
  return (
    <svg className="social-logo" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 3h-17A2.5 2.5 0 0 0 1 5.5v13A2.5 2.5 0 0 0 3.5 21h17a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 20.5 3ZM8 18H5V9h3v9ZM6.5 7.8A1.75 1.75 0 1 1 6.5 4.3a1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.4c0-1.1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.4V18h-3V9h2.9v1.2h.1c.4-.8 1.4-1.5 2.7-1.5 2.9 0 3.5 1.9 3.5 4.4V18Z" />
    </svg>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>(() =>
    navigator.language.toLowerCase().startsWith("de") ? "de" : "en",
  );
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
  );
  const [page, setPage] = useState<Page>("home");
  const [selectedId, setSelectedId] = useState<string>();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = ui[language];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = language;
  }, [theme, language]);

  const selectedItem = useMemo(
    () => [...projects, ...publications].find((item) => item.id === selectedId),
    [selectedId],
  );

  const navigate = (nextPage: Page, id?: string) => {
    setPage(nextPage);
    setSelectedId(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <Header
        language={language}
        page={page}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        navigate={navigate}
      />
      <main>
        {page === "home" && <Home language={language} navigate={navigate} />}
        {page === "projects" && (
          <Listing
            title={t.allProjects}
            intro={t.projectIntro}
            items={projects}
            language={language}
            navigate={navigate}
          />
        )}
        {page === "publications" && (
          <Listing
            title={t.allPublications}
            intro={t.publicationIntro}
            items={publications}
            language={language}
            navigate={navigate}
          />
        )}
        {page === "about" && <About language={language} />}
        {page === "detail" && selectedItem && (
          <Detail item={selectedItem} language={language} navigate={navigate} />
        )}
      </main>
    </div>
  );
}

function Header({
  language,
  page,
  menuOpen,
  setMenuOpen,
  setLanguage,
  theme,
  setTheme,
  navigate,
}: {
  language: Language;
  page: Page;
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  setLanguage: (value: Language) => void;
  theme: "light" | "dark";
  setTheme: (value: "light" | "dark") => void;
  navigate: (page: Page) => void;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = ui[language];
  const navItems: { id: Page; label: string }[] = [
    { id: "home", label: t.nav.home },
    { id: "projects", label: t.nav.projects },
    { id: "publications", label: t.nav.publications },
    { id: "about", label: t.nav.about },
  ];

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 16);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "header-compact" : ""}`}>
      <div className="header-inner">
        <button className="wordmark" onClick={() => navigate("home")} aria-label={t.nav.home}>
          CH<span>.</span>
        </button>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={page === item.id ? "nav-active" : ""}
              onClick={() => navigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="preferences">
          <button
            className="icon-button language-button"
            onClick={() => setLanguage(language === "de" ? "en" : "de")}
            aria-label={t.language}
            title={t.language}
          >
            <Languages size={17} />
            <span>{language === "de" ? "DE" : "EN"}</span>
          </button>
          <button
            className="icon-button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={t.theme}
            title={t.theme}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.menu}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Home({ language, navigate }: { language: Language; navigate: (page: Page) => void }) {
  const t = ui[language];
  return (
    <>
      <section className="hero section">
        <svg
          className="hero-waves"
          viewBox="0 0 720 600"
          fill="none"
          aria-hidden="true"
        >
          <path d="M18 20C92 116 160 132 244 110C348 83 408 8 530 55C602 83 653 138 720 161" />
          <path d="M72 0C146 72 183 166 284 177C397 190 449 112 544 155C633 195 678 274 720 332" />
          <path d="M154 8C213 67 229 220 341 249C443 276 499 224 563 290C631 359 670 452 720 506" />
        </svg>
        <div className="hero-copy">
          <h1>{t.heroKicker}</h1>
          <p className="hero-role">{profile.role[language]}</p>
          <p className="hero-intro">{profile.intro[language]}</p>
          <div className="hero-actions">
            <ButtonLink onClick={() => navigate("projects")}>
              {t.viewProjects} <ArrowRight size={18} />
            </ButtonLink>
            <ButtonLink secondary onClick={() => navigate("publications")}>
              <FileText size={18} /> {t.readPapers}
            </ButtonLink>
            <ButtonLink secondary onClick={() => navigate("about")}>
              <GraduationCap size={18} /> {t.nav.about}
            </ButtonLink>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src={profile.heroImage} alt={profile.heroAlt[language]} />
          <span className="hero-credit">@Simon Engelhardt</span>
        </div>
      </section>

      <section className="section featured-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.selectedWork}</p>
            <h2>{t.selectedIntro}</h2>
          </div>
        </div>
        <div className="card-grid">
          <ItemCard item={projects[0]} language={language} navigate={navigate} featured showKind />
          <ItemCard item={publications[0]} language={language} navigate={navigate} showKind />
        </div>
      </section>
    </>
  );
}

function Listing({
  title,
  intro,
  items,
  language,
  navigate,
}: {
  title: string;
  intro: string;
  items: PortfolioItem[];
  language: Language;
  navigate: (page: Page, id?: string) => void;
}) {
  return (
    <section className="section page-section">
      <svg
        className="page-waves"
        viewBox="0 0 720 600"
        fill="none"
        aria-hidden="true"
      >
        <path d="M18 20C92 116 160 132 244 110C348 83 408 8 530 55C602 83 653 138 720 161" />
        <path d="M72 0C146 72 183 166 284 177C397 190 449 112 544 155C633 195 678 274 720 332" />
        <path d="M154 8C213 67 229 220 341 249C443 276 499 224 563 290C631 359 670 452 720 506" />
      </svg>
      <div className="page-title">
        <p className="eyebrow">{items[0]?.kind === "project" ? "01 / Work" : "02 / Research"}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <div className="listing-grid">
        {items.map((item, index) => (
          <ItemCard
            key={item.id}
            item={item}
            language={language}
            navigate={navigate}
            featured={index === 0}
          />
        ))}
      </div>
    </section>
  );
}

function ItemCard({
  item,
  language,
  navigate,
  featured = false,
  showKind = false,
}: {
  item: PortfolioItem;
  language: Language;
  navigate: (page: Page, id?: string) => void;
  featured?: boolean;
  showKind?: boolean;
}) {
  const t = ui[language];
  const date = formatPortfolioDate(item.date, language, "short");
  return (
    <article
      className={`item-card ${featured ? "card-featured" : ""}`}
      onClick={() => navigate("detail", item.id)}
    >
      <button className="card-hitarea" aria-label={item.title[language]} />
      <div className={`card-image ${!item.images[0] ? "image-placeholder" : ""}`}>
        {item.images[0] ? (
          <img src={item.images[0].src} alt={item.images[0].alt[language]} />
        ) : (
          <BookOpen size={44} strokeWidth={1.2} />
        )}
        {showKind && (
          <span className="card-kind">
            {item.kind === "project" ? <BriefcaseBusiness size={14} /> : <FileText size={14} />}
            {item.kind === "project" ? t.projectLabel : t.publicationLabel}
          </span>
        )}
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span>{item.eyebrow[language]}</span>
          <time>{date}</time>
        </div>
        <h3>{item.title[language]}</h3>
        <p>{item.description[language]}</p>
        <div className="card-bottom">
          <div className="tags">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <span className="round-arrow">
            <ArrowRight size={18} />
          </span>
        </div>
      </div>
    </article>
  );
}

function Detail({
  item,
  language,
  navigate,
}: {
  item: PortfolioItem;
  language: Language;
  navigate: (page: Page) => void;
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const t = ui[language];
  const returnPage = item.kind === "project" ? "projects" : "publications";
  const date = formatPortfolioDate(item.date, language);

  return (
    <article className="section detail-page">
      <button className="back-link" onClick={() => navigate(returnPage)}>
        <ArrowLeft size={17} /> {t.back}
      </button>
      <div className="detail-heading">
        <div>
          <p className="eyebrow">{item.eyebrow[language]}</p>
          <h1>{item.title[language]}</h1>
        </div>
        <time>{date}</time>
      </div>

      {item.images.length > 0 && (
        <div className="detail-media">
          <>
            <img src={item.images[imageIndex].src} alt={item.images[imageIndex].alt[language]} />
            {item.images.length > 1 && (
              <div className="carousel-controls">
                <button
                  onClick={() => setImageIndex((imageIndex - 1 + item.images.length) % item.images.length)}
                  aria-label={t.previousImage}
                >
                  <ChevronLeft size={20} />
                </button>
                <span>
                  {String(imageIndex + 1).padStart(2, "0")} /{" "}
                  {String(item.images.length).padStart(2, "0")}
                </span>
                <button
                  onClick={() => setImageIndex((imageIndex + 1) % item.images.length)}
                  aria-label={t.nextImage}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        </div>
      )}

      <div className="detail-body">
        <div className="detail-copy">
          {item.kind === "publication" && <h2 className="detail-section-label">Abstract</h2>}
          <p>{item.description[language]}</p>
        </div>
        <aside className="detail-info-card">
          <div className="tags">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          {item.notes && (
            <div className="detail-note">
              <p>{item.notes[language]}</p>
            </div>
          )}
          {item.link && (
            <ButtonLink href={item.link}>
              {item.kind === "project" ? t.visit : t.publication}
              <ExternalLink size={17} />
            </ButtonLink>
          )}
          {item.demoLink && (
            <ButtonLink secondary href={item.demoLink}>
              {t.demo}
              <ExternalLink size={17} />
            </ButtonLink>
          )}
        </aside>
      </div>
    </article>
  );
}

function About({ language }: { language: Language }) {
  const t = ui[language];
  const cvSections = [
    { title: t.experience, icon: BriefcaseBusiness, items: cv.experience },
    { title: t.education, icon: GraduationCap, items: cv.education },
    { title: t.scholarships, icon: Sparkles, items: cv.scholarships },
  ];
  return (
    <section className="section page-section about-page">
      <svg
        className="page-waves"
        viewBox="0 0 720 600"
        fill="none"
        aria-hidden="true"
      >
        <path d="M18 20C92 116 160 132 244 110C348 83 408 8 530 55C602 83 653 138 720 161" />
        <path d="M72 0C146 72 183 166 284 177C397 190 449 112 544 155C633 195 678 274 720 332" />
        <path d="M154 8C213 67 229 220 341 249C443 276 499 224 563 290C631 359 670 452 720 506" />
      </svg>
      <div className="about-intro">
        <div className="about-copy">
          <p className="eyebrow">03 / About</p>
          <p>{profile.about[language]}</p>
        </div>
        <aside className="contact-card">
          <p className="eyebrow">{t.contact}</p>
          <h2>{t.contactText}</h2>
          <a className="contact-mail" href={`mailto:${profile.email}`}>
            <Mail size={18} /> {t.writeMe} <ArrowRight size={17} />
          </a>
          <div className="contact-details">
            <span>
              <MapPin size={16} /> {profile.location}
            </span>
            <div>
              <a
                className="social-link"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitHubLogo />
              </a>
              <a
                className="social-link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInLogo />
              </a>
            </div>
          </div>
        </aside>
      </div>
      <div className="about-layout">
        <div className="cv-list">
          {cvSections.map(({ title, icon: Icon, items }) => (
            <section className="cv-section" key={title}>
              <h2>
                <Icon size={18} /> {title}
              </h2>
              {items.map((item) => (
                <div className="cv-row" key={`${item.period}-${item.place.de}`}>
                  <span>{item.period}</span>
                  <div>
                    <h3>{item.title[language]}</h3>
                    <p>
                      {item.placeLink ? (
                        <a
                          className="cv-place-link"
                          href={item.placeLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.place[language]}
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        item.place[language]
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
