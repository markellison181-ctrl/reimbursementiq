import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-teal text-3xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          This claim was denied — page not found. Let&apos;s get you back to the reimbursement intelligence that matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-teal text-navy px-6 py-3 rounded font-semibold hover:bg-teal-light transition-all duration-200"
          >
            Back to Home
          </Link>
          <Link
            href="/#subscribe"
            className="border border-teal/40 text-teal px-6 py-3 rounded font-semibold hover:bg-teal/10 transition-all duration-200"
          >
            Subscribe Free
          </Link>
        </div>
        <div className="mt-10 flex justify-center gap-6 text-sm">
          <Link href="/archive" className="text-gray-400 hover:text-teal transition-colors">Archive</Link>
          <Link href="/blog" className="text-gray-400 hover:text-teal transition-colors">Blog</Link>
          <Link href="/pricing" className="text-gray-400 hover:text-teal transition-colors">Pricing</Link>
        </div>
      </div>
    </div>
  );
}
