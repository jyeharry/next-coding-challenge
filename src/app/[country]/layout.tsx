import { CountryCodeProvider } from "@/providers/CountryCodeProvider"
import { ValidCountry } from "@/types"

export default function CountryLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: { country: ValidCountry }
}) {
  return <CountryCodeProvider countryCode={params.country}>{children}</CountryCodeProvider>
}
