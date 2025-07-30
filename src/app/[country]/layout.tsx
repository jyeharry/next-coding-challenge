import { CountryCodeProvider } from "@/providers/CountryCodeProvider"

export default function CountryLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: { country: string }
}) {
  return <CountryCodeProvider countryCode={params.country}>{children}</CountryCodeProvider>
}
