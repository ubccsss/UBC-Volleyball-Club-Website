export default function SignupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body>
          <div>
            {children}
          </div>
        </body>
      </html>
    )
  }