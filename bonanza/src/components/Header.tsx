'use client'
import Link from 'next/link';
import {useState} from "react";

const Header = () => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <header className="app-header">
            <nav className="navigation">
                <Link href="/" className="logo-link">
                    <img className="logo-header"
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
                    <img className={`language-icon-header ${hovered ? 'visible' : ''}`}
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
    );
};

export default Header;
