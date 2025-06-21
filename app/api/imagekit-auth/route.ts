import { NextResponse } from 'next/server';
import { getImageKitAuth } from '@/lib/imagekit';

export async function GET() {
  try {
    const authParams = getImageKitAuth();
    return NextResponse.json(authParams);
  } catch (error) {
    console.error('Error generating ImageKit auth:', error);
    return NextResponse.json(
      { error: 'Failed to generate authentication parameters' },
      { status: 500 }
    );
  }
} 