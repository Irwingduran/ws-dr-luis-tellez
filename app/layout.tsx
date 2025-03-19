import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Luis Miguel Téllez Bernés',
  description: 'Otorrinolaringología y Cirugía de Cabeza y Cuello, Rinología & Cirugía Estética Facial',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
