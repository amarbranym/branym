import RootLayout from '@/utils/components/ui/elements/RootLayout'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/tailwind.css'
import ContactRootLayout from '@/utils/components/ui/elements/ContactRootLayout'

export const metadata = {
  title: {
    template: '%s | Branym Technologies',
    default: 'Innovative Web Solutions for the Modern Digital Landscape.',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <ContactRootLayout>{children}</ContactRootLayout>
        <Analytics />
      </body>
    </html>
  )
}
