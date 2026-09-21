import type { Metadata } from "next";
import ReformasPlanLanding, { getReformasPlanMetadata } from "@/components/ReformasPlanLanding";

export const metadata: Metadata = getReformasPlanMetadata("premium");

export default function ReformasPremiumPage() {
  return <ReformasPlanLanding plan="premium" />;
}
