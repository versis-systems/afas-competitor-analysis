import { NextResponse } from 'next/server';
import { competitors } from '@/lib/data';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const sortedCompetitors = [...competitors].sort((a, b) => b.market_share - a.market_share);
    return NextResponse.json(sortedCompetitors);
  } catch (error) {
    console.error('Error fetching competitors:', error);
    return NextResponse.json({ error: 'Failed to fetch competitors' }, { status: 500 });
  }
}
