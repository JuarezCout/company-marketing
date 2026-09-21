import type { Metadata } from "next";
import ReformasPlanLanding, { getReformasPlanMetadata } from "@/components/ReformasPlanLanding";

export const metadata: Metadata = getReformasPlanMetadata("pro");

export default function ReformasProPage() {
  return <ReformasPlanLanding plan="pro" />;
}
