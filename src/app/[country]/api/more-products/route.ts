import { RawProduct, ValidCountry } from '@/types'
import { countryToCurrency } from '@/utils'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { country: ValidCountry } }
) {
  try {
    const res = await fetch('https://v0-api-endpoint-request.vercel.app/api/more-products')
    const data = await res.json() as { success: boolean, recommendations: RawProduct[] }

    if (!data.success) throw new Error('Failed to fetch products')

    console.log('data', data)
    console.log('data', params)

    return NextResponse.json({
      products: data.recommendations.map((product) => ({
        id: product.id,
        name: product.name[params.country],
        price: product.price[countryToCurrency[params.country]],
        stock: product.stock,
      }))
    })
  } catch (error) {
    return NextResponse.json(
      { error: error },
      { status: 500 }
    )
  }
}
