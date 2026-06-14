import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Postgres Schema Diff Visualizer — Visual diff for database schema changes',
  description: 'Upload two PostgreSQL schema files and get a visual diff showing added, removed, and modified tables and columns. Perfect for backend developers and DBAs.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="14806008-583d-40f4-88e0-3f343b0209ee"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
