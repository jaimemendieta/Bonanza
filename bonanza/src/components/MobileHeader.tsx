'use client'
import Link from 'next/link';
import {useEffect, useState} from "react";
import HorizontalLogo from "../../public/bonanza-horizontal-combination-mark.svg";
import Image from "next/image";
import WidgetModal from "@/components/WidgetModal";

const MobileHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [bgColor, setBgColor] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const widgetUrl = "https://giannina-fuentes.clientsecure.me/widget-redirect?scopeId=acd781f0-47c2-4bab-96a3-06bc062ed8d0&scopeGlobal=true&applicationId=7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b&appearance=%7B%22fullScreen%22%3Atrue%7D";

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
                                        <span>Home</span>
                                    </Link>

                                </h2>
                            </li>
                            <li>
                                <h2>
                                    <Link href="/about" onClick={toggleMenu}>
                                        <span>About</span>
                                    </Link>

                                </h2>
                            </li>
                            <li>
                                <h2>
                                    <Link href="/services" onClick={toggleMenu}>
                                        <span>Services</span>
                                    </Link>

                                </h2>
                            </li>
                            <li>
                                <h2>
                                    <Link href="/contact" onClick={toggleMenu}>
                                        <span>Contact</span>
                                    </Link>

                                </h2>
                            </li>
                            <li>
                                <h2>
                                    <Link href="/faq" onClick={toggleMenu}>
                                        <span>FAQ</span>
                                    </Link>

                                </h2>
                            </li>
                        </ul>

                        <button onClick={() => {setShowModal(true); toggleMenu();}} className="mobile-button">Book Appointment</button>

                        <ul className="mobile-menu-lang-box">
                            <li className="lang-en">
                                <Link href="/" title="English">EN</Link>
                            </li>
                            <li className="lang-es">
                                <Link href="/es/index" title="Español">ES</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {showModal && <WidgetModal url={widgetUrl} onClose={() => setShowModal(false)} />}
        </>
    );
};

export default MobileHeader;