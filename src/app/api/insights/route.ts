import { NextResponse } from 'next/server';
import { insights } from '@/lib/data';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    return NextResponse.json(insights);
  } catch (error) {
    console.error('Error fetching insights:', error);
    return NextResponse.json({ error: 'Failed to fetch insights' }, { status: 500 });
  }
}
