import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — ReimbursementIQ",
  description: "ReimbursementIQ pricing: Free weekly CMS policy digest, $29/mo Pro with daily reimbursement alerts and payer tracking, $99/mo Enterprise for revenue cycle teams.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
