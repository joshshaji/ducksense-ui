import type { Metadata } from "next"
import "./globals.css"
import { AuthProvider } from "./providers/AuthProvider"

export const metadata: Metadata = {
  title: "DuckSense",
  description: "Inteligent document understanding using AI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}