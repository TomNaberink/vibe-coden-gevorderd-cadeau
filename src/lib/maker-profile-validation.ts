import type { MakerProfile } from "@/content/maker-profile";

const safeSlugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function validateMakerProfile(profile: MakerProfile): string[] {
  const errors: string[] = [];
  const slugs = new Set<string>();
  const hasAnyIdentity = Boolean(
    profile.identity.name.trim() ||
      profile.identity.role.trim() ||
      profile.identity.subject?.trim() ||
      profile.identity.educationSector?.trim() ||
      profile.identity.location?.trim() ||
      profile.identity.profileImage,
  );

  if (hasAnyIdentity || profile.projects.length) {
    if (!profile.identity.name.trim()) errors.push("De naam ontbreekt.");
    if (!profile.identity.role.trim()) errors.push("De rol ontbreekt.");
  }

  if (profile.identity.profileImage) {
    if (!profile.identity.profileImage.startsWith("/")) {
      errors.push("De profielfoto moet een lokaal bestand uit public zijn.");
    }
    if (!profile.identity.profileImageAlt?.trim()) {
      errors.push("De profielfoto heeft geen alternatieve tekst.");
    }
  }

  profile.projects.forEach((project, index) => {
    const label = `Project ${index + 1}`;

    if (!safeSlugPattern.test(project.slug)) errors.push(`${label} heeft geen veilige slug.`);
    if (slugs.has(project.slug)) errors.push(`${label} gebruikt een dubbele slug.`);
    slugs.add(project.slug);

    if (!project.title.trim()) errors.push(`${label} heeft geen titel.`);
    if (!project.audienceAndProblem.trim()) {
      errors.push(`${label} mist de doelgroep en het onderwijsprobleem.`);
    }
    if (project.liveUrl && !isHttpUrl(project.liveUrl)) {
      errors.push(`${label} heeft geen geldige http- of https-link.`);
    }
    if (project.image && !project.image.startsWith("/")) {
      errors.push(`${label} gebruikt geen lokale afbeelding.`);
    }
    if (project.image && !project.imageAlt?.trim()) {
      errors.push(`${label} heeft een afbeelding zonder alternatieve tekst.`);
    }
    if (!project.image && project.imageAlt) {
      errors.push(`${label} heeft alternatieve tekst zonder afbeelding.`);
    }
  });

  profile.links.forEach((link, index) => {
    if (!link.label.trim()) errors.push(`Contactlink ${index + 1} heeft geen label.`);
    if (!link.href.trim()) errors.push(`Contactlink ${index + 1} heeft geen bestemming.`);
  });

  return errors;
}
