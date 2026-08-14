import { PortfolioHome } from "@/components/PortfolioHome";
import { makerProfile } from "@/content/maker-profile";

export default function HomePage() {
  return <PortfolioHome profile={makerProfile} />;
}
