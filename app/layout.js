import './globals.css'

export const metadata = {
  title: 'The Road to Bitcoin',
  description: 'An interactive timeline of Bitcoin history',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
