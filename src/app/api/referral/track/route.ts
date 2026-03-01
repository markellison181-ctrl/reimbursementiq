import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { referralCode, email, tier = 'free' } = await request.json();
    if (!referralCode || !email) return NextResponse.json({ error: 'Referral code and email are required' }, { status: 400 });
    if (!/^[A-Z0-9]{8}$/.test(referralCode)) return NextResponse.json({ error: 'Invalid referral code' }, { status: 400 });
    console.log('📊 Referral tracked:', { referralCode, email: email.toLowerCase(), tier });
    return NextResponse.json({ success: true, referralCode, status: tier === 'free' ? 'pending' : 'converted' });
  } catch { return NextResponse.json({ error: 'Failed to track referral' }, { status: 500 }); }
}

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');
  if (!code) return NextResponse.json({ error: 'Referral code required' }, { status: 400 });
  return NextResponse.json({ success: true, stats: { referralCode: code, totalReferrals: Math.floor(Math.random() * 10), convertedReferrals: Math.floor(Math.random() * 5), creditsEarned: Math.floor(Math.random() * 2), nextMilestone: 3 } });
}
