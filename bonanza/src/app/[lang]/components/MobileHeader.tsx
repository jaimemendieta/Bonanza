'use client'
import Link from 'next/link';
import {useEffect, useState} from "react";
import HorizontalLogo from "../../../../public/bonanza-horizontal-combination-mark.svg";
import Image from "next/image";
import { handleLanguageSwitch } from "@/languageSwitcher";
import { dictionary } from '@/content';


const MobileHeader = ({ params }: { params: { lang: string } }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [bgColor, setBgColor] = useState(false);
    const clientPortalUrl= "https://giannina-fuentes.clientsecure.me";

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
            <header className={`app-header mobile-header ${menuOpen ? 'menu-open' : ''} ${visible ? "visible" : "hidden"} ${bgColor ? 'bg-color' : ''}`}>
                <div className="mobile-header-content">
                    <div className="mobile-header-left">
                        <Link href="/" className="logo-link">
                            <Image
                                className="logo-header"
                                src={HorizontalLogo}
                                alt="Bonanza Logo"
                            />
                        </Link>
                    </div>
                    <div className="mobile-header-right">
                        <div className="menu-icon-wrapper" onClick={toggleMenu}>
                            <div className="line-horizontal _01"></div>
                            <div className="line-horizontal _02"></div>
                        </div>
                    </div>
                </div>
                <div className={`mobile-menu ${menuOpen ? 'menu-open' : ''}`}>
                    <div className="mobile-menu-header">
                        <div className="menu-icon-wrapper" onClick={toggleMenu}>
                            <div className="line-horizontal _03"></div>
                            <div className="line-horizontal _04"></div>
                        </div>
                    </div>

                    <nav className="innermenu container relative">
                        <div className="logo-container">
                            <Image
                                className="logo-menu"
                                src={HorizontalLogo}
                                alt="Bonanza Logo"
                            />
                        </div>
                        <ul className="menu-list">
                            <li>
                                <h2>
                                    <Link href="/" onClick={toggleMenu}>
                                        <span>{dictionary[params.lang]?.headerHome}</span>
                                    </Link>

                                </h2>
                            </li>
                            <li>
                                <h2>
                                    <Link href="/about" onClick={toggleMenu}>
                                        <span>{dictionary[params.lang]?.headerAbout}</span>
                                    </Link>

                                </h2>
                            </li>
                            <li>
                                <h2>
                                    <Link href="/services" onClick={toggleMenu}>
                                        <span>{dictionary[params.lang]?.headerServices}</span>
                                    </Link>

                                </h2>
                            </li>
                            <li>
                                <h2>
                                    <Link href="/contact" onClick={toggleMenu}>
                                        <span>{dictionary[params.lang]?.headerContact}</span>
                                    </Link>

                                </h2>
                            </li>
                            <li>
                                <h2>
                                    <Link href="/faq" onClick={toggleMenu}>
                                        <span>{dictionary[params.lang]?.headerFAQ}</span>
                                    </Link>

                                </h2>
                            </li>
                        </ul>

                        <Link href={clientPortalUrl} target="_blank" rel="noopener noreferrer">
                            <button onClick={toggleMenu} className="mobile-button">
                                {dictionary[params.lang]?.bookAppointment}
                            </button>
                        </Link>

                        <ul className="mobile-menu-lang-box">
                            <li className="lang-en" onClick={handleLanguageSwitch}>
                                EN
                            </li>
                            <li className="lang-es" onClick={handleLanguageSwitch}>
                                ES
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default MobileHeader;