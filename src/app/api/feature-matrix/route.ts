import { NextResponse } from 'next/server';
import { getFeatureMatrix } from '@/lib/data';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const matrix = getFeatureMatrix();
    return NextResponse.json(matrix);
  } catch (error) {
    console.error('Error fetching feature matrix:', error);
    return NextResponse.json({ error: 'Failed to fetch feature matrix' }, { status: 500 });
  }
}
