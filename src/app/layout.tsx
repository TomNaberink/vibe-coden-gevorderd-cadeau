import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { isPortfolioActive, makerProfile } from "@/content/maker-profile";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const activePortfolio = isPortfolioActive(makerProfile);

export const metadata: Metadata = activePortfolio
  ? {
      title: {
        default: `${makerProfile.identity.name} · Onderwijsmaker`,
        template: `%s · ${makerProfile.identity.name}`,
      },
      description: `Portfolio van ${makerProfile.identity.name}, ${makerProfile.identity.role}.`,
    }
  : {
      title: "Onderwijsmaker-portfolio",
      description: "Een schone startertemplate voor een persoonlijk portfolio met echte onderwijsprojecten.",
    };

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={poppins.variable} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
