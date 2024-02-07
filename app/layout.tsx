import "@/src/styles/globals.css"
import "@/src/styles/globals.css"
import { Metadata } from "next"
import { fontSans } from "@/src/utils/fonts"
import { cn } from "@/src/utils/utils"

import { siteConfig } from "@/src/config/site"
import { SiteHeader } from "@/src/components/header/navbar"
import { ThemeProvider } from "@/src/components/providers/theme_provider"
import { TailwindIndicator } from "@/src/components/utils/tailwind_indicator"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex max-h-screen flex-col">
              <SiteHeader />
              <div>{children}</div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
