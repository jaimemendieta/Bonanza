import type { Metadata } from 'next'
import localFont from 'next/font/local';
import './globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const museo_sans = localFont({
    src: [
        {
            path: '../fonts/MuseoSans-100.otf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../fonts/MuseoSans-100Italic.otf',
            weight: '100',
            style: 'italic',
        },
        {
            path: '../fonts/MuseoSans-300.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/MuseoSans-300Italic.otf',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../fonts/MuseoSans-500.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/MuseoSans-500Italic.otf',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../fonts/MuseoSans-700.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/MuseoSans-700Italic.otf',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../fonts/MuseoSansDisplay-Light.ttf',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../fonts/MuseoSans-900Italic.otf',
            weight: '900',
            style: 'italic',
        },
    ]
});

const museo_sans_display = localFont({
    src: [
        {
            path: '../fonts/MuseoSansDisplay-Light.ttf',
            weight: '300',
            style: 'normal',
        },
    ]
});

export const metadata: Metadata = {
  title: 'Bonanza',
  description: 'Counseling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
    <html lang="en">
      <body className={museo_sans.className}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
