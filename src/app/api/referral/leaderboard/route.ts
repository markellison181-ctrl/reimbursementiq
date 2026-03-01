import { NextResponse } from 'next/server';

const mockLeaderboard = [
  { name: 'Patricia N.', referralCount: 10, creditsEarned: 3, joinedMonth: 'Jan 2026' },
  { name: 'Michael H.', referralCount: 8, creditsEarned: 2, joinedMonth: 'Feb 2026' },
  { name: 'Sandra K.', referralCount: 6, creditsEarned: 2, joinedMonth: 'Dec 2025' },
  { name: 'Robert J.', referralCount: 5, creditsEarned: 1, joinedMonth: 'Jan 2026' },
  { name: 'Angela M.', referralCount: 4, creditsEarned: 1, joinedMonth: 'Feb 2026' },
  { name: 'David C.', referralCount: 4, creditsEarned: 1, joinedMonth: 'Jan 2026' },
  { name: 'Lisa T.', referralCount: 3, creditsEarned: 1, joinedMonth: 'Feb 2026' },
  { name: 'Kevin W.', referralCount: 3, creditsEarned: 1, joinedMonth: 'Jan 2026' },
  { name: 'Nancy R.', referralCount: 2, creditsEarned: 0, joinedMonth: 'Dec 2025' },
  { name: 'Brian F.', referralCount: 2, creditsEarned: 0, joinedMonth: 'Feb 2026' },
];

export async function GET() {
  const leaderboard = mockLeaderboard.sort((a, b) => b.referralCount - a.referralCount).map((e, i) => ({ ...e, rank: i + 1, isCurrentUser: false }));
  return NextResponse.json({ success: true, leaderboard, stats: { totalReferrers: leaderboard.length, totalReferrals: leaderboard.reduce((s, e) => s + e.referralCount, 0), totalCredits: leaderboard.reduce((s, e) => s + e.creditsEarned, 0), lastUpdated: new Date().toISOString() } });
}
