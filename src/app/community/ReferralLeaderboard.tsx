'use client';

import { useState, useEffect } from 'react';

interface LeaderboardEntry { rank: number; name: string; referralCount: number; creditsEarned: number; joinedMonth: string; isCurrentUser?: boolean; }

export default function ReferralLeaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/referral/leaderboard').then(r => r.json()).then(d => { setLeaderboard(d.leaderboard); setLoading(false); }).catch(() => setLoading(false));
  }, []);

  const getRankIcon = (rank: number) => {
    const icons: Record<number, string> = { 1: '👑', 2: '🥈', 3: '🥉' };
    if (icons[rank]) return <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg"><span className="text-sm">{icons[rank]}</span></div>;
    return <div className="w-8 h-8 glass rounded-full flex items-center justify-center"><span className="text-teal text-sm font-bold">#{rank}</span></div>;
  };

  if (loading) return <div className="text-center py-12"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal mx-auto mb-4"></div><p className="text-gray-400">Loading leaderboard...</p></div>;

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-teal to-white bg-clip-text text-transparent">🏆 Referral Champions</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Top referrers helping grow the ReimbursementIQ community.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        {leaderboard.slice(0, 3).map((entry) => (
          <div key={entry.rank} className={`text-center p-6 rounded-2xl border shadow-2xl hover:scale-105 transition-all ${
            entry.rank === 1 ? 'bg-gradient-to-br from-teal/30 to-teal/10 border-teal/50' :
            entry.rank === 2 ? 'bg-gradient-to-br from-gray-400/20 to-gray-600/10 border-gray-400/30' :
            'bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 border-yellow-400/30'
          }`}>
            <div className="flex justify-center mb-4">{getRankIcon(entry.rank)}</div>
            <h3 className="font-bold text-white text-lg mb-2">{entry.name}</h3>
            <div className="text-2xl font-bold text-teal mb-2">{entry.referralCount}</div>
            <p className="text-gray-400 text-sm">Successful Referrals</p>
          </div>
        ))}
      </div>

      <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-6 bg-gradient-to-r from-teal/20 to-teal/10 border-b border-white/10">
          <h3 className="text-xl font-bold text-white text-center">Complete Leaderboard</h3>
        </div>
        <table className="w-full">
          <thead><tr className="border-b border-white/10">
            <th className="text-left p-4 text-gray-300 font-medium">Rank</th>
            <th className="text-left p-4 text-gray-300 font-medium">Name</th>
            <th className="text-center p-4 text-gray-300 font-medium">Referrals</th>
            <th className="text-center p-4 text-gray-300 font-medium">Credits</th>
            <th className="text-center p-4 text-gray-300 font-medium">Joined</th>
          </tr></thead>
          <tbody>
            {leaderboard.map((e) => (
              <tr key={e.rank} className="border-b border-white/5 hover:bg-white/10">
                <td className="p-4">{getRankIcon(e.rank)}</td>
                <td className="p-4 font-medium text-white">{e.name}</td>
                <td className="p-4 text-center text-2xl font-bold text-teal">{e.referralCount}</td>
                <td className="p-4 text-center"><div className="text-green-400 font-semibold">${e.creditsEarned * 29}</div><div className="text-xs text-gray-500">{e.creditsEarned} months</div></td>
                <td className="p-4 text-center text-gray-400 text-sm">{e.joinedMonth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
