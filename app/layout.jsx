import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'kAIzen | AI Software Solutions',
  description: 'Enterprise AI integrations and web applications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      {/* Applies the clean Plus Jakarta Sans font globally */}
      <body className="font-['Plus_Jakarta_Sans',sans-serif] bg-sky-200 dark:bg-slate-950 text-slate-900 transition-colors duration-500 dark:text-slate-50 min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}