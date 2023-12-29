import "@/src/styles/globals.css"
import { SiteHeader } from "@/src/components/site-header"

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div>
          <SiteHeader />
          <div>{children}</div>
        </div>
      </body>

    </html>
  )
}