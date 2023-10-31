import Link from 'next/link';

const Header = () => {
    return (
        <header className="app-header">
            <nav className="navigation">
                <img className="logo-header"
                     src="/bonanza-horizontal-combination-mark.svg"
                     alt="Bonanza Logo"/>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/faq">FAQ</Link>
            </nav>

            <div className="flex items-center space-x-4">
                <span className="navigation language-header">
                    <img className="language-icon-header"
                         src="/language.svg"
                         alt="Language Icon"/>
                    Español
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">SCHEDULE APPOINTMENT</button>
            </div>
        </header>
    );
};

export default Header;
