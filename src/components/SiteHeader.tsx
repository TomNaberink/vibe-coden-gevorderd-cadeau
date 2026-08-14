import Image from "next/image";
import Link from "next/link";
import {
  isPortfolioActive,
  isValidProject,
  type MakerProfile,
} from "@/content/maker-profile";

type SiteHeaderProps = {
  profile: MakerProfile;
};

export function SiteHeader({ profile }: SiteHeaderProps) {
  const active = isPortfolioActive(profile);

  if (!active) {
    return (
      <header className="site-header starter-header">
        <div className="site-container header-inner">
          <Link className="starter-brand" href="/">
            <strong>Onderwijsmaker-portfolio</strong>
            <small>AI voor Docenten</small>
          </Link>
          <Link className="gift-entry" href="/cadeau">Cursuscadeau</Link>
        </div>
      </header>
    );
  }

  const validProjects = profile.projects.filter(isValidProject);
  const hasDevelopment = Boolean(profile.milestones.length || profile.credentials.length);
  const navigation = [
    { href: "/#uitgelicht", label: "Project", visible: true },
    { href: "/#projecten", label: "Meer projecten", visible: validProjects.length > 1 },
    { href: "/#visie", label: "Visie", visible: Boolean(profile.vision?.story.trim()) },
    { href: "/#ontwikkeling", label: "Ontwikkeling", visible: hasDevelopment },
    { href: "/#contact", label: "Contact", visible: profile.links.length > 0 },
  ].filter((item) => item.visible);
  const hasAdditionalSections = navigation.length > 1;

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link className="maker-identity" href="/" aria-label="Ga naar de startpagina">
          {profile.identity.profileImage ? (
            <Image
              className="maker-avatar"
              src={profile.identity.profileImage}
              alt={profile.identity.profileImageAlt ?? ""}
              width={72}
              height={72}
              sizes="72px"
              priority
            />
          ) : null}
          <span>
            <strong>{profile.identity.name}</strong>
            <small>{profile.identity.role}</small>
          </span>
        </Link>

        {hasAdditionalSections ? (
          <>
            <nav className="desktop-nav" aria-label="Hoofdnavigatie">
              {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
            </nav>

            <details className="mobile-nav">
              <summary>Menu</summary>
              <nav aria-label="Mobiele navigatie">
                {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
              </nav>
            </details>
          </>
        ) : null}
      </div>
    </header>
  );
}
