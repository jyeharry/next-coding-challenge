import { countryToCurrency } from "./utils"

export type RawProduct = {
  id: number,
  name: {
    us: string,
    uk: string
  },
  price: {
    usd: number,
    gbp: number,
  },
  stock: number,
}

export type Product = {
  id: number,
  name: string,
  price: number,
  stock: number,
}

export type ValidCountry = keyof typeof countryToCurrency
