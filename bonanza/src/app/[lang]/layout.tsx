"use client"
import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from 'next/font/local';
import './globals.css'
import Header from "@/app/[lang]/components/Header";
import Footer from "@/app/[lang]/components/Footer";
import { usePathname, useSearchParams } from 'next/navigation';
import React, {useEffect, useState, useSyncExternalStore} from "react";
import {handleLanguageSwitch} from "@/languageSwitcher";
import CookieConsent from "@/app/[lang]/components/CookieConsent";

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

const subscribeToBrowserSettings = () => () => {};

const getCookie = (name: string) => {
    if (typeof document === 'undefined') {
        return null;
    }

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    const lastPart = parts.pop();

    if (lastPart) {
        return lastPart.split(';').shift();
    }

    return null;
};

const getLocaleSnapshot = () => {
    const localeFromCookie = getCookie('NEXT_LOCALE');

    if (localeFromCookie) {
        return localeFromCookie;
    }

    if (typeof navigator !== 'undefined' && ['en', 'es'].includes(navigator.language)) {
        return navigator.language;
    }

    return 'en';
};

const getServerLocaleSnapshot = () => 'en';

const getCookieConsentSnapshot = () => {
    if (typeof localStorage === 'undefined') {
        return false;
    }

    return localStorage.getItem('cookieConsent') === null;
};

const getServerCookieConsentSnapshot = () => false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const currentLocale = useSyncExternalStore(
        subscribeToBrowserSettings,
        getLocaleSnapshot,
        getServerLocaleSnapshot,
    );
    const shouldShowCookieConsent = useSyncExternalStore(
        subscribeToBrowserSettings,
        getCookieConsentSnapshot,
        getServerCookieConsentSnapshot,
    );
    const [showCookieConsent, setShowCookieConsent] = useState(false);
    const [pendingLanguageSwitch, setPendingLanguageSwitch] = useState(false);

    useEffect(() => {
        document.documentElement.lang = currentLocale;
    }, [currentLocale]);

    const showCookieConsentUI = () => {
        setShowCookieConsent(true);
        setPendingLanguageSwitch(true);
    };

    const handleUserDecision = (accepted: boolean) => {
        setShowCookieConsent(false);
        if (accepted) {
            localStorage.setItem('cookieConsent', 'accepted');
            document.cookie = `NEXT_LOCALE=${currentLocale}; path=/; max-age=31536000; samesite=lax`;
            if (pendingLanguageSwitch) {
                handleLanguageSwitch(() => {}, true);
            }
        } else {
            localStorage.setItem('cookieConsent', 'denied');
        }
        setPendingLanguageSwitch(false);
    };

    const onLanguageSwitch = () => {
        handleLanguageSwitch(showCookieConsentUI);
    };

    return (
    <html lang={currentLocale}>
      <body className={museo_sans.className}>
      <Header params={{ lang: currentLocale, onLanguageSwitch }} />
      {children}
      <Footer params={{ lang: currentLocale, onLanguageSwitch }} />
      {(showCookieConsent || shouldShowCookieConsent) && <CookieConsent onDecision={handleUserDecision} params={{ lang: currentLocale }} />}
      <SpeedInsights />
      </body>
    </html>
  )
}
