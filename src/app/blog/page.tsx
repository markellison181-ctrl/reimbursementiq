import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — ReimbursementIQ',
  description: 'Healthcare reimbursement insights, CMS policy analysis, and revenue cycle intelligence.',
};

const posts = [
  {
    slug: 'cms-2026-opps-rule-impact',
    title: 'CMS 2026 OPPS Final Rule: What It Means for Hospital Outpatient Revenue',
    excerpt: 'Breaking down the 2.9% payment update, revised packaging thresholds, and new separately payable drug administration codes in the CY2026 OPPS final rule.',
    date: 'Feb 20, 2026',
    readTime: '8 min read',
    tag: 'CMS Policy',
  },
  {
    slug: 'reduce-prior-auth-denials-2026',
    title: '5 Strategies to Reduce Prior Authorization Denials in 2026',
    excerpt: 'Prior auth denials surged 18% last quarter. Here are proven strategies revenue cycle teams are using to fight back and recover lost revenue.',
    date: 'Feb 14, 2026',
    readTime: '6 min read',
    tag: 'Denial Management',
  },
  {
    slug: 'cpt-code-changes-july-2026',
    title: 'New CPT Codes for Remote Monitoring: July 2026 Update Guide',
    excerpt: 'AMA approved 8 new CPT codes for remote therapeutic monitoring. Here\'s what you need to know about billing, coverage, and implementation timelines.',
    date: 'Feb 7, 2026',
    readTime: '7 min read',
    tag: 'CPT/ICD Updates',
  },
];

export default function BlogPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-gray-light text-lg">Deep dives into healthcare reimbursement trends, policy changes, and revenue cycle strategy.</p>
        </div>
        <div className="space-y-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="block glass rounded-xl p-6 sm:p-8 hover:glow transition-shadow duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-0.5 rounded bg-teal/10 text-teal text-xs font-semibold">{post.tag}</span>
                <span className="text-gray-light text-sm">{post.date}</span>
                <span className="text-gray-light text-sm">· {post.readTime}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal transition-colors mb-2">{post.title}</h2>
              <p className="text-gray-light">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
