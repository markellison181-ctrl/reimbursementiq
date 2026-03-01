import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-teal/10 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center font-bold text-navy text-sm">RQ</div>
              <span className="text-lg font-bold text-white">Reimbursement<span className="text-teal">IQ</span></span>
            </div>
            <p className="text-gray-light text-sm">Healthcare reimbursement intelligence for revenue cycle leaders.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <div className="space-y-2">
              <Link href="/pricing" className="block text-gray-light text-sm hover:text-white transition-colors">Pricing</Link>
              <Link href="/archive" className="block text-gray-light text-sm hover:text-white transition-colors">Newsletter Archive</Link>
              <Link href="/blog" className="block text-gray-light text-sm hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Topics</h4>
            <div className="space-y-2">
              <span className="block text-gray-light text-sm">CMS Policy Updates</span>
              <span className="block text-gray-light text-sm">CPT/ICD Code Changes</span>
              <span className="block text-gray-light text-sm">Payer Policy Shifts</span>
              <span className="block text-gray-light text-sm">Denial Trends</span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-gray-light text-sm hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block text-gray-light text-sm hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-teal/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-light text-sm">&copy; {new Date().getFullYear()} ReimbursementIQ. A <a href="https://signalstackmedia.com" className="text-teal hover:underline">SignalStack Media</a> publication.</p>
        </div>
      </div>
    </footer>
  );
}
