'use client'
import Link from 'next/link';
import {useState} from "react";

const MobileHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`app-header mobile-header ${menuOpen ? 'menu-open' : ''}`}>
            <div className="mobile-header-content">
                <div className="mobile-header-left">
                    <Link href="/" className="logo-link">
                        <img
                            className="logo-header"
                            src="/bonanza-horizontal-combination-mark.svg"
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
                        <img
                            className="logo-menu"
                            src="/bonanza-horizontal-combination-mark.svg"
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

                    <button className="mobile-button">Book Appointment</button>

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
    );
};

export default MobileHeader;