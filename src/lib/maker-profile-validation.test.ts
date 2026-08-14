import assert from "node:assert/strict";
import test from "node:test";
import {
  getPortfolioMode,
  makerProfile,
  type MakerProfile,
} from "../content/maker-profile";
import { validateMakerProfile } from "./maker-profile-validation";

function createMinimalProfile(): MakerProfile {
  return {
    identity: {
      name: "x",
      role: "x",
    },
    projects: [
      {
        slug: "x",
        title: "x",
        audienceAndProblem: "x",
      },
    ],
    milestones: [],
    credentials: [],
    links: [],
  };
}

function createEmptyProfile(): MakerProfile {
  return {
    identity: { name: "", role: "" },
    projects: [],
    milestones: [],
    credentials: [],
    links: [],
  };
}

test("een volledig lege configuratie toont een geldige startstaat", () => {
  const profile = createEmptyProfile();

  assert.deepEqual(validateMakerProfile(profile), []);
  assert.equal(getPortfolioMode(profile), "starter");
});

test("de actuele configuratie blijft geldig vóór en na personalisatie", () => {
  assert.deepEqual(validateMakerProfile(makerProfile), []);
  assert.ok(["starter", "portfolio"].includes(getPortfolioMode(makerProfile)));
});

test("naam, rol en één geldig project activeren het portfolio", () => {
  const profile = createMinimalProfile();

  assert.deepEqual(validateMakerProfile(profile), []);
  assert.equal(getPortfolioMode(profile), "portfolio");
});

test("alle aanvullende portfolio-onderdelen zijn optioneel", () => {
  const profile = createMinimalProfile();

  assert.equal(profile.identity.profileImage, undefined);
  assert.equal(profile.identity.subject, undefined);
  assert.equal(profile.identity.educationSector, undefined);
  assert.equal(profile.identity.location, undefined);
  assert.equal(profile.vision, undefined);
  assert.deepEqual(profile.milestones, []);
  assert.deepEqual(profile.credentials, []);
  assert.deepEqual(profile.links, []);
  assert.deepEqual(validateMakerProfile(profile), []);
});

test("onvolledige of technisch onveilige projectinhoud activeert niets", () => {
  const profile = createMinimalProfile();
  profile.projects = [
    { slug: "Niet veilig", title: "", audienceAndProblem: "" },
  ];

  assert.ok(validateMakerProfile(profile).length >= 3);
  assert.equal(getPortfolioMode(profile), "starter");
});
