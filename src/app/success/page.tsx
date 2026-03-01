import type { Metadata } from "next";
import { Suspense } from "react";
import SuccessContent from "./SuccessContent";

export const metadata: Metadata = {
  title: "Welcome to ReimbursementIQ Pro! — ReimbursementIQ",
  description: "Your ReimbursementIQ Pro subscription is active. Get ready for weekly healthcare reimbursement intelligence.",
};

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto px-6 py-16 text-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
