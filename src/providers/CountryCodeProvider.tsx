'use client'
import { createContext, useContext } from "react"

const CountryCodeContext = createContext('gb')

export const CountryCodeProvider = ({ children, countryCode }: { children: React.ReactNode, countryCode: string }) => {
  return (
    <CountryCodeContext.Provider value={countryCode}>
      {children}
    </CountryCodeContext.Provider>
  )
}

export const useCountryCode = () => {
  const context = useContext(CountryCodeContext);
  if (context === undefined) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
}
