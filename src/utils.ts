export const countryToCurrency = {
  uk: 'gbp',
  us: 'usd',
} as const

export const currency = (currencyCode: string, amount: number) => {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);
}

