'use client'
import Link from 'next/link';
import {useEffect, useState} from "react";
import MobileHeader from "@/components/MobileHeader";
import LanguageIcon from "../../public/language.svg";
import Image from "next/image";

const Header = () => {
    const [hovered, setHovered] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);


    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1220px)');

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
                <MobileHeader />
            ) : (
                <header className={`app-header ${visible ? "visible" : "hidden"}`}>
                    <nav className="navigation">
                        <Link href="/" className="logo-link">
                            <Image className="logo-header"
                                 src="/bonanza-horizontal-combination-mark.svg"
                                 alt="Bonanza Logo"/>
                        </Link>
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/faq">FAQ</Link>
                    </nav>

                    <div className="header-action">
                        <span
                            className="navigation-language-header"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image className={`language-icon-header ${hovered ? 'visible' : ''}`}
                                 src="/language.svg"
                                 alt="Language Icon"/>
                            <div
                                className={`language-header-translation ${hovered ? 'visible' : ''}`}
                                >
                                Ver en&nbsp;
                            </div>
                            <div
                                className={`language-header ${hovered ? '' : 'visible'}`}
                            >
                                Español
                            </div>
                        </span>
                        <button className="header-button">SCHEDULE APPOINTMENT</button>
                    </div>
                </header>
            )}
        </>
    );
};

export default Header;
