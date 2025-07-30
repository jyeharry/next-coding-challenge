'use client'

import { useCountryCode } from "@/providers/CountryCodeProvider"
import { countryToCurrency, currency } from "@/utils"

export const Price = ({ price }: { price: number }) => {
  const country = useCountryCode()
  return currency(countryToCurrency[country], price)
}
