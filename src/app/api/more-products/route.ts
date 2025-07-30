import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('https://v0-api-endpoint-request.vercel.app/api/more-products')
    const data = await res.json()

    if (!data.success) throw new Error('Failed to fetch products')

    return NextResponse.json({ products: data.recommendations })
  } catch (error) {
    return NextResponse.json(
      { error: error },
      { status: 500 }
    )
  }
}
