'use client'
import Link from 'next/link';
import {useState} from "react";

const MobileHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="app-header mobile-header">
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
            {menuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-menu-header">
                        <div className="menu-icon-wrapper" onClick={toggleMenu}>
                            <div className="line-horizontal _03"></div>
                            <div className="line-horizontal _04"></div>
                        </div>
                    </div>

                    <nav className="mobile-navigation">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/faq">FAQ</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default MobileHeader;