import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { paths, secret } = body;

    // Verify secret to prevent unauthorized cache clearing
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      );
    }

    // Default paths to revalidate if none provided
    const pathsToRevalidate = paths || ['/', '/about', '/admin'];

    // Revalidate each path
    for (const path of pathsToRevalidate) {
      revalidatePath(path);
    }

    return NextResponse.json({
      message: 'Cache revalidated successfully',
      paths: pathsToRevalidate,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error revalidating cache:', error);
    return NextResponse.json(
      { message: 'Error revalidating cache', error: error.message },
      { status: 500 }
    );
  }
}

// Allow GET requests for manual testing
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get('secret');
  const path = searchParams.get('path') || '/';

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: 'Invalid secret' },
      { status: 401 }
    );
  }

  try {
    revalidatePath(path);
    return NextResponse.json({
      message: `Cache revalidated for path: ${path}`,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error revalidating cache', error: error.message },
      { status: 500 }
    );
  }
}
