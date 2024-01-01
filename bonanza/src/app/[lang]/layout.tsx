"use client"
import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from 'next/font/local';
import './globals.css'
import Header from "@/app/[lang]/components/Header";
import Footer from "@/app/[lang]/components/Footer";
import { usePathname, useSearchParams } from 'next/navigation';
import {useEffect, useState} from "react";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const [currentLocale, setCurrentLocale] = useState('en');

    useEffect(() => {
        // Function to parse the cookie
        const getCookie = (name: string) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            const lastPart = parts.pop();

            if (lastPart) {
                return lastPart.split(';').shift();
            }

            return null;
        };

        // Update currentLocale based on the cookie
        const localeFromCookie = getCookie('NEXT_LOCALE');
        if (localeFromCookie) {
            setCurrentLocale(localeFromCookie);
        }

        // Update the lang attribute of the html tag
        document.documentElement.lang = currentLocale;
    }, [currentLocale]);

    return (
    <html lang={currentLocale}>
      <body className={museo_sans.className}>
      <Header params={{ lang: currentLocale }} />
      {children}
      <Footer />
      <SpeedInsights />
      </body>
    </html>
  )
}
