import { NextResponse } from 'next/server';
import { painPoints } from '@/lib/data';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const sortedPainPoints = [...painPoints].sort((a, b) => b.opportunity_score - a.opportunity_score);
    return NextResponse.json(sortedPainPoints);
  } catch (error) {
    console.error('Error fetching pain points:', error);
    return NextResponse.json({ error: 'Failed to fetch pain points' }, { status: 500 });
  }
}
