'use client'
import Link from 'next/link';
import {useEffect, useState} from "react";
import MobileHeader from "@/app/[lang]/components/MobileHeader";
import LanguageIcon from "../../../../public/language.svg";
import HorizontalLogo from "../../../../public/bonanza-horizontal-combination-mark.svg";
import Image from "next/image";
import { handleLanguageSwitch } from "@/languageSwitcher";
import { dictionary } from '@/content';
import CookieConsent from "@/app/[lang]/components/CookieConsent";

const Header = ({ params }: { params: { lang: string, onLanguageSwitch: () => void}}) => {
    const [hovered, setHovered] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [bgColor, setBgColor] = useState(false);
    const clientPortalUrl= "https://giannina-fuentes.clientsecure.me";

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1279px)');

        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
            setIsMobileView(e.matches);
        };

        mediaQuery.addListener(handleMediaQueryChange);
        setIsMobileView(mediaQuery.matches);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (currentScrollPos > prevScrollPos) {
                // scrolling down
                setVisible(false);
            } else {
                // scrolling up
                setVisible(true);
            }

            if (currentScrollPos >= 90) {
                setBgColor(true);
            } else {
                setBgColor(false);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            // clean event on unmount
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <>
            {isMobileView ? (
                <MobileHeader params={{ lang: params.lang, onLanguageSwitch: params.onLanguageSwitch }}/>
            ) : (
                <>
                    <header className={`app-header ${visible ? "visible" : "hidden"} ${bgColor ? 'bg-color' : ''}`}>
                        <nav className="navigation">
                            <Link href="/" className="logo-link">
                                <Image className="logo-header"
                                     src={HorizontalLogo}
                                     alt="Bonanza Logo"/>
                            </Link>
                            <Link href="/about">{dictionary[params.lang]?.headerAbout}</Link>
                            <Link href="/services">{dictionary[params.lang]?.headerServices}</Link>
                            <Link href="/contact">{dictionary[params.lang]?.headerContact}</Link>
                            <Link href="/faq">{dictionary[params.lang]?.headerFAQ}</Link>
                        </nav>

                        <div className="header-action">
                            <span
                                className="navigation-language-header"
                                onClick={params.onLanguageSwitch}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Image className={`language-icon-header ${hovered ? 'visible' : ''}`}
                                     src={LanguageIcon}
                                     alt="Language Icon"/>
                                <div
                                    className={`language-header-translation ${hovered ? 'visible' : ''}`}
                                    >
                                    {dictionary[params.lang]?.headerLanguagePrefix} &nbsp;
                                </div>
                                <div
                                    className={`language-header ${hovered ? '' : 'visible'}`}
                                >
                                    {dictionary[params.lang]?.headerLanguage}
                                </div>
                            </span>
                            <Link href={clientPortalUrl} target="_blank" rel="noopener noreferrer">
                                <button className="header-button">{dictionary[params.lang]?.headerSchedule}</button>
                            </Link>
                        </div>
                    </header>
                </>
            )}
        </>
    );
};

export default Header;
