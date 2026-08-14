import Image from "next/image";
import {
  getFeaturedProject,
  isPortfolioActive,
  isValidProject,
  type MakerProfile,
  type MakerProject,
} from "@/content/maker-profile";
import { SiteHeader } from "./SiteHeader";

type PortfolioHomeProps = {
  profile: MakerProfile;
};

function ProjectVisual({ project, featured = false }: { project: MakerProject; featured?: boolean }) {
  if (project.image) {
    return (
      <div className={featured ? "featured-project-visual" : "project-image"}>
        <Image
          src={project.image}
          alt={project.imageAlt ?? ""}
          fill
          priority={featured}
          sizes={featured ? "(max-width: 760px) 100vw, 62vw" : "(max-width: 760px) 100vw, 48vw"}
        />
        {featured ? <span className="visual-label">Uitgelicht project</span> : null}
      </div>
    );
  }

  return (
    <div className={featured ? "project-typographic-visual featured-project-visual" : "project-typographic-visual project-image"}>
      <span>Onderwijsapp</span>
      <strong>{project.title}</strong>
      <i aria-hidden="true" />
    </div>
  );
}

function StarterState({ profile }: PortfolioHomeProps) {
  return (
    <>
      <SiteHeader profile={profile} />
      <main id="main-content" className="starter-state">
        <div className="site-container starter-grid">
          <section className="starter-copy" aria-labelledby="starter-title">
            <p className="eyebrow">Onderwijsmaker-portfolio</p>
            <h1 id="starter-title">Jouw portfolio staat klaar om persoonlijk te maken.</h1>
            <p>
              Deze starter wordt een persoonlijk portfolio zodra een naam, onderwijsrol en één echt project zijn toegevoegd.
            </p>
          </section>
          <div className="starter-art" aria-hidden="true">
            <span className="starter-art-line" />
            <span className="starter-art-sheet starter-art-sheet-back" />
            <span className="starter-art-sheet starter-art-sheet-front">
              <i />
              <i />
              <i />
            </span>
          </div>
        </div>
      </main>
      <footer className="starter-footer">
        <div className="site-container footer-inner">
          <p>Onderwijsmaker-portfolio</p>
          <p>Een cursuscadeau van AI voor Docenten</p>
        </div>
      </footer>
    </>
  );
}

export function PortfolioHome({ profile }: PortfolioHomeProps) {
  const featuredProject = getFeaturedProject(profile);

  if (!isPortfolioActive(profile) || !featuredProject) {
    return <StarterState profile={profile} />;
  }

  const validProjects = profile.projects.filter(isValidProject);
  const otherProjects = validProjects.filter((project) => project.slug !== featuredProject.slug);
  const identityContext = [
    profile.identity.subject,
    profile.identity.educationSector,
    profile.identity.location,
  ].filter(Boolean);
  const hasDevelopment = Boolean(profile.milestones.length || profile.credentials.length);

  return (
    <>
      <a className="skip-link" href="#main-content">Ga naar de inhoud</a>
      <SiteHeader profile={profile} />
      <main id="main-content">
        <section className="portfolio-hero" id="uitgelicht" aria-labelledby="hero-title">
          <div className="site-container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Uitgelicht onderwijsproject</p>
              <h1 id="hero-title">{featuredProject.title}</h1>
              <p className="hero-statement">{featuredProject.audienceAndProblem}</p>
              {identityContext.length ? <p className="project-context">{identityContext.join(" · ")}</p> : null}
              {featuredProject.description ? <p className="project-description">{featuredProject.description}</p> : null}
              {featuredProject.liveUrl ? (
                <div className="hero-actions">
                  <a className="button button-primary" href={featuredProject.liveUrl} target="_blank" rel="noreferrer">
                    Open de app
                  </a>
                </div>
              ) : null}
            </div>
            <ProjectVisual project={featuredProject} featured />
          </div>
        </section>

        {otherProjects.length ? (
          <section className="section projects-section" id="projecten" aria-labelledby="projects-title">
            <div className="site-container">
              <div className="section-heading">
                <p className="section-label">Meer gemaakt</p>
                <h2 id="projects-title">Meer onderwijsprojecten</h2>
              </div>
              <div className="project-list">
                {otherProjects.map((project) => (
                  <article className="project-row" key={project.slug}>
                    <ProjectVisual project={project} />
                    <div className="project-copy">
                      <h3>{project.title}</h3>
                      <p className="project-summary">{project.audienceAndProblem}</p>
                      {project.description ? <p>{project.description}</p> : null}
                      {project.result ? <p className="project-result"><strong>Resultaat</strong>{project.result}</p> : null}
                      {project.liveUrl ? (
                        <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Open de app</a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {profile.vision?.story.trim() ? (
          <section className="section vision-section" id="visie" aria-labelledby="vision-title">
            <div className="site-container vision-grid">
              <p className="section-label section-label-light">Onderwijsvisie</p>
              <div>
                {profile.vision.headline ? <h2 id="vision-title">{profile.vision.headline}</h2> : <h2 id="vision-title">Onderwijsvisie</h2>}
                <p>{profile.vision.story}</p>
              </div>
              {profile.vision.principles?.length ? (
                <ol className="principle-list">
                  {profile.vision.principles.map((principle, index) => (
                    <li key={principle}><span>{String(index + 1).padStart(2, "0")}</span>{principle}</li>
                  ))}
                </ol>
              ) : null}
            </div>
          </section>
        ) : null}

        {hasDevelopment ? (
          <section className="section development-section" id="ontwikkeling" aria-labelledby="development-title">
            <div className="site-container">
              <div className="section-heading compact-heading">
                <p className="section-label">Ontwikkeling</p>
                <h2 id="development-title">Professionele ontwikkeling</h2>
              </div>
              {profile.milestones.length ? (
                <ol className="timeline">
                  {profile.milestones.map((milestone) => (
                    <li key={`${milestone.period}-${milestone.title}`}>
                      <time>{milestone.period}</time>
                      <div><h3>{milestone.title}</h3><p>{milestone.description}</p></div>
                    </li>
                  ))}
                </ol>
              ) : null}
              {profile.credentials.length ? (
                <div className="credentials-list">
                  {profile.credentials.map((credential) => (
                    <article key={`${credential.period ?? ""}-${credential.title}`}>
                      {credential.period || credential.issuer ? <p>{[credential.period, credential.issuer].filter(Boolean).join(" · ")}</p> : null}
                      <h3>{credential.title}</h3>
                      {credential.description ? <span>{credential.description}</span> : null}
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        {profile.links.length ? (
          <section className="section contact-section" id="contact" aria-labelledby="contact-title">
            <div className="site-container contact-grid">
              <p className="section-label section-label-light">Contact</p>
              <h2 id="contact-title">Contact</h2>
              <div className="contact-links">
                {profile.links.map((link) => <a className="button button-light" href={link.href} key={link.href}>{link.label}</a>)}
              </div>
            </div>
          </section>
        ) : null}
      </main>

      <footer className="site-footer">
        <div className="site-container footer-inner">
          <p><strong>{profile.identity.name}</strong> · {profile.identity.role}</p>
          <p>Ontstaan na Vibe Coden Gevorderd · <a href="https://aivoordocenten.nl/">AI voor Docenten</a></p>
        </div>
      </footer>
    </>
  );
}
