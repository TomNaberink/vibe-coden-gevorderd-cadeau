/**
 * Deze configuratie wordt als lege starter geleverd.
 *
 * Personaliseer haar alleen na de intake en bevestiging uit START-HIER.md.
 * Voeg nooit voorbeeldpersonen, fictieve projecten of verzonnen resultaten toe.
 */

export type MakerLink = {
  label: string;
  href: string;
};

export type MakerProject = {
  slug: string;
  title: string;
  audienceAndProblem: string;
  liveUrl?: string;
  image?: string;
  imageAlt?: string;
  description?: string;
  result?: string;
  featured?: boolean;
};

export type MakerMilestone = {
  period: string;
  title: string;
  description: string;
};

export type MakerCredential = {
  title: string;
  issuer?: string;
  period?: string;
  description?: string;
};

export type MakerProfile = {
  identity: {
    name: string;
    role: string;
    subject?: string;
    educationSector?: string;
    location?: string;
    profileImage?: string;
    profileImageAlt?: string;
  };
  projects: MakerProject[];
  vision?: {
    headline?: string;
    story: string;
    principles?: string[];
  };
  milestones: MakerMilestone[];
  credentials: MakerCredential[];
  links: MakerLink[];
};

export const makerProfile: MakerProfile = {
  identity: {
    name: "",
    role: "",
  },
  projects: [],
  milestones: [],
  credentials: [],
  links: [],
};

export function isValidProject(project: MakerProject): boolean {
  return Boolean(
    project.slug.trim() &&
      project.title.trim() &&
      project.audienceAndProblem.trim(),
  );
}

export function getFeaturedProject(profile: MakerProfile = makerProfile) {
  return (
    profile.projects.find((project) => project.featured && isValidProject(project)) ??
    profile.projects.find(isValidProject)
  );
}

export function isPortfolioActive(profile: MakerProfile = makerProfile): boolean {
  return Boolean(
    profile.identity.name.trim() &&
      profile.identity.role.trim() &&
      getFeaturedProject(profile),
  );
}

export function getPortfolioMode(profile: MakerProfile = makerProfile) {
  return isPortfolioActive(profile) ? "portfolio" : "starter";
}
